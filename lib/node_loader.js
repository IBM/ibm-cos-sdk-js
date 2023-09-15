var util = require('./util');

var region_utils = require('./region/utils');
// IBM Unsupported
// var isFipsRegion = region_utils.isFipsRegion;
var getRealRegion = region_utils.getRealRegion;

util.isBrowser = function() { return false; };
util.isNode = function() { return true; };

// node.js specific modules
util.crypto.lib = require('crypto');
util.Buffer = require('buffer').Buffer;
util.domain = require('domain');
util.stream = require('stream');
util.url = require('url');
util.querystring = require('querystring');
util.environment = 'nodejs';
util.iniLoader = require('./shared-ini').iniLoader;
util.getSystemErrorName = require('util').getSystemErrorName;

util.loadConfig = function(options) {
  var envValue = options.environmentVariableSelector(process.env);
  if (envValue !== undefined) {
    return envValue;
  }

  var configFile = {};
  try {
    configFile = util.iniLoader ? util.iniLoader.loadFrom({
      isConfig: true,
      filename: process.env[util.sharedConfigFileEnv]
    }) : {};
  } catch (e) {}
  var sharedFileConfig = configFile[
    process.env.AWS_PROFILE || util.defaultProfile
  ] || {};
  var configValue = options.configFileSelector(sharedFileConfig);
  if (configValue !== undefined) {
    return configValue;
  }

  if (typeof options.default === 'function') {
    return options.default();
  }
  return options.default;
};

var AWS = require('./core');

// Use default API loader function
require('./api_loader');

// Load the xml2js XML parser
AWS.XML.Parser = require('./xml/node_parser');

// Load Node HTTP client
require('./http/node');

require('./shared-ini/ini-loader');

// Load custom credential providers
require('./credentials/anonymous_credentials');
require('./credentials/environment_credentials');
require('./credentials/file_system_credentials');
require('./credentials/shared_ini_file_credentials');
require('./credentials/shared_json_file_credentials');

// Setup default chain providers
// If this changes, please update documentation for
// AWS.CredentialProviderChain.defaultProviders in
// credentials/credential_provider_chain.js
AWS.CredentialProviderChain.defaultProviders = [
  function () { return new AWS.EnvironmentCredentials('AWS'); },
  function () { return new AWS.EnvironmentCredentials('AMAZON'); },
  function () { return new AWS.SharedJSONFileCredentials(); },
  function () { return new AWS.SharedIniFileCredentials(); }
];
// Load custom token providers
require('./token');
require('./token/token_provider_chain');

var getRegion = function() {
  var env = process.env;
  var region = env.AWS_REGION || env.AMAZON_REGION;
  if (env[AWS.util.configOptInEnv]) {
    var toCheck = [
      {filename: env[AWS.util.sharedCredentialsFileEnv]},
      {isConfig: true, filename: env[AWS.util.sharedConfigFileEnv]}
    ];
    var iniLoader = AWS.util.iniLoader;
    while (!region && toCheck.length) {
      var configFile = {};
      var fileInfo = toCheck.shift();
      try {
        configFile = iniLoader.loadFrom(fileInfo);
      } catch (err) {
        if (fileInfo.isConfig) throw err;
      }
      var profile = configFile[env.AWS_PROFILE || AWS.util.defaultProfile];
      region = profile && profile.region;
    }
  }
  return region;
};

var getBooleanValue = function(value) {
  return value === 'true' ? true: value === 'false' ? false: undefined;
};

// IBM Unsupported
// var USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
//   environmentVariableSelector: function(env) {
//     return getBooleanValue(env['AWS_USE_FIPS_ENDPOINT']);
//   },
//   configFileSelector: function(profile) {
//     return getBooleanValue(profile['use_fips_endpoint']);
//   },
//   default: false,
// };

var USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
  environmentVariableSelector: function(env) {
    return getBooleanValue(env['AWS_USE_DUALSTACK_ENDPOINT']);
  },
  configFileSelector: function(profile) {
    return getBooleanValue(profile['use_dualstack_endpoint']);
  },
  default: false,
};

// Update configuration keys
AWS.util.update(AWS.Config.prototype.keys, {
  credentials: function () {
    var credentials = null;
    new AWS.CredentialProviderChain([
      function () { return new AWS.EnvironmentCredentials('AWS'); },
      function () { return new AWS.EnvironmentCredentials('AMAZON'); },
      function () { return new AWS.SharedJSONFileCredentials(); },
      function () { return new AWS.SharedIniFileCredentials({ disableAssumeRole: true }); }
    ]).resolve(function(err, creds) {
      if (!err) credentials = creds;
    });
    return credentials;
  },
  credentialProvider: function() {
    return new AWS.CredentialProviderChain();
  },
  logger: function () {
    return process.env.AWSJS_DEBUG ? console : null;
  },
  region: function() {
    var region = getRegion();
    return region ? getRealRegion(region): undefined;
  },
  tokenProvider: function() {
    return new AWS.TokenProviderChain();
  },
  // IBM Unsupported
  // useFipsEndpoint: function() {
  //   var region = getRegion();
  //   return isFipsRegion(region)
  //     ? true
  //     : util.loadConfig(USE_FIPS_ENDPOINT_CONFIG_OPTIONS);
  // },
  useDualstackEndpoint: function() {
    return util.loadConfig(USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS);
  }
});

// Reset configuration
AWS.config = new AWS.Config();
