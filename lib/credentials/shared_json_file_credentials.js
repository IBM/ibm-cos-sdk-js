var AWS = require('../core');
var path = require('path');
var TokenManager = require('../iam/token_manager');

/**
 * Represents credentials loaded from shared credentials file
 * (defaulting to ~/.bluemix/cos_credentials).
 *
 * ## Using the shared credentials file
 *
 * This provider is checked by default in the Node.js environment. To use the
 * credentials file provider, simply add your bluemix credentials in JSON
 * format to the ~/.bluemix/cos_credentials file in the following format:
 *
 *    {
 *       "apikey": "foo",
 *       "cos_hmac_keys": {
 *          "access_key_id": "bar",
 *          "secret_access_key": "baz"
 *       },
 *       ...
 *       "resource_instance_id": "bang"
 *    }
 *
 * @!macro nobrowser
 */
AWS.SharedJSONFileCredentials = AWS.util.inherit(AWS.Credentials, {
    /**
     * Creates a new SharedJSONFileCredentials object.
     *
     * @param options [map] a set of options
     * @option options profile [String] (AWS_PROFILE env var or 'default')
     *   the name of the profile to load.
     * @option options filename [String] ('~/.aws/credentials') the filename
     *   to use when loading credentials.
     * @option options disableAssumeRole [Boolean] (false) True to disable
     *   support for profiles that assume an IAM role. If true, and an assume
     *   role profile is selected, an error is raised.
     */
    constructor: function SharedJSONFileCredentials(options) {
        AWS.Credentials.call(this);

        options = options || {};

        this.filename = options.filename;
        this.disableAssumeRole = !!options.disableAssumeRole;
        this.get(function() {});
    },

    /**
     * Loads the credentials from the shared credentials file
     *
     * @callback callback function(err)
     *   Called after the shared JSON file on disk is read and parsed. When this
     *   callback is called with no error, it means that the credentials
     *   information has been loaded into the object (as the `accessKeyId`,
     *   `secretAccessKey`, and `sessionToken` properties).
     *   @param err [Error] if an error occurred, this value will be filled
     * @see get
     */
    refresh: function refresh(callback) {
        if (!callback) callback = function(err) { if (err) throw err; };
        try {
            if (!this.filename) {
                var env = process.env;
                if (env.COS_CREDENTIALS_FILE) {
                    this.filename = env.COS_CREDENTIALS_FILE;
                } else {
                    this.loadDefaultFilename();
                }
            }
            var jsonConfig = JSON.parse(AWS.util.readFileSync(this.filename));

            if (typeof jsonConfig['cos_hmac_keys'] === 'object') {
                this.accessKeyId = jsonConfig['cos_hmac_keys']['access_key_id'];
                this.secretAccessKey = jsonConfig['cos_hmac_keys']['secret_access_key'];
            }

            this.apiKeyId = jsonConfig['apikey'];
            this.serviceInstanceId = jsonConfig['resource_instance_id'];

            if ((!this.accessKeyId || !this.secretAccessKey) && (!this.apiKeyId)) {
                throw AWS.util.error(
                    new Error('Credentials not set in ' + this.filename),
                    { code: 'SharedJSONFileCredentialsProviderFailure' }
                );
            }
            this.expired = false;
            if (this.apiKeyId) {
                this.tokenManager = new TokenManager(this);
                this.tokenManager.refreshToken(callback);
            } else {
                callback();
            }
        } catch (err) {
            callback(err);
        }
    },

    /**
     * @api private
     */
    loadDefaultFilename: function loadDefaultFilename() {
        var env = process.env;

        var home = env.HOME ||
            env.USERPROFILE ||
            (env.HOMEPATH ? ((env.HOMEDRIVE || 'C:/') + env.HOMEPATH) : null);
        if (!home) {
            throw AWS.util.error(
                new Error('Cannot load credentials, HOME path not set'),
                { code: 'SharedJSONFileCredentialsProviderFailure' }
            );
        }

        this.filename = path.join(home, '.bluemix', 'cos_credentials');
    }
});
