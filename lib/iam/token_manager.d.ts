export = TokenManager;
/**
 * The IBM IAM Token Manger. This class is responsible for authorizing, maintaining, and refreshing IAM tokens for
 * services that require them. It can be initialized with either an IAM API Key, or a currently valid token
 * directly. If a token is provided directly, it is suggested that the refresh token be provided alongside it, so
 * that the token manager can keep valid tokens throughout its lifetime.
 *
 * @param {Object} [config] Configuration for the token manager.
 * @param {string} [config.ibmAuthEndpoint] Endpoint to request IAM token from. Defaults to
 *                 'https://iam.cloud.ibm.com/identity/token'.
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
declare function TokenManager(...args: any[]): void;
declare class TokenManager {
    /**
     * The IBM IAM Token Manger. This class is responsible for authorizing, maintaining, and refreshing IAM tokens for
     * services that require them. It can be initialized with either an IAM API Key, or a currently valid token
     * directly. If a token is provided directly, it is suggested that the refresh token be provided alongside it, so
     * that the token manager can keep valid tokens throughout its lifetime.
     *
     * @param {Object} [config] Configuration for the token manager.
     * @param {string} [config.ibmAuthEndpoint] Endpoint to request IAM token from. Defaults to
     *                 'https://iam.cloud.ibm.com/identity/token'.
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
    constructor(...args: any[]);
    DEFAULT_HEADERS: {
        Accept: string;
        'Content-Type': string;
        Authorization: string;
        'cache-control': string;
    };
    config: {
        apiKeyId: any;
    };
    getToken(): Token;
    refreshToken(options?: {
        ibmAuthEndpoint: string;
        redirectUrl: string;
        apiKeyId: string;
        sslEnabled: string;
        httpOptions: any;
    }, forceRenew?: boolean, callback: any): Promise<any>;
    _callbacks: any[];
    _tokenRequest: any;
    createToken(tokenConfig: {
        accessToken: string;
        refreshToken: string;
        expiration: number;
        tokenType: string;
    }): Token;
    token: Token;
}
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
declare function Token(token: {
    accessToken: string;
    refreshToken: string;
    expiration: number;
    tokenType: string;
}): Token;
declare class Token {
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
    constructor(token: {
        accessToken: string;
        refreshToken: string;
        expiration: number;
        tokenType: string;
    });
    tokenType: string;
    accessToken: string;
    refreshToken: string;
    expiration: Date;
    isExpired(gracePeriod?: number): boolean;
}
