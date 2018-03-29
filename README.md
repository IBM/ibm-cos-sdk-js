# IBM Cloud Object Storage - Node.js SDK

This package allows Node.js developers to write software that interacts with [IBM
Cloud Object Storage](https://console.bluemix.net/docs/services/cloud-object-storage/about-cos.html). It is a fork of [the ``AWS SDK for Javascript`` library](https://github.com/aws/aws-sdk-js).
## Documentation

* [Core documentation for IBM COS](https://console.bluemix.net/docs/services/cloud-object-storage/getting-started.html)
* [Node.js API reference documentation](https://ibm.github.io/ibm-cos-sdk-js)
* [REST API reference documentation](https://console.bluemix.net/docs/services/cloud-object-storage/api-reference/about-compatibility-api.html)

For release notes, see the [CHANGELOG](CHANGELOG.md).

* [Example code](#example-code)
* [Getting help](#getting-help)

## Quick start

You'll need:
  * An instance of COS.
  * An API key from [IBM Cloud Identity and Access Management](https://console.bluemix.net/docs/iam/users_roles.html) with at least `Writer` permissions.
  * The ID of the instance of COS that you are working with.
  * Token acquisition endpoint
  * Service endpoint
  * **Node 4.0++**.

These values can be found in the Bluemix UI by [generating a 'service credential'](https://console.bluemix.net/docs/services/cloud-object-storage/iam/service-credentials.html).

## Getting the SDK
The preferred way to install the IBM COS SDK for Node.js is to use the
[npm](http://npmjs.org) package manager for Node.js. Simply type the following
into a terminal window:

```sh
npm install ibm-cos-sdk
```

## Using a Service Credential (New)

Starting in release 1.2.0 you can source credentials directly from a [Service Credential](https://console.bluemix.net/docs/services/cloud-object-storage/iam/service-credentials.html) JSON document generated in the IBM Cloud console saved to `~/.bluemix/cos_credentials`. The SDK will automatically load these providing you have not explicitly set other credentials during client creation. If the Service Credential contain [HMAC keys](https://console.bluemix.net/docs/services/cloud-object-storage/hmac/credentials.html) the client will use those and authenticate using a signature, otherwise the client will use the provided API key to authenticate using bearer tokens.


## Deprecation Notice

Deprecation Notice for IBM Cloud Object Storage Java and Python SDK Versions 1.x

As of March 31, 2018, IBM will no longer add new features to the IBM Cloud Object Storage Java SDK Versions 1.x and the IBM Cloud Object Storage Python SDK Versions 1.x.  We will continue to provide critical bug fixes to the 1.x releases through May 31, 2018.

Versions 1.x for Java and Python SDK will no longer be supported after May 31, 2018.

If you are using the 1.x version of the Java or Python SDK, please upgrade to the latest IBM Cloud Object Storage SDK versions 2.x.  Instructions on how to upgrade from SDK Java and Python 1.x can be found in the "Migrating from 1.x.x" section of corresponding Readme.

Note: The IBM Cloud Object Storage Node.js SDK is NOT affected by this change.

For questions, please open an issue:

[Java](https://github.com/ibm/ibm-cos-sdk-java/issues/new)

[Python](https://github.com/ibm/ibm-cos-sdk-python/issues/new)


## Example code

```javascript
var AWS = require('ibm-cos-sdk');
var util = require('util');

var config = {
    endpoint: '<endpoint>',
    apiKeyId: '<api-key>',
    ibmAuthEndpoint: 'https://iam.ng.bluemix.net/oidc/token',
    serviceInstanceId: '<resource-instance-id>',
};

var cos = new AWS.S3(config);

function doCreateBucket() {
    console.log('Creating bucket');
    return cos.createBucket({
        Bucket: 'my-bucket',
        CreateBucketConfiguration: {
          LocationConstraint: 'us-standard'
        },
    }).promise();
}

function doCreateObject() {
    console.log('Creating object');
    return cos.putObject({
        Bucket: 'my-bucket',
        Key: 'foo',
        Body: 'bar'
    }).promise();
}

function doDeleteObject() {
    console.log('Deleting object');
    return cos.deleteObject({
        Bucket: 'my-bucket',
        Key: 'foo'
    }).promise();
}

function doDeleteBucket() {
    console.log('Deleting bucket');
    return cos.deleteBucket({
        Bucket: 'my-bucket'
    }).promise();
}

doCreateBucket()
    .then(doCreateObject)
    .then(doDeleteObject)
    .then(doDeleteBucket)
    .then(function() {
        console.log('Finished!');
    })
    .catch(function(err) {
        console.error('An error occurred:');
        console.error(util.inspect(err));
    });
```


## Getting Help
Feel free to use GitHub issues for tracking bugs and feature requests, but for help please use one of the following resources:

* Read a quick start guide in [Bluemix Docs](https://console.bluemix.net/docs/services/cloud-object-storage/libraries/node.html#node-js).
* Ask a question on [Stack Overflow](https://stackoverflow.com/) and tag it with ``ibm`` and ``object-storage``.
* Open a support ticket with [IBM Bluemix Support](https://support.ng.bluemix.net/gethelp/)
* If it turns out that you may have found a bug, please [open an issue](https://github.com/ibm/ibm-cos-sdk-js/issues/new).



## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE.txt and NOTICE.txt for more information.
