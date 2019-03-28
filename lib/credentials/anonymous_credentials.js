var AWS = require('../core');

/**
 * Represents anonymous credentials, which do not require any authentication.
 *
 * This can be used for Anonymous Access against buckets configured for
 * anonymous operations.
 *
 */
AWS.AnonymousCredentials = AWS.util.inherit(AWS.Credentials, {

    /**
     * Creates a new AnonymousCredentials class.
     */
    constructor: function AnonymousCredentials() {
        AWS.Credentials.call(this);
    },

    /**
     * Stub to satisfy the credentials provider chain.
     *
     * @callback callback function(err)
     * @see get
     */
    refresh: function refresh(callback) {
        callback();
    }

});
