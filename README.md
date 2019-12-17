# IBM Cloud Object Storage - Node.js SDK

This package allows Node.js developers to write software that interacts with [IBM
Cloud Object Storage](https://cloud.ibm.com/docs/services/cloud-object-storage/about-cos.html). It is a fork of [the ``AWS SDK for Javascript`` library](https://github.com/aws/aws-sdk-js).
## Documentation

* [Core documentation for IBM COS](https://cloud.ibm.com/docs/services/cloud-object-storage/getting-started.html)
* [Node.js API reference documentation](https://ibm.github.io/ibm-cos-sdk-js)
* [REST API reference documentation](https://cloud.ibm.com/docs/services/cloud-object-storage/api-reference/about-api.html)

For release notes, see the [CHANGELOG](CHANGELOG.md).

* [Example code](#example-code)
* [Getting help](#getting-help)

## Quick start

You'll need:
  * An instance of COS.
  * An API key from [IBM Cloud Identity and Access Management](https://cloud.ibm.com/docs/iam/users_roles.html) with at least `Writer` permissions.
  * The ID of the instance of COS that you are working with.
  * Token acquisition endpoint
  * Service endpoint
  * **Node 4.0++**.

These values can be found in the IBM Cloud Console by [generating a 'service credential'](https://cloud.ibm.com/docs/services/cloud-object-storage/iam/service-credentials.html).

## Getting the SDK
The preferred way to install the IBM COS SDK for Node.js is to use the
[npm](http://npmjs.org) package manager for Node.js. Simply type the following
into a terminal window:

```sh
npm install ibm-cos-sdk
```

## Using a Service Credential

You can source credentials directly from a [Service Credential](https://cloud.ibm.com/docs/services/cloud-object-storage/iam/service-credentials.html) JSON document generated in the IBM Cloud console saved to `~/.bluemix/cos_credentials`. The SDK will automatically load these providing you have not explicitly set other credentials during client creation. If the Service Credential contain [HMAC keys](https://cloud.ibm.com/docs/services/cloud-object-storage/hmac/credentials.html) the client will use those and authenticate using a signature, otherwise the client will use the provided API key to authenticate using bearer tokens.


## Example code

```javascript
var ibm = require('ibm-cos-sdk');
var util = require('util');

var config = {
    endpoint: '<endpoint>',
    apiKeyId: '<api-key>',
    serviceInstanceId: '<resource-instance-id>',
};

var cos = new ibm.S3(config);

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

## Immutable Object Storage
Users can configure buckets with an Immutable Object Storage policy to prevent objects from being modified or deleted for a defined period of time.  The retention period can be specified on a per-object basis, or objects can inherit a default retention period set on the bucket.  It is also possible to set open-ended and permanent retention periods.  Immutable Object Storage meets the rules set forth by the SEC governing record retention, and IBM Cloud administrators are unable to bypass these restrictions.  For more detail [see the documentation](https://cloud.ibm.com/docs/services/cloud-object-storage/basics/immutable.html).

## Archive Tier Support
You can automatically archive objects after a specified length of time or after a specified date.  Once archived, a temporary copy of an object can be restored for access as needed.  Restore time may take up to 15 hours.

An archive policy is set at the bucket level by calling the `putBucketLifecycle` method on a client instance. A newly added or modified archive policy applies to new objects uploaded and does not affect existing objects.  For more detail, [see the documentation](https://cloud.ibm.com/docs/services/cloud-object-storage/libraries/node.html#node).

## Getting Help
Feel free to use GitHub issues for tracking bugs and feature requests, but for help please use one of the following resources:

* Read a quick start guide in [IBM Cloud Docs](https://cloud.ibm.com/docs/services/cloud-object-storage/libraries/node.html#node-js).
* Ask a question on [Stack Overflow](https://stackoverflow.com/) and tag it with ``ibm`` and ``object-storage``.
* Open a support ticket with [IBM Cloud Support](https://cloud.ibm.com/unifiedsupport/supportcenter)
* If it turns out that you may have found a bug, please [open an issue](https://github.com/ibm/ibm-cos-sdk-js/issues/new).



## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE.txt and NOTICE.txt for more information.
