module.exports = function () {

  this.Given(/^I create a shared bucket$/, function(callback) {
    if (this.sharedBucket) return callback();

    this.sharedBucket = this.uniqueName('aws-sdk-js-shared-integration');
    this.request('s3', 'createBucket', {Bucket: this.sharedBucket}, function(err, data) {
      this.cacheBucketName(this.sharedBucket);
      if (err) callback.fail(err);
      else callback();
    });
  });

  this.When(/^I put "([^"]*)" to the(?: invalid) key "([^"]*)"$/, function(data, key, next) {
    var params = {Bucket: this.sharedBucket, Key: key, Body: data};
    this.request('s3', 'putObject', params, next, false);
  });

  this.When(/^I put (?:a |an )(empty|small|large|\d+KB|\d+MB) buffer to the key "([^"]*)"$/, function(size, key, next) {
    var body = this.createBuffer(size);
    var params = {Bucket: this.sharedBucket, Key: key, Body: body};
    this.request('s3', 'putObject', params, next);
  });

  this.When(/^I put (?:a |an )(empty|small|large) file to the key "([^"]*)"$/, function(size, key, next) {
    var fs = require('fs');
    var filename = this.createFile(size, key);
    var params = {Bucket: this.sharedBucket, Key: key, Body: fs.createReadStream(filename)};
    this.request('s3', 'putObject', params, next);
  });

  this.When(/^I put "([^"]*)" to the key "([^"]*)" with ContentLength (\d+)$/, function(contents, key, contentLength, next) {
    var params = {Bucket: this.sharedBucket, Key: key, Body: contents, ContentLength: parseInt(contentLength)};
    this.s3nochecksums = new this.AWS.S3({computeChecksums: false});
    this.request('s3nochecksums', 'putObject', params, next);
  });

  this.Then(/^the object "([^"]*)" should contain "([^"]*)"$/, function(key, contents, next) {
    this.assert.equal(this.data.Body.toString().replace('\n', ''), contents);
    next();
  });

  this.Then(/^the HTTP response should have a content length of (\d+)$/, function(contentLength, next) {
    this.assert.equal(this.response.httpResponse.body.length, parseInt(contentLength));
    next();
  });

  this.When(/^I copy the object "([^"]*)" to "([^"]*)"$/, function(key1, key2, next) {
    var params = {
      Bucket: this.sharedBucket, Key: key2, CopySource: '/' + this.sharedBucket + '/' + key1
    };
    this.request('s3', 'copyObject', params, next);
  });

  this.When(/^I delete the object "([^"]*)"$/, function(key, next) {
    var params = {Bucket: this.sharedBucket, Key: key};
    this.request('s3', 'deleteObject', params, next);
  });

  this.Then(/^the object "([^"]*)" should (not )?exist$/, function(key, shouldNotExist, next) {
    var params = { Bucket: this.sharedBucket, Key: key };
    this.eventually(next, function (retry) {
      retry.condition = function() {
        if (shouldNotExist) {
          return this.error && this.error.code === 'NoSuchKey';
        } else {
          return !this.error;
        }
      };
      this.request('s3', 'getObject', params, retry, false);
    });
  });

  this.When(/^I stream key "([^"]*)"$/, function(key, callback) {
    var params = {Bucket: this.sharedBucket, Key: key};
    var world = this;
    this.result = '';
    this.service.getObject(params).createReadStream().
      on('end', function() { callback(); }).
      on('data', function(d) { world.result += d.toString(); });
  });

  this.When(/^I stream2 key "([^"]*)"$/, function(key, callback) {
    if (!require('stream').Readable) return callback();
    var params = {Bucket: this.sharedBucket, Key: key};
    var world = this;
    this.result = '';
    var stream = this.service.getObject(params).createReadStream();
    stream.on('end', function() { callback(); });
    stream.on('readable', function() {
      var v = stream.read(); if (v) world.result += v;
    });
  });

  this.Then(/^the streamed data should contain "([^"]*)"$/, function(data, callback) {
    this.assert.equal(this.result.replace('\n', ''), data);
    callback();
  });

  this.When(/^I get a pre\-signed URL to GET the key "([^"]*)"$/, function(key, callback) {
    this.signedUrl = this.s3.getSignedUrl('getObject', {Bucket: this.sharedBucket, Key: key});
    callback();
  });

  this.When(/^I access the URL via HTTP GET$/, function(callback, verb) {
    var world = this;
    this.data = '';
    require('https').get(this.signedUrl, function (res) {
      res.on('data', function (chunk) {
        world.data += chunk.toString();
      }).on('end', callback);
    }).on('error', callback.fail);
  });

  this.Given(/^I get a pre\-signed URL to PUT the key "([^"]*)"(?: with data "([^"]*)")?$/, function(key, body, callback) {
    var params = {Bucket: this.sharedBucket, Key: key};
    if (body) params.Body = body;
    this.signedUrl = this.s3.getSignedUrl('putObject', params);
    callback();
  });

  this.Given(/^I access the URL via HTTP PUT with data "([^"]*)"$/, function(body, callback) {
    var world = this;
    this.data = '';

    var data = body;
    var options = require('url').parse(this.signedUrl);
    options.method = 'PUT';
    options.headers = {'Content-Length': data.length};

    require('https').request(options, function (res) {
      res.on('data', function (chunk) {
        world.data += chunk.toString();
      }).on('end', callback);
    }).on('error', callback.fail).end(data);
  });

  this.Then(/^the HTTP response should equal "([^"]*)"$/, function(data, callback) {
    this.assert.equal(this.data, data);
    callback();
  });

  this.Then(/^the HTTP response should contain "([^"]*|)"$/, function(data, callback) {
    this.assert.match(this.data, data);
    callback();
  });

  this.Given(/^I setup the listObjects request for the bucket$/, function(callback) {
    this.params = { Bucket: this.sharedBucket };
    callback();
  });

  // progress events

  this.When(/^I put (?:a |an )(empty|small|large|\d+KB|\d+MB) buffer to the key "([^"]*)" with progress events$/, function(size, key, callback) {
    var self = this;
    var body = self.createBuffer(size);
    this.progress = [];
    var req = this.s3.putObject({Bucket: this.sharedBucket, Key: key, Body: body});
    req.on('httpUploadProgress', function (p) { self.progress.push(p); });
    req.send(callback);
  });

  this.Then(/^more than (\d+) "([^"]*)" event should fire$/, function(numEvents, eventName, callback) {
    this.assert.compare(this.progress.length, '>', numEvents);
    callback();
  });

  this.Then(/^the "([^"]*)" value of the progress event should equal (\d+)MB$/, function(prop, mb, callback) {
    this.assert.equal(this.progress[0][prop], mb * 1024 * 1024);
    callback();
  });

  this.Then(/^the "([^"]*)" value of the first progress event should be greater than (\d+) bytes$/, function(prop, bytes, callback) {
    this.assert.compare(this.progress[0][prop], '>', bytes);
    callback();
  });

  this.When(/^I read the key "([^"]*)" with progress events$/, function(key, callback) {
    var self = this;
    this.progress = [];
    var req = this.s3.getObject({Bucket: this.sharedBucket, Key: key});
    req.on('httpDownloadProgress', function (p) { self.progress.push(p); });
    req.send(callback);
  });

  this.When(/^I put "([^"]*)" to the (public )?key "([^"]*)"$/, function(data, public, key, next) {
    var acl = public === undefined ? 'private' : 'public-read';
    var params = {Bucket: this.sharedBucket, Key: key, Body: data, ACL: acl};
    this.request('s3', 'putObject', params, next);
  });

  this.When(/^I put "([^"]*)" to the key "([^"]*)" with an AES key$/, function(data, key, next) {
    var params = {
      Bucket: this.sharedBucket,
      Key: key,
      Body: data,
      SSECustomerAlgorithm: 'AES256',
      SSECustomerKey: 'aaaabbbbccccddddaaaabbbbccccdddd'
    };
    this.request('s3', 'putObject', params, next);
  });

  this.When(/^I read the object "([^"]*)" with the AES key$/, function(key, next) {
    var params = {
      Bucket: this.sharedBucket,
      Key: key,
      SSECustomerAlgorithm: 'AES256',
      SSECustomerKey: 'aaaabbbbccccddddaaaabbbbccccdddd'
    };
    this.request('s3', 'getObject', params, next);
  });

  this.Then(/^I make an unauthenticated request to read object "([^"]*)"$/, function(key, next) {
    var params = {Bucket: this.sharedBucket, Key: key};
    this.s3.makeUnauthenticatedRequest('getObject', params, function (err, data) {
      if (err) return next(err);
      this.data = data;
      next();
    }.bind(this));
  });

  this.Given(/^an empty bucket$/, function(next) {
    var self = this;
    var params = { Bucket: this.sharedBucket };
    self.s3.listObjects(params, function(err, data) {
      if (err) return next(err);
      if (data.Contents.length > 0) {
        params.Delete = { Objects: [] };
        data.Contents.forEach(function (item) {
          params.Delete.Objects.push({Key: item.Key});
        });
        self.request('s3', 'deleteObjects', params, next);
      } else {
        next();
      }
    });
  });
};
