var AWS = require('../core');
var v4Credentials = require('../signers/v4_credentials');

var s3util = require('./s3util');

// Pull in managed upload extension
require('../s3/managed_upload');

/**
 * @api private
 */
var operationsWith200StatusCodeError = {
  'completeMultipartUpload': true,
  'copyObject': true,
  'uploadPartCopy': true
};

/**
 * @api private
 */
 var regionRedirectErrorCodes = [
  'AuthorizationHeaderMalformed', // non-head operations on virtual-hosted global bucket endpoints
  'BadRequest', // head operations on virtual-hosted global bucket endpoints
  'PermanentRedirect', // non-head operations on path-style or regional endpoints
  301 // head operations on path-style or regional endpoints
 ];

var OBJECT_LAMBDA_SERVICE = 's3-object-lambda';

AWS.util.update(AWS.S3.prototype, {
  /**
   * @api private
   */
  getSignatureVersion: function getSignatureVersion(request) {
    var defaultApiVersion = this.api.signatureVersion;
    var userDefinedVersion = this._originalConfig ? this._originalConfig.signatureVersion : null;
    var regionDefinedVersion = this.config.signatureVersion;
    var isPresigned = request ? request.isPresigned() : false;
    /*
      1) User defined version specified:
        a) always return user defined version
      2) No user defined version specified:
        a) If not using presigned urls, check for IBM IAM or default to V4
        b) If using presigned urls, default to lowest version the region supports
    */
    if (userDefinedVersion) {
      userDefinedVersion = userDefinedVersion === 'v2' ? 's3' : userDefinedVersion;
      return userDefinedVersion;
    }
    if (isPresigned !== true) {
      defaultApiVersion = 'v4';
      // If a request was provided, check if that uses IAM.
      // Otherwise, check this instance for IAM.
      if (request && request.service.config.credentials.tokenManager) {
        defaultApiVersion = 'iam';
      } else if (this.config.credentials.tokenManager) {
        defaultApiVersion = 'iam';
      }
    } else if (regionDefinedVersion) {
      defaultApiVersion = regionDefinedVersion;
    }
    return defaultApiVersion;
  },

  /**
   * @api private
   */
  getSignerClass: function getSignerClass(request) {
    var signatureVersion = this.getSignatureVersion(request);
    return AWS.Signers.RequestSigner.getVersion(signatureVersion);
  },

  /**
   * @api private
   */
  validateService: function validateService() {
    var msg;
    var messages = [];

    // default to us-east-1 when no region is provided
    if (!this.config.region) this.config.region = 'us-east-1';

    if (!this.config.endpoint && this.config.s3BucketEndpoint) {
      messages.push('An endpoint must be provided when configuring ' +
                    '`s3BucketEndpoint` to true.');
    }
    if (messages.length === 1) {
      msg = messages[0];
    } else if (messages.length > 1) {
      msg = 'Multiple configuration errors:\n' + messages.join('\n');
    }
    if (msg) {
      throw AWS.util.error(new Error(),
        {name: 'InvalidEndpoint', message: msg});
    }
  },

  /**
   * @api private
   */
  shouldDisableBodySigning: function shouldDisableBodySigning(request) {
    var signerClass = this.getSignerClass();
    if (this.config.s3DisableBodySigning === true && signerClass === AWS.Signers.V4
        && request.httpRequest.endpoint.protocol === 'https:') {
      return true;
    }
    return false;
  },

  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('validateResponse', this.setExpiresString);
    var prependListener = true;
    request.addListener('validate', this.validateScheme);
    request.addListener('validate', this.validateBucketName, prependListener);

    request.removeListener('validate',
      AWS.EventListeners.Core.VALIDATE_REGION);
    request.addListener('build', this.addContentType);
    request.addListener('build', this.computeContentMd5);
    request.addListener('build', this.computeSseCustomerKeyMd5);
    request.addListener('build', this.populateURI);
    request.addListener('afterBuild', this.addExpect100Continue);
    request.addListener('extractError', this.extractError);
    request.addListener('extractData', AWS.util.hoistPayloadMember);
    request.addListener('extractData', this.extractData);
    request.addListener('extractData', this.extractErrorFrom200Response);
    request.addListener('beforePresign', this.prepareSignedUrl);
    if (this.shouldDisableBodySigning(request))  {
      request.removeListener('afterBuild', AWS.EventListeners.Core.COMPUTE_SHA256);
      request.addListener('afterBuild', this.disableBodySigning);
    }
  },

  /**
   * @api private
   */
  validateScheme: function(req) {
    var params = req.params,
        scheme = req.httpRequest.endpoint.protocol,
        sensitive = params.SSECustomerKey || params.CopySourceSSECustomerKey;
    if (sensitive && scheme !== 'https:') {
      var msg = 'Cannot send SSE keys over HTTP. Set \'sslEnabled\'' +
        'to \'true\' in your configuration';
      throw AWS.util.error(new Error(),
        { code: 'ConfigError', message: msg });
    }
  },

  /**
   * @api private
   */
  validateBucketEndpoint: function(req) {
    if (!req.params.Bucket && req.service.config.s3BucketEndpoint) {
      var msg = 'Cannot send requests to root API with `s3BucketEndpoint` set.';
      throw AWS.util.error(new Error(),
        { code: 'ConfigError', message: msg });
    }
  },

  /**
   * @api private
   */
  validateBucketName: function validateBucketName(req) {
    var service = req.service;
    var signatureVersion = service.getSignatureVersion(req);
    var bucket = req.params && req.params.Bucket;
    var key = req.params && req.params.Key;
    var slashIndex = bucket && bucket.indexOf('/');
    if (bucket && slashIndex >= 0) {
      if (typeof key === 'string' && slashIndex > 0) {
        req.params = AWS.util.copy(req.params);
        // Need to include trailing slash to match sigv2 behavior
        var prefix = bucket.substr(slashIndex + 1) || '';
        req.params.Key = prefix + '/' + key;
        req.params.Bucket = bucket.substr(0, slashIndex);
      } else if (signatureVersion === 'v4') {
        var msg = 'Bucket names cannot contain forward slashes. Bucket: ' + bucket;
        throw AWS.util.error(new Error(),
          { code: 'InvalidBucket', message: msg });
      }
    }
  },

  /**
   * @api private
   */
  isValidAccelerateOperation: function isValidAccelerateOperation(operation) {
    var invalidOperations = [
      'createBucket',
      'deleteBucket',
      'listBuckets'
    ];
    return invalidOperations.indexOf(operation) === -1;
  },


  /**
   * S3 prefers dns-compatible bucket names to be moved from the uri path
   * to the hostname as a sub-domain.  This is not possible, even for dns-compat
   * buckets when using SSL and the bucket name contains a dot ('.').  The
   * ssl wildcard certificate is only 1-level deep.
   *
   * @api private
   */
  populateURI: function populateURI(req) {
    var httpRequest = req.httpRequest;
    var b = req.params.Bucket;
    var service = req.service;
    var endpoint = httpRequest.endpoint;
    if (b) {
      if (!service.pathStyleBucketName(b)) {
        if (service.config.useAccelerateEndpoint && service.isValidAccelerateOperation(req.operation)) {
          if (service.config.useDualstackEndpoint) {
            endpoint.hostname = b + '.s3-accelerate.dualstack.amazonaws.com';
          } else {
            endpoint.hostname = b + '.s3-accelerate.amazonaws.com';
          }
        } else if (!service.config.s3BucketEndpoint) {
          endpoint.hostname =
            b + '.' + endpoint.hostname;
        }

        var port = endpoint.port;
        if (port !== 80 && port !== 443) {
          endpoint.host = endpoint.hostname + ':' +
            endpoint.port;
        } else {
          endpoint.host = endpoint.hostname;
        }

        httpRequest.virtualHostedBucket = b; // needed for signing the request
        service.removeVirtualHostedBucketFromPath(req);
      }
    }
  },

  /**
   * Takes the bucket name out of the path if bucket is virtual-hosted
   *
   * @api private
   */
  removeVirtualHostedBucketFromPath: function removeVirtualHostedBucketFromPath(req) {
    var httpRequest = req.httpRequest;
    var bucket = httpRequest.virtualHostedBucket;
    if (bucket && httpRequest.path) {
      if (req.params && req.params.Key) {
        var encodedS3Key = '/' + AWS.util.uriEscapePath(req.params.Key);
        if (httpRequest.path.indexOf(encodedS3Key) === 0 && (httpRequest.path.length === encodedS3Key.length || httpRequest.path[encodedS3Key.length] === '?')) {
          //path only contains key or path contains only key and querystring
          return;
        }
      }
      httpRequest.path = httpRequest.path.replace(new RegExp('/' + bucket), '');
      if (httpRequest.path[0] !== '/') {
        httpRequest.path = '/' + httpRequest.path;
      }
    }
  },

  /**
   * Adds Expect: 100-continue header if payload is greater-or-equal 1MB
   * @api private
   */
  addExpect100Continue: function addExpect100Continue(req) {
    var len = req.httpRequest.headers['Content-Length'];
    if (AWS.util.isNode() && (len >= 1024 * 1024 || req.params.Body instanceof AWS.util.stream.Stream)) {
      req.httpRequest.headers['Expect'] = '100-continue';
    }
  },

  /**
   * Adds a default content type if none is supplied.
   *
   * @api private
   */
  addContentType: function addContentType(req) {
    var httpRequest = req.httpRequest;
    if (httpRequest.method === 'GET' || httpRequest.method === 'HEAD') {
      // Content-Type is not set in GET/HEAD requests
      delete httpRequest.headers['Content-Type'];
      return;
    }

    if (!httpRequest.headers['Content-Type']) { // always have a Content-Type
      httpRequest.headers['Content-Type'] = 'application/octet-stream';
    }

    var contentType = httpRequest.headers['Content-Type'];
    if (AWS.util.isBrowser()) {
      if (typeof httpRequest.body === 'string' && !contentType.match(/;\s*charset=/)) {
        var charset = '; charset=UTF-8';
        httpRequest.headers['Content-Type'] += charset;
      } else {
        var replaceFn = function(_, prefix, charsetName) {
          return prefix + charsetName.toUpperCase();
        };

        httpRequest.headers['Content-Type'] =
          contentType.replace(/(;\s*charset=)(.+)$/, replaceFn);
      }
    }
  },

  /**
   * Checks whether checksums should be computed for the request if it's not
   * already set by {AWS.EventListeners.Core.COMPUTE_CHECKSUM}. It depends on
   * whether {AWS.Config.computeChecksums} is set.
   *
   * @param req [AWS.Request] the request to check against
   * @return [Boolean] whether to compute checksums for a request.
   * @api private
   */
  willComputeChecksums: function willComputeChecksums(req) {
    var rules = req.service.api.operations[req.operation].input.members;
    var body = req.httpRequest.body;
    var needsContentMD5 = req.service.config.computeChecksums &&
      rules.ContentMD5 &&
      !req.params.ContentMD5 &&
      body &&
      (AWS.util.Buffer.isBuffer(req.httpRequest.body) || typeof req.httpRequest.body === 'string');

    // Sha256 signing disabled, and not a presigned url
    if (needsContentMD5 && req.service.shouldDisableBodySigning(req) && !req.isPresigned()) {
      return true;
    }

    // SigV2 and presign, for backwards compatibility purpose.
    if (needsContentMD5 && this.getSignatureVersion(req) === 's3' && req.isPresigned()) {
      return true;
    }

    // IBM-specific change: catches when custom `Content-Length` is less than provided data length for IAM transactions.
    if (needsContentMD5) return true;

    return false;
  },

  /**
   * A listener that computes the Content-MD5 and sets it in the header.
   * This listener is to support S3-specific features like
   * s3DisableBodySigning and SigV2 presign. Content MD5 logic for SigV4 is
   * handled in AWS.EventListeners.Core.COMPUTE_CHECKSUM
   *
   * @api private
   */
  computeContentMd5: function computeContentMd5(req) {
    if (req.service.willComputeChecksums(req)) {
      var md5 = AWS.util.crypto.md5(req.httpRequest.body, 'base64');
      req.httpRequest.headers['Content-MD5'] = md5;
    }
  },

  /**
   * @api private
   */
  computeSseCustomerKeyMd5: function computeSseCustomerKeyMd5(req) {
    var keys = {
      SSECustomerKey: 'x-amz-server-side-encryption-customer-key-MD5',
      CopySourceSSECustomerKey: 'x-amz-copy-source-server-side-encryption-customer-key-MD5'
    };
    AWS.util.each(keys, function(key, header) {
      if (req.params[key]) {
        var value = AWS.util.crypto.md5(req.params[key], 'base64');
        req.httpRequest.headers[header] = value;
      }
    });
  },

  /**
   * Returns true if the bucket name should be left in the URI path for
   * a request to S3.  This function takes into account the current
   * endpoint protocol (e.g. http or https).
   *
   * @api private
   */
  pathStyleBucketName: function pathStyleBucketName(bucketName) {
    // user can force path style requests via the configuration
    if (this.config.s3ForcePathStyle) return true;
    if (this.config.s3BucketEndpoint) return false;

    if (s3util.dnsCompatibleBucketName(bucketName)) {
      return (this.config.sslEnabled && bucketName.match(/\./)) ? true : false;
    } else {
      return true; // not dns compatible names must always use path style
    }
  },

  /**
   * For COPY operations, some can be error even with status code 200.
   * SDK treats the response as exception when response body indicates
   * an exception or body is empty.
   *
   * @api private
   */
  extractErrorFrom200Response: function extractErrorFrom200Response(resp) {
    var service = this.service ? this.service : this;
    if (!service.is200Error(resp) && !operationsWith200StatusCodeError[resp.request.operation]) {
      return;
    }
    var httpResponse = resp.httpResponse;
    var bodyString = httpResponse.body && httpResponse.body.toString() || '';
    if (bodyString && bodyString.indexOf('</Error>') === bodyString.length - 8) {
      // Response body with '<Error>...</Error>' indicates an exception.
      // Get S3 client object. In ManagedUpload, this.service refers to
      // S3 client object.
      resp.data = null;
      service.extractError(resp);
      resp.error.is200Error = true;
      throw resp.error;
    } else if (!httpResponse.body || !bodyString.match(/<[\w_]/)) {
      // When body is empty or incomplete, S3 might stop the request on detecting client
      // side aborting the request.
      resp.data = null;
      throw AWS.util.error(new Error(), {
        code: 'InternalError',
        message: 'S3 aborted request'
      });
    }
  },

  /**
   * @api private
   * @param resp - to evaluate.
   * @return true if the response has status code 200 but is an error.
   */
  is200Error: function is200Error(resp) {
    var code = resp && resp.httpResponse && resp.httpResponse.statusCode;
    if (code !== 200) {
      return false;
    }
    try {
      var req = resp.request;
      var outputMembers = req.service.api.operations[req.operation].output.members;
      var keys = Object.keys(outputMembers);
      for (var i = 0; i < keys.length; ++i) {
        var member = outputMembers[keys[i]];
        if (member.type === 'binary' && member.isStreaming) {
          return false;
        }
      }

      var body = resp.httpResponse.body;
      if (body && body.byteLength !== undefined) {
        if (body.byteLength < 15 || body.byteLength > 3000) {
          // body is too short or long to be an error message.
          return false;
        }
      }
      if (!body) {
        return false;
      }
      var bodyString = body.toString();
      if (bodyString.indexOf('</Error>') === bodyString.length - 8) {
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
  },

  /**
   * @return [Boolean] whether the error can be retried
   * @api private
   */
  retryableError: function retryableError(error, request) {
    if (error.is200Error ||
      (operationsWith200StatusCodeError[request.operation] && error.statusCode === 200)) {
      return true;
    } else if (request._requestRegionForBucket &&
        request.service.bucketRegionCache[request._requestRegionForBucket]) {
      return false;
    } else if (error && error.code === 'RequestTimeout') {
      return true;
    } else if (error &&
        regionRedirectErrorCodes.indexOf(error.code) != -1 &&
        error.region && error.region != request.httpRequest.region) {
      request.httpRequest.region = error.region;
      if (error.statusCode === 301) {
        request.service.updateReqBucketRegion(request);
      }
      return true;
    } else {
      var _super = AWS.Service.prototype.retryableError;
      return _super.call(this, error, request);
    }
  },

  /**
   * Updates httpRequest with region. If region is not provided, then
   * the httpRequest will be updated based on httpRequest.region
   *
   * @api private
   */
  updateReqBucketRegion: function updateReqBucketRegion(request, region) {
    var httpRequest = request.httpRequest;
    if (typeof region === 'string' && region.length) {
      httpRequest.region = region;
    }
    if (!httpRequest.endpoint.host.match(/s3(?!-accelerate).*\.amazonaws\.com$/)) {
      return;
    }
    var service = request.service;
    var s3Config = service.config;
    var s3BucketEndpoint = s3Config.s3BucketEndpoint;
    if (s3BucketEndpoint) {
      delete s3Config.s3BucketEndpoint;
    }
    var newConfig = AWS.util.copy(s3Config);
    delete newConfig.endpoint;
    newConfig.region = httpRequest.region;

    httpRequest.endpoint = (new AWS.S3(newConfig)).endpoint;
    service.populateURI(request);
    s3Config.s3BucketEndpoint = s3BucketEndpoint;
    httpRequest.headers.Host = httpRequest.endpoint.host;

    if (request._asm.currentState === 'validate') {
      request.removeListener('build', service.populateURI);
      request.addListener('build', service.removeVirtualHostedBucketFromPath);
    }
  },

  /**
   * Provides a specialized parser for getBucketLocation -- all other
   * operations are parsed by the super class.
   *
   * @api private
   */
  extractData: function extractData(resp) {
    var req = resp.request;
    if (req.operation === 'getBucketLocation') {
      var match = resp.httpResponse.body.toString().match(/>(.+)<\/Location/);
      delete resp.data['_'];
      if (match) {
        resp.data.LocationConstraint = match[1];
      } else {
        resp.data.LocationConstraint = '';
      }
    }
    var bucket = req.params.Bucket || null;
    if (req.operation === 'deleteBucket' && typeof bucket === 'string' && !resp.error) {
      req.service.clearBucketRegionCache(bucket);
    } else {
      var headers = resp.httpResponse.headers || {};
      var region = headers['x-amz-bucket-region'] || null;
      if (!region && req.operation === 'createBucket' && !resp.error) {
        var createBucketConfiguration = req.params.CreateBucketConfiguration;
        if (!createBucketConfiguration) {
          region = 'us-east-1';
        } else if (createBucketConfiguration.LocationConstraint === 'EU') {
          region = 'eu-west-1';
        } else {
          region = createBucketConfiguration.LocationConstraint;
        }
      }
      if (region) {
          if (bucket && region !== req.service.bucketRegionCache[bucket]) {
            req.service.bucketRegionCache[bucket] = region;
          }
      }
    }
    req.service.extractRequestIds(resp);
  },

  /**
   * Extracts an error object from the http response.
   *
   * @api private
   */
  extractError: function extractError(resp) {
    var codes = {
      304: 'NotModified',
      403: 'Forbidden',
      400: 'BadRequest',
      404: 'NotFound'
    };

    var req = resp.request;
    var code = resp.httpResponse.statusCode;
    var body = resp.httpResponse.body || '';

    var headers = resp.httpResponse.headers || {};
    var region = headers['x-amz-bucket-region'] || null;
    var bucket = req.params.Bucket || null;
    var bucketRegionCache = req.service.bucketRegionCache;
    if (region && bucket && region !== bucketRegionCache[bucket]) {
      bucketRegionCache[bucket] = region;
    }

    var cachedRegion;
    if (codes[code] && body.length === 0) {
      if (bucket && !region) {
        cachedRegion = bucketRegionCache[bucket] || null;
        if (cachedRegion !== req.httpRequest.region) {
          region = cachedRegion;
        }
      }
      resp.error = AWS.util.error(new Error(), {
        code: codes[code],
        message: null,
        region: region
      });
    } else {
      var data = new AWS.XML.Parser().parse(body.toString());

      if (data.Region && !region) {
        region = data.Region;
        if (bucket && region !== bucketRegionCache[bucket]) {
          bucketRegionCache[bucket] = region;
        }
      } else if (bucket && !region && !data.Region) {
        cachedRegion = bucketRegionCache[bucket] || null;
        if (cachedRegion !== req.httpRequest.region) {
          region = cachedRegion;
        }
      }

      resp.error = AWS.util.error(new Error(), {
        code: data.Code || code,
        message: data.Message || null,
        region: region
      });
    }
    req.service.extractRequestIds(resp);
  },

  /**
   * If region was not obtained synchronously, then send async request
   * to get bucket region for errors resulting from wrong region.
   *
   * @api private
   */
  requestBucketRegion: function requestBucketRegion(resp, done) {
    var error = resp.error;
    var req = resp.request;
    var bucket = req.params.Bucket || null;

    if (!error || !bucket || error.region || req.operation === 'listObjects' ||
        (AWS.util.isNode() && req.operation === 'headBucket') ||
        (error.statusCode === 400 && req.operation !== 'headObject') ||
        regionRedirectErrorCodes.indexOf(error.code) === -1) {
      return done();
    }
    var reqOperation = AWS.util.isNode() ? 'headBucket' : 'listObjects';
    var reqParams = {Bucket: bucket};
    if (reqOperation === 'listObjects') reqParams.MaxKeys = 0;
    var regionReq = req.service[reqOperation](reqParams);
    regionReq._requestRegionForBucket = bucket;
    regionReq.send(function() {
      var region = req.service.bucketRegionCache[bucket] || null;
      error.region = region;
      done();
    });
  },

   /**
   * For browser only. If NetworkingError received, will attempt to obtain
   * the bucket region.
   *
   * @api private
   */
   reqRegionForNetworkingError: function reqRegionForNetworkingError(resp, done) {
    if (!AWS.util.isBrowser()) {
      return done();
    }
    var error = resp.error;
    var request = resp.request;
    var bucket = request.params.Bucket;
    if (!error || error.code !== 'NetworkingError' || !bucket ||
        request.httpRequest.region === 'us-east-1') {
      return done();
    }
    var service = request.service;
    var bucketRegionCache = service.bucketRegionCache;
    var cachedRegion = bucketRegionCache[bucket] || null;

    if (cachedRegion && cachedRegion !== request.httpRequest.region) {
      service.updateReqBucketRegion(request, cachedRegion);
      done();
    } else if (!s3util.dnsCompatibleBucketName(bucket)) {
      service.updateReqBucketRegion(request, 'us-east-1');
      if (bucketRegionCache[bucket] !== 'us-east-1') {
        bucketRegionCache[bucket] = 'us-east-1';
      }
      done();
    } else if (request.httpRequest.virtualHostedBucket) {
      var getRegionReq = service.listObjects({Bucket: bucket, MaxKeys: 0});
      service.updateReqBucketRegion(getRegionReq, 'us-east-1');
      getRegionReq._requestRegionForBucket = bucket;

      getRegionReq.send(function() {
        var region = service.bucketRegionCache[bucket] || null;
        if (region && region !== request.httpRequest.region) {
          service.updateReqBucketRegion(request, region);
        }
        done();
      });
    } else {
      // DNS-compatible path-style
      // (s3ForcePathStyle or bucket name with dot over https)
      // Cannot obtain region information for this case
      done();
    }
   },

  /**
   * Cache for bucket region.
   *
   * @api private
   */
   bucketRegionCache: {},

  /**
   * Clears bucket region cache.
   *
   * @api private
   */
   clearBucketRegionCache: function(buckets) {
    var bucketRegionCache = this.bucketRegionCache;
    if (!buckets) {
      buckets = Object.keys(bucketRegionCache);
    } else if (typeof buckets === 'string') {
      buckets = [buckets];
    }
    for (var i = 0; i < buckets.length; i++) {
      delete bucketRegionCache[buckets[i]];
    }
    return bucketRegionCache;
   },

   /**
    * Corrects request region if bucket's cached region is different
    *
    * @api private
    */
  correctBucketRegionFromCache: function correctBucketRegionFromCache(req) {
    var bucket = req.params.Bucket || null;
    if (bucket) {
      var service = req.service;
      var requestRegion = req.httpRequest.region;
      var cachedRegion = service.bucketRegionCache[bucket];
      if (cachedRegion && cachedRegion !== requestRegion) {
        service.updateReqBucketRegion(req, cachedRegion);
      }
    }
  },

  /**
   * Extracts S3 specific request ids from the http response.
   *
   * @api private
   */
  extractRequestIds: function extractRequestIds(resp) {
    var extendedRequestId = resp.httpResponse.headers ? resp.httpResponse.headers['x-amz-id-2'] : null;
    var cfId = resp.httpResponse.headers ? resp.httpResponse.headers['x-amz-cf-id'] : null;
    resp.extendedRequestId = extendedRequestId;
    resp.cfId = cfId;

    if (resp.error) {
      resp.error.requestId = resp.requestId || null;
      resp.error.extendedRequestId = extendedRequestId;
      resp.error.cfId = cfId;
    }
  },

  /**
   * Get a pre-signed URL for a given operation name.
   *
   * @note You must ensure that you have static or previously resolved
   *   credentials if you call this method synchronously (with no callback),
   *   otherwise it may not properly sign the request. If you cannot guarantee
   *   this (you are using an asynchronous credential provider, i.e., EC2
   *   IAM roles), you should always call this method with an asynchronous
   *   callback.
   * @note Not all operation parameters are supported when using pre-signed
   *   URLs. Certain parameters, such as `SSECustomerKey`, `ACL`, `Expires`,
   *   `ContentLength`, or `Tagging` must be provided as headers when sending a
   *   request. If you are using pre-signed URLs to upload from a browser and
   *   need to use these fields, see {createPresignedPost}.
   * @note The default signer allows altering the request by adding corresponding
   *   headers to set some parameters (e.g. Range) and these added parameters
   *   won't be signed. You must use signatureVersion v4 to to include these
   *   parameters in the signed portion of the URL and enforce exact matching
   *   between headers and signed params in the URL.
   * @note This operation cannot be used with a promise. See note above regarding
   *   asynchronous credentials and use with a callback.
   * @param operation [String] the name of the operation to call
   * @param params [map] parameters to pass to the operation. See the given
   *   operation for the expected operation parameters. In addition, you can
   *   also pass the "Expires" parameter to inform S3 how long the URL should
   *   work for.
   * @option params Expires [Integer] (900) the number of seconds to expire
   *   the pre-signed URL operation in. Defaults to 15 minutes.
   * @param callback [Function] if a callback is provided, this function will
   *   pass the URL as the second parameter (after the error parameter) to
   *   the callback function.
   * @return [String] if called synchronously (with no callback), returns the
   *   signed URL.
   * @return [null] nothing is returned if a callback is provided.
   * @example Pre-signing a getObject operation (synchronously)
   *   var params = {Bucket: 'bucket', Key: 'key'};
   *   var url = s3.getSignedUrl('getObject', params);
   *   console.log('The URL is', url);
   * @example Pre-signing a putObject (asynchronously)
   *   var params = {Bucket: 'bucket', Key: 'key'};
   *   s3.getSignedUrl('putObject', params, function (err, url) {
   *     console.log('The URL is', url);
   *   });
   * @example Pre-signing a putObject operation with a specific payload
   *   var params = {Bucket: 'bucket', Key: 'key', Body: 'body'};
   *   var url = s3.getSignedUrl('putObject', params);
   *   console.log('The URL is', url);
   * @example Passing in a 1-minute expiry time for a pre-signed URL
   *   var params = {Bucket: 'bucket', Key: 'key', Expires: 60};
   *   var url = s3.getSignedUrl('getObject', params);
   *   console.log('The URL is', url); // expires in 60 seconds
   */
  getSignedUrl: function getSignedUrl(operation, params, callback) {
    params = AWS.util.copy(params || {});
    var expires = params.Expires || 900;

    if (typeof expires !== 'number') {
      throw AWS.util.error(new Error(),
        { code: 'InvalidParameterException', message: 'The expiration must be a number, received ' + typeof expires });
    }

    delete params.Expires; // we can't validate this
    var request = this.makeRequest(operation, params);

    if (callback) {
      AWS.util.defer(function() {
        request.presign(expires, callback);
      });
    } else {
      return request.presign(expires, callback);
    }
  },

  /**
   * @!method  getSignedUrlPromise()
   *   Returns a 'thenable' promise that will be resolved with a pre-signed URL
   *   for a given operation name.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @note Not all operation parameters are supported when using pre-signed
   *      URLs. Certain parameters, such as `SSECustomerKey`, `ACL`, `Expires`,
   *      `ContentLength`, or `Tagging` must be provided as headers when sending a
   *      request. If you are using pre-signed URLs to upload from a browser and
   *      need to use these fields, see {createPresignedPost}.
   *   @param operation [String] the name of the operation to call
   *   @param params [map] parameters to pass to the operation. See the given
   *      operation for the expected operation parameters. In addition, you can
   *      also pass the "Expires" parameter to inform S3 how long the URL should
   *      work for.
   *   @option params Expires [Integer] (900) the number of seconds to expire
   *      the pre-signed URL operation in. Defaults to 15 minutes.
   *   @callback fulfilledCallback function(url)
   *     Called if the promise is fulfilled.
   *     @param url [String] the signed url
   *   @callback rejectedCallback function(err)
   *     Called if the promise is rejected.
   *     @param err [Error] if an error occurred, this value will be filled
   *   @return [Promise] A promise that represents the state of the `refresh` call.
   *   @example Pre-signing a getObject operation
   *      var params = {Bucket: 'bucket', Key: 'key'};
   *      var promise = s3.getSignedUrlPromise('getObject', params);
   *      promise.then(function(url) {
   *        console.log('The URL is', url);
   *      }, function(err) { ... });
   *   @example Pre-signing a putObject operation with a specific payload
   *      var params = {Bucket: 'bucket', Key: 'key', Body: 'body'};
   *      var promise = s3.getSignedUrlPromise('putObject', params);
   *      promise.then(function(url) {
   *        console.log('The URL is', url);
   *      }, function(err) { ... });
   *   @example Passing in a 1-minute expiry time for a pre-signed URL
   *      var params = {Bucket: 'bucket', Key: 'key', Expires: 60};
   *      var promise = s3.getSignedUrlPromise('getObject', params);
   *      promise.then(function(url) {
   *        console.log('The URL is', url);
   *      }, function(err) { ... });
   */

  /**
   * Get a pre-signed POST policy to support uploading to S3 directly from an
   * HTML form.
   *
   * @param params [map]
   * @option params Bucket [String]     The bucket to which the post should be
   *                                    uploaded
   * @option params Expires [Integer]   (3600) The number of seconds for which
   *                                    the presigned policy should be valid.
   * @option params Conditions [Array]  An array of conditions that must be met
   *                                    for the presigned policy to allow the
   *                                    upload. This can include required tags,
   *                                    the accepted range for content lengths,
   *                                    etc.
   * @see http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-HTTPPOSTConstructPolicy.html
   * @option params Fields [map]        Fields to include in the form. All
   *                                    values passed in as fields will be
   *                                    signed as exact match conditions.
   * @param callback [Function]
   *
   * @note All fields passed in when creating presigned post data will be signed
   *   as exact match conditions. Any fields that will be interpolated by S3
   *   must be added to the fields hash after signing, and an appropriate
   *   condition for such fields must be explicitly added to the Conditions
   *   array passed to this function before signing.
   *
   * @example Presiging post data with a known key
   *   var params = {
   *     Bucket: 'bucket',
   *     Fields: {
   *       key: 'key'
   *     }
   *   };
   *   s3.createPresignedPost(params, function(err, data) {
   *     if (err) {
   *       console.error('Presigning post data encountered an error', err);
   *     } else {
   *       console.log('The post data is', data);
   *     }
   *   });
   *
   * @example Presigning post data with an interpolated key
   *   var params = {
   *     Bucket: 'bucket',
   *     Conditions: [
   *       ['starts-with', '$key', 'path/to/uploads/']
   *     ]
   *   };
   *   s3.createPresignedPost(params, function(err, data) {
   *     if (err) {
   *       console.error('Presigning post data encountered an error', err);
   *     } else {
   *       data.Fields.key = 'path/to/uploads/${filename}';
   *       console.log('The post data is', data);
   *     }
   *   });
   *
   * @note You must ensure that you have static or previously resolved
   *   credentials if you call this method synchronously (with no callback),
   *   otherwise it may not properly sign the request. If you cannot guarantee
   *   this (you are using an asynchronous credential provider, i.e., EC2
   *   IAM roles), you should always call this method with an asynchronous
   *   callback.
   *
   * @return [map]  If called synchronously (with no callback), returns a hash
   *                with the url to set as the form action and a hash of fields
   *                to include in the form.
   * @return [null] Nothing is returned if a callback is provided.
   *
   * @callback callback function (err, data)
   *  @param err [Error] the error object returned from the policy signer
   *  @param data [map] The data necessary to construct an HTML form
   *  @param data.url [String] The URL to use as the action of the form
   *  @param data.fields [map] A hash of fields that must be included in the
   *                           form for the upload to succeed. This hash will
   *                           include the signed POST policy, your access key
   *                           ID and security token (if present), etc. These
   *                           may be safely included as input elements of type
   *                           'hidden.'
   */
  createPresignedPost: function createPresignedPost(params, callback) {
    if (typeof params === 'function' && callback === undefined) {
      callback = params;
      params = null;
    }

    params = AWS.util.copy(params || {});
    var boundParams = this.config.params || {};
    var bucket = params.Bucket || boundParams.Bucket,
      self = this,
      config = this.config,
      endpoint = AWS.util.copy(this.endpoint);
    if (!config.s3BucketEndpoint) {
      endpoint.pathname = '/' + bucket;
    }

    function finalizePost() {
      return {
        url: AWS.util.urlFormat(endpoint),
        fields: self.preparePostFields(
          config.credentials,
          config.region,
          bucket,
          params.Fields,
          params.Conditions,
          params.Expires
        )
      };
    }

    if (callback) {
      config.getCredentials(function (err) {
        if (err) {
          callback(err);
        } else {
          try {
            callback(null, finalizePost());
          } catch (err) {
            callback(err);
          }
        }
      });
    } else {
      return finalizePost();
    }
  },

  /**
   * @api private
   */
  preparePostFields: function preparePostFields(
    credentials,
    region,
    bucket,
    fields,
    conditions,
    expiresInSeconds
  ) {
    var now = this.getSkewCorrectedDate();
    if (!credentials || !region || !bucket) {
      throw new Error('Unable to create a POST object policy without a bucket,'
        + ' region, and credentials');
    }
    if (!credentials.accessKeyId || !credentials.secretAccessKey) {
      throw new Error('Unable to create a POST object policy without a ' +
      'credential containing an accessKeyId and secretAccessKey');
    }
    fields = AWS.util.copy(fields || {});
    conditions = (conditions || []).slice(0);
    expiresInSeconds = expiresInSeconds || 3600;

    var signingDate = AWS.util.date.iso8601(now).replace(/[:\-]|\.\d{3}/g, '');
    var shortDate = signingDate.substr(0, 8);
    var scope = v4Credentials.createScope(shortDate, region, 's3');
    var credential = credentials.accessKeyId + '/' + scope;

    fields['bucket'] = bucket;
    fields['X-Amz-Algorithm'] = 'AWS4-HMAC-SHA256';
    fields['X-Amz-Credential'] = credential;
    fields['X-Amz-Date'] = signingDate;
    if (credentials.sessionToken) {
      fields['X-Amz-Security-Token'] = credentials.sessionToken;
    }
    for (var field in fields) {
      if (fields.hasOwnProperty(field)) {
        var condition = {};
        condition[field] = fields[field];
        conditions.push(condition);
      }
    }

    fields.Policy = this.preparePostPolicy(
      new Date(now.valueOf() + expiresInSeconds * 1000),
      conditions
    );
    fields['X-Amz-Signature'] = AWS.util.crypto.hmac(
      v4Credentials.getSigningKey(credentials, shortDate, region, 's3', true),
      fields.Policy,
      'hex'
    );

    return fields;
  },

  /**
   * @api private
   */
  prepareConditions: function prepareConditions(fields, conditions) {
    var addedConditionFieldNames = this.getConditionFieldNames(conditions);

    for (var field in fields) {
      if (fields.hasOwnProperty(field) && addedConditionFieldNames.indexOf(field) === -1) {
        var condition = {};
        condition[field] = fields[field];
        conditions.push(condition);
      }
    }
  },

  /**
   * @api private
   */
  getConditionFieldNames: function getConditionFieldNames(conditions) {
    var conditionFieldNames = new Array();
    for (var i=0; i<conditions.length; i++) {
      var condition = conditions[i];
      if (Array.isArray(condition)) {
        if (condition.length === 3) {
          var dollarName = condition[1];
          var name = dollarName.substr(1);
          if (conditionFieldNames.indexOf(name) === -1) {
            conditionFieldNames.push(name);
          }
        }
      } else {
          var keys = Object.keys(condition);
          if (keys.length > 0) {
            var name = keys[0];
            conditionFieldNames.push(name);
          }
      }
    }
    return conditionFieldNames;
  },

  /**
   * @api private
   */
  preparePostPolicy: function preparePostPolicy(expiration, conditions) {
    return AWS.util.base64.encode(JSON.stringify({
      expiration: AWS.util.date.iso8601(expiration),
      conditions: conditions
    }));
  },

  /**
   * @api private
   */
  prepareSignedUrl: function prepareSignedUrl(request) {
    request.addListener('validate', request.service.noPresignedContentLength);
    request.removeListener('build', request.service.addContentType);
    if (!request.params.Body) {
      // no Content-MD5/SHA-256 if body is not provided
      request.removeListener('build', request.service.computeContentMd5);
    } else {
      request.addListener('afterBuild', AWS.EventListeners.Core.COMPUTE_SHA256);
    }
  },

  /**
   * @api private
   * @param request
   */
  disableBodySigning: function disableBodySigning(request) {
    var headers = request.httpRequest.headers;
    // Add the header to anything that isn't a presigned url, unless that presigned url had a body defined
    if (!Object.prototype.hasOwnProperty.call(headers, 'presigned-expires')) {
      headers['X-Amz-Content-Sha256'] = 'UNSIGNED-PAYLOAD';
    }
  },

  /**
   * @api private
   */
  noPresignedContentLength: function noPresignedContentLength(request) {
    if (request.params.ContentLength !== undefined) {
      throw AWS.util.error(new Error(), {code: 'UnexpectedParameter',
        message: 'ContentLength is not supported in pre-signed URLs.'});
    }
  },

  createBucket: function createBucket(params, callback) {
    // When creating a bucket *outside* the classic region, the location
    // constraint must be set for the bucket and it must match the endpoint.
    // This chunk of code will set the location constraint param based
    // on the region (when possible), but it will not override a passed-in
    // location constraint.
    if (typeof params === 'function' || !params) {
      callback = callback || params;
      params = {};
    }
    var hostname = this.endpoint.hostname;
    // copy params so that appending keys does not unintentioinallly
    // mutate params object argument passed in by user
    var copiedParams = AWS.util.copy(params);

    if (
      this.config.region !== 'us-east-1'
        && hostname !== this.api.globalEndpoint
        && !params.CreateBucketConfiguration
    ) {
      copiedParams.CreateBucketConfiguration = { LocationConstraint: this.config.region };
    }
    return this.makeRequest('createBucket', copiedParams, callback);
  },

  /**
   * @see AWS.S3.ManagedUpload
   * @overload upload(params = {}, [options], [callback])
   *   Uploads an arbitrarily sized buffer, blob, or stream, using intelligent
   *   concurrent handling of parts if the payload is large enough. You can
   *   configure the concurrent queue size by setting `options`. Note that this
   *   is the only operation for which the SDK can retry requests with stream
   *   bodies.
   *
   *   @param (see AWS.S3.putObject)
   *   @option (see AWS.S3.ManagedUpload.constructor)
   *   @return [AWS.S3.ManagedUpload] the managed upload object that can call
   *     `send()` or track progress.
   *   @example Uploading a stream object
   *     var params = {Bucket: 'bucket', Key: 'key', Body: stream};
   *     s3.upload(params, function(err, data) {
   *       console.log(err, data);
   *     });
   *   @example Uploading a stream with concurrency of 1 and partSize of 10mb
   *     var params = {Bucket: 'bucket', Key: 'key', Body: stream};
   *     var options = {partSize: 10 * 1024 * 1024, queueSize: 1};
   *     s3.upload(params, options, function(err, data) {
   *       console.log(err, data);
   *     });
   * @callback callback function(err, data)
   *   @param err [Error] an error or null if no error occurred.
   *   @param data [map] The response data from the successful upload:
   *   @param data.Location [String] the URL of the uploaded object
   *   @param data.ETag [String] the ETag of the uploaded object
   *   @param data.Bucket [String]  the bucket to which the object was uploaded
   *   @param data.Key [String] the key to which the object was uploaded
   */
  upload: function upload(params, options, callback) {
    if (typeof options === 'function' && callback === undefined) {
      callback = options;
      options = null;
    }

    options = options || {};
    options = AWS.util.merge(options || {}, {service: this, params: params});

    var uploader = new AWS.S3.ManagedUpload(options);
    if (typeof callback === 'function') uploader.send(callback);
    return uploader;
  },

    /**
   * @api private
   */
    setExpiresString: function setExpiresString(response) {
      // Check if response contains Expires value, and populate ExpiresString.
      if (response && response.httpResponse && response.httpResponse.headers) {
        if ('expires' in response.httpResponse.headers) {
          response.httpResponse.headers.expiresstring = response.httpResponse.headers.expires;
        }
      }
  
      // Check if value in Expires is not a Date using parseTimestamp.
      try {
        if (response && response.httpResponse && response.httpResponse.headers) {
          if ('expires' in response.httpResponse.headers) {
            AWS.util.date.parseTimestamp(response.httpResponse.headers.expires);
          }
        }
      } catch (e) {
        console.log('AWS SDK', '(warning)', e);
        delete response.httpResponse.headers.expires;
      }
    }
});

/**
 * @api private
 */
AWS.S3.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
  this.prototype.getSignedUrlPromise = AWS.util.promisifyMethod('getSignedUrl', PromiseDependency);
};

/**
 * @api private
 */
AWS.S3.deletePromisesFromClass = function deletePromisesFromClass() {
  delete this.prototype.getSignedUrlPromise;
};

AWS.util.addPromises(AWS.S3);
