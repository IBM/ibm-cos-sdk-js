var AWS = require('../core');

/**
 * @api private
 */
AWS.Signers.None = AWS.util.inherit(AWS.Signers.RequestSigner, {
    addAuthorization: function() {},
    signature: function() {}
});

module.exports = AWS.Signers.IAM;
