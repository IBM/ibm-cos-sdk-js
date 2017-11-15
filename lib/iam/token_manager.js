var request = require('request');
var querystring = require('querystring');
var AWS = require('../../lib/core');
var util = AWS.util;

/**
 * Create a `Token` object given the access token and refresh token
 * @param {Object}  token
 * @param {string}  token.accessToken  The access token needed to validate I/O operations.
 * @param {string}  token.refreshToken The token used to refresh the access token on expiration.
 * @param {number}  token.expiration   Expiry time of the token.
 * @param {string} [token.tokenType]   Type of token being used. Currently only `bearer` is supported. Defaults
 *                                     to `bearer`.
 * @returns {Token}
 */
function Token(token) {
    if (!token.accessToken) {
        throw new Error('Token constructor must have an access token provided.')
    }

    this.tokenType = token.tokenType || 'Bearer'
    this.accessToken = token.accessToken;
    this.refreshToken = token.refreshToken;
    if (typeof token.expiration === 'number') {
        this.expiration = new Date(token.expiration);
    } else {
        this.expiration = token.expiration;
    }
}

/**
 * Check if the token is expired. If a grace period is specified, will return true if it's almost expired.
 * @param {number} [gracePeriod] The amount of milliseconds within which a token will be considered "expired".
 * @returns {boolean}
 */
Token.prototype.isExpired = function(gracePeriod) {
    return (!this.expiration || (Date.now() > +this.expiration - gracePeriod));
}

/**
 * The IBM IAM Token Manger. This class is responsible for authorizing, maintaining, and refreshing IAM tokens for
 * services that require them. It can be initialized with either an IAM API Key, or a currently valid token
 * directly. If a token is provided directly, it is suggested that the refresh token be provided alongside it, so
 * that the token manager can keep valid tokens throughout its lifetime.
 *
 * @param {Object} [config] Configuration for the token manager.
 * @param {string} [config.ibmAuthEndpoint] Endpoint to request IAM token from. Defaults to
 *                 'https://iam.ng.bluemix.net/oidc/token'.
 * @param {string} [config.apiKeyId] IAM API Key to use to request tokens. If not provided, a token must be set
 *                 directly.
 * @param {string} [config.token] A valid IAM token to use, in the case that an IAM API Key cannot be provided.
 * @param {string} [config.refreshToken] A refresh token which can be used to refresh an IAM token when the IAM
 *                 token is about to expire, in the case that an IAM API Key cannot be provided.
 * @param {number} [config.tokenExpiration] Time until a token/refreshToken pair expires, in the case that an IAM
 *                 API Key cannot be provided.
 * @param {TokenManager~authCallback} [config.authCall] Callback function to be called when a mechanism to retrieve
 *                 an authentication key is required.
 */
function TokenManager() {
    var config = {}
    var authCallback

    if (typeof arguments[0] === 'object') {
        config = arguments[0]
    } else if (typeof arguments[0] === 'function') {
        authCallback = arguments[0]
    }

    this.DEFAULT_HEADERS = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic Yng6Yng=', // 'bx:bx'
        'cache-control': 'no-cache'
    }

    // Default config
    this.config = {
        ibmAuthEndpoint: 'https://iam.ng.bluemix.net/oidc/token',
        apiKeyId: null,
        token: null,
        refreshToken: null,
        tokenExpiration: null,
        authCallback: authCallback
    }

    // Check that we have some sort of authentication mechanism
    if (!(config.apiKeyId || config.token || (authCallback || config.authCallback))) {
        throw new Error('An authentication mechanism must be provided to the IAM token manager. This could be ' +
            'either an API Key, a valid API token, or a custom authentication callback.')
    }

    // Check that we still have an endpoint. This can happen if `null` or `''` is passed in by accident.
    if (typeof config.ibmAuthEndpoint !== 'undefined' && !config.ibmAuthEndpoint) {
        throw new Error('Endpoint must not be null or empty string.')
    }

    // Merge passed in config with default config
    Object.assign(this.config, config)
}

/**
 * Return the cached token synchronously. No guarantee is made as to its validity. This would usually be called
 * right after refreshToken().
 * @returns {Token}
 */
