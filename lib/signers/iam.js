var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.IAM = inherit(AWS.Signers.RequestSigner, {
  addAuthorization: function addAuthorization(credentials, date, req) {
    var token = credentials.tokenManager.getToken();
    this.request.headers['Authorization'] = 'Bearer ' + (token.accessToken || token['access_token']);

    if (req.operation === 'createBucket' ||
        req.operation === 'listBuckets' ||
        req.operation === 'listBucketsExtended') {
      if (!this.request.headers['Ibm-Service-Instance-Id']) {
        this.request.headers['Ibm-Service-Instance-Id'] = credentials.serviceInstanceId;
      }
    }
  },

  signature: function signature(credentials) {
    // not used
  }

});

module.exports = AWS.Signers.IAM;
