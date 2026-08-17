# IBM Cloud Object Storage - Node.js SDK

This package allows Node.js developers to write software that interacts with [IBM
Cloud Object Storage](https://cloud.ibm.com/docs/services/cloud-object-storage/about-cos.html). It is a fork of [the ``AWS SDK for Javascript`` library](https://github.com/aws/aws-sdk-js).

## IBM COS SDK JS V1 End-of-Support on August 6, 2027

The IBM COS SDK for JS V1 is in maintenance mode and will reach end-of-support on August 6, 2027. After end-of-support, the SDK will no longer receive updates or releases. Previously published releases will continue to be available via public package managers and the code will remain on GitHub.

We recommend that you [migrate to the IBM COS SDK for JS V2](https://github.com/IBM/ibm-cos-sdk-js-v2/blob/main/MIGRATION_GUIDE_V2.md). The IBM COS SDK for JS V2 provides improved features, enhanced performance, and continued support from IBM. By adopting the latest version of the SDK, developers can ensure the security, compatibility, and stability of their solutions on IBM Cloud.

## IBM COS SDK For JS V2

The V2 version of IBM COS SDK JS is generally available. For more information see the [IBM COS SDK JS V2 documentation](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-node-v2) or check the project [repository](https://github.com/IBM/ibm-cos-sdk-js-v2).

## Notice

IBM has added a [Language Support Policy](#language-support-policy). Language versions will be deprecated on the published schedule without additional notice.

## Documentation

* [Core documentation for IBM COS](https://cloud.ibm.com/docs/services/cloud-object-storage/getting-started.html)
* [Node.js API reference documentation](https://ibm.github.io/ibm-cos-sdk-js)
* [REST API reference documentation](https://cloud.ibm.com/docs/services/cloud-object-storage/api-reference/about-api.html)

For release notes, see the [CHANGELOG](CHANGELOG.md).

* [Example Code](#example-code)
* [Getting Help](#getting-help)

## Quick start

You'll need:

* An instance of COS.
* An API key from [IBM Cloud Identity and Access Management](https://cloud.ibm.com/docs/iam/users_roles.html) with at least `Writer` permissions.
* The ID of the instance of COS that you are working with.
* Token acquisition endpoint
* Service endpoint

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

## Example Code

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

## Accelerated Archive

Users can set an archive rule that would allow data restore from an archive in 2 hours or 12 hours.

## Getting Help

Feel free to use GitHub issues for tracking bugs and feature requests, but for help please use one of the following resources:

* Read a quick start guide in [IBM Cloud Docs](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-node).
* Ask a question on [Stack Overflow](https://stackoverflow.com/) and tag it with ``ibm`` and ``object-storage``.
* Open a support ticket with [IBM Cloud Support](https://cloud.ibm.com/unifiedsupport/supportcenter)
* If it turns out that you may have found a bug, please [open an issue](https://github.com/ibm/ibm-cos-sdk-js/issues/new).

## Language Support Policy

IBM supports [current LTS releases](https://nodejs.org/en/about/previous-releases). IBM will deprecate language versions 90 days after a version reaches end-of-life. All clients will need to upgrade to a supported version before the end of the grace period.

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE.txt and NOTICE.txt for more information.
