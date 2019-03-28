var AWS = require('../core');
var path = require('path');
var TokenManager = require('../iam/token_manager');

/**
 * Represents credentials loaded from shared credentials file
 * (defaulting to ~/.aws/credentials).
 *
 * ## Using the shared credentials file
 *
 * This provider is checked by default in the Node.js environment. To use the
 * credentials file provider, simply add your access and secret keys to the
 * ~/.aws/credentials file in the following format:
 *
 *     [default]
 *     aws_access_key_id = AKID...
 *     aws_secret_access_key = YOUR_SECRET_KEY
 *
 * ## Using custom profiles
 *
 * The SDK supports loading credentials for separate profiles. This can be done
 * in two ways:
 *
 * 1. Set the `AWS_PROFILE` environment variable in your process prior to
 *    loading the SDK.
 * 2. Directly load the AWS.SharedIniFileCredentials provider:
 *
 * ```javascript
 * var creds = new AWS.SharedIniFileCredentials({profile: 'myprofile'});
 * AWS.config.credentials = creds;
 * ```
 *
 * @!macro nobrowser
 */
AWS.SharedIniFileCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * Creates a new SharedIniFileCredentials object.
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
  constructor: function SharedIniFileCredentials(options) {
    AWS.Credentials.call(this);

    options = options || {};

    this.filename = options.filename;
    this.profile = options.profile || process.env.AWS_PROFILE || 'default';
    this.disableAssumeRole = !!options.disableAssumeRole;
    this.get(function() {});
  },

  /**
   * Loads the credentials from the shared credentials file
   *
   * @callback callback function(err)
   *   Called after the shared INI file on disk is read and parsed. When this
   *   callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    if (!callback) callback = function(err) { if (err) throw err; };
    try {
      if (!this.filename) this.loadDefaultFilename();
      var creds = AWS.util.ini.parse(AWS.util.readFileSync(this.filename));
      var profile = creds[this.profile];

      if (typeof profile !== 'object') {
        throw AWS.util.error(
          new Error('Profile ' + this.profile + ' not found in ' + this.filename),
          { code: 'SharedIniFileCredentialsProviderFailure' }
        );
      }

      this.accessKeyId = profile['aws_access_key_id'];
      this.secretAccessKey = profile['aws_secret_access_key'];
      this.sessionToken = profile['aws_session_token'];
      this.apiKeyId = profile['ibm_api_key_id'];
      this.serviceInstanceId = profile['ibm_service_instance_id'];
      if (profile['ibm_auth_endpoint']) {
        this.ibmAuthEndpoint = profile['ibm_auth_endpoint'];
      }

      if ((!this.accessKeyId || !this.secretAccessKey) && !this.apiKeyId) {
        throw AWS.util.error(
          new Error('Credentials not set in ' + this.filename +
                    ' using profile ' + this.profile),
          { code: 'SharedIniFileCredentialsProviderFailure' }
        );
      }
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
        { code: 'SharedIniFileCredentialsProviderFailure' }
      );
    }

    this.filename = path.join(home, '.aws', 'credentials');
  }
});