TokenManager.prototype.getToken = function() {
    return this.token;
}

/**
 * A custom callback to be called instead of
 * @callback TokenManager~authCallback
 * @param {object} config The TokenManager's current configuration
 * @param {function} [callback] Callback to call when finished, if a Promise is not returned
 * @returns {Token} Valid token
 */

/**
 * Callback to be called when the token refresh operation is completed.
 * @callback TokenManager~refreshTokenCallback
 * @param {Object} error An error response, if encountered
 * @param {Token} token A valid token, if there is no error
 */

/**
 * Retrieve a new token from the IAM endpoint.
 * @param {Object} [options] Optional overrides for the request.
 * @param {string} [options.ibmAuthEndpoint]
 * @param {string} [options.redirectUrl]
 * @param {string} [options.apiKeyId]
 * @param {string} [options.sslEnabled]
 * @param {Object} [options.httpOptions] Options to pass through to network requests.
 * @param {TokenManager~authCallback} [options.authCallback]
 * @param {boolean} [forceRenew] Renew the token even if it not about to expire.
 * @param {TokenManager~refreshTokenCallback} [callback] function to call when the token is renewed.
 * @returns {Promise} A promise which will return the token, if Promise support is detected.
 */
TokenManager.prototype.refreshToken = function(options, forceRenew, callback) {
    if (typeof callback == 'undefined') {
        if (typeof forceRenew == 'function') {
            callback = forceRenew;
            forceRenew = undefined;
        } else if (typeof forceRenew == 'undefined' && typeof options == 'function') {
            callback = options;
            options == undefined;
        }
    }

    var sdkPromise = AWS.config.getPromisesDependency() || (typeof Promise === 'function' && Promise);

    var config = Object.assign({}, this.config, options);
    config.headers = Object.assign({}, this.DEFAULT_HEADERS, config.headers);

    var rejectOrCallbackError = function(message) {
        var err = new Error(message);
        this._callbacks.forEach(function(cb) {
            cb(err)
        });
        if (sdkPromise !== undefined) {
            return sdkPromise.reject(err);
        }
    }.bind(this);

    if (!config.apiKeyId && !config.token && !config.authCallback) {
        return rejectOrCallbackError('Client API Key or access token must be provided to retrieve a token.');
    }

    if (!config.token && !config.ibmAuthEndpoint) {
        return rejectOrCallbackError('IAM Endpoint is required to fetch a token');
    }

    if (!forceRenew && this.token && !this.token.isExpired(15000)) {
        if (typeof callback === 'function') {
            return callback(null, this.token);
        } else if (sdkPromise !== undefined) {
            return sdkPromise.resolve(this.token);
        }
    }

    if (!config.apiKeyId && config.refreshToken) {
        var grantType = 'refresh_token';
    } else if (!config.apiKeyId && config.ltpacookie) {
        grantType = 'grant_type=urn:ibm:params:oauth:grant-type:identity-cookie';
    } else {
        grantType = 'urn:ibm:params:oauth:grant-type:apikey';
    }

    var body = querystring.stringify({
        grant_type: grantType,
        response_type: 'cloud_iam',
        apikey: config.apiKeyId,
        redirect_uri: config.redirectUri,
        client_id: config.apiKeyId,
        refresh_token: config.refreshToken
    });

    if (config.query) {
        var query = querystring.stringify(config.query);
        config.url = (config.url.indexOf('?') === -1 ? '?' : '&') + query
    }

    // Cache any auth requests to _tokenRequest so we don't suddenly send many authentication requests when the
    // token is or is almost expired. When any auth requests are triggered when one is pending, return the
    // already pending request.
    if (this._tokenRequest) {
        return this._tokenRequest;
    }

    // Cache auth requests to _callbacks so we don't send multiple authentication requests at once. Similar to
    // how we handle multiple requests with promises, except we have to track multiple callbacks instead of being
    // able to rely on native Promise handling.
    if (callback) {
        if (!this._callbacks || this._callbacks.length === 0) {
            this._callbacks = [callback];
        } else {
            this._callbacks.push(callback);
            return this._tokenRequest;
        }
    }

    var callbacks = function() {
        var args = arguments;
        util.arrayEach(this._callbacks, function(cb) {
            cb.apply(this, args);
        }.bind(this));
    }.bind(this);

    if (typeof config.authCallback === 'function') {
        var authFn = function(resolve, reject) {
            var callback = function(token) {
                try {
                    var t = this.createToken(token);
                    callbacks(null, token);
                    if (resolve) {
                        this._tokenRequest = undefined;
                        return resolve(t);
                    }
                } catch (createTokenErr) {
                    callbacks(createTokenErr);
                    if (reject) {
                        this._tokenRequest = undefined;
                        return reject(createTokenErr);
                    }
                }
            }.bind(this);
            var postCallback = config.authCallback(callback);
            if (postCallback && postCallback.then) {
                postCallback.then(function(token) {
                    try {
                        var t = this.createToken(token);
                        callbacks(null, token);
                        if (resolve) {
                            this._tokenRequest = undefined;
                            return resolve(t);
                        }
                    } catch (createTokenErr) {
                        callbacks(createTokenErr);
                        if (reject) {
                            this._tokenRequest = undefined;
                            return reject(createTokenErr);
                        }
                    }
                }.bind(this))
                .catch(function(err) {
                    callbacks(err);
                    if (reject) {
                        this._tokenRequest = undefined;
                        return reject(err);
                    }
                }.bind(this));
            }
        }.bind(this)

        if (sdkPromise) {
            this._request = new Promise(authFn);
            return this._request;
        } else {
            return authFn();
        }
    }

    // Otherwise, use the default IAM API key method.
    var tokenRequestConfig = {
        method: 'POST',
        uri: config.ibmAuthEndpoint,
        headers: config.headers,
        json: true,
        body: body
    };
    util.merge(tokenRequestConfig, this.config.httpOptions);
    var sendRefreshTokenRequest = function(resolve, reject) {
        request(tokenRequestConfig, function(requestErr, response) {
            if (requestErr) {
                callbacks(null, token);
                if (reject) {
                    this._tokenRequest = undefined;
                    return reject(requestErr);
                }
                return;
            }
            try {
                var token = response.body;
                try {
                    var newToken = this.createToken({
                        tokenType: token.token_type && token.token_type.toLowerCase(),
                        accessToken: token.access_token || token.uaa_token,
                        refreshToken: token.refresh_token,
                        expiration: token.expiration * 1000 // Expiration is returned in seconds; convert to epoch here.
                    });
                } catch (e) {
                    var err = new Error({
                        message: 'Expected valid token in IAM authentication request. Received: ' + token,
                        response: response,
                        originalError: e
                    });
                    callbacks(err);
                    if (reject) {
                        this._tokenRequest = undefined;
                        return reject(err);
                    }
                    return;
                }
                callbacks(null, newToken);
                if (resolve) {
                    this._tokenRequest = undefined;
                    return resolve(newToken);
                }
            } catch (createTokenErr) {
                callbacks(createTokenErr);
                if (reject) {
                    this._tokenRequest = undefined;
                    return reject(createTokenErr);
                }
            }
        }.bind(this));
    }.bind(this);

    if (sdkPromise) {
        this._tokenRequest = new sdkPromise(sendRefreshTokenRequest);
        return this._tokenRequest;
    } else {
        return sendRefreshTokenRequest();
    }
};

/**
 * Create and cache a `Token` object given the access token, a refresh token, and the token's expiration time.
 * @param {Object}  tokenConfig
 * @param {string}  tokenConfig.accessToken  The access token needed to validate I/O operations.
 * @param {string}  tokenConfig.refreshToken The token used to refresh the access token on expiration.
 * @param {Number}  tokenConfig.expiration   Expiry time of the token, as Unix epoch time.
 * @param {string} [tokenConfig.tokenType]   Type of token being used. Currently only `bearer` is supported. Defaults
 *                                     to `bearer`.
 * @returns {Token}
 */
TokenManager.prototype.createToken = function(tokenConfig) {
    // Cache token
    this.token = new Token(tokenConfig)

    return this.token
}

module.exports = TokenManager