import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {S3Customizations} from '../lib/services/s3';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
import {UseDualstackConfigOptions} from '../lib/config_use_dualstack';
import {ManagedUpload as managed_upload} from '../lib/s3/managed_upload';
import {PresignedPost as presigned_post} from '../lib/s3/presigned_post';
interface Blob {}
declare class S3 extends S3Customizations {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: S3.Types.ClientConfiguration)
  config: Config & S3.Types.ClientConfiguration;
  /**
   * This action aborts a multipart upload. After a multipart upload is aborted, no additional parts can be uploaded using that upload ID. The storage consumed by any previously uploaded parts will be freed. However, if any part uploads are currently in progress, those part uploads might or might not succeed. As a result, it might be necessary to abort a given multipart upload multiple times in order to completely free all storage consumed by all parts.  To verify that all parts have been removed, so you don't get charged for the part storage, you should call the ListParts action and ensure that the parts list is empty. For information about permissions required to use the multipart upload, see Multipart Upload and Permissions. The following operations are related to AbortMultipartUpload:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     ListParts     ListMultipartUploads   
   */
  abortMultipartUpload(params: S3.Types.AbortMultipartUploadRequest, callback?: (err: AWSError, data: S3.Types.AbortMultipartUploadOutput) => void): Request<S3.Types.AbortMultipartUploadOutput, AWSError>;
  /**
   * This action aborts a multipart upload. After a multipart upload is aborted, no additional parts can be uploaded using that upload ID. The storage consumed by any previously uploaded parts will be freed. However, if any part uploads are currently in progress, those part uploads might or might not succeed. As a result, it might be necessary to abort a given multipart upload multiple times in order to completely free all storage consumed by all parts.  To verify that all parts have been removed, so you don't get charged for the part storage, you should call the ListParts action and ensure that the parts list is empty. For information about permissions required to use the multipart upload, see Multipart Upload and Permissions. The following operations are related to AbortMultipartUpload:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     ListParts     ListMultipartUploads   
   */
  abortMultipartUpload(callback?: (err: AWSError, data: S3.Types.AbortMultipartUploadOutput) => void): Request<S3.Types.AbortMultipartUploadOutput, AWSError>;
  /**
   * Add a legal hold on an object. The legal hold identifiers are stored in the object metadata along with the timestamp of when they are POSTed to the object. The presence of any legal hold identifiers prevents the modification or deletion of the object data, even if the retention period has expired. The presence of a retention period header is required, otherwise a 400 error is returned.
   */
  addLegalHold(params: S3.Types.LegalHoldRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Add a legal hold on an object. The legal hold identifiers are stored in the object metadata along with the timestamp of when they are POSTed to the object. The presence of any legal hold identifiers prevents the modification or deletion of the object data, even if the retention period has expired. The presence of a retention period header is required, otherwise a 400 error is returned.
   */
  addLegalHold(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Completes a multipart upload by assembling previously uploaded parts. You first initiate the multipart upload and then upload all parts using the UploadPart operation. After successfully uploading all relevant parts of an upload, you call this action to complete the upload. Upon receiving this request, Amazon S3 concatenates all the parts in ascending order by part number to create a new object. In the Complete Multipart Upload request, you must provide the parts list. You must ensure that the parts list is complete. This action concatenates the parts that you provide in the list. For each part in the list, you must provide the part number and the ETag value, returned after that part was uploaded. Processing of a Complete Multipart Upload request could take several minutes to complete. After Amazon S3 begins processing the request, it sends an HTTP response header that specifies a 200 OK response. While processing is in progress, Amazon S3 periodically sends white space characters to keep the connection from timing out. A request could fail after the initial 200 OK response has been sent. This means that a 200 OK response can contain either a success or an error. If you call the S3 API directly, make sure to design your application to parse the contents of the response and handle it appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the embedded error and apply error handling per your configuration settings (including automatically retrying the request as appropriate). If the condition persists, the SDKs throws an exception (or, for the SDKs that don't use exceptions, they return the error).  Note that if CompleteMultipartUpload fails, applications should be prepared to retry the failed requests. For more information, see Amazon S3 Error Best Practices.  You cannot use Content-Type: application/x-www-form-urlencoded with Complete Multipart Upload requests. Also, if you do not provide a Content-Type header, CompleteMultipartUpload returns a 200 OK response.  For more information about multipart uploads, see Uploading Objects Using Multipart Upload. For information about permissions required to use the multipart upload API, see Multipart Upload and Permissions.  CompleteMultipartUpload has the following special errors:   Error code: EntityTooSmall    Description: Your proposed upload is smaller than the minimum allowed object size. Each part must be at least 5 MB in size, except the last part.   400 Bad Request     Error code: InvalidPart    Description: One or more of the specified parts could not be found. The part might not have been uploaded, or the specified entity tag might not have matched the part's entity tag.   400 Bad Request     Error code: InvalidPartOrder    Description: The list of parts was not in ascending order. The parts list must be specified in order by part number.   400 Bad Request     Error code: NoSuchUpload    Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.   404 Not Found     The following operations are related to CompleteMultipartUpload:    CreateMultipartUpload     UploadPart     AbortMultipartUpload     ListParts     ListMultipartUploads   
   */
  completeMultipartUpload(params: S3.Types.CompleteMultipartUploadRequest, callback?: (err: AWSError, data: S3.Types.CompleteMultipartUploadOutput) => void): Request<S3.Types.CompleteMultipartUploadOutput, AWSError>;
  /**
   * Completes a multipart upload by assembling previously uploaded parts. You first initiate the multipart upload and then upload all parts using the UploadPart operation. After successfully uploading all relevant parts of an upload, you call this action to complete the upload. Upon receiving this request, Amazon S3 concatenates all the parts in ascending order by part number to create a new object. In the Complete Multipart Upload request, you must provide the parts list. You must ensure that the parts list is complete. This action concatenates the parts that you provide in the list. For each part in the list, you must provide the part number and the ETag value, returned after that part was uploaded. Processing of a Complete Multipart Upload request could take several minutes to complete. After Amazon S3 begins processing the request, it sends an HTTP response header that specifies a 200 OK response. While processing is in progress, Amazon S3 periodically sends white space characters to keep the connection from timing out. A request could fail after the initial 200 OK response has been sent. This means that a 200 OK response can contain either a success or an error. If you call the S3 API directly, make sure to design your application to parse the contents of the response and handle it appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the embedded error and apply error handling per your configuration settings (including automatically retrying the request as appropriate). If the condition persists, the SDKs throws an exception (or, for the SDKs that don't use exceptions, they return the error).  Note that if CompleteMultipartUpload fails, applications should be prepared to retry the failed requests. For more information, see Amazon S3 Error Best Practices.  You cannot use Content-Type: application/x-www-form-urlencoded with Complete Multipart Upload requests. Also, if you do not provide a Content-Type header, CompleteMultipartUpload returns a 200 OK response.  For more information about multipart uploads, see Uploading Objects Using Multipart Upload. For information about permissions required to use the multipart upload API, see Multipart Upload and Permissions.  CompleteMultipartUpload has the following special errors:   Error code: EntityTooSmall    Description: Your proposed upload is smaller than the minimum allowed object size. Each part must be at least 5 MB in size, except the last part.   400 Bad Request     Error code: InvalidPart    Description: One or more of the specified parts could not be found. The part might not have been uploaded, or the specified entity tag might not have matched the part's entity tag.   400 Bad Request     Error code: InvalidPartOrder    Description: The list of parts was not in ascending order. The parts list must be specified in order by part number.   400 Bad Request     Error code: NoSuchUpload    Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.   404 Not Found     The following operations are related to CompleteMultipartUpload:    CreateMultipartUpload     UploadPart     AbortMultipartUpload     ListParts     ListMultipartUploads   
   */
  completeMultipartUpload(callback?: (err: AWSError, data: S3.Types.CompleteMultipartUploadOutput) => void): Request<S3.Types.CompleteMultipartUploadOutput, AWSError>;
  /**
   * Creates a copy of an object that is already stored in Amazon S3.  You can store individual objects of up to 5 TB in Amazon S3. You create a copy of your object up to 5 GB in size in a single atomic action using this API. However, to copy an object greater than 5 GB, you must use the multipart upload Upload Part - Copy (UploadPartCopy) API. For more information, see Copy Object Using the REST Multipart Upload API.  All copy requests must be authenticated. Additionally, you must have read access to the source object and write access to the destination bucket. For more information, see REST Authentication. Both the Region that you want to copy the object from and the Region that you want to copy the object to must be enabled for your account. A copy request might return an error when Amazon S3 receives the copy request or while Amazon S3 is copying the files. If the error occurs before the copy action starts, you receive a standard Amazon S3 error. If the error occurs during the copy operation, the error response is embedded in the 200 OK response. This means that a 200 OK response can contain either a success or an error. If you call the S3 API directly, make sure to design your application to parse the contents of the response and handle it appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the embedded error and apply error handling per your configuration settings (including automatically retrying the request as appropriate). If the condition persists, the SDKs throws an exception (or, for the SDKs that don't use exceptions, they return the error). If the copy is successful, you receive a response with information about the copied object.  If the request is an HTTP 1.1 request, the response is chunk encoded. If it were not, it would not contain the content-length, and you would need to read the entire body.  The copy request charge is based on the storage class and Region that you specify for the destination object. For pricing information, see Amazon S3 pricing.  Amazon S3 transfer acceleration does not support cross-Region copies. If you request a cross-Region copy using a transfer acceleration endpoint, you get a 400 Bad Request error. For more information, see Transfer Acceleration.   Metadata  When copying an object, you can preserve all metadata (default) or specify new metadata. However, the ACL is not preserved and is set to private for the user making the request. To override the default ACL setting, specify a new ACL when generating a copy request. For more information, see Using ACLs.  To specify whether you want the object metadata copied from the source object or replaced with metadata provided in the request, you can optionally add the x-amz-metadata-directive header. When you grant permissions, you can use the s3:x-amz-metadata-directive condition key to enforce certain metadata behavior when objects are uploaded. For more information, see Specifying Conditions in a Policy in the Amazon S3 User Guide. For a complete list of Amazon S3-specific condition keys, see Actions, Resources, and Condition Keys for Amazon S3.   x-amz-website-redirect-location is unique to each object and must be specified in the request headers to copy the value.   x-amz-copy-source-if Headers  To only copy an object under certain conditions, such as whether the Etag matches or whether the object was modified before or after a specified date, use the following request parameters:    x-amz-copy-source-if-match     x-amz-copy-source-if-none-match     x-amz-copy-source-if-unmodified-since     x-amz-copy-source-if-modified-since     If both the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request and evaluate as follows, Amazon S3 returns 200 OK and copies the data:    x-amz-copy-source-if-match condition evaluates to true    x-amz-copy-source-if-unmodified-since condition evaluates to false   If both the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request and evaluate as follows, Amazon S3 returns the 412 Precondition Failed response code:    x-amz-copy-source-if-none-match condition evaluates to false    x-amz-copy-source-if-modified-since condition evaluates to true    All headers with the x-amz- prefix, including x-amz-copy-source, must be signed.   Server-side encryption  Amazon S3 automatically encrypts all new objects that are copied to an S3 bucket. When copying an object, if you don't specify encryption information in your copy request, the encryption setting of the target object is set to the default encryption configuration of the destination bucket. By default, all buckets have a base level of encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the destination bucket has a default encryption configuration that uses server-side encryption with an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key (SSE-C), Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the target object copy. When you perform a CopyObject operation, if you want to use a different type of encryption setting for the target object, you can use other appropriate encryption-related headers to encrypt the target object with a KMS key, an Amazon S3 managed key, or a customer-provided key. With server-side encryption, Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts the data when you access it. If the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence. If the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the necessary encryption information in your request so that Amazon S3 can decrypt the object for copying. For more information about server-side encryption, see Using Server-Side Encryption. If a target object uses SSE-KMS, you can enable an S3 Bucket Key for the object. For more information, see Amazon S3 Bucket Keys in the Amazon S3 User Guide.  Access Control List (ACL)-Specific Request Headers  When copying an object, you can optionally use headers to grant ACL-based permissions. By default, all objects are private. Only the owner has full access control. When adding a new object, you can grant permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on the object. For more information, see Access Control List (ACL) Overview and Managing ACLs Using the REST API.  If the bucket that you're copying objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such as the bucket-owner-full-control canned ACL or an equivalent form of this ACL expressed in the XML format. For more information, see  Controlling ownership of objects and disabling ACLs in the Amazon S3 User Guide.  If your bucket uses the bucket owner enforced setting for Object Ownership, all objects written to the bucket by any account will be owned by the bucket owner.   Checksums  When copying an object, if it has a checksum, that checksum will be copied to the new object by default. When you copy the object over, you may optionally specify a different checksum algorithm to use with the x-amz-checksum-algorithm header.  Storage Class Options  You can use the CopyObject action to change the storage class of an object that is already stored in Amazon S3 using the StorageClass parameter. For more information, see Storage Classes in the Amazon S3 User Guide. If the source object's storage class is GLACIER, you must restore a copy of this object before you can use it as a source object for the copy operation. For more information, see RestoreObject. For more information, see Copying Objects.  Versioning  By default, x-amz-copy-source identifies the current version of an object to copy. If the current version is a delete marker, Amazon S3 behaves as if the object was deleted. To copy a different version, use the versionId subresource. If you enable versioning on the target bucket, Amazon S3 generates a unique version ID for the object being copied. This version ID is different from the version ID of the source object. Amazon S3 returns the version ID of the copied object in the x-amz-version-id response header in the response. If you do not enable versioning or suspend it on the target bucket, the version ID that Amazon S3 generates is always null.   The following operations are related to CopyObject:    PutObject     GetObject   
   */
  copyObject(params: S3.Types.CopyObjectRequest, callback?: (err: AWSError, data: S3.Types.CopyObjectOutput) => void): Request<S3.Types.CopyObjectOutput, AWSError>;
  /**
   * Creates a copy of an object that is already stored in Amazon S3.  You can store individual objects of up to 5 TB in Amazon S3. You create a copy of your object up to 5 GB in size in a single atomic action using this API. However, to copy an object greater than 5 GB, you must use the multipart upload Upload Part - Copy (UploadPartCopy) API. For more information, see Copy Object Using the REST Multipart Upload API.  All copy requests must be authenticated. Additionally, you must have read access to the source object and write access to the destination bucket. For more information, see REST Authentication. Both the Region that you want to copy the object from and the Region that you want to copy the object to must be enabled for your account. A copy request might return an error when Amazon S3 receives the copy request or while Amazon S3 is copying the files. If the error occurs before the copy action starts, you receive a standard Amazon S3 error. If the error occurs during the copy operation, the error response is embedded in the 200 OK response. This means that a 200 OK response can contain either a success or an error. If you call the S3 API directly, make sure to design your application to parse the contents of the response and handle it appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the embedded error and apply error handling per your configuration settings (including automatically retrying the request as appropriate). If the condition persists, the SDKs throws an exception (or, for the SDKs that don't use exceptions, they return the error). If the copy is successful, you receive a response with information about the copied object.  If the request is an HTTP 1.1 request, the response is chunk encoded. If it were not, it would not contain the content-length, and you would need to read the entire body.  The copy request charge is based on the storage class and Region that you specify for the destination object. For pricing information, see Amazon S3 pricing.  Amazon S3 transfer acceleration does not support cross-Region copies. If you request a cross-Region copy using a transfer acceleration endpoint, you get a 400 Bad Request error. For more information, see Transfer Acceleration.   Metadata  When copying an object, you can preserve all metadata (default) or specify new metadata. However, the ACL is not preserved and is set to private for the user making the request. To override the default ACL setting, specify a new ACL when generating a copy request. For more information, see Using ACLs.  To specify whether you want the object metadata copied from the source object or replaced with metadata provided in the request, you can optionally add the x-amz-metadata-directive header. When you grant permissions, you can use the s3:x-amz-metadata-directive condition key to enforce certain metadata behavior when objects are uploaded. For more information, see Specifying Conditions in a Policy in the Amazon S3 User Guide. For a complete list of Amazon S3-specific condition keys, see Actions, Resources, and Condition Keys for Amazon S3.   x-amz-website-redirect-location is unique to each object and must be specified in the request headers to copy the value.   x-amz-copy-source-if Headers  To only copy an object under certain conditions, such as whether the Etag matches or whether the object was modified before or after a specified date, use the following request parameters:    x-amz-copy-source-if-match     x-amz-copy-source-if-none-match     x-amz-copy-source-if-unmodified-since     x-amz-copy-source-if-modified-since     If both the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request and evaluate as follows, Amazon S3 returns 200 OK and copies the data:    x-amz-copy-source-if-match condition evaluates to true    x-amz-copy-source-if-unmodified-since condition evaluates to false   If both the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request and evaluate as follows, Amazon S3 returns the 412 Precondition Failed response code:    x-amz-copy-source-if-none-match condition evaluates to false    x-amz-copy-source-if-modified-since condition evaluates to true    All headers with the x-amz- prefix, including x-amz-copy-source, must be signed.   Server-side encryption  Amazon S3 automatically encrypts all new objects that are copied to an S3 bucket. When copying an object, if you don't specify encryption information in your copy request, the encryption setting of the target object is set to the default encryption configuration of the destination bucket. By default, all buckets have a base level of encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the destination bucket has a default encryption configuration that uses server-side encryption with an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key (SSE-C), Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the target object copy. When you perform a CopyObject operation, if you want to use a different type of encryption setting for the target object, you can use other appropriate encryption-related headers to encrypt the target object with a KMS key, an Amazon S3 managed key, or a customer-provided key. With server-side encryption, Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts the data when you access it. If the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence. If the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the necessary encryption information in your request so that Amazon S3 can decrypt the object for copying. For more information about server-side encryption, see Using Server-Side Encryption. If a target object uses SSE-KMS, you can enable an S3 Bucket Key for the object. For more information, see Amazon S3 Bucket Keys in the Amazon S3 User Guide.  Access Control List (ACL)-Specific Request Headers  When copying an object, you can optionally use headers to grant ACL-based permissions. By default, all objects are private. Only the owner has full access control. When adding a new object, you can grant permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on the object. For more information, see Access Control List (ACL) Overview and Managing ACLs Using the REST API.  If the bucket that you're copying objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such as the bucket-owner-full-control canned ACL or an equivalent form of this ACL expressed in the XML format. For more information, see  Controlling ownership of objects and disabling ACLs in the Amazon S3 User Guide.  If your bucket uses the bucket owner enforced setting for Object Ownership, all objects written to the bucket by any account will be owned by the bucket owner.   Checksums  When copying an object, if it has a checksum, that checksum will be copied to the new object by default. When you copy the object over, you may optionally specify a different checksum algorithm to use with the x-amz-checksum-algorithm header.  Storage Class Options  You can use the CopyObject action to change the storage class of an object that is already stored in Amazon S3 using the StorageClass parameter. For more information, see Storage Classes in the Amazon S3 User Guide. If the source object's storage class is GLACIER, you must restore a copy of this object before you can use it as a source object for the copy operation. For more information, see RestoreObject. For more information, see Copying Objects.  Versioning  By default, x-amz-copy-source identifies the current version of an object to copy. If the current version is a delete marker, Amazon S3 behaves as if the object was deleted. To copy a different version, use the versionId subresource. If you enable versioning on the target bucket, Amazon S3 generates a unique version ID for the object being copied. This version ID is different from the version ID of the source object. Amazon S3 returns the version ID of the copied object in the x-amz-version-id response header in the response. If you do not enable versioning or suspend it on the target bucket, the version ID that Amazon S3 generates is always null.   The following operations are related to CopyObject:    PutObject     GetObject   
   */
  copyObject(callback?: (err: AWSError, data: S3.Types.CopyObjectOutput) => void): Request<S3.Types.CopyObjectOutput, AWSError>;
  /**
   * Creates a new S3 bucket. To create a bucket, you must register with Amazon S3 and have a valid Amazon Web Services Access Key ID to authenticate requests. Anonymous requests are never allowed to create buckets. By creating the bucket, you become the bucket owner. Not every string is an acceptable bucket name. For information about bucket naming restrictions, see Bucket naming rules. If you want to create an Amazon S3 on Outposts bucket, see Create Bucket.  By default, the bucket is created in the US East (N. Virginia) Region. You can optionally specify a Region in the request body. You might choose a Region to optimize latency, minimize costs, or address regulatory requirements. For example, if you reside in Europe, you will probably find it advantageous to create buckets in the Europe (Ireland) Region. For more information, see Accessing a bucket.  If you send your create bucket request to the s3.amazonaws.com endpoint, the request goes to the us-east-1 Region. Accordingly, the signature calculations in Signature Version 4 must use us-east-1 as the Region, even if the location constraint in the request specifies another Region where the bucket is to be created. If you create a bucket in a Region other than US East (N. Virginia), your application must be able to handle 307 redirect. For more information, see Virtual hosting of buckets.   Access control lists (ACLs)  When creating a bucket using this operation, you can optionally configure the bucket ACL to specify the accounts or groups that should be granted specific permissions on the bucket.  If your CreateBucket request sets bucket owner enforced for S3 Object Ownership and specifies a bucket ACL that provides access to an external Amazon Web Services account, your request fails with a 400 error and returns the InvalidBucketAclWithObjectOwnership error code. For more information, see Controlling object ownership in the Amazon S3 User Guide.  There are two ways to grant the appropriate permissions using the request headers.   Specify a canned ACL using the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. For more information, see Canned ACL.   Specify access permissions explicitly using the x-amz-grant-read, x-amz-grant-write, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. These headers map to the set of permissions Amazon S3 supports in an ACL. For more information, see Access control list (ACL) overview. You specify each grantee as a type=value pair, where the type is one of the following:    id – if the value specified is the canonical user ID of an Amazon Web Services account    uri – if you are granting permissions to a predefined group    emailAddress – if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:  x-amz-grant-read: id="11112222333", id="444455556666"      You can use either a canned ACL or specify access permissions explicitly. You cannot do both.   Permissions  In addition to s3:CreateBucket, the following permissions are required when your CreateBucket includes specific headers:    ACLs - If your CreateBucket request specifies ACL permissions and the ACL is public-read, public-read-write, authenticated-read, or if you specify access permissions explicitly through any other ACL, both s3:CreateBucket and s3:PutBucketAcl permissions are needed. If the ACL the CreateBucket request is private or doesn't specify any ACLs, only s3:CreateBucket permission is needed.     Object Lock - If ObjectLockEnabledForBucket is set to true in your CreateBucket request, s3:PutBucketObjectLockConfiguration and s3:PutBucketVersioning permissions are required.    S3 Object Ownership - If your CreateBucket request includes the x-amz-object-ownership header, s3:PutBucketOwnershipControls permission is required.     The following operations are related to CreateBucket:    PutObject     DeleteBucket   
   */
  createBucket(params: S3.Types.CreateBucketRequest, callback?: (err: AWSError, data: S3.Types.CreateBucketOutput) => void): Request<S3.Types.CreateBucketOutput, AWSError>;
  /**
   * Creates a new S3 bucket. To create a bucket, you must register with Amazon S3 and have a valid Amazon Web Services Access Key ID to authenticate requests. Anonymous requests are never allowed to create buckets. By creating the bucket, you become the bucket owner. Not every string is an acceptable bucket name. For information about bucket naming restrictions, see Bucket naming rules. If you want to create an Amazon S3 on Outposts bucket, see Create Bucket.  By default, the bucket is created in the US East (N. Virginia) Region. You can optionally specify a Region in the request body. You might choose a Region to optimize latency, minimize costs, or address regulatory requirements. For example, if you reside in Europe, you will probably find it advantageous to create buckets in the Europe (Ireland) Region. For more information, see Accessing a bucket.  If you send your create bucket request to the s3.amazonaws.com endpoint, the request goes to the us-east-1 Region. Accordingly, the signature calculations in Signature Version 4 must use us-east-1 as the Region, even if the location constraint in the request specifies another Region where the bucket is to be created. If you create a bucket in a Region other than US East (N. Virginia), your application must be able to handle 307 redirect. For more information, see Virtual hosting of buckets.   Access control lists (ACLs)  When creating a bucket using this operation, you can optionally configure the bucket ACL to specify the accounts or groups that should be granted specific permissions on the bucket.  If your CreateBucket request sets bucket owner enforced for S3 Object Ownership and specifies a bucket ACL that provides access to an external Amazon Web Services account, your request fails with a 400 error and returns the InvalidBucketAclWithObjectOwnership error code. For more information, see Controlling object ownership in the Amazon S3 User Guide.  There are two ways to grant the appropriate permissions using the request headers.   Specify a canned ACL using the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. For more information, see Canned ACL.   Specify access permissions explicitly using the x-amz-grant-read, x-amz-grant-write, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. These headers map to the set of permissions Amazon S3 supports in an ACL. For more information, see Access control list (ACL) overview. You specify each grantee as a type=value pair, where the type is one of the following:    id – if the value specified is the canonical user ID of an Amazon Web Services account    uri – if you are granting permissions to a predefined group    emailAddress – if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:  x-amz-grant-read: id="11112222333", id="444455556666"      You can use either a canned ACL or specify access permissions explicitly. You cannot do both.   Permissions  In addition to s3:CreateBucket, the following permissions are required when your CreateBucket includes specific headers:    ACLs - If your CreateBucket request specifies ACL permissions and the ACL is public-read, public-read-write, authenticated-read, or if you specify access permissions explicitly through any other ACL, both s3:CreateBucket and s3:PutBucketAcl permissions are needed. If the ACL the CreateBucket request is private or doesn't specify any ACLs, only s3:CreateBucket permission is needed.     Object Lock - If ObjectLockEnabledForBucket is set to true in your CreateBucket request, s3:PutBucketObjectLockConfiguration and s3:PutBucketVersioning permissions are required.    S3 Object Ownership - If your CreateBucket request includes the x-amz-object-ownership header, s3:PutBucketOwnershipControls permission is required.     The following operations are related to CreateBucket:    PutObject     DeleteBucket   
   */
  createBucket(callback?: (err: AWSError, data: S3.Types.CreateBucketOutput) => void): Request<S3.Types.CreateBucketOutput, AWSError>;
  /**
   * This action initiates a multipart upload and returns an upload ID. This upload ID is used to associate all of the parts in the specific multipart upload. You specify this upload ID in each of your subsequent upload part requests (see UploadPart). You also include this upload ID in the final request to either complete or abort the multipart upload request. For more information about multipart uploads, see Multipart Upload Overview. If you have configured a lifecycle rule to abort incomplete multipart uploads, the upload must complete within the number of days specified in the bucket lifecycle configuration. Otherwise, the incomplete multipart upload becomes eligible for an abort action and Amazon S3 aborts the multipart upload. For more information, see Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration. For information about the permissions required to use the multipart upload API, see Multipart Upload and Permissions. For request signing, multipart upload is just a series of regular requests. You initiate a multipart upload, send one or more requests to upload parts, and then complete the multipart upload process. You sign each request individually. There is nothing special about signing multipart upload requests. For more information about signing, see Authenticating Requests (Amazon Web Services Signature Version 4).  After you initiate a multipart upload and upload one or more parts, to stop being charged for storing the uploaded parts, you must either complete or abort the multipart upload. Amazon S3 frees up the space used to store the parts and stop charging you for storing them only after you either complete or abort a multipart upload.   Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. Amazon S3 automatically encrypts all new objects that are uploaded to an S3 bucket. When doing a multipart upload, if you don't specify encryption information in your request, the encryption setting of the uploaded parts is set to the default encryption configuration of the destination bucket. By default, all buckets have a base level of encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the destination bucket has a default encryption configuration that uses server-side encryption with an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key (SSE-C), Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the uploaded parts. When you perform a CreateMultipartUpload operation, if you want to use a different type of encryption setting for the uploaded parts, you can request that Amazon S3 encrypts the object with a KMS key, an Amazon S3 managed key, or a customer-provided key. If the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence. If you choose to provide your own encryption key, the request headers you provide in UploadPart and UploadPartCopy requests must match the headers you used in the request to initiate the upload by using CreateMultipartUpload. You can request that Amazon S3 save the uploaded parts encrypted with server-side encryption with an Amazon S3 managed key (SSE-S3), an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key (SSE-C).  To perform a multipart upload with encryption by using an Amazon Web Services KMS key, the requester must have permission to the kms:Decrypt and kms:GenerateDataKey* actions on the key. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information, see Multipart upload API and permissions and Protecting data using server-side encryption with Amazon Web Services KMS in the Amazon S3 User Guide. If your Identity and Access Management (IAM) user or role is in the same Amazon Web Services account as the KMS key, then you must have these permissions on the key policy. If your IAM user or role belongs to a different account than the key, then you must have the permissions on both the key policy and your IAM user or role.  For more information, see Protecting Data Using Server-Side Encryption.  Access Permissions  When copying an object, you can optionally specify the accounts or groups that should be granted specific permissions on the new object. There are two ways to grant the permissions using the request headers:   Specify a canned ACL with the x-amz-acl request header. For more information, see Canned ACL.   Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview.   You can use either a canned ACL or specify access permissions explicitly. You cannot do both.  Server-Side- Encryption-Specific Request Headers  Amazon S3 encrypts data by using server-side encryption with an Amazon S3 managed key (SSE-S3) by default. Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. You can request that Amazon S3 encrypts data at rest by using server-side encryption with other key options. The option you use depends on whether you want to use KMS keys (SSE-KMS) or provide your own encryption keys (SSE-C).   Use KMS keys (SSE-KMS) that include the Amazon Web Services managed key (aws/s3) and KMS customer managed keys stored in Key Management Service (KMS) – If you want Amazon Web Services to manage the keys used to encrypt data, specify the following headers in the request.    x-amz-server-side-encryption     x-amz-server-side-encryption-aws-kms-key-id     x-amz-server-side-encryption-context     If you specify x-amz-server-side-encryption:aws:kms, but don't provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key (aws/s3 key) in KMS to protect the data.   All GET and PUT requests for an object protected by KMS fail if you don't make them by using Secure Sockets Layer (SSL), Transport Layer Security (TLS), or Signature Version 4.  For more information about server-side encryption with KMS keys (SSE-KMS), see Protecting Data Using Server-Side Encryption with KMS keys.   Use customer-provided encryption keys (SSE-C) – If you want to manage your own encryption keys, provide all the following headers in the request.    x-amz-server-side-encryption-customer-algorithm     x-amz-server-side-encryption-customer-key     x-amz-server-side-encryption-customer-key-MD5    For more information about server-side encryption with customer-provided encryption keys (SSE-C), see  Protecting data using server-side encryption with customer-provided encryption keys (SSE-C).    Access-Control-List (ACL)-Specific Request Headers  You also can use the following access control–related headers with this operation. By default, all objects are private. Only the owner has full access control. When adding a new object, you can grant permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the access control list (ACL) on the object. For more information, see Using ACLs. With this operation, you can grant access permissions using one of the following two methods:   Specify a canned ACL (x-amz-acl) — Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. For more information, see Canned ACL.   Specify access permissions explicitly — To explicitly grant access permissions to specific Amazon Web Services accounts or groups, use the following headers. Each header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. In the header, you specify a list of grantees who get the specific permission. To grant permissions explicitly, use:    x-amz-grant-read     x-amz-grant-write     x-amz-grant-read-acp     x-amz-grant-write-acp     x-amz-grant-full-control    You specify each grantee as a type=value pair, where the type is one of the following:    id – if the value specified is the canonical user ID of an Amazon Web Services account    uri – if you are granting permissions to a predefined group    emailAddress – if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:  x-amz-grant-read: id="11112222333", id="444455556666"       The following operations are related to CreateMultipartUpload:    UploadPart     CompleteMultipartUpload     AbortMultipartUpload     ListParts     ListMultipartUploads   
   */
  createMultipartUpload(params: S3.Types.CreateMultipartUploadRequest, callback?: (err: AWSError, data: S3.Types.CreateMultipartUploadOutput) => void): Request<S3.Types.CreateMultipartUploadOutput, AWSError>;
  /**
   * This action initiates a multipart upload and returns an upload ID. This upload ID is used to associate all of the parts in the specific multipart upload. You specify this upload ID in each of your subsequent upload part requests (see UploadPart). You also include this upload ID in the final request to either complete or abort the multipart upload request. For more information about multipart uploads, see Multipart Upload Overview. If you have configured a lifecycle rule to abort incomplete multipart uploads, the upload must complete within the number of days specified in the bucket lifecycle configuration. Otherwise, the incomplete multipart upload becomes eligible for an abort action and Amazon S3 aborts the multipart upload. For more information, see Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration. For information about the permissions required to use the multipart upload API, see Multipart Upload and Permissions. For request signing, multipart upload is just a series of regular requests. You initiate a multipart upload, send one or more requests to upload parts, and then complete the multipart upload process. You sign each request individually. There is nothing special about signing multipart upload requests. For more information about signing, see Authenticating Requests (Amazon Web Services Signature Version 4).  After you initiate a multipart upload and upload one or more parts, to stop being charged for storing the uploaded parts, you must either complete or abort the multipart upload. Amazon S3 frees up the space used to store the parts and stop charging you for storing them only after you either complete or abort a multipart upload.   Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. Amazon S3 automatically encrypts all new objects that are uploaded to an S3 bucket. When doing a multipart upload, if you don't specify encryption information in your request, the encryption setting of the uploaded parts is set to the default encryption configuration of the destination bucket. By default, all buckets have a base level of encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the destination bucket has a default encryption configuration that uses server-side encryption with an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key (SSE-C), Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the uploaded parts. When you perform a CreateMultipartUpload operation, if you want to use a different type of encryption setting for the uploaded parts, you can request that Amazon S3 encrypts the object with a KMS key, an Amazon S3 managed key, or a customer-provided key. If the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence. If you choose to provide your own encryption key, the request headers you provide in UploadPart and UploadPartCopy requests must match the headers you used in the request to initiate the upload by using CreateMultipartUpload. You can request that Amazon S3 save the uploaded parts encrypted with server-side encryption with an Amazon S3 managed key (SSE-S3), an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key (SSE-C).  To perform a multipart upload with encryption by using an Amazon Web Services KMS key, the requester must have permission to the kms:Decrypt and kms:GenerateDataKey* actions on the key. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information, see Multipart upload API and permissions and Protecting data using server-side encryption with Amazon Web Services KMS in the Amazon S3 User Guide. If your Identity and Access Management (IAM) user or role is in the same Amazon Web Services account as the KMS key, then you must have these permissions on the key policy. If your IAM user or role belongs to a different account than the key, then you must have the permissions on both the key policy and your IAM user or role.  For more information, see Protecting Data Using Server-Side Encryption.  Access Permissions  When copying an object, you can optionally specify the accounts or groups that should be granted specific permissions on the new object. There are two ways to grant the permissions using the request headers:   Specify a canned ACL with the x-amz-acl request header. For more information, see Canned ACL.   Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview.   You can use either a canned ACL or specify access permissions explicitly. You cannot do both.  Server-Side- Encryption-Specific Request Headers  Amazon S3 encrypts data by using server-side encryption with an Amazon S3 managed key (SSE-S3) by default. Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. You can request that Amazon S3 encrypts data at rest by using server-side encryption with other key options. The option you use depends on whether you want to use KMS keys (SSE-KMS) or provide your own encryption keys (SSE-C).   Use KMS keys (SSE-KMS) that include the Amazon Web Services managed key (aws/s3) and KMS customer managed keys stored in Key Management Service (KMS) – If you want Amazon Web Services to manage the keys used to encrypt data, specify the following headers in the request.    x-amz-server-side-encryption     x-amz-server-side-encryption-aws-kms-key-id     x-amz-server-side-encryption-context     If you specify x-amz-server-side-encryption:aws:kms, but don't provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key (aws/s3 key) in KMS to protect the data.   All GET and PUT requests for an object protected by KMS fail if you don't make them by using Secure Sockets Layer (SSL), Transport Layer Security (TLS), or Signature Version 4.  For more information about server-side encryption with KMS keys (SSE-KMS), see Protecting Data Using Server-Side Encryption with KMS keys.   Use customer-provided encryption keys (SSE-C) – If you want to manage your own encryption keys, provide all the following headers in the request.    x-amz-server-side-encryption-customer-algorithm     x-amz-server-side-encryption-customer-key     x-amz-server-side-encryption-customer-key-MD5    For more information about server-side encryption with customer-provided encryption keys (SSE-C), see  Protecting data using server-side encryption with customer-provided encryption keys (SSE-C).    Access-Control-List (ACL)-Specific Request Headers  You also can use the following access control–related headers with this operation. By default, all objects are private. Only the owner has full access control. When adding a new object, you can grant permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the access control list (ACL) on the object. For more information, see Using ACLs. With this operation, you can grant access permissions using one of the following two methods:   Specify a canned ACL (x-amz-acl) — Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. For more information, see Canned ACL.   Specify access permissions explicitly — To explicitly grant access permissions to specific Amazon Web Services accounts or groups, use the following headers. Each header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. In the header, you specify a list of grantees who get the specific permission. To grant permissions explicitly, use:    x-amz-grant-read     x-amz-grant-write     x-amz-grant-read-acp     x-amz-grant-write-acp     x-amz-grant-full-control    You specify each grantee as a type=value pair, where the type is one of the following:    id – if the value specified is the canonical user ID of an Amazon Web Services account    uri – if you are granting permissions to a predefined group    emailAddress – if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:  x-amz-grant-read: id="11112222333", id="444455556666"       The following operations are related to CreateMultipartUpload:    UploadPart     CompleteMultipartUpload     AbortMultipartUpload     ListParts     ListMultipartUploads   
   */
  createMultipartUpload(callback?: (err: AWSError, data: S3.Types.CreateMultipartUploadOutput) => void): Request<S3.Types.CreateMultipartUploadOutput, AWSError>;
  /**
   * Deletes the S3 bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. The following operations are related to DeleteBucket:    CreateBucket     DeleteObject   
   */
  deleteBucket(params: S3.Types.DeleteBucketRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the S3 bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. The following operations are related to DeleteBucket:    CreateBucket     DeleteObject   
   */
  deleteBucket(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the cors configuration information set for the bucket. To use this operation, you must have permission to perform the s3:PutBucketCORS action. The bucket owner has this permission by default and can grant this permission to others.  For information about cors, see Enabling Cross-Origin Resource Sharing in the Amazon S3 User Guide. The following operations are related to DeleteBucketCors:    PutBucketCors     RESTOPTIONSobject   
   */
  deleteBucketCors(params: S3.Types.DeleteBucketCorsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the cors configuration information set for the bucket. To use this operation, you must have permission to perform the s3:PutBucketCORS action. The bucket owner has this permission by default and can grant this permission to others.  For information about cors, see Enabling Cross-Origin Resource Sharing in the Amazon S3 User Guide. The following operations are related to DeleteBucketCors:    PutBucketCors     RESTOPTIONSobject   
   */
  deleteBucketCors(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove Legal hold on an object. The legal hold identifiers are stored in the object metadata along with the timestamp of when they are POSTed to the object. The presence of any legal hold identifiers prevents the modification or deletion of the object data, even if the retention period has expired. The presence of a retention period header is required, otherwise a 400 error is returned.
   */
  deleteLegalHold(params: S3.Types.LegalHoldRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove Legal hold on an object. The legal hold identifiers are stored in the object metadata along with the timestamp of when they are POSTed to the object. The presence of any legal hold identifiers prevents the modification or deletion of the object data, even if the retention period has expired. The presence of a retention period header is required, otherwise a 400 error is returned.
   */
  deleteLegalHold(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the lifecycle configuration from the specified bucket. Amazon S3 removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration. To use this operation, you must have permission to perform the s3:PutLifecycleConfiguration action. By default, the bucket owner has this permission and the bucket owner can grant this permission to others. There is usually some time lag before lifecycle configuration deletion is fully propagated to all the Amazon S3 systems. For more information about the object expiration, see Elements to Describe Lifecycle Actions. Related actions include:    PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration   
   */
  deleteBucketLifecycle(params: S3.Types.DeleteBucketLifecycleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the lifecycle configuration from the specified bucket. Amazon S3 removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration. To use this operation, you must have permission to perform the s3:PutLifecycleConfiguration action. By default, the bucket owner has this permission and the bucket owner can grant this permission to others. There is usually some time lag before lifecycle configuration deletion is fully propagated to all the Amazon S3 systems. For more information about the object expiration, see Elements to Describe Lifecycle Actions. Related actions include:    PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration   
   */
  deleteBucketLifecycle(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Deletes the replication configuration from the bucket. To use this operation, you must have permissions to perform the s3:PutReplicationConfiguration action. The bucket owner has these permissions by default and can grant it to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.   It can take a while for the deletion of a replication configuration to fully propagate.   For information about replication configuration, see Replication in the Amazon S3 User Guide. The following operations are related to DeleteBucketReplication:    PutBucketReplication     GetBucketReplication   
   */
  deleteBucketReplication(params: S3.Types.DeleteBucketReplicationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Deletes the replication configuration from the bucket. To use this operation, you must have permissions to perform the s3:PutReplicationConfiguration action. The bucket owner has these permissions by default and can grant it to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.   It can take a while for the deletion of a replication configuration to fully propagate.   For information about replication configuration, see Replication in the Amazon S3 User Guide. The following operations are related to DeleteBucketReplication:    PutBucketReplication     GetBucketReplication   
   */
  deleteBucketReplication(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the tags from the bucket. To use this operation, you must have permission to perform the s3:PutBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  The following operations are related to DeleteBucketTagging:    GetBucketTagging     PutBucketTagging   
   */
  deleteBucketTagging(params: S3.Types.DeleteBucketTaggingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the tags from the bucket. To use this operation, you must have permission to perform the s3:PutBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  The following operations are related to DeleteBucketTagging:    GetBucketTagging     PutBucketTagging   
   */
  deleteBucketTagging(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This action removes the website configuration for a bucket. Amazon S3 returns a 200 OK response upon successfully deleting a website configuration on the specified bucket. You will get a 200 OK response if the website configuration you are trying to delete does not exist on the bucket. Amazon S3 returns a 404 response if the bucket specified in the request does not exist. This DELETE action requires the S3:DeleteBucketWebsite permission. By default, only the bucket owner can delete the website configuration attached to a bucket. However, bucket owners can grant other users permission to delete the website configuration by writing a bucket policy granting them the S3:DeleteBucketWebsite permission.  For more information about hosting websites, see Hosting Websites on Amazon S3.  The following operations are related to DeleteBucketWebsite:    GetBucketWebsite     PutBucketWebsite   
   */
  deleteBucketWebsite(params: S3.Types.DeleteBucketWebsiteRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This action removes the website configuration for a bucket. Amazon S3 returns a 200 OK response upon successfully deleting a website configuration on the specified bucket. You will get a 200 OK response if the website configuration you are trying to delete does not exist on the bucket. Amazon S3 returns a 404 response if the bucket specified in the request does not exist. This DELETE action requires the S3:DeleteBucketWebsite permission. By default, only the bucket owner can delete the website configuration attached to a bucket. However, bucket owners can grant other users permission to delete the website configuration by writing a bucket policy granting them the S3:DeleteBucketWebsite permission.  For more information about hosting websites, see Hosting Websites on Amazon S3.  The following operations are related to DeleteBucketWebsite:    GetBucketWebsite     PutBucketWebsite   
   */
  deleteBucketWebsite(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the null version (if there is one) of an object and inserts a delete marker, which becomes the latest version of the object. If there isn't a null version, Amazon S3 does not remove any objects but will still respond that the command was successful. To remove a specific version, you must use the version Id subresource. Using this subresource permanently deletes the version. If the object deleted is a delete marker, Amazon S3 sets the response header, x-amz-delete-marker, to true.  If the object you want to delete is in a bucket where the bucket versioning configuration is MFA Delete enabled, you must include the x-amz-mfa request header in the DELETE versionId request. Requests that include x-amz-mfa must use HTTPS.   For more information about MFA Delete, see Using MFA Delete. To see sample requests that use versioning, see Sample Request.  You can delete objects by explicitly calling DELETE Object or configure its lifecycle (PutBucketLifecycle) to enable Amazon S3 to remove them for you. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them the s3:DeleteObject, s3:DeleteObjectVersion, and s3:PutLifeCycleConfiguration actions.  The following action is related to DeleteObject:    PutObject   
   */
  deleteObject(params: S3.Types.DeleteObjectRequest, callback?: (err: AWSError, data: S3.Types.DeleteObjectOutput) => void): Request<S3.Types.DeleteObjectOutput, AWSError>;
  /**
   * Removes the null version (if there is one) of an object and inserts a delete marker, which becomes the latest version of the object. If there isn't a null version, Amazon S3 does not remove any objects but will still respond that the command was successful. To remove a specific version, you must use the version Id subresource. Using this subresource permanently deletes the version. If the object deleted is a delete marker, Amazon S3 sets the response header, x-amz-delete-marker, to true.  If the object you want to delete is in a bucket where the bucket versioning configuration is MFA Delete enabled, you must include the x-amz-mfa request header in the DELETE versionId request. Requests that include x-amz-mfa must use HTTPS.   For more information about MFA Delete, see Using MFA Delete. To see sample requests that use versioning, see Sample Request.  You can delete objects by explicitly calling DELETE Object or configure its lifecycle (PutBucketLifecycle) to enable Amazon S3 to remove them for you. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them the s3:DeleteObject, s3:DeleteObjectVersion, and s3:PutLifeCycleConfiguration actions.  The following action is related to DeleteObject:    PutObject   
   */
  deleteObject(callback?: (err: AWSError, data: S3.Types.DeleteObjectOutput) => void): Request<S3.Types.DeleteObjectOutput, AWSError>;
  /**
   * Removes the entire tag set from the specified object. For more information about managing object tags, see  Object Tagging. To use this operation, you must have permission to perform the s3:DeleteObjectTagging action. To delete tags of a specific object version, add the versionId query parameter in the request. You will need permission for the s3:DeleteObjectVersionTagging action. The following operations are related to DeleteObjectTagging:    PutObjectTagging     GetObjectTagging   
   */
  deleteObjectTagging(params: S3.Types.DeleteObjectTaggingRequest, callback?: (err: AWSError, data: S3.Types.DeleteObjectTaggingOutput) => void): Request<S3.Types.DeleteObjectTaggingOutput, AWSError>;
  /**
   * Removes the entire tag set from the specified object. For more information about managing object tags, see  Object Tagging. To use this operation, you must have permission to perform the s3:DeleteObjectTagging action. To delete tags of a specific object version, add the versionId query parameter in the request. You will need permission for the s3:DeleteObjectVersionTagging action. The following operations are related to DeleteObjectTagging:    PutObjectTagging     GetObjectTagging   
   */
  deleteObjectTagging(callback?: (err: AWSError, data: S3.Types.DeleteObjectTaggingOutput) => void): Request<S3.Types.DeleteObjectTaggingOutput, AWSError>;
  /**
   * This action enables you to delete multiple objects from a bucket using a single HTTP request. If you know the object keys that you want to delete, then this action provides a suitable alternative to sending individual delete requests, reducing per-request overhead. The request contains a list of up to 1000 keys that you want to delete. In the XML, you provide the object key names, and optionally, version IDs if you want to delete a specific version of the object from a versioning-enabled bucket. For each key, Amazon S3 performs a delete action and returns the result of that delete, success, or failure, in the response. Note that if the object specified in the request is not found, Amazon S3 returns the result as deleted.  The action supports two modes for the response: verbose and quiet. By default, the action uses verbose mode in which the response includes the result of deletion of each key in your request. In quiet mode the response includes only keys where the delete action encountered an error. For a successful deletion, the action does not return any information about the delete in the response body. When performing this action on an MFA Delete enabled bucket, that attempts to delete any versioned objects, you must include an MFA token. If you do not provide one, the entire request will fail, even if there are non-versioned objects you are trying to delete. If you provide an invalid token, whether there are versioned keys in the request or not, the entire Multi-Object Delete request will fail. For information about MFA Delete, see  MFA Delete. Finally, the Content-MD5 header is required for all Multi-Object Delete requests. Amazon S3 uses the header value to ensure that your request body has not been altered in transit. The following operations are related to DeleteObjects:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     ListParts     AbortMultipartUpload   
   */
  deleteObjects(params: S3.Types.DeleteObjectsRequest, callback?: (err: AWSError, data: S3.Types.DeleteObjectsOutput) => void): Request<S3.Types.DeleteObjectsOutput, AWSError>;
  /**
   * This action enables you to delete multiple objects from a bucket using a single HTTP request. If you know the object keys that you want to delete, then this action provides a suitable alternative to sending individual delete requests, reducing per-request overhead. The request contains a list of up to 1000 keys that you want to delete. In the XML, you provide the object key names, and optionally, version IDs if you want to delete a specific version of the object from a versioning-enabled bucket. For each key, Amazon S3 performs a delete action and returns the result of that delete, success, or failure, in the response. Note that if the object specified in the request is not found, Amazon S3 returns the result as deleted.  The action supports two modes for the response: verbose and quiet. By default, the action uses verbose mode in which the response includes the result of deletion of each key in your request. In quiet mode the response includes only keys where the delete action encountered an error. For a successful deletion, the action does not return any information about the delete in the response body. When performing this action on an MFA Delete enabled bucket, that attempts to delete any versioned objects, you must include an MFA token. If you do not provide one, the entire request will fail, even if there are non-versioned objects you are trying to delete. If you provide an invalid token, whether there are versioned keys in the request or not, the entire Multi-Object Delete request will fail. For information about MFA Delete, see  MFA Delete. Finally, the Content-MD5 header is required for all Multi-Object Delete requests. Amazon S3 uses the header value to ensure that your request body has not been altered in transit. The following operations are related to DeleteObjects:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     ListParts     AbortMultipartUpload   
   */
  deleteObjects(callback?: (err: AWSError, data: S3.Types.DeleteObjectsOutput) => void): Request<S3.Types.DeleteObjectsOutput, AWSError>;
  /**
   * This implementation of the POST operation uses the extendRetention sub-resource to extend the retention period of a protected object in a protected vault.
   */
  extendObjectRetention(params: S3.Types.ExtendObjectRetentionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This implementation of the POST operation uses the extendRetention sub-resource to extend the retention period of a protected object in a protected vault.
   */
  extendObjectRetention(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the PublicAccessBlock configuration for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketPublicAccessBlock permission. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. The following operations are related to DeletePublicAccessBlock:    Using Amazon S3 Block Public Access     GetPublicAccessBlock     PutPublicAccessBlock     GetBucketPolicyStatus   
   */
  deletePublicAccessBlock(params: S3.Types.DeletePublicAccessBlockRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the PublicAccessBlock configuration for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketPublicAccessBlock permission. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. The following operations are related to DeletePublicAccessBlock:    Using Amazon S3 Block Public Access     GetPublicAccessBlock     PutPublicAccessBlock     GetBucketPolicyStatus   
   */
  deletePublicAccessBlock(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This implementation of the GET action uses the acl subresource to return the access control list (ACL) of a bucket. To use GET to return the ACL of the bucket, you must have READ_ACP access to the bucket. If READ_ACP permission is granted to the anonymous user, you can return the ACL of the bucket without using an authorization header. To use this API operation against an access point, provide the alias of the access point in place of the bucket name. To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  If your bucket uses the bucket owner enforced setting for S3 Object Ownership, requests to read ACLs are still supported and return the bucket-owner-full-control ACL with the owner being the account that created the bucket. For more information, see  Controlling object ownership and disabling ACLs in the Amazon S3 User Guide.  The following operations are related to GetBucketAcl:    ListObjects   
   */
  getBucketAcl(params: S3.Types.GetBucketAclRequest, callback?: (err: AWSError, data: S3.Types.GetBucketAclOutput) => void): Request<S3.Types.GetBucketAclOutput, AWSError>;
  /**
   * This implementation of the GET action uses the acl subresource to return the access control list (ACL) of a bucket. To use GET to return the ACL of the bucket, you must have READ_ACP access to the bucket. If READ_ACP permission is granted to the anonymous user, you can return the ACL of the bucket without using an authorization header. To use this API operation against an access point, provide the alias of the access point in place of the bucket name. To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  If your bucket uses the bucket owner enforced setting for S3 Object Ownership, requests to read ACLs are still supported and return the bucket-owner-full-control ACL with the owner being the account that created the bucket. For more information, see  Controlling object ownership and disabling ACLs in the Amazon S3 User Guide.  The following operations are related to GetBucketAcl:    ListObjects   
   */
  getBucketAcl(callback?: (err: AWSError, data: S3.Types.GetBucketAclOutput) => void): Request<S3.Types.GetBucketAclOutput, AWSError>;
  /**
   * Returns the Cross-Origin Resource Sharing (CORS) configuration information set for the bucket.  To use this operation, you must have permission to perform the s3:GetBucketCORS action. By default, the bucket owner has this permission and can grant it to others. To use this API operation against an access point, provide the alias of the access point in place of the bucket name. To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  For more information about CORS, see  Enabling Cross-Origin Resource Sharing. The following operations are related to GetBucketCors:    PutBucketCors     DeleteBucketCors   
   */
  getBucketCors(params: S3.Types.GetBucketCorsRequest, callback?: (err: AWSError, data: S3.Types.GetBucketCorsOutput) => void): Request<S3.Types.GetBucketCorsOutput, AWSError>;
  /**
   * Returns the Cross-Origin Resource Sharing (CORS) configuration information set for the bucket.  To use this operation, you must have permission to perform the s3:GetBucketCORS action. By default, the bucket owner has this permission and can grant it to others. To use this API operation against an access point, provide the alias of the access point in place of the bucket name. To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  For more information about CORS, see  Enabling Cross-Origin Resource Sharing. The following operations are related to GetBucketCors:    PutBucketCors     DeleteBucketCors   
   */
  getBucketCors(callback?: (err: AWSError, data: S3.Types.GetBucketCorsOutput) => void): Request<S3.Types.GetBucketCorsOutput, AWSError>;
  /**
   *  For an updated version of this API, see GetBucketLifecycleConfiguration. If you configured a bucket lifecycle using the filter element, you should see the updated version of this topic. This topic is provided for backward compatibility.  Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see Object Lifecycle Management.  To use this operation, you must have permission to perform the s3:GetLifecycleConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  GetBucketLifecycle has the following special error:   Error code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.   HTTP Status Code: 404 Not Found   SOAP Fault Code Prefix: Client     The following operations are related to GetBucketLifecycle:    GetBucketLifecycleConfiguration     PutBucketLifecycle     DeleteBucketLifecycle   
   */
  getBucketLifecycle(params: S3.Types.GetBucketLifecycleRequest, callback?: (err: AWSError, data: S3.Types.GetBucketLifecycleOutput) => void): Request<S3.Types.GetBucketLifecycleOutput, AWSError>;
  /**
   *  For an updated version of this API, see GetBucketLifecycleConfiguration. If you configured a bucket lifecycle using the filter element, you should see the updated version of this topic. This topic is provided for backward compatibility.  Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see Object Lifecycle Management.  To use this operation, you must have permission to perform the s3:GetLifecycleConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  GetBucketLifecycle has the following special error:   Error code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.   HTTP Status Code: 404 Not Found   SOAP Fault Code Prefix: Client     The following operations are related to GetBucketLifecycle:    GetBucketLifecycleConfiguration     PutBucketLifecycle     DeleteBucketLifecycle   
   */
  getBucketLifecycle(callback?: (err: AWSError, data: S3.Types.GetBucketLifecycleOutput) => void): Request<S3.Types.GetBucketLifecycleOutput, AWSError>;
  /**
   *  Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, or a combination of both. Accordingly, this section describes the latest API. The response describes the new filter element that you can use to specify a filter to select a subset of objects to which the rule applies. If you are using a previous version of the lifecycle configuration, it still works. For the earlier action, see GetBucketLifecycle.  Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see Object Lifecycle Management. To use this operation, you must have permission to perform the s3:GetLifecycleConfiguration action. The bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  GetBucketLifecycleConfiguration has the following special error:   Error code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.   HTTP Status Code: 404 Not Found   SOAP Fault Code Prefix: Client     The following operations are related to GetBucketLifecycleConfiguration:    GetBucketLifecycle     PutBucketLifecycle     DeleteBucketLifecycle   
   */
  getBucketLifecycleConfiguration(params: S3.Types.GetBucketLifecycleConfigurationRequest, callback?: (err: AWSError, data: S3.Types.GetBucketLifecycleConfigurationOutput) => void): Request<S3.Types.GetBucketLifecycleConfigurationOutput, AWSError>;
  /**
   *  Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, or a combination of both. Accordingly, this section describes the latest API. The response describes the new filter element that you can use to specify a filter to select a subset of objects to which the rule applies. If you are using a previous version of the lifecycle configuration, it still works. For the earlier action, see GetBucketLifecycle.  Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see Object Lifecycle Management. To use this operation, you must have permission to perform the s3:GetLifecycleConfiguration action. The bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  GetBucketLifecycleConfiguration has the following special error:   Error code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.   HTTP Status Code: 404 Not Found   SOAP Fault Code Prefix: Client     The following operations are related to GetBucketLifecycleConfiguration:    GetBucketLifecycle     PutBucketLifecycle     DeleteBucketLifecycle   
   */
  getBucketLifecycleConfiguration(callback?: (err: AWSError, data: S3.Types.GetBucketLifecycleConfigurationOutput) => void): Request<S3.Types.GetBucketLifecycleConfigurationOutput, AWSError>;
  /**
   * Returns the Region the bucket resides in. You set the bucket's Region using the LocationConstraint request parameter in a CreateBucket request. For more information, see CreateBucket. To use this API operation against an access point, provide the alias of the access point in place of the bucket name. To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  We recommend that you use HeadBucket to return the Region that a bucket resides in. For backward compatibility, Amazon S3 continues to support GetBucketLocation.  The following operations are related to GetBucketLocation:    GetObject     CreateBucket   
   */
  getBucketLocation(params: S3.Types.GetBucketLocationRequest, callback?: (err: AWSError, data: S3.Types.GetBucketLocationOutput) => void): Request<S3.Types.GetBucketLocationOutput, AWSError>;
  /**
   * Returns the Region the bucket resides in. You set the bucket's Region using the LocationConstraint request parameter in a CreateBucket request. For more information, see CreateBucket. To use this API operation against an access point, provide the alias of the access point in place of the bucket name. To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  We recommend that you use HeadBucket to return the Region that a bucket resides in. For backward compatibility, Amazon S3 continues to support GetBucketLocation.  The following operations are related to GetBucketLocation:    GetObject     CreateBucket   
   */
  getBucketLocation(callback?: (err: AWSError, data: S3.Types.GetBucketLocationOutput) => void): Request<S3.Types.GetBucketLocationOutput, AWSError>;
  /**
   * Returns the protection configuration of a bucket.
   */
  getBucketProtectionConfiguration(params: S3.Types.GetBucketProtectionConfigurationRequest, callback?: (err: AWSError, data: S3.Types.GetBucketProtectionConfigurationOutput) => void): Request<S3.Types.GetBucketProtectionConfigurationOutput, AWSError>;
  /**
   * Returns the protection configuration of a bucket.
   */
  getBucketProtectionConfiguration(callback?: (err: AWSError, data: S3.Types.GetBucketProtectionConfigurationOutput) => void): Request<S3.Types.GetBucketProtectionConfigurationOutput, AWSError>;
  /**
   * Returns the replication configuration of a bucket.   It can take a while to propagate the put or delete a replication configuration to all Amazon S3 systems. Therefore, a get request soon after put or delete can return a wrong result.    For information about replication configuration, see Replication in the Amazon S3 User Guide. This action requires permissions for the s3:GetReplicationConfiguration action. For more information about permissions, see Using Bucket Policies and User Policies. If you include the Filter element in a replication configuration, you must also include the DeleteMarkerReplication and Priority elements. The response also returns those elements. For information about GetBucketReplication errors, see List of replication-related error codes  The following operations are related to GetBucketReplication:    PutBucketReplication     DeleteBucketReplication   
   */
  getBucketReplication(params: S3.Types.GetBucketReplicationRequest, callback?: (err: AWSError, data: S3.Types.GetBucketReplicationOutput) => void): Request<S3.Types.GetBucketReplicationOutput, AWSError>;
  /**
   * Returns the replication configuration of a bucket.   It can take a while to propagate the put or delete a replication configuration to all Amazon S3 systems. Therefore, a get request soon after put or delete can return a wrong result.    For information about replication configuration, see Replication in the Amazon S3 User Guide. This action requires permissions for the s3:GetReplicationConfiguration action. For more information about permissions, see Using Bucket Policies and User Policies. If you include the Filter element in a replication configuration, you must also include the DeleteMarkerReplication and Priority elements. The response also returns those elements. For information about GetBucketReplication errors, see List of replication-related error codes  The following operations are related to GetBucketReplication:    PutBucketReplication     DeleteBucketReplication   
   */
  getBucketReplication(callback?: (err: AWSError, data: S3.Types.GetBucketReplicationOutput) => void): Request<S3.Types.GetBucketReplicationOutput, AWSError>;
  /**
   * Returns the tag set associated with the bucket. To use this operation, you must have permission to perform the s3:GetBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  GetBucketTagging has the following special error:   Error code: NoSuchTagSet    Description: There is no tag set associated with the bucket.     The following operations are related to GetBucketTagging:    PutBucketTagging     DeleteBucketTagging   
   */
  getBucketTagging(params: S3.Types.GetBucketTaggingRequest, callback?: (err: AWSError, data: S3.Types.GetBucketTaggingOutput) => void): Request<S3.Types.GetBucketTaggingOutput, AWSError>;
  /**
   * Returns the tag set associated with the bucket. To use this operation, you must have permission to perform the s3:GetBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  GetBucketTagging has the following special error:   Error code: NoSuchTagSet    Description: There is no tag set associated with the bucket.     The following operations are related to GetBucketTagging:    PutBucketTagging     DeleteBucketTagging   
   */
  getBucketTagging(callback?: (err: AWSError, data: S3.Types.GetBucketTaggingOutput) => void): Request<S3.Types.GetBucketTaggingOutput, AWSError>;
  /**
   * Returns the versioning state of a bucket. To retrieve the versioning state of a bucket, you must be the bucket owner. This implementation also returns the MFA Delete status of the versioning state. If the MFA Delete status is enabled, the bucket owner must use an authentication device to change the versioning state of the bucket. The following operations are related to GetBucketVersioning:    GetObject     PutObject     DeleteObject   
   */
  getBucketVersioning(params: S3.Types.GetBucketVersioningRequest, callback?: (err: AWSError, data: S3.Types.GetBucketVersioningOutput) => void): Request<S3.Types.GetBucketVersioningOutput, AWSError>;
  /**
   * Returns the versioning state of a bucket. To retrieve the versioning state of a bucket, you must be the bucket owner. This implementation also returns the MFA Delete status of the versioning state. If the MFA Delete status is enabled, the bucket owner must use an authentication device to change the versioning state of the bucket. The following operations are related to GetBucketVersioning:    GetObject     PutObject     DeleteObject   
   */
  getBucketVersioning(callback?: (err: AWSError, data: S3.Types.GetBucketVersioningOutput) => void): Request<S3.Types.GetBucketVersioningOutput, AWSError>;
  /**
   * Returns the website configuration for a bucket. To host website on Amazon S3, you can configure a bucket as website by adding a website configuration. For more information about hosting websites, see Hosting Websites on Amazon S3.  This GET action requires the S3:GetBucketWebsite permission. By default, only the bucket owner can read the bucket website configuration. However, bucket owners can allow other users to read the website configuration by writing a bucket policy granting them the S3:GetBucketWebsite permission. The following operations are related to GetBucketWebsite:    DeleteBucketWebsite     PutBucketWebsite   
   */
  getBucketWebsite(params: S3.Types.GetBucketWebsiteRequest, callback?: (err: AWSError, data: S3.Types.GetBucketWebsiteOutput) => void): Request<S3.Types.GetBucketWebsiteOutput, AWSError>;
  /**
   * Returns the website configuration for a bucket. To host website on Amazon S3, you can configure a bucket as website by adding a website configuration. For more information about hosting websites, see Hosting Websites on Amazon S3.  This GET action requires the S3:GetBucketWebsite permission. By default, only the bucket owner can read the bucket website configuration. However, bucket owners can allow other users to read the website configuration by writing a bucket policy granting them the S3:GetBucketWebsite permission. The following operations are related to GetBucketWebsite:    DeleteBucketWebsite     PutBucketWebsite   
   */
  getBucketWebsite(callback?: (err: AWSError, data: S3.Types.GetBucketWebsiteOutput) => void): Request<S3.Types.GetBucketWebsiteOutput, AWSError>;
  /**
   * Retrieves objects from Amazon S3. To use GET, you must have READ access to the object. If you grant READ access to the anonymous user, you can return the object without using an authorization header. An Amazon S3 bucket has no directory hierarchy such as you would find in a typical computer file system. You can, however, create a logical hierarchy by using object key names that imply a folder structure. For example, instead of naming an object sample.jpg, you can name it photos/2006/February/sample.jpg. To get an object from such a logical hierarchy, specify the full key name for the object in the GET operation. For a virtual hosted-style request example, if you have the object photos/2006/February/sample.jpg, specify the resource as /photos/2006/February/sample.jpg. For a path-style request example, if you have the object photos/2006/February/sample.jpg in the bucket named examplebucket, specify the resource as /examplebucket/photos/2006/February/sample.jpg. For more information about request types, see HTTP Host Header Bucket Specification. For more information about returning the ACL of an object, see GetObjectAcl. If the object you are retrieving is stored in the S3 Glacier or S3 Glacier Deep Archive storage class, or S3 Intelligent-Tiering Archive or S3 Intelligent-Tiering Deep Archive tiers, before you can retrieve the object you must first restore a copy using RestoreObject. Otherwise, this action returns an InvalidObjectState error. For information about restoring archived objects, see Restoring Archived Objects. Encryption request headers, like x-amz-server-side-encryption, should not be sent for GET requests if your object uses server-side encryption with KMS keys (SSE-KMS) or server-side encryption with Amazon S3–managed encryption keys (SSE-S3). If your object does use these types of keys, you’ll get an HTTP 400 BadRequest error. If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object, you must use the following headers:   x-amz-server-side-encryption-customer-algorithm   x-amz-server-side-encryption-customer-key   x-amz-server-side-encryption-customer-key-MD5   For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys). Assuming you have the relevant permission to read object tags, the response also returns the x-amz-tagging-count header that provides the count of number of tags associated with the object. You can use GetObjectTagging to retrieve the tag set associated with an object.  Permissions  You need the relevant read object (or version) permission for this operation. For more information, see Specifying Permissions in a Policy. If the object you request does not exist, the error Amazon S3 returns depends on whether you also have the s3:ListBucket permission.   If you have the s3:ListBucket permission on the bucket, Amazon S3 will return an HTTP status code 404 ("no such key") error.   If you don’t have the s3:ListBucket permission, Amazon S3 will return an HTTP status code 403 ("access denied") error.    Versioning  By default, the GET action returns the current version of an object. To return a different version, use the versionId subresource.     If you supply a versionId, you need the s3:GetObjectVersion permission to access a specific version of an object. If you request a specific version, you do not need to have the s3:GetObject permission. If you request the current version without a specific version ID, only s3:GetObject permission is required. s3:GetObjectVersion permission won't be required.   If the current version of the object is a delete marker, Amazon S3 behaves as if the object was deleted and includes x-amz-delete-marker: true in the response.    For more information about versioning, see PutBucketVersioning.   Overriding Response Header Values  There are times when you want to override certain response header values in a GET response. For example, you might override the Content-Disposition response header value in your GET request. You can override values for a set of response headers using the following query parameters. These response header values are sent only on a successful request, that is, when status code 200 OK is returned. The set of headers you can override using these parameters is a subset of the headers that Amazon S3 accepts when you create an object. The response headers that you can override for the GET response are Content-Type, Content-Language, Expires, Cache-Control, Content-Disposition, and Content-Encoding. To override these header values in the GET response, you use the following request parameters.  You must sign the request, either using an Authorization header or a presigned URL, when using these parameters. They cannot be used with an unsigned (anonymous) request.     response-content-type     response-content-language     response-expires     response-cache-control     response-content-disposition     response-content-encoding     Overriding Response Header Values  If both of the If-Match and If-Unmodified-Since headers are present in the request as follows: If-Match condition evaluates to true, and; If-Unmodified-Since condition evaluates to false; then, S3 returns 200 OK and the data requested.  If both of the If-None-Match and If-Modified-Since headers are present in the request as follows: If-None-Match condition evaluates to false, and; If-Modified-Since condition evaluates to true; then, S3 returns 304 Not Modified response code. For more information about conditional requests, see RFC 7232.   The following operations are related to GetObject:    ListBuckets     GetObjectAcl   
   */
  getObject(params: S3.Types.GetObjectRequest, callback?: (err: AWSError, data: S3.Types.GetObjectOutput) => void): Request<S3.Types.GetObjectOutput, AWSError>;
  /**
   * Retrieves objects from Amazon S3. To use GET, you must have READ access to the object. If you grant READ access to the anonymous user, you can return the object without using an authorization header. An Amazon S3 bucket has no directory hierarchy such as you would find in a typical computer file system. You can, however, create a logical hierarchy by using object key names that imply a folder structure. For example, instead of naming an object sample.jpg, you can name it photos/2006/February/sample.jpg. To get an object from such a logical hierarchy, specify the full key name for the object in the GET operation. For a virtual hosted-style request example, if you have the object photos/2006/February/sample.jpg, specify the resource as /photos/2006/February/sample.jpg. For a path-style request example, if you have the object photos/2006/February/sample.jpg in the bucket named examplebucket, specify the resource as /examplebucket/photos/2006/February/sample.jpg. For more information about request types, see HTTP Host Header Bucket Specification. For more information about returning the ACL of an object, see GetObjectAcl. If the object you are retrieving is stored in the S3 Glacier or S3 Glacier Deep Archive storage class, or S3 Intelligent-Tiering Archive or S3 Intelligent-Tiering Deep Archive tiers, before you can retrieve the object you must first restore a copy using RestoreObject. Otherwise, this action returns an InvalidObjectState error. For information about restoring archived objects, see Restoring Archived Objects. Encryption request headers, like x-amz-server-side-encryption, should not be sent for GET requests if your object uses server-side encryption with KMS keys (SSE-KMS) or server-side encryption with Amazon S3–managed encryption keys (SSE-S3). If your object does use these types of keys, you’ll get an HTTP 400 BadRequest error. If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object, you must use the following headers:   x-amz-server-side-encryption-customer-algorithm   x-amz-server-side-encryption-customer-key   x-amz-server-side-encryption-customer-key-MD5   For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys). Assuming you have the relevant permission to read object tags, the response also returns the x-amz-tagging-count header that provides the count of number of tags associated with the object. You can use GetObjectTagging to retrieve the tag set associated with an object.  Permissions  You need the relevant read object (or version) permission for this operation. For more information, see Specifying Permissions in a Policy. If the object you request does not exist, the error Amazon S3 returns depends on whether you also have the s3:ListBucket permission.   If you have the s3:ListBucket permission on the bucket, Amazon S3 will return an HTTP status code 404 ("no such key") error.   If you don’t have the s3:ListBucket permission, Amazon S3 will return an HTTP status code 403 ("access denied") error.    Versioning  By default, the GET action returns the current version of an object. To return a different version, use the versionId subresource.     If you supply a versionId, you need the s3:GetObjectVersion permission to access a specific version of an object. If you request a specific version, you do not need to have the s3:GetObject permission. If you request the current version without a specific version ID, only s3:GetObject permission is required. s3:GetObjectVersion permission won't be required.   If the current version of the object is a delete marker, Amazon S3 behaves as if the object was deleted and includes x-amz-delete-marker: true in the response.    For more information about versioning, see PutBucketVersioning.   Overriding Response Header Values  There are times when you want to override certain response header values in a GET response. For example, you might override the Content-Disposition response header value in your GET request. You can override values for a set of response headers using the following query parameters. These response header values are sent only on a successful request, that is, when status code 200 OK is returned. The set of headers you can override using these parameters is a subset of the headers that Amazon S3 accepts when you create an object. The response headers that you can override for the GET response are Content-Type, Content-Language, Expires, Cache-Control, Content-Disposition, and Content-Encoding. To override these header values in the GET response, you use the following request parameters.  You must sign the request, either using an Authorization header or a presigned URL, when using these parameters. They cannot be used with an unsigned (anonymous) request.     response-content-type     response-content-language     response-expires     response-cache-control     response-content-disposition     response-content-encoding     Overriding Response Header Values  If both of the If-Match and If-Unmodified-Since headers are present in the request as follows: If-Match condition evaluates to true, and; If-Unmodified-Since condition evaluates to false; then, S3 returns 200 OK and the data requested.  If both of the If-None-Match and If-Modified-Since headers are present in the request as follows: If-None-Match condition evaluates to false, and; If-Modified-Since condition evaluates to true; then, S3 returns 304 Not Modified response code. For more information about conditional requests, see RFC 7232.   The following operations are related to GetObject:    ListBuckets     GetObjectAcl   
   */
  getObject(callback?: (err: AWSError, data: S3.Types.GetObjectOutput) => void): Request<S3.Types.GetObjectOutput, AWSError>;
  /**
   * Returns the access control list (ACL) of an object. To use this operation, you must have s3:GetObjectAcl permissions or READ_ACP access to the object. For more information, see Mapping of ACL permissions and access policy permissions in the Amazon S3 User Guide  This action is not supported by Amazon S3 on Outposts. By default, GET returns ACL information about the current version of an object. To return ACL information about a different version, use the versionId subresource.  If your bucket uses the bucket owner enforced setting for S3 Object Ownership, requests to read ACLs are still supported and return the bucket-owner-full-control ACL with the owner being the account that created the bucket. For more information, see  Controlling object ownership and disabling ACLs in the Amazon S3 User Guide.  The following operations are related to GetObjectAcl:    GetObject     GetObjectAttributes     DeleteObject     PutObject   
   */
  getObjectAcl(params: S3.Types.GetObjectAclRequest, callback?: (err: AWSError, data: S3.Types.GetObjectAclOutput) => void): Request<S3.Types.GetObjectAclOutput, AWSError>;
  /**
   * Returns the access control list (ACL) of an object. To use this operation, you must have s3:GetObjectAcl permissions or READ_ACP access to the object. For more information, see Mapping of ACL permissions and access policy permissions in the Amazon S3 User Guide  This action is not supported by Amazon S3 on Outposts. By default, GET returns ACL information about the current version of an object. To return ACL information about a different version, use the versionId subresource.  If your bucket uses the bucket owner enforced setting for S3 Object Ownership, requests to read ACLs are still supported and return the bucket-owner-full-control ACL with the owner being the account that created the bucket. For more information, see  Controlling object ownership and disabling ACLs in the Amazon S3 User Guide.  The following operations are related to GetObjectAcl:    GetObject     GetObjectAttributes     DeleteObject     PutObject   
   */
  getObjectAcl(callback?: (err: AWSError, data: S3.Types.GetObjectAclOutput) => void): Request<S3.Types.GetObjectAclOutput, AWSError>;
  /**
   * Gets an object's current legal hold status. For more information, see Locking Objects. This action is not supported by Amazon S3 on Outposts. The following action is related to GetObjectLegalHold:    GetObjectAttributes   
   */
  getObjectLegalHold(params: S3.Types.GetObjectLegalHoldRequest, callback?: (err: AWSError, data: S3.Types.GetObjectLegalHoldOutput) => void): Request<S3.Types.GetObjectLegalHoldOutput, AWSError>;
  /**
   * Gets an object's current legal hold status. For more information, see Locking Objects. This action is not supported by Amazon S3 on Outposts. The following action is related to GetObjectLegalHold:    GetObjectAttributes   
   */
  getObjectLegalHold(callback?: (err: AWSError, data: S3.Types.GetObjectLegalHoldOutput) => void): Request<S3.Types.GetObjectLegalHoldOutput, AWSError>;
  /**
   * Gets the Object Lock configuration for a bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see Locking Objects. The following action is related to GetObjectLockConfiguration:    GetObjectAttributes   
   */
  getObjectLockConfiguration(params: S3.Types.GetObjectLockConfigurationRequest, callback?: (err: AWSError, data: S3.Types.GetObjectLockConfigurationOutput) => void): Request<S3.Types.GetObjectLockConfigurationOutput, AWSError>;
  /**
   * Gets the Object Lock configuration for a bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see Locking Objects. The following action is related to GetObjectLockConfiguration:    GetObjectAttributes   
   */
  getObjectLockConfiguration(callback?: (err: AWSError, data: S3.Types.GetObjectLockConfigurationOutput) => void): Request<S3.Types.GetObjectLockConfigurationOutput, AWSError>;
  /**
   * Retrieves an object's retention settings. For more information, see Locking Objects. This action is not supported by Amazon S3 on Outposts. The following action is related to GetObjectRetention:    GetObjectAttributes   
   */
  getObjectRetention(params: S3.Types.GetObjectRetentionRequest, callback?: (err: AWSError, data: S3.Types.GetObjectRetentionOutput) => void): Request<S3.Types.GetObjectRetentionOutput, AWSError>;
  /**
   * Retrieves an object's retention settings. For more information, see Locking Objects. This action is not supported by Amazon S3 on Outposts. The following action is related to GetObjectRetention:    GetObjectAttributes   
   */
  getObjectRetention(callback?: (err: AWSError, data: S3.Types.GetObjectRetentionOutput) => void): Request<S3.Types.GetObjectRetentionOutput, AWSError>;
  /**
   * Returns the tag-set of an object. You send the GET request against the tagging subresource associated with the object. To use this operation, you must have permission to perform the s3:GetObjectTagging action. By default, the GET action returns information about current version of an object. For a versioned bucket, you can have multiple versions of an object in your bucket. To retrieve tags of any other version, use the versionId query parameter. You also need permission for the s3:GetObjectVersionTagging action.  By default, the bucket owner has this permission and can grant this permission to others.  For information about the Amazon S3 object tagging feature, see Object Tagging. The following actions are related to GetObjectTagging:    DeleteObjectTagging     GetObjectAttributes     PutObjectTagging   
   */
  getObjectTagging(params: S3.Types.GetObjectTaggingRequest, callback?: (err: AWSError, data: S3.Types.GetObjectTaggingOutput) => void): Request<S3.Types.GetObjectTaggingOutput, AWSError>;
  /**
   * Returns the tag-set of an object. You send the GET request against the tagging subresource associated with the object. To use this operation, you must have permission to perform the s3:GetObjectTagging action. By default, the GET action returns information about current version of an object. For a versioned bucket, you can have multiple versions of an object in your bucket. To retrieve tags of any other version, use the versionId query parameter. You also need permission for the s3:GetObjectVersionTagging action.  By default, the bucket owner has this permission and can grant this permission to others.  For information about the Amazon S3 object tagging feature, see Object Tagging. The following actions are related to GetObjectTagging:    DeleteObjectTagging     GetObjectAttributes     PutObjectTagging   
   */
  getObjectTagging(callback?: (err: AWSError, data: S3.Types.GetObjectTaggingOutput) => void): Request<S3.Types.GetObjectTaggingOutput, AWSError>;
  /**
   * Retrieves the PublicAccessBlock configuration for an Amazon S3 bucket. To use this operation, you must have the s3:GetBucketPublicAccessBlock permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy.  When Amazon S3 evaluates the PublicAccessBlock configuration for a bucket or an object, it checks the PublicAccessBlock configuration for both the bucket (or the bucket that contains the object) and the bucket owner's account. If the PublicAccessBlock settings are different between the bucket and the account, Amazon S3 uses the most restrictive combination of the bucket-level and account-level settings.  For more information about when Amazon S3 considers a bucket or an object public, see The Meaning of "Public". The following operations are related to GetPublicAccessBlock:    Using Amazon S3 Block Public Access     PutPublicAccessBlock     GetPublicAccessBlock     DeletePublicAccessBlock   
   */
  getPublicAccessBlock(params: S3.Types.GetPublicAccessBlockRequest, callback?: (err: AWSError, data: S3.Types.GetPublicAccessBlockOutput) => void): Request<S3.Types.GetPublicAccessBlockOutput, AWSError>;
  /**
   * Retrieves the PublicAccessBlock configuration for an Amazon S3 bucket. To use this operation, you must have the s3:GetBucketPublicAccessBlock permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy.  When Amazon S3 evaluates the PublicAccessBlock configuration for a bucket or an object, it checks the PublicAccessBlock configuration for both the bucket (or the bucket that contains the object) and the bucket owner's account. If the PublicAccessBlock settings are different between the bucket and the account, Amazon S3 uses the most restrictive combination of the bucket-level and account-level settings.  For more information about when Amazon S3 considers a bucket or an object public, see The Meaning of "Public". The following operations are related to GetPublicAccessBlock:    Using Amazon S3 Block Public Access     PutPublicAccessBlock     GetPublicAccessBlock     DeletePublicAccessBlock   
   */
  getPublicAccessBlock(callback?: (err: AWSError, data: S3.Types.GetPublicAccessBlockOutput) => void): Request<S3.Types.GetPublicAccessBlockOutput, AWSError>;
  /**
   * This action is useful to determine if a bucket exists and you have permission to access it. The action returns a 200 OK if the bucket exists and you have permission to access it. If the bucket does not exist or you do not have permission to access it, the HEAD request returns a generic 400 Bad Request, 403 Forbidden or 404 Not Found code. A message body is not included, so you cannot determine the exception beyond these error codes. To use this operation, you must have permissions to perform the s3:ListBucket action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. To use this API operation against an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using the Amazon Web Services SDKs, you provide the ARN in place of the bucket name. For more information, see Using access points. To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.
   */
  headBucket(params: S3.Types.HeadBucketRequest, callback?: (err: AWSError, data: S3.Types.HeadBucketOutput) => void): Request<S3.Types.HeadBucketOutput, AWSError>;
  /**
   * This action is useful to determine if a bucket exists and you have permission to access it. The action returns a 200 OK if the bucket exists and you have permission to access it. If the bucket does not exist or you do not have permission to access it, the HEAD request returns a generic 400 Bad Request, 403 Forbidden or 404 Not Found code. A message body is not included, so you cannot determine the exception beyond these error codes. To use this operation, you must have permissions to perform the s3:ListBucket action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. To use this API operation against an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using the Amazon Web Services SDKs, you provide the ARN in place of the bucket name. For more information, see Using access points. To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.
   */
  headBucket(callback?: (err: AWSError, data: S3.Types.HeadBucketOutput) => void): Request<S3.Types.HeadBucketOutput, AWSError>;
  /**
   * The HEAD action retrieves metadata from an object without returning the object itself. This action is useful if you're only interested in an object's metadata. To use HEAD, you must have READ access to the object. A HEAD request has the same options as a GET action on an object. The response is identical to the GET response except that there is no response body. Because of this, if the HEAD request generates an error, it returns a generic 400 Bad Request, 403 Forbidden or 404 Not Found code. It is not possible to retrieve the exact exception beyond these error codes. If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the metadata from the object, you must use the following headers:   x-amz-server-side-encryption-customer-algorithm   x-amz-server-side-encryption-customer-key   x-amz-server-side-encryption-customer-key-MD5   For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys).    Encryption request headers, like x-amz-server-side-encryption, should not be sent for GET requests if your object uses server-side encryption with KMS keys (SSE-KMS) or server-side encryption with Amazon S3–managed encryption keys (SSE-S3). If your object does use these types of keys, you’ll get an HTTP 400 BadRequest error.    The last modified property in this case is the creation date of the object.    Request headers are limited to 8 KB in size. For more information, see Common Request Headers. Consider the following when using request headers:    Consideration 1 – If both of the If-Match and If-Unmodified-Since headers are present in the request as follows:    If-Match condition evaluates to true, and;    If-Unmodified-Since condition evaluates to false;   Then Amazon S3 returns 200 OK and the data requested.    Consideration 2 – If both of the If-None-Match and If-Modified-Since headers are present in the request as follows:    If-None-Match condition evaluates to false, and;    If-Modified-Since condition evaluates to true;   Then Amazon S3 returns the 304 Not Modified response code.   For more information about conditional requests, see RFC 7232.  Permissions  You need the relevant read object (or version) permission for this operation. For more information, see Actions, resources, and condition keys for Amazon S3. If the object you request does not exist, the error Amazon S3 returns depends on whether you also have the s3:ListBucket permission.   If you have the s3:ListBucket permission on the bucket, Amazon S3 returns an HTTP status code 404 ("no such key") error.   If you don’t have the s3:ListBucket permission, Amazon S3 returns an HTTP status code 403 ("access denied") error.     The following actions are related to HeadObject:    GetObject     GetObjectAttributes   
   */
  headObject(params: S3.Types.HeadObjectRequest, callback?: (err: AWSError, data: S3.Types.HeadObjectOutput) => void): Request<S3.Types.HeadObjectOutput, AWSError>;
  /**
   * The HEAD action retrieves metadata from an object without returning the object itself. This action is useful if you're only interested in an object's metadata. To use HEAD, you must have READ access to the object. A HEAD request has the same options as a GET action on an object. The response is identical to the GET response except that there is no response body. Because of this, if the HEAD request generates an error, it returns a generic 400 Bad Request, 403 Forbidden or 404 Not Found code. It is not possible to retrieve the exact exception beyond these error codes. If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the metadata from the object, you must use the following headers:   x-amz-server-side-encryption-customer-algorithm   x-amz-server-side-encryption-customer-key   x-amz-server-side-encryption-customer-key-MD5   For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys).    Encryption request headers, like x-amz-server-side-encryption, should not be sent for GET requests if your object uses server-side encryption with KMS keys (SSE-KMS) or server-side encryption with Amazon S3–managed encryption keys (SSE-S3). If your object does use these types of keys, you’ll get an HTTP 400 BadRequest error.    The last modified property in this case is the creation date of the object.    Request headers are limited to 8 KB in size. For more information, see Common Request Headers. Consider the following when using request headers:    Consideration 1 – If both of the If-Match and If-Unmodified-Since headers are present in the request as follows:    If-Match condition evaluates to true, and;    If-Unmodified-Since condition evaluates to false;   Then Amazon S3 returns 200 OK and the data requested.    Consideration 2 – If both of the If-None-Match and If-Modified-Since headers are present in the request as follows:    If-None-Match condition evaluates to false, and;    If-Modified-Since condition evaluates to true;   Then Amazon S3 returns the 304 Not Modified response code.   For more information about conditional requests, see RFC 7232.  Permissions  You need the relevant read object (or version) permission for this operation. For more information, see Actions, resources, and condition keys for Amazon S3. If the object you request does not exist, the error Amazon S3 returns depends on whether you also have the s3:ListBucket permission.   If you have the s3:ListBucket permission on the bucket, Amazon S3 returns an HTTP status code 404 ("no such key") error.   If you don’t have the s3:ListBucket permission, Amazon S3 returns an HTTP status code 403 ("access denied") error.     The following actions are related to HeadObject:    GetObject     GetObjectAttributes   
   */
  headObject(callback?: (err: AWSError, data: S3.Types.HeadObjectOutput) => void): Request<S3.Types.HeadObjectOutput, AWSError>;
  /**
   * Returns a list of all buckets owned by the authenticated sender of the request. To use this operation, you must have the s3:ListAllMyBuckets permission.  For information about Amazon S3 buckets, see Creating, configuring, and working with Amazon S3 buckets.
   */
  listBuckets(params: S3.Types.ListBucketsInput, callback?: (err: AWSError, data: S3.Types.ListBucketsOutput) => void): Request<S3.Types.ListBucketsOutput, AWSError>;
  /**
   * Returns a list of all buckets owned by the authenticated sender of the request. To use this operation, you must have the s3:ListAllMyBuckets permission.  For information about Amazon S3 buckets, see Creating, configuring, and working with Amazon S3 buckets.
   */
  listBuckets(callback?: (err: AWSError, data: S3.Types.ListBucketsOutput) => void): Request<S3.Types.ListBucketsOutput, AWSError>;
  /**
   * Returns a list of all buckets owned by the authenticated sender of the request, along with the LocationConstraint describing the region that the bucket resides in and the bucket's storage tier.
   */
  listBucketsExtended(params: S3.Types.ListBucketsExtendedInput, callback?: (err: AWSError, data: S3.Types.ListBucketsExtendedOutput) => void): Request<S3.Types.ListBucketsExtendedOutput, AWSError>;
  /**
   * Returns a list of all buckets owned by the authenticated sender of the request, along with the LocationConstraint describing the region that the bucket resides in and the bucket's storage tier.
   */
  listBucketsExtended(callback?: (err: AWSError, data: S3.Types.ListBucketsExtendedOutput) => void): Request<S3.Types.ListBucketsExtendedOutput, AWSError>;
  /**
   * Returns a list of legal holds on an object
   */
  listLegalHolds(params: S3.Types.ListLegalHoldsRequest, callback?: (err: AWSError, data: S3.Types.ListLegalHoldsOutput) => void): Request<S3.Types.ListLegalHoldsOutput, AWSError>;
  /**
   * Returns a list of legal holds on an object
   */
  listLegalHolds(callback?: (err: AWSError, data: S3.Types.ListLegalHoldsOutput) => void): Request<S3.Types.ListLegalHoldsOutput, AWSError>;
  /**
   * This action lists in-progress multipart uploads. An in-progress multipart upload is a multipart upload that has been initiated using the Initiate Multipart Upload request, but has not yet been completed or aborted. This action returns at most 1,000 multipart uploads in the response. 1,000 multipart uploads is the maximum number of uploads a response can include, which is also the default value. You can further limit the number of uploads in a response by specifying the max-uploads parameter in the response. If additional multipart uploads satisfy the list criteria, the response will contain an IsTruncated element with the value true. To list the additional multipart uploads, use the key-marker and upload-id-marker request parameters. In the response, the uploads are sorted by key. If your application has initiated more than one multipart upload using the same object key, then uploads in the response are first sorted by key. Additionally, uploads are sorted in ascending order within each key by the upload initiation time. For more information on multipart uploads, see Uploading Objects Using Multipart Upload. For information on permissions required to use the multipart upload API, see Multipart Upload and Permissions. The following operations are related to ListMultipartUploads:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     ListParts     AbortMultipartUpload   
   */
  listMultipartUploads(params: S3.Types.ListMultipartUploadsRequest, callback?: (err: AWSError, data: S3.Types.ListMultipartUploadsOutput) => void): Request<S3.Types.ListMultipartUploadsOutput, AWSError>;
  /**
   * This action lists in-progress multipart uploads. An in-progress multipart upload is a multipart upload that has been initiated using the Initiate Multipart Upload request, but has not yet been completed or aborted. This action returns at most 1,000 multipart uploads in the response. 1,000 multipart uploads is the maximum number of uploads a response can include, which is also the default value. You can further limit the number of uploads in a response by specifying the max-uploads parameter in the response. If additional multipart uploads satisfy the list criteria, the response will contain an IsTruncated element with the value true. To list the additional multipart uploads, use the key-marker and upload-id-marker request parameters. In the response, the uploads are sorted by key. If your application has initiated more than one multipart upload using the same object key, then uploads in the response are first sorted by key. Additionally, uploads are sorted in ascending order within each key by the upload initiation time. For more information on multipart uploads, see Uploading Objects Using Multipart Upload. For information on permissions required to use the multipart upload API, see Multipart Upload and Permissions. The following operations are related to ListMultipartUploads:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     ListParts     AbortMultipartUpload   
   */
  listMultipartUploads(callback?: (err: AWSError, data: S3.Types.ListMultipartUploadsOutput) => void): Request<S3.Types.ListMultipartUploadsOutput, AWSError>;
  /**
   * Returns metadata about all versions of the objects in a bucket. You can also use request parameters as selection criteria to return metadata about a subset of all the object versions.   To use this operation, you must have permissions to perform the s3:ListBucketVersions action. Be aware of the name difference.     A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately.  To use this operation, you must have READ access to the bucket. This action is not supported by Amazon S3 on Outposts. The following operations are related to ListObjectVersions:    ListObjectsV2     GetObject     PutObject     DeleteObject   
   */
  listObjectVersions(params: S3.Types.ListObjectVersionsRequest, callback?: (err: AWSError, data: S3.Types.ListObjectVersionsOutput) => void): Request<S3.Types.ListObjectVersionsOutput, AWSError>;
  /**
   * Returns metadata about all versions of the objects in a bucket. You can also use request parameters as selection criteria to return metadata about a subset of all the object versions.   To use this operation, you must have permissions to perform the s3:ListBucketVersions action. Be aware of the name difference.     A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately.  To use this operation, you must have READ access to the bucket. This action is not supported by Amazon S3 on Outposts. The following operations are related to ListObjectVersions:    ListObjectsV2     GetObject     PutObject     DeleteObject   
   */
  listObjectVersions(callback?: (err: AWSError, data: S3.Types.ListObjectVersionsOutput) => void): Request<S3.Types.ListObjectVersionsOutput, AWSError>;
  /**
   * Returns some or all (up to 1,000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Be sure to design your application to parse the contents of the response and handle it appropriately.  This action has been revised. We recommend that you use the newer version, ListObjectsV2, when developing applications. For backward compatibility, Amazon S3 continues to support ListObjects.  The following operations are related to ListObjects:    ListObjectsV2     GetObject     PutObject     CreateBucket     ListBuckets   
   */
  listObjects(params: S3.Types.ListObjectsRequest, callback?: (err: AWSError, data: S3.Types.ListObjectsOutput) => void): Request<S3.Types.ListObjectsOutput, AWSError>;
  /**
   * Returns some or all (up to 1,000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Be sure to design your application to parse the contents of the response and handle it appropriately.  This action has been revised. We recommend that you use the newer version, ListObjectsV2, when developing applications. For backward compatibility, Amazon S3 continues to support ListObjects.  The following operations are related to ListObjects:    ListObjectsV2     GetObject     PutObject     CreateBucket     ListBuckets   
   */
  listObjects(callback?: (err: AWSError, data: S3.Types.ListObjectsOutput) => void): Request<S3.Types.ListObjectsOutput, AWSError>;
  /**
   * Returns some or all (up to 1,000) of the objects in a bucket with each request. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately. Objects are returned sorted in an ascending order of the respective key names in the list. For more information about listing objects, see Listing object keys programmatically  To use this operation, you must have READ access to the bucket. To use this action in an Identity and Access Management (IAM) policy, you must have permissions to perform the s3:ListBucket action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  This section describes the latest revision of this action. We recommend that you use this revised API for application development. For backward compatibility, Amazon S3 continues to support the prior version of this API, ListObjects.  To get a list of your buckets, see ListBuckets. The following operations are related to ListObjectsV2:    GetObject     PutObject     CreateBucket   
   */
  listObjectsV2(params: S3.Types.ListObjectsV2Request, callback?: (err: AWSError, data: S3.Types.ListObjectsV2Output) => void): Request<S3.Types.ListObjectsV2Output, AWSError>;
  /**
   * Returns some or all (up to 1,000) of the objects in a bucket with each request. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately. Objects are returned sorted in an ascending order of the respective key names in the list. For more information about listing objects, see Listing object keys programmatically  To use this operation, you must have READ access to the bucket. To use this action in an Identity and Access Management (IAM) policy, you must have permissions to perform the s3:ListBucket action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  This section describes the latest revision of this action. We recommend that you use this revised API for application development. For backward compatibility, Amazon S3 continues to support the prior version of this API, ListObjects.  To get a list of your buckets, see ListBuckets. The following operations are related to ListObjectsV2:    GetObject     PutObject     CreateBucket   
   */
  listObjectsV2(callback?: (err: AWSError, data: S3.Types.ListObjectsV2Output) => void): Request<S3.Types.ListObjectsV2Output, AWSError>;
  /**
   * Lists the parts that have been uploaded for a specific multipart upload. This operation must include the upload ID, which you obtain by sending the initiate multipart upload request (see CreateMultipartUpload). This request returns a maximum of 1,000 uploaded parts. The default number of parts returned is 1,000 parts. You can restrict the number of parts returned by specifying the max-parts request parameter. If your multipart upload consists of more than 1,000 parts, the response returns an IsTruncated field with the value of true, and a NextPartNumberMarker element. In subsequent ListParts requests you can include the part-number-marker query string parameter and set its value to the NextPartNumberMarker field value from the previous response. If the upload was created using a checksum algorithm, you will need to have permission to the kms:Decrypt action for the request to succeed.  For more information on multipart uploads, see Uploading Objects Using Multipart Upload. For information on permissions required to use the multipart upload API, see Multipart Upload and Permissions. The following operations are related to ListParts:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     AbortMultipartUpload     GetObjectAttributes     ListMultipartUploads   
   */
  listParts(params: S3.Types.ListPartsRequest, callback?: (err: AWSError, data: S3.Types.ListPartsOutput) => void): Request<S3.Types.ListPartsOutput, AWSError>;
  /**
   * Lists the parts that have been uploaded for a specific multipart upload. This operation must include the upload ID, which you obtain by sending the initiate multipart upload request (see CreateMultipartUpload). This request returns a maximum of 1,000 uploaded parts. The default number of parts returned is 1,000 parts. You can restrict the number of parts returned by specifying the max-parts request parameter. If your multipart upload consists of more than 1,000 parts, the response returns an IsTruncated field with the value of true, and a NextPartNumberMarker element. In subsequent ListParts requests you can include the part-number-marker query string parameter and set its value to the NextPartNumberMarker field value from the previous response. If the upload was created using a checksum algorithm, you will need to have permission to the kms:Decrypt action for the request to succeed.  For more information on multipart uploads, see Uploading Objects Using Multipart Upload. For information on permissions required to use the multipart upload API, see Multipart Upload and Permissions. The following operations are related to ListParts:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     AbortMultipartUpload     GetObjectAttributes     ListMultipartUploads   
   */
  listParts(callback?: (err: AWSError, data: S3.Types.ListPartsOutput) => void): Request<S3.Types.ListPartsOutput, AWSError>;
  /**
   * Sets the permissions on an existing bucket using access control lists (ACL). For more information, see Using ACLs. To set the ACL of a bucket, you must have WRITE_ACP permission. You can use one of the following two ways to set a bucket's permissions:   Specify the ACL in the request body   Specify permissions using request headers    You cannot specify access permission using both the body and the request headers.  Depending on your application needs, you may choose to set the ACL on a bucket using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, then you can continue to use that approach.  If your bucket uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. You must use policies to grant access to your bucket and the objects in it. Requests to set ACLs or update ACLs fail and return the AccessControlListNotSupported error code. Requests to read ACLs are still supported. For more information, see Controlling object ownership in the Amazon S3 User Guide.   Permissions  You can set access permissions using one of the following methods:   Specify a canned ACL with the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of x-amz-acl. If you use this header, you cannot use other access control-specific headers in your request. For more information, see Canned ACL.   Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. When using these headers, you specify explicit access permissions and grantees (Amazon Web Services accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use the x-amz-acl header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. You specify each grantee as a type=value pair, where the type is one of the following:    id – if the value specified is the canonical user ID of an Amazon Web Services account    uri – if you are granting permissions to a predefined group    emailAddress – if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-write header grants create, overwrite, and delete objects permission to LogDelivery group predefined by Amazon S3 and two Amazon Web Services accounts identified by their email addresses.  x-amz-grant-write: uri="http://acs.amazonaws.com/groups/s3/LogDelivery", id="111122223333", id="555566667777"     You can use either a canned ACL or specify access permissions explicitly. You cannot do both.  Grantee Values  You can specify the person (grantee) to whom you're assigning access rights (using request elements) in the following ways:   By the person's ID:  &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"&gt;&lt;ID&gt;&lt;&gt;ID&lt;&gt;&lt;/ID&gt;&lt;DisplayName&gt;&lt;&gt;GranteesEmail&lt;&gt;&lt;/DisplayName&gt; &lt;/Grantee&gt;  DisplayName is optional and ignored in the request   By URI:  &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"&gt;&lt;URI&gt;&lt;&gt;http://acs.amazonaws.com/groups/global/AuthenticatedUsers&lt;&gt;&lt;/URI&gt;&lt;/Grantee&gt;    By Email address:  &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"&gt;&lt;EmailAddress&gt;&lt;&gt;Grantees@email.com&lt;&gt;&lt;/EmailAddress&gt;&amp;&lt;/Grantee&gt;  The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser.   Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.      The following operations are related to PutBucketAcl:    CreateBucket     DeleteBucket     GetObjectAcl   
   */
  putBucketAcl(params: S3.Types.PutBucketAclRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the permissions on an existing bucket using access control lists (ACL). For more information, see Using ACLs. To set the ACL of a bucket, you must have WRITE_ACP permission. You can use one of the following two ways to set a bucket's permissions:   Specify the ACL in the request body   Specify permissions using request headers    You cannot specify access permission using both the body and the request headers.  Depending on your application needs, you may choose to set the ACL on a bucket using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, then you can continue to use that approach.  If your bucket uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. You must use policies to grant access to your bucket and the objects in it. Requests to set ACLs or update ACLs fail and return the AccessControlListNotSupported error code. Requests to read ACLs are still supported. For more information, see Controlling object ownership in the Amazon S3 User Guide.   Permissions  You can set access permissions using one of the following methods:   Specify a canned ACL with the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of x-amz-acl. If you use this header, you cannot use other access control-specific headers in your request. For more information, see Canned ACL.   Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. When using these headers, you specify explicit access permissions and grantees (Amazon Web Services accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use the x-amz-acl header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. You specify each grantee as a type=value pair, where the type is one of the following:    id – if the value specified is the canonical user ID of an Amazon Web Services account    uri – if you are granting permissions to a predefined group    emailAddress – if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-write header grants create, overwrite, and delete objects permission to LogDelivery group predefined by Amazon S3 and two Amazon Web Services accounts identified by their email addresses.  x-amz-grant-write: uri="http://acs.amazonaws.com/groups/s3/LogDelivery", id="111122223333", id="555566667777"     You can use either a canned ACL or specify access permissions explicitly. You cannot do both.  Grantee Values  You can specify the person (grantee) to whom you're assigning access rights (using request elements) in the following ways:   By the person's ID:  &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"&gt;&lt;ID&gt;&lt;&gt;ID&lt;&gt;&lt;/ID&gt;&lt;DisplayName&gt;&lt;&gt;GranteesEmail&lt;&gt;&lt;/DisplayName&gt; &lt;/Grantee&gt;  DisplayName is optional and ignored in the request   By URI:  &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"&gt;&lt;URI&gt;&lt;&gt;http://acs.amazonaws.com/groups/global/AuthenticatedUsers&lt;&gt;&lt;/URI&gt;&lt;/Grantee&gt;    By Email address:  &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"&gt;&lt;EmailAddress&gt;&lt;&gt;Grantees@email.com&lt;&gt;&lt;/EmailAddress&gt;&amp;&lt;/Grantee&gt;  The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser.   Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.      The following operations are related to PutBucketAcl:    CreateBucket     DeleteBucket     GetObjectAcl   
   */
  putBucketAcl(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the cors configuration for your bucket. If the configuration exists, Amazon S3 replaces it. To use this operation, you must be allowed to perform the s3:PutBucketCORS action. By default, the bucket owner has this permission and can grant it to others. You set this configuration on a bucket so that the bucket can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your Amazon S3 bucket at my.example.bucket.com by using the browser's XMLHttpRequest capability. To enable cross-origin resource sharing (CORS) on a bucket, you add the cors subresource to the bucket. The cors subresource is an XML document in which you configure rules that identify origins and the HTTP methods that can be executed on your bucket. The document is limited to 64 KB in size.  When Amazon S3 receives a cross-origin request (or a pre-flight OPTIONS request) against a bucket, it evaluates the cors configuration on the bucket and uses the first CORSRule rule that matches the incoming browser request to enable a cross-origin request. For a rule to match, the following conditions must be met:   The request's Origin header must match AllowedOrigin elements.   The request method (for example, GET, PUT, HEAD, and so on) or the Access-Control-Request-Method header in case of a pre-flight OPTIONS request must be one of the AllowedMethod elements.    Every header specified in the Access-Control-Request-Headers request header of a pre-flight request must match an AllowedHeader element.     For more information about CORS, go to Enabling Cross-Origin Resource Sharing in the Amazon S3 User Guide. The following operations are related to PutBucketCors:    GetBucketCors     DeleteBucketCors     RESTOPTIONSobject   
   */
  putBucketCors(params: S3.Types.PutBucketCorsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the cors configuration for your bucket. If the configuration exists, Amazon S3 replaces it. To use this operation, you must be allowed to perform the s3:PutBucketCORS action. By default, the bucket owner has this permission and can grant it to others. You set this configuration on a bucket so that the bucket can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your Amazon S3 bucket at my.example.bucket.com by using the browser's XMLHttpRequest capability. To enable cross-origin resource sharing (CORS) on a bucket, you add the cors subresource to the bucket. The cors subresource is an XML document in which you configure rules that identify origins and the HTTP methods that can be executed on your bucket. The document is limited to 64 KB in size.  When Amazon S3 receives a cross-origin request (or a pre-flight OPTIONS request) against a bucket, it evaluates the cors configuration on the bucket and uses the first CORSRule rule that matches the incoming browser request to enable a cross-origin request. For a rule to match, the following conditions must be met:   The request's Origin header must match AllowedOrigin elements.   The request method (for example, GET, PUT, HEAD, and so on) or the Access-Control-Request-Method header in case of a pre-flight OPTIONS request must be one of the AllowedMethod elements.    Every header specified in the Access-Control-Request-Headers request header of a pre-flight request must match an AllowedHeader element.     For more information about CORS, go to Enabling Cross-Origin Resource Sharing in the Amazon S3 User Guide. The following operations are related to PutBucketCors:    GetBucketCors     DeleteBucketCors     RESTOPTIONSobject   
   */
  putBucketCors(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the protection configuration of an existing bucket.
   */
  putBucketProtectionConfiguration(params: S3.Types.PutBucketProtectionConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the protection configuration of an existing bucket.
   */
  putBucketProtectionConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  For an updated version of this API, see PutBucketLifecycleConfiguration. This version has been deprecated. Existing lifecycle configurations will work. For new lifecycle configurations, use the updated API.   Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration. For information about lifecycle configuration, see Object Lifecycle Management in the Amazon S3 User Guide.  By default, all Amazon S3 resources, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration) are private. Only the resource owner, the Amazon Web Services account that created the resource, can access it. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, users must get the s3:PutLifecycleConfiguration permission. You can also explicitly deny permissions. Explicit denial also supersedes any other permissions. If you want to prevent users or accounts from removing or deleting objects from your bucket, you must deny them permissions for the following actions:     s3:DeleteObject     s3:DeleteObjectVersion     s3:PutLifecycleConfiguration    For more information about permissions, see Managing Access Permissions to your Amazon S3 Resources in the Amazon S3 User Guide. For more examples of transitioning objects to storage classes such as STANDARD_IA or ONEZONE_IA, see Examples of Lifecycle Configuration. The following operations are related to PutBucketLifecycle:    GetBucketLifecycle(Deprecated)    GetBucketLifecycleConfiguration     RestoreObject    By default, a resource owner—in this case, a bucket owner, which is the Amazon Web Services account that created the bucket—can perform any of the operations. A resource owner can also grant others permission to perform the operation. For more information, see the following topics in the Amazon S3 User Guide:     Specifying Permissions in a Policy     Managing Access Permissions to your Amazon S3 Resources     
   */
  putBucketLifecycle(params: S3.Types.PutBucketLifecycleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  For an updated version of this API, see PutBucketLifecycleConfiguration. This version has been deprecated. Existing lifecycle configurations will work. For new lifecycle configurations, use the updated API.   Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration. For information about lifecycle configuration, see Object Lifecycle Management in the Amazon S3 User Guide.  By default, all Amazon S3 resources, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration) are private. Only the resource owner, the Amazon Web Services account that created the resource, can access it. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, users must get the s3:PutLifecycleConfiguration permission. You can also explicitly deny permissions. Explicit denial also supersedes any other permissions. If you want to prevent users or accounts from removing or deleting objects from your bucket, you must deny them permissions for the following actions:     s3:DeleteObject     s3:DeleteObjectVersion     s3:PutLifecycleConfiguration    For more information about permissions, see Managing Access Permissions to your Amazon S3 Resources in the Amazon S3 User Guide. For more examples of transitioning objects to storage classes such as STANDARD_IA or ONEZONE_IA, see Examples of Lifecycle Configuration. The following operations are related to PutBucketLifecycle:    GetBucketLifecycle(Deprecated)    GetBucketLifecycleConfiguration     RestoreObject    By default, a resource owner—in this case, a bucket owner, which is the Amazon Web Services account that created the bucket—can perform any of the operations. A resource owner can also grant others permission to perform the operation. For more information, see the following topics in the Amazon S3 User Guide:     Specifying Permissions in a Policy     Managing Access Permissions to your Amazon S3 Resources     
   */
  putBucketLifecycle(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration. Keep in mind that this will overwrite an existing lifecycle configuration, so if you want to retain any configuration details, they must be included in the new lifecycle configuration. For information about lifecycle configuration, see Managing your storage lifecycle.  Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, or a combination of both. Accordingly, this section describes the latest API. The previous version of the API supported filtering based only on an object key name prefix, which is supported for backward compatibility. For the related API description, see PutBucketLifecycle.   Rules  You specify the lifecycle configuration in your request body. The lifecycle configuration is specified as XML consisting of one or more rules. An Amazon S3 Lifecycle configuration can have up to 1,000 rules. This limit is not adjustable. Each rule consists of the following:   Filter identifying a subset of objects to which the rule applies. The filter can be based on a key name prefix, object tags, or a combination of both.   Status whether the rule is in effect.   One or more lifecycle transition and expiration actions that you want Amazon S3 to perform on the objects identified by the filter. If the state of your bucket is versioning-enabled or versioning-suspended, you can have many versions of the same object (one current version and zero or more noncurrent versions). Amazon S3 provides predefined actions that you can specify for current and noncurrent object versions.   For more information, see Object Lifecycle Management and Lifecycle Configuration Elements.  Permissions  By default, all Amazon S3 resources are private, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration). Only the resource owner (that is, the Amazon Web Services account that created it) can access the resource. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, a user must get the s3:PutLifecycleConfiguration permission. You can also explicitly deny permissions. Explicit deny also supersedes any other permissions. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them permissions for the following actions:    s3:DeleteObject     s3:DeleteObjectVersion     s3:PutLifecycleConfiguration    For more information about permissions, see Managing Access Permissions to Your Amazon S3 Resources.   The following operations are related to PutBucketLifecycleConfiguration:    Examples of Lifecycle Configuration     GetBucketLifecycleConfiguration     DeleteBucketLifecycle   
   */
  putBucketLifecycleConfiguration(params: S3.Types.PutBucketLifecycleConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration. Keep in mind that this will overwrite an existing lifecycle configuration, so if you want to retain any configuration details, they must be included in the new lifecycle configuration. For information about lifecycle configuration, see Managing your storage lifecycle.  Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, or a combination of both. Accordingly, this section describes the latest API. The previous version of the API supported filtering based only on an object key name prefix, which is supported for backward compatibility. For the related API description, see PutBucketLifecycle.   Rules  You specify the lifecycle configuration in your request body. The lifecycle configuration is specified as XML consisting of one or more rules. An Amazon S3 Lifecycle configuration can have up to 1,000 rules. This limit is not adjustable. Each rule consists of the following:   Filter identifying a subset of objects to which the rule applies. The filter can be based on a key name prefix, object tags, or a combination of both.   Status whether the rule is in effect.   One or more lifecycle transition and expiration actions that you want Amazon S3 to perform on the objects identified by the filter. If the state of your bucket is versioning-enabled or versioning-suspended, you can have many versions of the same object (one current version and zero or more noncurrent versions). Amazon S3 provides predefined actions that you can specify for current and noncurrent object versions.   For more information, see Object Lifecycle Management and Lifecycle Configuration Elements.  Permissions  By default, all Amazon S3 resources are private, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration). Only the resource owner (that is, the Amazon Web Services account that created it) can access the resource. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, a user must get the s3:PutLifecycleConfiguration permission. You can also explicitly deny permissions. Explicit deny also supersedes any other permissions. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them permissions for the following actions:    s3:DeleteObject     s3:DeleteObjectVersion     s3:PutLifecycleConfiguration    For more information about permissions, see Managing Access Permissions to Your Amazon S3 Resources.   The following operations are related to PutBucketLifecycleConfiguration:    Examples of Lifecycle Configuration     GetBucketLifecycleConfiguration     DeleteBucketLifecycle   
   */
  putBucketLifecycleConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Creates a replication configuration or replaces an existing one. For more information, see Replication in the Amazon S3 User Guide.  Specify the replication configuration in the request body. In the replication configuration, you provide the name of the destination bucket or buckets where you want Amazon S3 to replicate objects, the IAM role that Amazon S3 can assume to replicate objects on your behalf, and other relevant information. A replication configuration must include at least one rule, and can contain a maximum of 1,000. Each rule identifies a subset of objects to replicate by filtering the objects in the source bucket. To choose additional subsets of objects to replicate, add a rule for each subset. To specify a subset of the objects in the source bucket to apply a replication rule to, add the Filter element as a child of the Rule element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the Filter element in the configuration, you must also add the following elements: DeleteMarkerReplication, Status, and Priority.  If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see Backward Compatibility.  For information about enabling versioning on a bucket, see Using Versioning.  Handling Replication of Encrypted Objects  By default, Amazon S3 doesn't replicate objects that are stored at rest using server-side encryption with KMS keys. To replicate Amazon Web Services KMS-encrypted objects, add the following: SourceSelectionCriteria, SseKmsEncryptedObjects, Status, EncryptionConfiguration, and ReplicaKmsKeyID. For information about replication configuration, see Replicating Objects Created with SSE Using KMS keys. For information on PutBucketReplication errors, see List of replication-related error codes   Permissions  To create a PutBucketReplication request, you must have s3:PutReplicationConfiguration permissions for the bucket.  By default, a resource owner, in this case the Amazon Web Services account that created the bucket, can perform this operation. The resource owner can also grant others permissions to perform the operation. For more information about permissions, see Specifying Permissions in a Policy and Managing Access Permissions to Your Amazon S3 Resources.  To perform this operation, the user or role performing the action must have the iam:PassRole permission.    The following operations are related to PutBucketReplication:    GetBucketReplication     DeleteBucketReplication   
   */
  putBucketReplication(params: S3.Types.PutBucketReplicationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Creates a replication configuration or replaces an existing one. For more information, see Replication in the Amazon S3 User Guide.  Specify the replication configuration in the request body. In the replication configuration, you provide the name of the destination bucket or buckets where you want Amazon S3 to replicate objects, the IAM role that Amazon S3 can assume to replicate objects on your behalf, and other relevant information. A replication configuration must include at least one rule, and can contain a maximum of 1,000. Each rule identifies a subset of objects to replicate by filtering the objects in the source bucket. To choose additional subsets of objects to replicate, add a rule for each subset. To specify a subset of the objects in the source bucket to apply a replication rule to, add the Filter element as a child of the Rule element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the Filter element in the configuration, you must also add the following elements: DeleteMarkerReplication, Status, and Priority.  If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see Backward Compatibility.  For information about enabling versioning on a bucket, see Using Versioning.  Handling Replication of Encrypted Objects  By default, Amazon S3 doesn't replicate objects that are stored at rest using server-side encryption with KMS keys. To replicate Amazon Web Services KMS-encrypted objects, add the following: SourceSelectionCriteria, SseKmsEncryptedObjects, Status, EncryptionConfiguration, and ReplicaKmsKeyID. For information about replication configuration, see Replicating Objects Created with SSE Using KMS keys. For information on PutBucketReplication errors, see List of replication-related error codes   Permissions  To create a PutBucketReplication request, you must have s3:PutReplicationConfiguration permissions for the bucket.  By default, a resource owner, in this case the Amazon Web Services account that created the bucket, can perform this operation. The resource owner can also grant others permissions to perform the operation. For more information about permissions, see Specifying Permissions in a Policy and Managing Access Permissions to Your Amazon S3 Resources.  To perform this operation, the user or role performing the action must have the iam:PassRole permission.    The following operations are related to PutBucketReplication:    GetBucketReplication     DeleteBucketReplication   
   */
  putBucketReplication(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the tags for a bucket. Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this, sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see Cost Allocation and Tagging and Using Cost Allocation in Amazon S3 Bucket Tags.   When this operation sets the tags for a bucket, it will overwrite any current tags the bucket already has. You cannot use this operation to add tags to an existing list of tags.  To use this operation, you must have permissions to perform the s3:PutBucketTagging action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  PutBucketTagging has the following special errors:   Error code: InvalidTagError    Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For information about tag restrictions, see User-Defined Tag Restrictions and Amazon Web Services-Generated Cost Allocation Tag Restrictions.     Error code: MalformedXMLError    Description: The XML provided does not match the schema.     Error code: OperationAbortedError     Description: A conflicting conditional action is currently in progress against this resource. Please try again.     Error code: InternalError    Description: The service was unable to apply the provided tag to the bucket.     The following operations are related to PutBucketTagging:    GetBucketTagging     DeleteBucketTagging   
   */
  putBucketTagging(params: S3.Types.PutBucketTaggingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the tags for a bucket. Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this, sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see Cost Allocation and Tagging and Using Cost Allocation in Amazon S3 Bucket Tags.   When this operation sets the tags for a bucket, it will overwrite any current tags the bucket already has. You cannot use this operation to add tags to an existing list of tags.  To use this operation, you must have permissions to perform the s3:PutBucketTagging action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  PutBucketTagging has the following special errors:   Error code: InvalidTagError    Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For information about tag restrictions, see User-Defined Tag Restrictions and Amazon Web Services-Generated Cost Allocation Tag Restrictions.     Error code: MalformedXMLError    Description: The XML provided does not match the schema.     Error code: OperationAbortedError     Description: A conflicting conditional action is currently in progress against this resource. Please try again.     Error code: InternalError    Description: The service was unable to apply the provided tag to the bucket.     The following operations are related to PutBucketTagging:    GetBucketTagging     DeleteBucketTagging   
   */
  putBucketTagging(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the versioning state of an existing bucket. You can set the versioning state with one of the following values:  Enabled—Enables versioning for the objects in the bucket. All objects added to the bucket receive a unique version ID.  Suspended—Disables versioning for the objects in the bucket. All objects added to the bucket receive the version ID null. If the versioning state has never been set on a bucket, it has no versioning state; a GetBucketVersioning request does not return a versioning state value. In order to enable MFA Delete, you must be the bucket owner. If you are the bucket owner and want to enable MFA Delete in the bucket versioning configuration, you must include the x-amz-mfa request header and the Status and the MfaDelete request elements in a request to set the versioning state of the bucket.  If you have an object expiration lifecycle configuration in your non-versioned bucket and you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration will manage the deletes of the noncurrent object versions in the version-enabled bucket. (A version-enabled bucket maintains one current and zero or more noncurrent object versions.) For more information, see Lifecycle and Versioning.  The following operations are related to PutBucketVersioning:    CreateBucket     DeleteBucket     GetBucketVersioning   
   */
  putBucketVersioning(params: S3.Types.PutBucketVersioningRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the versioning state of an existing bucket. You can set the versioning state with one of the following values:  Enabled—Enables versioning for the objects in the bucket. All objects added to the bucket receive a unique version ID.  Suspended—Disables versioning for the objects in the bucket. All objects added to the bucket receive the version ID null. If the versioning state has never been set on a bucket, it has no versioning state; a GetBucketVersioning request does not return a versioning state value. In order to enable MFA Delete, you must be the bucket owner. If you are the bucket owner and want to enable MFA Delete in the bucket versioning configuration, you must include the x-amz-mfa request header and the Status and the MfaDelete request elements in a request to set the versioning state of the bucket.  If you have an object expiration lifecycle configuration in your non-versioned bucket and you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration will manage the deletes of the noncurrent object versions in the version-enabled bucket. (A version-enabled bucket maintains one current and zero or more noncurrent object versions.) For more information, see Lifecycle and Versioning.  The following operations are related to PutBucketVersioning:    CreateBucket     DeleteBucket     GetBucketVersioning   
   */
  putBucketVersioning(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the configuration of the website that is specified in the website subresource. To configure a bucket as a website, you can add this subresource on the bucket with website configuration information such as the file name of the index document and any redirect rules. For more information, see Hosting Websites on Amazon S3. This PUT action requires the S3:PutBucketWebsite permission. By default, only the bucket owner can configure the website attached to a bucket; however, bucket owners can allow other users to set the website configuration by writing a bucket policy that grants them the S3:PutBucketWebsite permission. To redirect all website requests sent to the bucket's website endpoint, you add a website configuration with the following elements. Because all requests are sent to another website, you don't need to provide index document name for the bucket.    WebsiteConfiguration     RedirectAllRequestsTo     HostName     Protocol    If you want granular control over redirects, you can use the following elements to add routing rules that describe conditions for redirecting requests and information about the redirect destination. In this case, the website configuration must provide an index document for the bucket, because some requests might not be redirected.     WebsiteConfiguration     IndexDocument     Suffix     ErrorDocument     Key     RoutingRules     RoutingRule     Condition     HttpErrorCodeReturnedEquals     KeyPrefixEquals     Redirect     Protocol     HostName     ReplaceKeyPrefixWith     ReplaceKeyWith     HttpRedirectCode    Amazon S3 has a limitation of 50 routing rules per website configuration. If you require more than 50 routing rules, you can use object redirect. For more information, see Configuring an Object Redirect in the Amazon S3 User Guide.
   */
  putBucketWebsite(params: S3.Types.PutBucketWebsiteRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the configuration of the website that is specified in the website subresource. To configure a bucket as a website, you can add this subresource on the bucket with website configuration information such as the file name of the index document and any redirect rules. For more information, see Hosting Websites on Amazon S3. This PUT action requires the S3:PutBucketWebsite permission. By default, only the bucket owner can configure the website attached to a bucket; however, bucket owners can allow other users to set the website configuration by writing a bucket policy that grants them the S3:PutBucketWebsite permission. To redirect all website requests sent to the bucket's website endpoint, you add a website configuration with the following elements. Because all requests are sent to another website, you don't need to provide index document name for the bucket.    WebsiteConfiguration     RedirectAllRequestsTo     HostName     Protocol    If you want granular control over redirects, you can use the following elements to add routing rules that describe conditions for redirecting requests and information about the redirect destination. In this case, the website configuration must provide an index document for the bucket, because some requests might not be redirected.     WebsiteConfiguration     IndexDocument     Suffix     ErrorDocument     Key     RoutingRules     RoutingRule     Condition     HttpErrorCodeReturnedEquals     KeyPrefixEquals     Redirect     Protocol     HostName     ReplaceKeyPrefixWith     ReplaceKeyWith     HttpRedirectCode    Amazon S3 has a limitation of 50 routing rules per website configuration. If you require more than 50 routing rules, you can use object redirect. For more information, see Configuring an Object Redirect in the Amazon S3 User Guide.
   */
  putBucketWebsite(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds an object to a bucket. You must have WRITE permissions on a bucket to add an object to it.  Amazon S3 never adds partial objects; if you receive a success response, Amazon S3 added the entire object to the bucket. You cannot use PutObject to only update a single piece of metadata for an existing object. You must put the entire object with updated metadata if you want to update some values.  Amazon S3 is a distributed system. If it receives multiple write requests for the same object simultaneously, it overwrites all but the last object written. To prevent objects from being deleted or overwritten, you can use Amazon S3 Object Lock. To ensure that data is not corrupted traversing the network, use the Content-MD5 header. When you use this header, Amazon S3 checks the object against the provided MD5 value and, if they do not match, returns an error. Additionally, you can calculate the MD5 while putting an object to Amazon S3 and compare the returned ETag to the calculated MD5 value.    To successfully complete the PutObject request, you must have the s3:PutObject in your IAM permissions.   To successfully change the objects acl of your PutObject request, you must have the s3:PutObjectAcl in your IAM permissions.   To successfully set the tag-set with your PutObject request, you must have the s3:PutObjectTagging in your IAM permissions.    The Content-MD5 header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information about Amazon S3 Object Lock, see Amazon S3 Object Lock Overview in the Amazon S3 User Guide.     You have three mutually exclusive options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS), and customer-provided keys (SSE-C). Amazon S3 encrypts data with server-side encryption by using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to encrypt data at by rest using server-side encryption with other key options. For more information, see Using Server-Side Encryption. When adding a new object, you can use headers to grant ACL-based permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on the object. By default, all objects are private. Only the owner has full access control. For more information, see Access Control List (ACL) Overview and Managing ACLs Using the REST API.  If the bucket that you're uploading objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such as the bucket-owner-full-control canned ACL or an equivalent form of this ACL expressed in the XML format. PUT requests that contain other ACLs (for example, custom grants to certain Amazon Web Services accounts) fail and return a 400 error with the error code AccessControlListNotSupported. For more information, see  Controlling ownership of objects and disabling ACLs in the Amazon S3 User Guide.  If your bucket uses the bucket owner enforced setting for Object Ownership, all objects written to the bucket by any account will be owned by the bucket owner.  By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide. If you enable versioning for a bucket, Amazon S3 automatically generates a unique version ID for the object being stored. Amazon S3 returns this ID in the response. When you enable versioning for a bucket, if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all of the objects. For more information about versioning, see Adding Objects to Versioning-Enabled Buckets. For information about returning the versioning state of a bucket, see GetBucketVersioning.  For more information about related Amazon S3 APIs, see the following:    CopyObject     DeleteObject   
   */
  putObject(params: S3.Types.PutObjectRequest, callback?: (err: AWSError, data: S3.Types.PutObjectOutput) => void): Request<S3.Types.PutObjectOutput, AWSError>;
  /**
   * Adds an object to a bucket. You must have WRITE permissions on a bucket to add an object to it.  Amazon S3 never adds partial objects; if you receive a success response, Amazon S3 added the entire object to the bucket. You cannot use PutObject to only update a single piece of metadata for an existing object. You must put the entire object with updated metadata if you want to update some values.  Amazon S3 is a distributed system. If it receives multiple write requests for the same object simultaneously, it overwrites all but the last object written. To prevent objects from being deleted or overwritten, you can use Amazon S3 Object Lock. To ensure that data is not corrupted traversing the network, use the Content-MD5 header. When you use this header, Amazon S3 checks the object against the provided MD5 value and, if they do not match, returns an error. Additionally, you can calculate the MD5 while putting an object to Amazon S3 and compare the returned ETag to the calculated MD5 value.    To successfully complete the PutObject request, you must have the s3:PutObject in your IAM permissions.   To successfully change the objects acl of your PutObject request, you must have the s3:PutObjectAcl in your IAM permissions.   To successfully set the tag-set with your PutObject request, you must have the s3:PutObjectTagging in your IAM permissions.    The Content-MD5 header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information about Amazon S3 Object Lock, see Amazon S3 Object Lock Overview in the Amazon S3 User Guide.     You have three mutually exclusive options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS), and customer-provided keys (SSE-C). Amazon S3 encrypts data with server-side encryption by using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to encrypt data at by rest using server-side encryption with other key options. For more information, see Using Server-Side Encryption. When adding a new object, you can use headers to grant ACL-based permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on the object. By default, all objects are private. Only the owner has full access control. For more information, see Access Control List (ACL) Overview and Managing ACLs Using the REST API.  If the bucket that you're uploading objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such as the bucket-owner-full-control canned ACL or an equivalent form of this ACL expressed in the XML format. PUT requests that contain other ACLs (for example, custom grants to certain Amazon Web Services accounts) fail and return a 400 error with the error code AccessControlListNotSupported. For more information, see  Controlling ownership of objects and disabling ACLs in the Amazon S3 User Guide.  If your bucket uses the bucket owner enforced setting for Object Ownership, all objects written to the bucket by any account will be owned by the bucket owner.  By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide. If you enable versioning for a bucket, Amazon S3 automatically generates a unique version ID for the object being stored. Amazon S3 returns this ID in the response. When you enable versioning for a bucket, if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all of the objects. For more information about versioning, see Adding Objects to Versioning-Enabled Buckets. For information about returning the versioning state of a bucket, see GetBucketVersioning.  For more information about related Amazon S3 APIs, see the following:    CopyObject     DeleteObject   
   */
  putObject(callback?: (err: AWSError, data: S3.Types.PutObjectOutput) => void): Request<S3.Types.PutObjectOutput, AWSError>;
  /**
   * Uses the acl subresource to set the access control list (ACL) permissions for a new or existing object in an S3 bucket. You must have WRITE_ACP permission to set the ACL of an object. For more information, see What permissions can I grant? in the Amazon S3 User Guide. This action is not supported by Amazon S3 on Outposts. Depending on your application needs, you can choose to set the ACL on an object using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, you can continue to use that approach. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide.  If your bucket uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. You must use policies to grant access to your bucket and the objects in it. Requests to set ACLs or update ACLs fail and return the AccessControlListNotSupported error code. Requests to read ACLs are still supported. For more information, see Controlling object ownership in the Amazon S3 User Guide.   Permissions  You can set access permissions using one of the following methods:   Specify a canned ACL with the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of x-amz-acl. If you use this header, you cannot use other access control-specific headers in your request. For more information, see Canned ACL.   Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. When using these headers, you specify explicit access permissions and grantees (Amazon Web Services accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use x-amz-acl header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. You specify each grantee as a type=value pair, where the type is one of the following:    id – if the value specified is the canonical user ID of an Amazon Web Services account    uri – if you are granting permissions to a predefined group    emailAddress – if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-read header grants list objects permission to the two Amazon Web Services accounts identified by their email addresses.  x-amz-grant-read: emailAddress="xyz@amazon.com", emailAddress="abc@amazon.com"     You can use either a canned ACL or specify access permissions explicitly. You cannot do both.  Grantee Values  You can specify the person (grantee) to whom you're assigning access rights (using request elements) in the following ways:   By the person's ID:  &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"&gt;&lt;ID&gt;&lt;&gt;ID&lt;&gt;&lt;/ID&gt;&lt;DisplayName&gt;&lt;&gt;GranteesEmail&lt;&gt;&lt;/DisplayName&gt; &lt;/Grantee&gt;  DisplayName is optional and ignored in the request.   By URI:  &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"&gt;&lt;URI&gt;&lt;&gt;http://acs.amazonaws.com/groups/global/AuthenticatedUsers&lt;&gt;&lt;/URI&gt;&lt;/Grantee&gt;    By Email address:  &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"&gt;&lt;EmailAddress&gt;&lt;&gt;Grantees@email.com&lt;&gt;&lt;/EmailAddress&gt;lt;/Grantee&gt;  The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser.  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.     Versioning  The ACL of an object is set at the object version level. By default, PUT sets the ACL of the current version of an object. To set the ACL of a different version, use the versionId subresource.   The following operations are related to PutObjectAcl:    CopyObject     GetObject   
   */
  putObjectAcl(params: S3.Types.PutObjectAclRequest, callback?: (err: AWSError, data: S3.Types.PutObjectAclOutput) => void): Request<S3.Types.PutObjectAclOutput, AWSError>;
  /**
   * Uses the acl subresource to set the access control list (ACL) permissions for a new or existing object in an S3 bucket. You must have WRITE_ACP permission to set the ACL of an object. For more information, see What permissions can I grant? in the Amazon S3 User Guide. This action is not supported by Amazon S3 on Outposts. Depending on your application needs, you can choose to set the ACL on an object using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, you can continue to use that approach. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide.  If your bucket uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. You must use policies to grant access to your bucket and the objects in it. Requests to set ACLs or update ACLs fail and return the AccessControlListNotSupported error code. Requests to read ACLs are still supported. For more information, see Controlling object ownership in the Amazon S3 User Guide.   Permissions  You can set access permissions using one of the following methods:   Specify a canned ACL with the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of x-amz-acl. If you use this header, you cannot use other access control-specific headers in your request. For more information, see Canned ACL.   Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. When using these headers, you specify explicit access permissions and grantees (Amazon Web Services accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use x-amz-acl header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. You specify each grantee as a type=value pair, where the type is one of the following:    id – if the value specified is the canonical user ID of an Amazon Web Services account    uri – if you are granting permissions to a predefined group    emailAddress – if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-read header grants list objects permission to the two Amazon Web Services accounts identified by their email addresses.  x-amz-grant-read: emailAddress="xyz@amazon.com", emailAddress="abc@amazon.com"     You can use either a canned ACL or specify access permissions explicitly. You cannot do both.  Grantee Values  You can specify the person (grantee) to whom you're assigning access rights (using request elements) in the following ways:   By the person's ID:  &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"&gt;&lt;ID&gt;&lt;&gt;ID&lt;&gt;&lt;/ID&gt;&lt;DisplayName&gt;&lt;&gt;GranteesEmail&lt;&gt;&lt;/DisplayName&gt; &lt;/Grantee&gt;  DisplayName is optional and ignored in the request.   By URI:  &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"&gt;&lt;URI&gt;&lt;&gt;http://acs.amazonaws.com/groups/global/AuthenticatedUsers&lt;&gt;&lt;/URI&gt;&lt;/Grantee&gt;    By Email address:  &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"&gt;&lt;EmailAddress&gt;&lt;&gt;Grantees@email.com&lt;&gt;&lt;/EmailAddress&gt;lt;/Grantee&gt;  The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser.  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.     Versioning  The ACL of an object is set at the object version level. By default, PUT sets the ACL of the current version of an object. To set the ACL of a different version, use the versionId subresource.   The following operations are related to PutObjectAcl:    CopyObject     GetObject   
   */
  putObjectAcl(callback?: (err: AWSError, data: S3.Types.PutObjectAclOutput) => void): Request<S3.Types.PutObjectAclOutput, AWSError>;
  /**
   * Applies a legal hold configuration to the specified object. For more information, see Locking Objects. This action is not supported by Amazon S3 on Outposts.
   */
  putObjectLegalHold(params: S3.Types.PutObjectLegalHoldRequest, callback?: (err: AWSError, data: S3.Types.PutObjectLegalHoldOutput) => void): Request<S3.Types.PutObjectLegalHoldOutput, AWSError>;
  /**
   * Applies a legal hold configuration to the specified object. For more information, see Locking Objects. This action is not supported by Amazon S3 on Outposts.
   */
  putObjectLegalHold(callback?: (err: AWSError, data: S3.Types.PutObjectLegalHoldOutput) => void): Request<S3.Types.PutObjectLegalHoldOutput, AWSError>;
  /**
   * Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see Locking Objects.     The DefaultRetention settings require both a mode and a period.   The DefaultRetention period can be either Days or Years but you must select one. You cannot specify Days and Years at the same time.   You can only enable Object Lock for new buckets. If you want to turn on Object Lock for an existing bucket, contact Amazon Web Services Support.   
   */
  putObjectLockConfiguration(params: S3.Types.PutObjectLockConfigurationRequest, callback?: (err: AWSError, data: S3.Types.PutObjectLockConfigurationOutput) => void): Request<S3.Types.PutObjectLockConfigurationOutput, AWSError>;
  /**
   * Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see Locking Objects.     The DefaultRetention settings require both a mode and a period.   The DefaultRetention period can be either Days or Years but you must select one. You cannot specify Days and Years at the same time.   You can only enable Object Lock for new buckets. If you want to turn on Object Lock for an existing bucket, contact Amazon Web Services Support.   
   */
  putObjectLockConfiguration(callback?: (err: AWSError, data: S3.Types.PutObjectLockConfigurationOutput) => void): Request<S3.Types.PutObjectLockConfigurationOutput, AWSError>;
  /**
   * Places an Object Retention configuration on an object. For more information, see Locking Objects. Users or accounts require the s3:PutObjectRetention permission in order to place an Object Retention configuration on objects. Bypassing a Governance Retention configuration requires the s3:BypassGovernanceRetention permission.  This action is not supported by Amazon S3 on Outposts.
   */
  putObjectRetention(params: S3.Types.PutObjectRetentionRequest, callback?: (err: AWSError, data: S3.Types.PutObjectRetentionOutput) => void): Request<S3.Types.PutObjectRetentionOutput, AWSError>;
  /**
   * Places an Object Retention configuration on an object. For more information, see Locking Objects. Users or accounts require the s3:PutObjectRetention permission in order to place an Object Retention configuration on objects. Bypassing a Governance Retention configuration requires the s3:BypassGovernanceRetention permission.  This action is not supported by Amazon S3 on Outposts.
   */
  putObjectRetention(callback?: (err: AWSError, data: S3.Types.PutObjectRetentionOutput) => void): Request<S3.Types.PutObjectRetentionOutput, AWSError>;
  /**
   * Sets the supplied tag-set to an object that already exists in a bucket. A tag is a key-value pair. You can associate tags with an object by sending a PUT request against the tagging subresource that is associated with the object. You can retrieve tags by sending a GET request. For more information, see GetObjectTagging. For tagging-related restrictions related to characters and encodings, see Tag Restrictions. Note that Amazon S3 limits the maximum number of tags to 10 tags per object. To use this operation, you must have permission to perform the s3:PutObjectTagging action. By default, the bucket owner has this permission and can grant this permission to others. To put tags of any other version, use the versionId query parameter. You also need permission for the s3:PutObjectVersionTagging action. For information about the Amazon S3 object tagging feature, see Object Tagging.  PutObjectTagging has the following special errors:      Code: InvalidTagError      Cause: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For more information, see Object Tagging.         Code: MalformedXMLError      Cause: The XML provided does not match the schema.         Code: OperationAbortedError      Cause: A conflicting conditional action is currently in progress against this resource. Please try again.         Code: InternalError     Cause: The service was unable to apply the provided tag to the object.      The following operations are related to PutObjectTagging:    GetObjectTagging     DeleteObjectTagging   
   */
  putObjectTagging(params: S3.Types.PutObjectTaggingRequest, callback?: (err: AWSError, data: S3.Types.PutObjectTaggingOutput) => void): Request<S3.Types.PutObjectTaggingOutput, AWSError>;
  /**
   * Sets the supplied tag-set to an object that already exists in a bucket. A tag is a key-value pair. You can associate tags with an object by sending a PUT request against the tagging subresource that is associated with the object. You can retrieve tags by sending a GET request. For more information, see GetObjectTagging. For tagging-related restrictions related to characters and encodings, see Tag Restrictions. Note that Amazon S3 limits the maximum number of tags to 10 tags per object. To use this operation, you must have permission to perform the s3:PutObjectTagging action. By default, the bucket owner has this permission and can grant this permission to others. To put tags of any other version, use the versionId query parameter. You also need permission for the s3:PutObjectVersionTagging action. For information about the Amazon S3 object tagging feature, see Object Tagging.  PutObjectTagging has the following special errors:      Code: InvalidTagError      Cause: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For more information, see Object Tagging.         Code: MalformedXMLError      Cause: The XML provided does not match the schema.         Code: OperationAbortedError      Cause: A conflicting conditional action is currently in progress against this resource. Please try again.         Code: InternalError     Cause: The service was unable to apply the provided tag to the object.      The following operations are related to PutObjectTagging:    GetObjectTagging     DeleteObjectTagging   
   */
  putObjectTagging(callback?: (err: AWSError, data: S3.Types.PutObjectTaggingOutput) => void): Request<S3.Types.PutObjectTaggingOutput, AWSError>;
  /**
   * Creates or modifies the PublicAccessBlock configuration for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketPublicAccessBlock permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy.  When Amazon S3 evaluates the PublicAccessBlock configuration for a bucket or an object, it checks the PublicAccessBlock configuration for both the bucket (or the bucket that contains the object) and the bucket owner's account. If the PublicAccessBlock configurations are different between the bucket and the account, Amazon S3 uses the most restrictive combination of the bucket-level and account-level settings.  For more information about when Amazon S3 considers a bucket or an object public, see The Meaning of "Public". The following operations are related to PutPublicAccessBlock:    GetPublicAccessBlock     DeletePublicAccessBlock     GetBucketPolicyStatus     Using Amazon S3 Block Public Access   
   */
  putPublicAccessBlock(params: S3.Types.PutPublicAccessBlockRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or modifies the PublicAccessBlock configuration for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketPublicAccessBlock permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy.  When Amazon S3 evaluates the PublicAccessBlock configuration for a bucket or an object, it checks the PublicAccessBlock configuration for both the bucket (or the bucket that contains the object) and the bucket owner's account. If the PublicAccessBlock configurations are different between the bucket and the account, Amazon S3 uses the most restrictive combination of the bucket-level and account-level settings.  For more information about when Amazon S3 considers a bucket or an object public, see The Meaning of "Public". The following operations are related to PutPublicAccessBlock:    GetPublicAccessBlock     DeletePublicAccessBlock     GetBucketPolicyStatus     Using Amazon S3 Block Public Access   
   */
  putPublicAccessBlock(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Restores an archived copy of an object back into Amazon S3 This action is not supported by Amazon S3 on Outposts. This action performs the following types of requests:     select - Perform a select query on an archived object    restore an archive - Restore an archived object   For more information about the S3 structure in the request body, see the following:    PutObject     Managing Access with ACLs in the Amazon S3 User Guide     Protecting Data Using Server-Side Encryption in the Amazon S3 User Guide    Define the SQL expression for the SELECT type of restoration for your query in the request body's SelectParameters structure. You can use expressions like the following examples.   The following expression returns all records from the specified object.  SELECT * FROM Object    Assuming that you are not using any headers for data stored in the object, you can specify columns with positional headers.  SELECT s._1, s._2 FROM Object s WHERE s._3 &gt; 100    If you have headers and you set the fileHeaderInfo in the CSV structure in the request body to USE, you can specify headers in the query. (If you set the fileHeaderInfo field to IGNORE, the first row is skipped for the query.) You cannot mix ordinal positions with header column names.   SELECT s.Id, s.FirstName, s.SSN FROM S3Object s    When making a select request, you can also do the following:   To expedite your queries, specify the Expedited tier. For more information about tiers, see "Restoring Archives," later in this topic.   Specify details about the data serialization format of both the input object that is being queried and the serialization of the CSV-encoded query results.   The following are additional important facts about the select feature:   The output results are new Amazon S3 objects. Unlike archive retrievals, they are stored until explicitly deleted-manually or through a lifecycle configuration.   You can issue more than one select request on the same Amazon S3 object. Amazon S3 doesn't duplicate requests, so avoid issuing duplicate requests.    Amazon S3 accepts a select request even if the object has already been restored. A select request doesn’t return error response 409.    Permissions  To use this operation, you must have permissions to perform the s3:RestoreObject action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide.  Restoring objects  Objects that you archive to the S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage class, and S3 Intelligent-Tiering Archive or S3 Intelligent-Tiering Deep Archive tiers, are not accessible in real time. For objects in the S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage classes, you must first initiate a restore request, and then wait until a temporary copy of the object is available. If you want a permanent copy of the object, create a copy of it in the Amazon S3 Standard storage class in your S3 bucket. To access an archived object, you must restore the object for the duration (number of days) that you specify. For objects in the Archive Access or Deep Archive Access tiers of S3 Intelligent-Tiering, you must first initiate a restore request, and then wait until the object is moved into the Frequent Access tier. To restore a specific object version, you can provide a version ID. If you don't provide a version ID, Amazon S3 restores the current version. When restoring an archived object, you can specify one of the following data access tier options in the Tier element of the request body:     Expedited - Expedited retrievals allow you to quickly access your data stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier when occasional urgent requests for restoring archives are required. For all but the largest archived objects (250 MB+), data accessed using Expedited retrievals is typically made available within 1–5 minutes. Provisioned capacity ensures that retrieval capacity for Expedited retrievals is available when you need it. Expedited retrievals and provisioned capacity are not available for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier.    Standard - Standard retrievals allow you to access any of your archived objects within several hours. This is the default option for retrieval requests that do not specify the retrieval option. Standard retrievals typically finish within 3–5 hours for objects stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier. They typically finish within 12 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. Standard retrievals are free for objects stored in S3 Intelligent-Tiering.    Bulk - Bulk retrievals free for objects stored in the S3 Glacier Flexible Retrieval and S3 Intelligent-Tiering storage classes, enabling you to retrieve large amounts, even petabytes, of data at no cost. Bulk retrievals typically finish within 5–12 hours for objects stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier. Bulk retrievals are also the lowest-cost retrieval option when restoring objects from S3 Glacier Deep Archive. They typically finish within 48 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier.    For more information about archive retrieval options and provisioned capacity for Expedited data access, see Restoring Archived Objects in the Amazon S3 User Guide.  You can use Amazon S3 restore speed upgrade to change the restore speed to a faster speed while it is in progress. For more information, see  Upgrading the speed of an in-progress restore in the Amazon S3 User Guide.  To get the status of object restoration, you can send a HEAD request. Operations return the x-amz-restore header, which provides information about the restoration status, in the response. You can use Amazon S3 event notifications to notify you when a restore is initiated or completed. For more information, see Configuring Amazon S3 Event Notifications in the Amazon S3 User Guide. After restoring an archived object, you can update the restoration period by reissuing the request with a new period. Amazon S3 updates the restoration period relative to the current time and charges only for the request-there are no data transfer charges. You cannot update the restoration period when Amazon S3 is actively processing your current restore request for the object. If your bucket has a lifecycle configuration with a rule that includes an expiration action, the object expiration overrides the life span that you specify in a restore request. For example, if you restore an object copy for 10 days, but the object is scheduled to expire in 3 days, Amazon S3 deletes the object in 3 days. For more information about lifecycle configuration, see PutBucketLifecycleConfiguration and Object Lifecycle Management in Amazon S3 User Guide.  Responses  A successful action returns either the 200 OK or 202 Accepted status code.    If the object is not previously restored, then Amazon S3 returns 202 Accepted in the response.    If the object is previously restored, Amazon S3 returns 200 OK in the response.      Special errors:    Code: RestoreAlreadyInProgress     Cause: Object restore is already in progress. (This error does not apply to SELECT type requests.)     HTTP Status Code: 409 Conflict     SOAP Fault Code Prefix: Client         Code: GlacierExpeditedRetrievalNotAvailable     Cause: expedited retrievals are currently not available. Try again later. (Returned if there is insufficient capacity to process the Expedited request. This error applies only to Expedited retrievals and not to S3 Standard or Bulk retrievals.)     HTTP Status Code: 503     SOAP Fault Code Prefix: N/A        The following operations are related to RestoreObject:    PutBucketLifecycleConfiguration     GetBucketNotificationConfiguration   
   */
  restoreObject(params: S3.Types.RestoreObjectRequest, callback?: (err: AWSError, data: S3.Types.RestoreObjectOutput) => void): Request<S3.Types.RestoreObjectOutput, AWSError>;
  /**
   * Restores an archived copy of an object back into Amazon S3 This action is not supported by Amazon S3 on Outposts. This action performs the following types of requests:     select - Perform a select query on an archived object    restore an archive - Restore an archived object   For more information about the S3 structure in the request body, see the following:    PutObject     Managing Access with ACLs in the Amazon S3 User Guide     Protecting Data Using Server-Side Encryption in the Amazon S3 User Guide    Define the SQL expression for the SELECT type of restoration for your query in the request body's SelectParameters structure. You can use expressions like the following examples.   The following expression returns all records from the specified object.  SELECT * FROM Object    Assuming that you are not using any headers for data stored in the object, you can specify columns with positional headers.  SELECT s._1, s._2 FROM Object s WHERE s._3 &gt; 100    If you have headers and you set the fileHeaderInfo in the CSV structure in the request body to USE, you can specify headers in the query. (If you set the fileHeaderInfo field to IGNORE, the first row is skipped for the query.) You cannot mix ordinal positions with header column names.   SELECT s.Id, s.FirstName, s.SSN FROM S3Object s    When making a select request, you can also do the following:   To expedite your queries, specify the Expedited tier. For more information about tiers, see "Restoring Archives," later in this topic.   Specify details about the data serialization format of both the input object that is being queried and the serialization of the CSV-encoded query results.   The following are additional important facts about the select feature:   The output results are new Amazon S3 objects. Unlike archive retrievals, they are stored until explicitly deleted-manually or through a lifecycle configuration.   You can issue more than one select request on the same Amazon S3 object. Amazon S3 doesn't duplicate requests, so avoid issuing duplicate requests.    Amazon S3 accepts a select request even if the object has already been restored. A select request doesn’t return error response 409.    Permissions  To use this operation, you must have permissions to perform the s3:RestoreObject action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide.  Restoring objects  Objects that you archive to the S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage class, and S3 Intelligent-Tiering Archive or S3 Intelligent-Tiering Deep Archive tiers, are not accessible in real time. For objects in the S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage classes, you must first initiate a restore request, and then wait until a temporary copy of the object is available. If you want a permanent copy of the object, create a copy of it in the Amazon S3 Standard storage class in your S3 bucket. To access an archived object, you must restore the object for the duration (number of days) that you specify. For objects in the Archive Access or Deep Archive Access tiers of S3 Intelligent-Tiering, you must first initiate a restore request, and then wait until the object is moved into the Frequent Access tier. To restore a specific object version, you can provide a version ID. If you don't provide a version ID, Amazon S3 restores the current version. When restoring an archived object, you can specify one of the following data access tier options in the Tier element of the request body:     Expedited - Expedited retrievals allow you to quickly access your data stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier when occasional urgent requests for restoring archives are required. For all but the largest archived objects (250 MB+), data accessed using Expedited retrievals is typically made available within 1–5 minutes. Provisioned capacity ensures that retrieval capacity for Expedited retrievals is available when you need it. Expedited retrievals and provisioned capacity are not available for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier.    Standard - Standard retrievals allow you to access any of your archived objects within several hours. This is the default option for retrieval requests that do not specify the retrieval option. Standard retrievals typically finish within 3–5 hours for objects stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier. They typically finish within 12 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. Standard retrievals are free for objects stored in S3 Intelligent-Tiering.    Bulk - Bulk retrievals free for objects stored in the S3 Glacier Flexible Retrieval and S3 Intelligent-Tiering storage classes, enabling you to retrieve large amounts, even petabytes, of data at no cost. Bulk retrievals typically finish within 5–12 hours for objects stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier. Bulk retrievals are also the lowest-cost retrieval option when restoring objects from S3 Glacier Deep Archive. They typically finish within 48 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier.    For more information about archive retrieval options and provisioned capacity for Expedited data access, see Restoring Archived Objects in the Amazon S3 User Guide.  You can use Amazon S3 restore speed upgrade to change the restore speed to a faster speed while it is in progress. For more information, see  Upgrading the speed of an in-progress restore in the Amazon S3 User Guide.  To get the status of object restoration, you can send a HEAD request. Operations return the x-amz-restore header, which provides information about the restoration status, in the response. You can use Amazon S3 event notifications to notify you when a restore is initiated or completed. For more information, see Configuring Amazon S3 Event Notifications in the Amazon S3 User Guide. After restoring an archived object, you can update the restoration period by reissuing the request with a new period. Amazon S3 updates the restoration period relative to the current time and charges only for the request-there are no data transfer charges. You cannot update the restoration period when Amazon S3 is actively processing your current restore request for the object. If your bucket has a lifecycle configuration with a rule that includes an expiration action, the object expiration overrides the life span that you specify in a restore request. For example, if you restore an object copy for 10 days, but the object is scheduled to expire in 3 days, Amazon S3 deletes the object in 3 days. For more information about lifecycle configuration, see PutBucketLifecycleConfiguration and Object Lifecycle Management in Amazon S3 User Guide.  Responses  A successful action returns either the 200 OK or 202 Accepted status code.    If the object is not previously restored, then Amazon S3 returns 202 Accepted in the response.    If the object is previously restored, Amazon S3 returns 200 OK in the response.      Special errors:    Code: RestoreAlreadyInProgress     Cause: Object restore is already in progress. (This error does not apply to SELECT type requests.)     HTTP Status Code: 409 Conflict     SOAP Fault Code Prefix: Client         Code: GlacierExpeditedRetrievalNotAvailable     Cause: expedited retrievals are currently not available. Try again later. (Returned if there is insufficient capacity to process the Expedited request. This error applies only to Expedited retrievals and not to S3 Standard or Bulk retrievals.)     HTTP Status Code: 503     SOAP Fault Code Prefix: N/A        The following operations are related to RestoreObject:    PutBucketLifecycleConfiguration     GetBucketNotificationConfiguration   
   */
  restoreObject(callback?: (err: AWSError, data: S3.Types.RestoreObjectOutput) => void): Request<S3.Types.RestoreObjectOutput, AWSError>;
  /**
   * Uploads a part in a multipart upload.  In this operation, you provide part data in your request. However, you have an option to specify your existing Amazon S3 object as a data source for the part you are uploading. To upload a part from an existing object, you use the UploadPartCopy operation.   You must initiate a multipart upload (see CreateMultipartUpload) before you can upload any part. In response to your initiate request, Amazon S3 returns an upload ID, a unique identifier, that you must include in your upload part request. Part numbers can be any number from 1 to 10,000, inclusive. A part number uniquely identifies a part and also defines its position within the object being created. If you upload a new part using the same part number that was used with a previous part, the previously uploaded part is overwritten. For information about maximum and minimum part sizes and other multipart upload specifications, see Multipart upload limits in the Amazon S3 User Guide. To ensure that data is not corrupted when traversing the network, specify the Content-MD5 header in the upload part request. Amazon S3 checks the part data against the provided MD5 value. If they do not match, Amazon S3 returns an error.  If the upload request is signed with Signature Version 4, then Amazon Web Services S3 uses the x-amz-content-sha256 header as a checksum instead of Content-MD5. For more information see Authenticating Requests: Using the Authorization Header (Amazon Web Services Signature Version 4).   Note: After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, Amazon S3 frees up the parts storage and stops charging you for the parts storage. For more information on multipart uploads, go to Multipart Upload Overview in the Amazon S3 User Guide . For information on the permissions required to use the multipart upload API, go to Multipart Upload and Permissions in the Amazon S3 User Guide. Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. You have three mutually exclusive options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS), and Customer-Provided Keys (SSE-C). Amazon S3 encrypts data with server-side encryption using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to encrypt data at rest using server-side encryption with other key options. The option you use depends on whether you want to use KMS keys (SSE-KMS) or provide your own encryption key (SSE-C). If you choose to provide your own encryption key, the request headers you provide in the request must match the headers you used in the request to initiate the upload by using CreateMultipartUpload. For more information, go to Using Server-Side Encryption in the Amazon S3 User Guide. Server-side encryption is supported by the S3 Multipart Upload actions. Unless you are using a customer-provided encryption key (SSE-C), you don't need to specify the encryption parameters in each UploadPart request. Instead, you only need to specify the server-side encryption parameters in the initial Initiate Multipart request. For more information, see CreateMultipartUpload. If you requested server-side encryption using a customer-provided encryption key (SSE-C) in your initiate multipart upload request, you must provide identical encryption information in each part upload using the following headers.   x-amz-server-side-encryption-customer-algorithm   x-amz-server-side-encryption-customer-key   x-amz-server-side-encryption-customer-key-MD5    UploadPart has the following special errors:      Code: NoSuchUpload     Cause: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.      HTTP Status Code: 404 Not Found      SOAP Fault Code Prefix: Client      The following operations are related to UploadPart:    CreateMultipartUpload     CompleteMultipartUpload     AbortMultipartUpload     ListParts     ListMultipartUploads   
   */
  uploadPart(params: S3.Types.UploadPartRequest, callback?: (err: AWSError, data: S3.Types.UploadPartOutput) => void): Request<S3.Types.UploadPartOutput, AWSError>;
  /**
   * Uploads a part in a multipart upload.  In this operation, you provide part data in your request. However, you have an option to specify your existing Amazon S3 object as a data source for the part you are uploading. To upload a part from an existing object, you use the UploadPartCopy operation.   You must initiate a multipart upload (see CreateMultipartUpload) before you can upload any part. In response to your initiate request, Amazon S3 returns an upload ID, a unique identifier, that you must include in your upload part request. Part numbers can be any number from 1 to 10,000, inclusive. A part number uniquely identifies a part and also defines its position within the object being created. If you upload a new part using the same part number that was used with a previous part, the previously uploaded part is overwritten. For information about maximum and minimum part sizes and other multipart upload specifications, see Multipart upload limits in the Amazon S3 User Guide. To ensure that data is not corrupted when traversing the network, specify the Content-MD5 header in the upload part request. Amazon S3 checks the part data against the provided MD5 value. If they do not match, Amazon S3 returns an error.  If the upload request is signed with Signature Version 4, then Amazon Web Services S3 uses the x-amz-content-sha256 header as a checksum instead of Content-MD5. For more information see Authenticating Requests: Using the Authorization Header (Amazon Web Services Signature Version 4).   Note: After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, Amazon S3 frees up the parts storage and stops charging you for the parts storage. For more information on multipart uploads, go to Multipart Upload Overview in the Amazon S3 User Guide . For information on the permissions required to use the multipart upload API, go to Multipart Upload and Permissions in the Amazon S3 User Guide. Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. You have three mutually exclusive options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS), and Customer-Provided Keys (SSE-C). Amazon S3 encrypts data with server-side encryption using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to encrypt data at rest using server-side encryption with other key options. The option you use depends on whether you want to use KMS keys (SSE-KMS) or provide your own encryption key (SSE-C). If you choose to provide your own encryption key, the request headers you provide in the request must match the headers you used in the request to initiate the upload by using CreateMultipartUpload. For more information, go to Using Server-Side Encryption in the Amazon S3 User Guide. Server-side encryption is supported by the S3 Multipart Upload actions. Unless you are using a customer-provided encryption key (SSE-C), you don't need to specify the encryption parameters in each UploadPart request. Instead, you only need to specify the server-side encryption parameters in the initial Initiate Multipart request. For more information, see CreateMultipartUpload. If you requested server-side encryption using a customer-provided encryption key (SSE-C) in your initiate multipart upload request, you must provide identical encryption information in each part upload using the following headers.   x-amz-server-side-encryption-customer-algorithm   x-amz-server-side-encryption-customer-key   x-amz-server-side-encryption-customer-key-MD5    UploadPart has the following special errors:      Code: NoSuchUpload     Cause: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.      HTTP Status Code: 404 Not Found      SOAP Fault Code Prefix: Client      The following operations are related to UploadPart:    CreateMultipartUpload     CompleteMultipartUpload     AbortMultipartUpload     ListParts     ListMultipartUploads   
   */
  uploadPart(callback?: (err: AWSError, data: S3.Types.UploadPartOutput) => void): Request<S3.Types.UploadPartOutput, AWSError>;
  /**
   * Uploads a part by copying data from an existing object as data source. You specify the data source by adding the request header x-amz-copy-source in your request and a byte range by adding the request header x-amz-copy-source-range in your request.  For information about maximum and minimum part sizes and other multipart upload specifications, see Multipart upload limits in the Amazon S3 User Guide.   Instead of using an existing object as part data, you might use the UploadPart action and provide data in your request.  You must initiate a multipart upload before you can upload any part. In response to your initiate request. Amazon S3 returns a unique identifier, the upload ID, that you must include in your upload part request. For more information about using the UploadPartCopy operation, see the following:   For conceptual information about multipart uploads, see Uploading Objects Using Multipart Upload in the Amazon S3 User Guide.   For information about permissions required to use the multipart upload API, see Multipart Upload and Permissions in the Amazon S3 User Guide.   For information about copying objects using a single atomic action vs. a multipart upload, see Operations on Objects in the Amazon S3 User Guide.   For information about using server-side encryption with customer-provided encryption keys with the UploadPartCopy operation, see CopyObject and UploadPart.   Note the following additional considerations about the request headers x-amz-copy-source-if-match, x-amz-copy-source-if-none-match, x-amz-copy-source-if-unmodified-since, and x-amz-copy-source-if-modified-since:      Consideration 1 - If both of the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request as follows:  x-amz-copy-source-if-match condition evaluates to true, and;  x-amz-copy-source-if-unmodified-since condition evaluates to false; Amazon S3 returns 200 OK and copies the data.     Consideration 2 - If both of the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request as follows:  x-amz-copy-source-if-none-match condition evaluates to false, and;  x-amz-copy-source-if-modified-since condition evaluates to true; Amazon S3 returns 412 Precondition Failed response code.     Versioning  If your bucket has versioning enabled, you could have multiple versions of the same object. By default, x-amz-copy-source identifies the current version of the object to copy. If the current version is a delete marker and you don't specify a versionId in the x-amz-copy-source, Amazon S3 returns a 404 error, because the object does not exist. If you specify versionId in the x-amz-copy-source and the versionId is a delete marker, Amazon S3 returns an HTTP 400 error, because you are not allowed to specify a delete marker as a version for the x-amz-copy-source.  You can optionally specify a specific version of the source object to copy by adding the versionId subresource as shown in the following example:  x-amz-copy-source: /bucket/object?versionId=version id   Special errors       Code: NoSuchUpload     Cause: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.     HTTP Status Code: 404 Not Found         Code: InvalidRequest     Cause: The specified copy source is not supported as a byte-range copy source.     HTTP Status Code: 400 Bad Request        The following operations are related to UploadPartCopy:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     AbortMultipartUpload     ListParts     ListMultipartUploads   
   */
  uploadPartCopy(params: S3.Types.UploadPartCopyRequest, callback?: (err: AWSError, data: S3.Types.UploadPartCopyOutput) => void): Request<S3.Types.UploadPartCopyOutput, AWSError>;
  /**
   * Uploads a part by copying data from an existing object as data source. You specify the data source by adding the request header x-amz-copy-source in your request and a byte range by adding the request header x-amz-copy-source-range in your request.  For information about maximum and minimum part sizes and other multipart upload specifications, see Multipart upload limits in the Amazon S3 User Guide.   Instead of using an existing object as part data, you might use the UploadPart action and provide data in your request.  You must initiate a multipart upload before you can upload any part. In response to your initiate request. Amazon S3 returns a unique identifier, the upload ID, that you must include in your upload part request. For more information about using the UploadPartCopy operation, see the following:   For conceptual information about multipart uploads, see Uploading Objects Using Multipart Upload in the Amazon S3 User Guide.   For information about permissions required to use the multipart upload API, see Multipart Upload and Permissions in the Amazon S3 User Guide.   For information about copying objects using a single atomic action vs. a multipart upload, see Operations on Objects in the Amazon S3 User Guide.   For information about using server-side encryption with customer-provided encryption keys with the UploadPartCopy operation, see CopyObject and UploadPart.   Note the following additional considerations about the request headers x-amz-copy-source-if-match, x-amz-copy-source-if-none-match, x-amz-copy-source-if-unmodified-since, and x-amz-copy-source-if-modified-since:      Consideration 1 - If both of the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request as follows:  x-amz-copy-source-if-match condition evaluates to true, and;  x-amz-copy-source-if-unmodified-since condition evaluates to false; Amazon S3 returns 200 OK and copies the data.     Consideration 2 - If both of the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request as follows:  x-amz-copy-source-if-none-match condition evaluates to false, and;  x-amz-copy-source-if-modified-since condition evaluates to true; Amazon S3 returns 412 Precondition Failed response code.     Versioning  If your bucket has versioning enabled, you could have multiple versions of the same object. By default, x-amz-copy-source identifies the current version of the object to copy. If the current version is a delete marker and you don't specify a versionId in the x-amz-copy-source, Amazon S3 returns a 404 error, because the object does not exist. If you specify versionId in the x-amz-copy-source and the versionId is a delete marker, Amazon S3 returns an HTTP 400 error, because you are not allowed to specify a delete marker as a version for the x-amz-copy-source.  You can optionally specify a specific version of the source object to copy by adding the versionId subresource as shown in the following example:  x-amz-copy-source: /bucket/object?versionId=version id   Special errors       Code: NoSuchUpload     Cause: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.     HTTP Status Code: 404 Not Found         Code: InvalidRequest     Cause: The specified copy source is not supported as a byte-range copy source.     HTTP Status Code: 400 Bad Request        The following operations are related to UploadPartCopy:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     AbortMultipartUpload     ListParts     ListMultipartUploads   
   */
  uploadPartCopy(callback?: (err: AWSError, data: S3.Types.UploadPartCopyOutput) => void): Request<S3.Types.UploadPartCopyOutput, AWSError>;
  /**
   * Waits for the bucketExists state by periodically calling the underlying S3.headBucketoperation every 5 seconds (at most 20 times).
   */
  waitFor(state: "bucketExists", params: S3.Types.HeadBucketRequest, callback?: (err: AWSError, data: S3.Types.HeadBucketOutput) => void): Request<S3.Types.HeadBucketOutput, AWSError>;
  /**
   * Waits for the bucketExists state by periodically calling the underlying S3.headBucketoperation every 5 seconds (at most 20 times).
   */
  waitFor(state: "bucketExists", callback?: (err: AWSError, data: S3.Types.HeadBucketOutput) => void): Request<S3.Types.HeadBucketOutput, AWSError>;
  /**
   * Waits for the bucketNotExists state by periodically calling the underlying S3.headBucketoperation every 5 seconds (at most 20 times).
   */
  waitFor(state: "bucketNotExists", params: S3.Types.HeadBucketRequest, callback?: (err: AWSError, data: S3.Types.HeadBucketOutput) => void): Request<S3.Types.HeadBucketOutput, AWSError>;
  /**
   * Waits for the bucketNotExists state by periodically calling the underlying S3.headBucketoperation every 5 seconds (at most 20 times).
   */
  waitFor(state: "bucketNotExists", callback?: (err: AWSError, data: S3.Types.HeadBucketOutput) => void): Request<S3.Types.HeadBucketOutput, AWSError>;
  /**
   * Waits for the objectExists state by periodically calling the underlying S3.headObjectoperation every 5 seconds (at most 20 times).
   */
  waitFor(state: "objectExists", params: S3.Types.HeadObjectRequest, callback?: (err: AWSError, data: S3.Types.HeadObjectOutput) => void): Request<S3.Types.HeadObjectOutput, AWSError>;
  /**
   * Waits for the objectExists state by periodically calling the underlying S3.headObjectoperation every 5 seconds (at most 20 times).
   */
  waitFor(state: "objectExists", callback?: (err: AWSError, data: S3.Types.HeadObjectOutput) => void): Request<S3.Types.HeadObjectOutput, AWSError>;
  /**
   * Waits for the objectNotExists state by periodically calling the underlying S3.headObjectoperation every 5 seconds (at most 20 times).
   */
  waitFor(state: "objectNotExists", params: S3.Types.HeadObjectRequest, callback?: (err: AWSError, data: S3.Types.HeadObjectOutput) => void): Request<S3.Types.HeadObjectOutput, AWSError>;
  /**
   * Waits for the objectNotExists state by periodically calling the underlying S3.headObjectoperation every 5 seconds (at most 20 times).
   */
  waitFor(state: "objectNotExists", callback?: (err: AWSError, data: S3.Types.HeadObjectOutput) => void): Request<S3.Types.HeadObjectOutput, AWSError>;
}
declare namespace S3 {
  export import ManagedUpload = managed_upload;
  export import PresignedPost = presigned_post;
}
declare namespace S3 {
  export type AbortDate = Date;
  export interface AbortIncompleteMultipartUpload {
    /**
     * Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.
     */
    DaysAfterInitiation?: DaysAfterInitiation;
  }
  export interface AbortMultipartUploadOutput {
  }
  export interface AbortMultipartUploadRequest {
    /**
     * The bucket name to which the upload was taking place.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Key of the object for which the multipart upload was initiated.
     */
    Key: ObjectKey;
    /**
     * Upload ID that identifies the multipart upload.
     */
    UploadId: MultipartUploadId;
  }
  export type AbortRuleId = string;
  export type AcceptRanges = string;
  export interface AccessControlPolicy {
    /**
     * A list of grants.
     */
    Grants?: Grants;
    /**
     * Container for the bucket owner's display name and ID.
     */
    Owner?: Owner;
  }
  export type AccountId = string;
  export type AdditionalRetentionPeriod = number;
  export type AllowedHeader = string;
  export type AllowedHeaders = AllowedHeader[];
  export type AllowedMethod = string;
  export type AllowedMethods = AllowedMethod[];
  export type AllowedOrigin = string;
  export type AllowedOrigins = AllowedOrigin[];
  export type Body = Buffer|Uint8Array|Blob|string;
  export interface Bucket {
    /**
     * The name of the bucket.
     */
    Name?: BucketName;
    /**
     * Date the bucket was created. This date can change when making changes to your bucket, such as editing its bucket policy.
     */
    CreationDate?: CreationDate;
    /**
     * The template identifier applied at bucket creation. IBM COS returns this field only if a template was used.
     */
    CreationTemplateId?: CreationTemplateId;
    LocationConstraint?: BucketLocationConstraint;
  }
  export type BucketCannedACL = "private"|"public-read"|"public-read-write"|"authenticated-read"|string;
  export interface BucketLifecycleConfiguration {
    /**
     * A lifecycle rule for individual objects in an Amazon S3 bucket.
     */
    Rules: LifecycleRules;
  }
  export type BucketLocationConstraint = "au-syd-onerate_active"|"ca-tor-onerate_active"|"br-sao-onerate_active"|"jp-osa-onerate_active"|"jp-tok-onerate_active"|"us-standard"|"us-vault"|"us-cold"|"us-flex"|"us-east-standard"|"us-east-vault"|"us-east-cold"|"us-east-flex"|"us-east-onerate_active"|"us-south-standard"|"us-south-vault"|"us-south-cold"|"us-south-flex"|"us-south-onerate_active"|"eu-standard"|"eu-vault"|"eu-cold"|"eu-flex"|"eu-gb-standard"|"eu-gb-vault"|"eu-gb-cold"|"eu-gb-flex"|"eu-gb-onerate_active"|"eu-de-standard"|"eu-de-vault"|"eu-de-cold"|"eu-de-flex"|"eu-de-onerate_active"|"ap-standard"|"ap-vault"|"ap-cold"|"ap-flex"|"ams03-standard"|"ams03-vault"|"ams03-cold"|"ams03-flex"|"ams03-onerate_active"|"che01-standard"|"che01-vault"|"che01-cold"|"che01-flex"|"che01-onerate_active"|"mel01-standard"|"mel01-vault"|"mel01-cold"|"mel01-flex"|"mil01-onerate_active"|"mon01-onerate_active"|"osl01-standard"|"osl01-vault"|"osl01-cold"|"osl01-flex"|"par01-onerate_active"|"sao01-standard"|"sao01-vault"|"sao01-cold"|"sao01-flex"|"sjc04-onerate_active"|"sng01-onerate_active"|"tor01-standard"|"tor01-vault"|"tor01-cold"|"tor01-flex"|string;
  export type BucketLogsPermission = "FULL_CONTROL"|"READ"|"WRITE"|string;
  export type BucketName = string;
  export interface BucketProtectionDefaultRetention {
    Days: Days;
  }
  export interface BucketProtectionMaximumRetention {
    Days: Days;
  }
  export interface BucketProtectionMinimumRetention {
    Days: Days;
  }
  export type BucketProtectionStatus = "Retention"|string;
  export type BucketProtectionEnablePermanentRetention = boolean;
  export type BucketVersioningStatus = "Enabled"|"Suspended"|string;
  export type Buckets = Bucket[];
  export type BypassGovernanceRetention = boolean;
  export interface CORSConfiguration {
    /**
     * A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.
     */
    CORSRules: CORSRules;
  }
  export interface CORSRule {
    /**
     * Unique identifier for the rule. The value cannot be longer than 255 characters.
     */
    ID?: ID;
    /**
     * Headers that are specified in the Access-Control-Request-Headers header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed.
     */
    AllowedHeaders?: AllowedHeaders;
    /**
     * An HTTP method that you allow the origin to execute. Valid values are GET, PUT, HEAD, POST, and DELETE.
     */
    AllowedMethods: AllowedMethods;
    /**
     * One or more origins you want customers to be able to access the bucket from.
     */
    AllowedOrigins: AllowedOrigins;
    /**
     * One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript XMLHttpRequest object).
     */
    ExposeHeaders?: ExposeHeaders;
    /**
     * The time in seconds that your browser is to cache the preflight response for the specified resource.
     */
    MaxAgeSeconds?: MaxAgeSeconds;
  }
  export type CORSRules = CORSRule[];
  export type CacheControl = string;
  export type CloudFunction = string;
  export type Code = string;
  export type Comments = string;
  export interface CommonPrefix {
    /**
     * Container for the specified common prefix.
     */
    Prefix?: Prefix;
  }
  export type CommonPrefixList = CommonPrefix[];
  export interface CompleteMultipartUploadOutput {
    /**
     * The URI that identifies the newly created object.
     */
    Location?: Location;
    /**
     * The name of the bucket that contains the newly created object. Does not return the access point ARN or access point alias if used. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket?: BucketName;
    /**
     * The object key of the newly created object.
     */
    Key?: ObjectKey;
    /**
     * If the object expiration is configured, this will contain the expiration date (expiry-date) and rule ID (rule-id). The value of rule-id is URL-encoded.
     */
    Expiration?: Expiration;
    /**
     * Entity tag that identifies the newly created object's data. Objects with different object data will have different entity tags. The entity tag is an opaque string. The entity tag may or may not be an MD5 digest of the object data. If the entity tag is not an MD5 digest of the object data, it will contain one or more nonhexadecimal characters and/or will consist of less than 32 or more than 32 hexadecimal digits. For more information about how the entity tag is calculated, see Checking object integrity in the Amazon S3 User Guide.
     */
    ETag?: ETag;
    /**
     * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * Version ID of the newly created object, in case the bucket has versioning turned on.
     */
    VersionId?: ObjectVersionId;
    /**
     * If present, specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export interface CompleteMultipartUploadRequest {
    /**
     * Name of the bucket to which the multipart upload was initiated. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Object key for which the multipart upload was initiated.
     */
    Key: ObjectKey;
    /**
     * The container for the multipart upload request information.
     */
    MultipartUpload?: CompletedMultipartUpload;
    /**
     * Date on which it will be legal to delete or modify the object. You can only specify this or the Retention-Period header. If both are specified a 400 error will be returned. If neither is specified the bucket's DefaultRetention period will be used. This header should be used to calculate a retention period in seconds and then stored in that manner.
     */
    RetentionExpirationDate?: RetentionExpirationDate;
    /**
     * A single legal hold to apply to the object. A legal hold is a character long string of max length 64. The object cannot be overwritten or deleted until all legal holds associated with the object are removed.
     */
    RetentionLegalHoldId?: RetentionLegalHoldID;
    /**
     * Retention period to store on the object in seconds. If this field and Retention-Expiration-Date are specified a 400 error is returned. If neither is specified the bucket's DefaultRetention period will be used. 0 is a legal value assuming the bucket's minimum retention period is also 0.
     */
    RetentionPeriod?: RetentionPeriod;
    /**
     * ID for the initiated multipart upload.
     */
    UploadId: MultipartUploadId;
  }
  export interface CompletedMultipartUpload {
    /**
     * Array of CompletedPart data types. If you do not supply a valid Part with your request, the service sends back an HTTP 400 response.
     */
    Parts?: CompletedPartList;
  }
  export interface CompletedPart {
    /**
     * Entity tag returned when the part was uploaded.
     */
    ETag?: ETag;
    /**
     * Part number that identifies the part. This is a positive integer between 1 and 10,000.
     */
    PartNumber?: PartNumber;
  }
  export type CompletedPartList = CompletedPart[];
  export type CompressionType = "NONE"|"GZIP"|"BZIP2"|string;
  export interface Condition {
    /**
     * The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied. Required when parent element Condition is specified and sibling KeyPrefixEquals is not specified. If both are specified, then both must be true for the redirect to be applied.
     */
    HttpErrorCodeReturnedEquals?: HttpErrorCodeReturnedEquals;
    /**
     * The object key name prefix when the redirect is applied. For example, to redirect requests for ExamplePage.html, the key prefix will be ExamplePage.html. To redirect request for all pages with the prefix docs/, the key prefix will be /docs, which identifies all objects in the docs/ folder. Required when the parent element Condition is specified and sibling HttpErrorCodeReturnedEquals is not specified. If both conditions are specified, both must be true for the redirect to be applied.  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see  XML related object key constraints. 
     */
    KeyPrefixEquals?: KeyPrefixEquals;
  }
  export type ConfirmRemoveSelfBucketAccess = boolean;
  export type ContentDisposition = string;
  export type ContentEncoding = string;
  export type ContentLanguage = string;
  export type ContentLength = number;
  export type ContentMD5 = string;
  export type ContentRange = string;
  export type ContentType = string;
  export interface ContinuationEvent {
  }
  export interface CopyObjectOutput {
    /**
     * Container for all response elements.
     */
    CopyObjectResult?: CopyObjectResult;
    /**
     * If the object expiration is configured, the response includes this header.
     */
    Expiration?: Expiration;
    /**
     * Version of the copied object in the destination bucket.
     */
    CopySourceVersionId?: CopySourceVersionId;
    /**
     * Version ID of the newly created copy.
     */
    VersionId?: ObjectVersionId;
    /**
     * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export interface CopyObjectRequest {
    /**
     * The canned ACL to apply to the object. This action is not supported by Amazon S3 on Outposts.
     */
    ACL?: ObjectCannedACL;
    /**
     * The name of the destination bucket. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Specifies caching behavior along the request/reply chain.
     */
    CacheControl?: CacheControl;
    /**
     * Specifies presentational information for the object.
     */
    ContentDisposition?: ContentDisposition;
    /**
     * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
     */
    ContentEncoding?: ContentEncoding;
    /**
     * The language the content is in.
     */
    ContentLanguage?: ContentLanguage;
    /**
     * A standard MIME type describing the format of the object data.
     */
    ContentType?: ContentType;
    /**
     * Specifies the source object for the copy operation. You specify the value in one of two formats, depending on whether you want to access the source object through an access point:   For objects not accessed through an access point, specify the name of the source bucket and the key of the source object, separated by a slash (/). For example, to copy the object reports/january.pdf from the bucket awsexamplebucket, use awsexamplebucket/reports/january.pdf. The value must be URL-encoded.   For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format arn:aws:s3:&lt;Region&gt;:&lt;account-id&gt;:accesspoint/&lt;access-point-name&gt;/object/&lt;key&gt;. For example, to copy the object reports/january.pdf through access point my-access-point owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf. The value must be URL encoded.  Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same Amazon Web Services Region.  Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/object/&lt;key&gt;. For example, to copy the object reports/january.pdf through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf. The value must be URL-encoded.    To copy a specific version of an object, append ?versionId=&lt;version-id&gt; to the value (for example, awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893). If you don't specify a version ID, Amazon S3 copies the latest version of the source object.
     */
    CopySource: CopySource;
    /**
     * Copies the object if its entity tag (ETag) matches the specified tag.
     */
    CopySourceIfMatch?: CopySourceIfMatch;
    /**
     * Copies the object if it has been modified since the specified time.
     */
    CopySourceIfModifiedSince?: CopySourceIfModifiedSince;
    /**
     * Copies the object if its entity tag (ETag) is different than the specified ETag.
     */
    CopySourceIfNoneMatch?: CopySourceIfNoneMatch;
    /**
     * Copies the object if it hasn't been modified since the specified time.
     */
    CopySourceIfUnmodifiedSince?: CopySourceIfUnmodifiedSince;
    /**
     * The date and time at which the object is no longer cacheable.
     */
    Expires?: Expires;
    /**
     * Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. This action is not supported by Amazon S3 on Outposts.
     */
    GrantFullControl?: GrantFullControl;
    /**
     * Allows grantee to read the object data and its metadata. This action is not supported by Amazon S3 on Outposts.
     */
    GrantRead?: GrantRead;
    /**
     * Allows grantee to read the object ACL. This action is not supported by Amazon S3 on Outposts.
     */
    GrantReadACP?: GrantReadACP;
    /**
     * Allows grantee to write the ACL for the applicable object. This action is not supported by Amazon S3 on Outposts.
     */
    GrantWriteACP?: GrantWriteACP;
    /**
     * The key of the destination object.
     */
    Key: ObjectKey;
    /**
     * A map of metadata to store with the object in S3.
     */
    Metadata?: Metadata;
    /**
     * Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request.
     */
    MetadataDirective?: MetadataDirective;
    /**
     * Specifies whether the object tag-set are copied from the source object or replaced with tag-set provided in the request.
     */
    TaggingDirective?: TaggingDirective;
    /**
     * This header controls how the Protection state of the source object is copied to the destination object.If copied, the retention period and all legal holds are copied onto the new object. The legal hold date's is set to the date of the copy.
     */
    RetentionDirective?: RetentionDirective;
    /**
     * Date on which it will be legal to delete or modify the object. You can only specify this or the Retention-Period header. If both are specified a 400 error will be returned. If neither is specified the bucket's DefaultRetention period will be used. This header should be used to calculate a retention period in seconds and then stored in that manner.
     */
    RetentionExpirationDate?: RetentionExpirationDate;
    /**
     * A single legal hold to apply to the object. A legal hold is a Y character long string. The object cannot be overwritten or deleted until all legal holds associated with the object are removed.
     */
    RetentionLegalHoldId?: RetentionLegalHoldID;
    /**
     * Retention period to store on the object in seconds. If this field and Retention-Expiration-Date are specified a 400 error is returned. If neither is specified the bucket's DefaultRetention period will be used. 0 is a legal value assuming the bucket's minimum retention period is also 0.
     */
    RetentionPeriod?: RetentionPeriod;
    /**
     * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide.
     */
    StorageClass?: StorageClass;
    /**
     * VersionId used to reference a specific version of the object.
     */
    VersionId?: ObjectVersionId;
    /**
     * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. This value is unique to each object and is not copied when using the x-amz-metadata-directive header. Instead, you may opt to provide this header in combination with the directive.
     */
    WebsiteRedirectLocation?: WebsiteRedirectLocation;
    /**
     * Specifies the algorithm to use to when encrypting the object (for example, AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * Specifies the Amazon Web Services KMS key ID to use for object encryption. All GET and PUT requests for an object protected by Amazon Web Services KMS will fail if not made via SSL or using SigV4. For information about configuring using any of the officially supported Amazon Web Services SDKs and Amazon Web Services CLI, see Specifying the Signature Version in Request Authentication in the Amazon S3 User Guide.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
    /**
     * Specifies the algorithm to use when decrypting the source object (for example, AES256).
     */
    CopySourceSSECustomerAlgorithm?: CopySourceSSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.
     */
    CopySourceSSECustomerKey?: CopySourceSSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
     */
    CopySourceSSECustomerKeyMD5?: CopySourceSSECustomerKeyMD5;
    /**
     * The tag-set for the object destination object this value must be used in conjunction with the TaggingDirective. The tag-set must be encoded as URL Query parameters.
     */
    Tagging?: TaggingHeader;
    /**
     * The Object Lock mode that you want to apply to the copied object.
     */
    ObjectLockMode?: ObjectLockMode;
    /**
     * The date and time when you want the copied object's Object Lock to expire.
     */
    ObjectLockRetainUntilDate?: ObjectLockRetainUntilDate;
    /**
     * Specifies whether you want to apply a legal hold to the copied object.
     */
    ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
  }
  export interface CopyObjectResult {
    /**
     * Returns the ETag of the new object. The ETag reflects only changes to the contents of an object, not its metadata.
     */
    ETag?: ETag;
    /**
     * Creation date of the object.
     */
    LastModified?: LastModified;
  }
  export interface CopyPartResult {
    /**
     * Entity tag of the object.
     */
    ETag?: ETag;
    /**
     * Date and time at which the object was uploaded.
     */
    LastModified?: LastModified;
  }
  export type CopySource = string;
  export type CopySourceIfMatch = string;
  export type CopySourceIfModifiedSince = Date;
  export type CopySourceIfNoneMatch = string;
  export type CopySourceIfUnmodifiedSince = Date;
  export type CopySourceRange = string;
  export type CopySourceSSECustomerAlgorithm = string;
  export type CopySourceSSECustomerKey = Buffer|Uint8Array|Blob|string;
  export type CopySourceSSECustomerKeyMD5 = string;
  export type CopySourceVersionId = string;
  export interface CreateBucketConfiguration {
    /**
     * Specifies the Region where the bucket will be created. If you don't specify a Region, the bucket is created in the US East (N. Virginia) Region (us-east-1).
     */
    LocationConstraint?: BucketLocationConstraint;
  }
  export interface CreateBucketOutput {
    /**
     * A forward slash followed by the name of the bucket.
     */
    Location?: Location;
  }
  export interface CreateBucketRequest {
    /**
     * The canned ACL to apply to the bucket.
     */
    ACL?: BucketCannedACL;
    /**
     * The name of the bucket to create.
     */
    Bucket: BucketName;
    /**
     * The configuration information for the bucket.
     */
    CreateBucketConfiguration?: CreateBucketConfiguration;
    /**
     * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.
     */
    GrantFullControl?: GrantFullControl;
    /**
     * Allows grantee to list the objects in the bucket.
     */
    GrantRead?: GrantRead;
    /**
     * Allows grantee to read the bucket ACL.
     */
    GrantReadACP?: GrantReadACP;
    /**
     * Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects.
     */
    GrantWrite?: GrantWrite;
    /**
     * Allows grantee to write the ACL for the applicable bucket.
     */
    GrantWriteACP?: GrantWriteACP;
    /**
     * Specifies whether you want S3 Object Lock to be enabled for the new bucket.
     */
    ObjectLockEnabledForBucket?: ObjectLockEnabledForBucket;
    /**
     * The storage account who will be the owner of the bucket.
     */
    IBMServiceInstanceId?: IBMServiceInstanceId;
    IBMSSEKPEncryptionAlgorithm?: IBMSSEKPEncryptionAlgorithm;
    IBMSSEKPCustomerRootKeyCrn?: IBMSSEKPCustomerRootKeyCrn;
  }
  export interface CreateMultipartUploadOutput {
    /**
     * If the bucket has a lifecycle rule configured with an action to abort incomplete multipart uploads and the prefix in the lifecycle rule matches the object name in the request, the response includes this header. The header indicates when the initiated multipart upload becomes eligible for an abort operation. For more information, see  Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration. The response also includes the x-amz-abort-rule-id header that provides the ID of the lifecycle configuration rule that defines this action.
     */
    AbortDate?: AbortDate;
    /**
     * This header is returned along with the x-amz-abort-date header. It identifies the applicable lifecycle configuration rule that defines the action to abort incomplete multipart uploads.
     */
    AbortRuleId?: AbortRuleId;
    /**
     * The name of the bucket to which the multipart upload was initiated. Does not return the access point ARN or access point alias if used. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket?: BucketName;
    /**
     * Object key for which the multipart upload was initiated.
     */
    Key?: ObjectKey;
    /**
     * ID for the initiated multipart upload.
     */
    UploadId?: MultipartUploadId;
    /**
     * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export interface CreateMultipartUploadRequest {
    /**
     * The canned ACL to apply to the object. This action is not supported by Amazon S3 on Outposts.
     */
    ACL?: ObjectCannedACL;
    /**
     * The name of the bucket to which to initiate the upload When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Specifies caching behavior along the request/reply chain.
     */
    CacheControl?: CacheControl;
    /**
     * Specifies presentational information for the object.
     */
    ContentDisposition?: ContentDisposition;
    /**
     * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
     */
    ContentEncoding?: ContentEncoding;
    /**
     * The language the content is in.
     */
    ContentLanguage?: ContentLanguage;
    /**
     * A standard MIME type describing the format of the object data.
     */
    ContentType?: ContentType;
    /**
     * The date and time at which the object is no longer cacheable.
     */
    Expires?: Expires;
    /**
     * Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. This action is not supported by Amazon S3 on Outposts.
     */
    GrantFullControl?: GrantFullControl;
    /**
     * Allows grantee to read the object data and its metadata. This action is not supported by Amazon S3 on Outposts.
     */
    GrantRead?: GrantRead;
    /**
     * Allows grantee to read the object ACL. This action is not supported by Amazon S3 on Outposts.
     */
    GrantReadACP?: GrantReadACP;
    /**
     * Allows grantee to write the ACL for the applicable object. This action is not supported by Amazon S3 on Outposts.
     */
    GrantWriteACP?: GrantWriteACP;
    /**
     * Object key for which the multipart upload is to be initiated.
     */
    Key: ObjectKey;
    /**
     * A map of metadata to store with the object in S3.
     */
    Metadata?: Metadata;
    /**
     * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide.
     */
    StorageClass?: StorageClass;
    /**
     * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
     */
    WebsiteRedirectLocation?: WebsiteRedirectLocation;
    /**
     * Specifies the algorithm to use to when encrypting the object (for example, AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * Specifies the ID of the symmetric encryption customer managed key to use for object encryption. All GET and PUT requests for an object protected by Amazon Web Services KMS will fail if not made via SSL or using SigV4. For information about configuring using any of the officially supported Amazon Web Services SDKs and Amazon Web Services CLI, see Specifying the Signature Version in Request Authentication in the Amazon S3 User Guide.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
    /**
     * The tag-set for the object. The tag-set must be encoded as URL Query parameters.
     */
    Tagging?: TaggingHeader;
    /**
     * Specifies the Object Lock mode that you want to apply to the uploaded object.
     */
    ObjectLockMode?: ObjectLockMode;
    /**
     * Specifies the date and time when you want the Object Lock to expire.
     */
    ObjectLockRetainUntilDate?: ObjectLockRetainUntilDate;
    /**
     * Specifies whether you want to apply a legal hold to the uploaded object.
     */
    ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
  }
  export type CreationDate = Date;
  export type CreationTemplateId = string;
  export type _Date = Date;
  export type Days = number;
  export type DaysAfterInitiation = number;
  export interface DefaultRetention {
    /**
     * The default Object Lock retention mode you want to apply to new objects placed in the specified bucket. Must be used with either Days or Years.
     */
    Mode?: ObjectLockRetentionMode;
    /**
     * The number of days that you want to specify for the default retention period. Must be used with Mode.
     */
    Days?: Days;
    /**
     * The number of years that you want to specify for the default retention period. Must be used with Mode.
     */
    Years?: Years;
  }
  export interface Delete {
    /**
     * The objects to delete.
     */
    Objects: ObjectIdentifierList;
    /**
     * Element to enable quiet mode for the request. When you add this element, you must set its value to true.
     */
    Quiet?: Quiet;
  }
  export interface DeleteBucketCorsRequest {
    /**
     * Specifies the bucket whose cors configuration is being deleted.
     */
    Bucket: BucketName;
  }
  export interface DeleteBucketLifecycleRequest {
    /**
     * The bucket name of the lifecycle to delete.
     */
    Bucket: BucketName;
  }
  export interface DeleteBucketReplicationRequest {
    /**
     *  The bucket name. 
     */
    Bucket: BucketName;
  }
  export interface DeleteBucketRequest {
    /**
     * Specifies the bucket being deleted.
     */
    Bucket: BucketName;
  }
  export interface DeleteBucketTaggingRequest {
    /**
     * The bucket that has the tag set to be removed.
     */
    Bucket: BucketName;
  }
  export interface DeleteBucketWebsiteRequest {
    /**
     * The bucket name for which you want to remove the website configuration. 
     */
    Bucket: BucketName;
  }
  export type DeleteMarker = boolean;
  export interface DeleteMarkerEntry {
    /**
     * The account that created the delete marker.&gt;
     */
    Owner?: Owner;
    /**
     * The object key.
     */
    Key?: ObjectKey;
    /**
     * Version ID of an object.
     */
    VersionId?: ObjectVersionId;
    /**
     * Specifies whether the object is (true) or is not (false) the latest version of an object.
     */
    IsLatest?: IsLatest;
    /**
     * Date and time the object was last modified.
     */
    LastModified?: LastModified;
  }
  export interface DeleteMarkerReplication {
    /**
     * Indicates whether to replicate delete markers.  Indicates whether to replicate delete markers. 
     */
    Status: DeleteMarkerReplicationStatus;
  }
  export type DeleteMarkerReplicationStatus = "Enabled"|"Disabled"|string;
  export type DeleteMarkerVersionId = string;
  export type DeleteMarkers = DeleteMarkerEntry[];
  export interface DeleteObjectOutput {
    /**
     * Specifies whether the versioned object that was permanently deleted was (true) or was not (false) a delete marker.
     */
    DeleteMarker?: DeleteMarker;
    /**
     * Returns the version ID of the delete marker created as a result of the DELETE operation.
     */
    VersionId?: ObjectVersionId;
  }
  export interface DeleteObjectRequest {
    /**
     * The bucket name of the bucket containing the object.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Key name of the object to delete.
     */
    Key: ObjectKey;
    /**
     * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled.
     */
    MFA?: MFA;
    /**
     * VersionId used to reference a specific version of the object.
     */
    VersionId?: ObjectVersionId;
    /**
     * Indicates whether S3 Object Lock should bypass Governance-mode restrictions to process this operation. To use this header, you must have the s3:BypassGovernanceRetention permission.
     */
    BypassGovernanceRetention?: BypassGovernanceRetention;
  }
  export interface DeleteObjectTaggingOutput {
    /**
     * The versionId of the object the tag-set was removed from.
     */
    VersionId?: ObjectVersionId;
  }
  export interface DeleteObjectTaggingRequest {
    /**
     * The bucket name containing the objects from which to remove the tags.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * The key that identifies the object in the bucket from which to remove all tags.
     */
    Key: ObjectKey;
    /**
     * The versionId of the object that the tag-set will be removed from.
     */
    VersionId?: ObjectVersionId;
  }
  export interface DeleteObjectsOutput {
    /**
     * Container element for a successful delete. It identifies the object that was successfully deleted.
     */
    Deleted?: DeletedObjects;
    /**
     * Container for a failed delete action that describes the object that Amazon S3 attempted to delete and the error it encountered.
     */
    Errors?: Errors;
  }
  export interface DeleteObjectsRequest {
    /**
     * The bucket name containing the objects to delete.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Container for the request.
     */
    Delete: Delete;
    /**
     * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled.
     */
    MFA?: MFA;
    /**
     * Specifies whether you want to delete this object even if it has a Governance-type Object Lock in place. To use this header, you must have the s3:BypassGovernanceRetention permission.
     */
    BypassGovernanceRetention?: BypassGovernanceRetention;
  }
  export interface DeletePublicAccessBlockRequest {
    /**
     * The Amazon S3 bucket whose PublicAccessBlock configuration you want to delete. 
     */
    Bucket: BucketName;
    /**
     * The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code 403 Forbidden (access denied).
     */
    ExpectedBucketOwner?: AccountId;
  }
  export interface DeletedObject {
    /**
     * The name of the deleted object.
     */
    Key?: ObjectKey;
    /**
     * The version ID of the deleted object.
     */
    VersionId?: ObjectVersionId;
    /**
     * Specifies whether the versioned object that was permanently deleted was (true) or was not (false) a delete marker. In a simple DELETE, this header indicates whether (true) or not (false) a delete marker was created.
     */
    DeleteMarker?: DeleteMarker;
    /**
     * The version ID of the delete marker created as a result of the DELETE operation. If you delete a specific object version, the value returned by this header is the version ID of the object version deleted.
     */
    DeleteMarkerVersionId?: DeleteMarkerVersionId;
  }
  export type DeletedObjects = DeletedObject[];
  export type Delimiter = string;
  export type Description = string;
  export interface Destination {
    /**
     *  The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the results.
     */
    Bucket: BucketName;
    /**
     *  The storage class to use when replicating objects, such as COS Standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create the object replica.  For valid values, see the StorageClass element of the PUT Bucket replication action in the Amazon S3 API Reference.
     */
    StorageClass?: StorageClass;
  }
  export type DisplayName = string;
  export type ETag = string;
  export type EmailAddress = string;
  export type EnableRequestProgress = boolean;
  export type EncodingType = "url"|string;
  export interface Error {
    /**
     * The error key.
     */
    Key?: ObjectKey;
    /**
     * The version ID of the error.
     */
    VersionId?: ObjectVersionId;
    /**
     * The error code is a string that uniquely identifies an error condition. It is meant to be read and understood by programs that detect and handle errors by type. The following is a list of Amazon S3 error codes. For more information, see Error responses.      Code: AccessDenied     Description: Access Denied    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: AccountProblem    Description: There is a problem with your Amazon Web Services account that prevents the action from completing successfully. Contact Amazon Web Services Support for further assistance.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: AllAccessDisabled    Description: All access to this Amazon S3 resource has been disabled. Contact Amazon Web Services Support for further assistance.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: AmbiguousGrantByEmailAddress    Description: The email address you provided is associated with more than one account.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: AuthorizationHeaderMalformed    Description: The authorization header you provided is invalid.    HTTP Status Code: 400 Bad Request    HTTP Status Code: N/A        Code: BadDigest    Description: The Content-MD5 you specified did not match what we received.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: BucketAlreadyExists    Description: The requested bucket name is not available. The bucket namespace is shared by all users of the system. Please select a different name and try again.    HTTP Status Code: 409 Conflict    SOAP Fault Code Prefix: Client        Code: BucketAlreadyOwnedByYou    Description: The bucket you tried to create already exists, and you own it. Amazon S3 returns this error in all Amazon Web Services Regions except in the North Virginia Region. For legacy compatibility, if you re-create an existing bucket that you already own in the North Virginia Region, Amazon S3 returns 200 OK and resets the bucket access control lists (ACLs).    Code: 409 Conflict (in all Regions except the North Virginia Region)     SOAP Fault Code Prefix: Client        Code: BucketNotEmpty    Description: The bucket you tried to delete is not empty.    HTTP Status Code: 409 Conflict    SOAP Fault Code Prefix: Client        Code: CredentialsNotSupported    Description: This request does not support credentials.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: CrossLocationLoggingProhibited    Description: Cross-location logging not allowed. Buckets in one geographic location cannot log information to a bucket in another location.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: EntityTooSmall    Description: Your proposed upload is smaller than the minimum allowed object size.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: EntityTooLarge    Description: Your proposed upload exceeds the maximum allowed object size.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: ExpiredToken    Description: The provided token has expired.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: IllegalVersioningConfigurationException     Description: Indicates that the versioning configuration specified in the request is invalid.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: IncompleteBody    Description: You did not provide the number of bytes specified by the Content-Length HTTP header    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: IncorrectNumberOfFilesInPostRequest    Description: POST requires exactly one file upload per request.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InlineDataTooLarge    Description: Inline data exceeds the maximum allowed size.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InternalError    Description: We encountered an internal error. Please try again.    HTTP Status Code: 500 Internal Server Error    SOAP Fault Code Prefix: Server        Code: InvalidAccessKeyId    Description: The Amazon Web Services access key ID you provided does not exist in our records.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: InvalidAddressingHeader    Description: You must specify the Anonymous role.    HTTP Status Code: N/A    SOAP Fault Code Prefix: Client        Code: InvalidArgument    Description: Invalid Argument    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidBucketName    Description: The specified bucket is not valid.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidBucketState    Description: The request is not valid with the current state of the bucket.    HTTP Status Code: 409 Conflict    SOAP Fault Code Prefix: Client        Code: InvalidDigest    Description: The Content-MD5 you specified is not valid.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidEncryptionAlgorithmError    Description: The encryption request you specified is not valid. The valid value is AES256.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidLocationConstraint    Description: The specified location constraint is not valid. For more information about Regions, see How to Select a Region for Your Buckets.     HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidObjectState    Description: The action is not valid for the current state of the object.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: InvalidPart    Description: One or more of the specified parts could not be found. The part might not have been uploaded, or the specified entity tag might not have matched the part's entity tag.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidPartOrder    Description: The list of parts was not in ascending order. Parts list must be specified in order by part number.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidPayer    Description: All access to this object has been disabled. Please contact Amazon Web Services Support for further assistance.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: InvalidPolicyDocument    Description: The content of the form does not meet the conditions specified in the policy document.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidRange    Description: The requested range cannot be satisfied.    HTTP Status Code: 416 Requested Range Not Satisfiable    SOAP Fault Code Prefix: Client        Code: InvalidRequest    Description: Please use AWS4-HMAC-SHA256.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: SOAP requests must be made over an HTTPS connection.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidRequest    Description: Amazon S3 Transfer Acceleration is not supported for buckets with non-DNS compliant names.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: Amazon S3 Transfer Acceleration is not supported for buckets with periods (.) in their names.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: Amazon S3 Transfer Accelerate endpoint only supports virtual style requests.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: Amazon S3 Transfer Accelerate is not configured on this bucket.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: Amazon S3 Transfer Accelerate is disabled on this bucket.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: Amazon S3 Transfer Acceleration is not supported on this bucket. Contact Amazon Web Services Support for more information.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: Amazon S3 Transfer Acceleration cannot be enabled on this bucket. Contact Amazon Web Services Support for more information.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidSecurity    Description: The provided security credentials are not valid.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: InvalidSOAPRequest    Description: The SOAP request body is invalid.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidStorageClass    Description: The storage class you specified is not valid.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidTargetBucketForLogging    Description: The target bucket for logging does not exist, is not owned by you, or does not have the appropriate grants for the log-delivery group.     HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidToken    Description: The provided token is malformed or otherwise invalid.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidURI    Description: Couldn't parse the specified URI.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: KeyTooLongError    Description: Your key is too long.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MalformedACLError    Description: The XML you provided was not well-formed or did not validate against our published schema.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MalformedPOSTRequest     Description: The body of your POST request is not well-formed multipart/form-data.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MalformedXML    Description: This happens when the user sends malformed XML (XML that doesn't conform to the published XSD) for the configuration. The error message is, "The XML you provided was not well-formed or did not validate against our published schema."     HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MaxMessageLengthExceeded    Description: Your request was too big.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MaxPostPreDataLengthExceededError    Description: Your POST request fields preceding the upload file were too large.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MetadataTooLarge    Description: Your metadata headers exceed the maximum allowed metadata size.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MethodNotAllowed    Description: The specified method is not allowed against this resource.    HTTP Status Code: 405 Method Not Allowed    SOAP Fault Code Prefix: Client        Code: MissingAttachment    Description: A SOAP attachment was expected, but none were found.    HTTP Status Code: N/A    SOAP Fault Code Prefix: Client        Code: MissingContentLength    Description: You must provide the Content-Length HTTP header.    HTTP Status Code: 411 Length Required    SOAP Fault Code Prefix: Client        Code: MissingRequestBodyError    Description: This happens when the user sends an empty XML document as a request. The error message is, "Request body is empty."     HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MissingSecurityElement    Description: The SOAP 1.1 request is missing a security element.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MissingSecurityHeader    Description: Your request is missing a required header.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: NoLoggingStatusForKey    Description: There is no such thing as a logging status subresource for a key.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: NoSuchBucket    Description: The specified bucket does not exist.    HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client        Code: NoSuchBucketPolicy    Description: The specified bucket does not have a bucket policy.    HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client        Code: NoSuchKey    Description: The specified key does not exist.    HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client        Code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.     HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client        Code: NoSuchUpload    Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.    HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client        Code: NoSuchVersion     Description: Indicates that the version ID specified in the request does not match an existing version.    HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client        Code: NotImplemented    Description: A header you provided implies functionality that is not implemented.    HTTP Status Code: 501 Not Implemented    SOAP Fault Code Prefix: Server        Code: NotSignedUp    Description: Your account is not signed up for the Amazon S3 service. You must sign up before you can use Amazon S3. You can sign up at the following URL: Amazon S3     HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: OperationAborted    Description: A conflicting conditional action is currently in progress against this resource. Try again.    HTTP Status Code: 409 Conflict    SOAP Fault Code Prefix: Client        Code: PermanentRedirect    Description: The bucket you are attempting to access must be addressed using the specified endpoint. Send all future requests to this endpoint.    HTTP Status Code: 301 Moved Permanently    SOAP Fault Code Prefix: Client        Code: PreconditionFailed    Description: At least one of the preconditions you specified did not hold.    HTTP Status Code: 412 Precondition Failed    SOAP Fault Code Prefix: Client        Code: Redirect    Description: Temporary redirect.    HTTP Status Code: 307 Moved Temporarily    SOAP Fault Code Prefix: Client        Code: RestoreAlreadyInProgress    Description: Object restore is already in progress.    HTTP Status Code: 409 Conflict    SOAP Fault Code Prefix: Client        Code: RequestIsNotMultiPartContent    Description: Bucket POST must be of the enclosure-type multipart/form-data.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: RequestTimeout    Description: Your socket connection to the server was not read from or written to within the timeout period.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: RequestTimeTooSkewed    Description: The difference between the request time and the server's time is too large.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: RequestTorrentOfBucketError    Description: Requesting the torrent file of a bucket is not permitted.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: SignatureDoesNotMatch    Description: The request signature we calculated does not match the signature you provided. Check your Amazon Web Services secret access key and signing method. For more information, see REST Authentication and SOAP Authentication for details.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: ServiceUnavailable    Description: Service is unable to handle request.    HTTP Status Code: 503 Service Unavailable    SOAP Fault Code Prefix: Server        Code: SlowDown    Description: Reduce your request rate.    HTTP Status Code: 503 Slow Down    SOAP Fault Code Prefix: Server        Code: TemporaryRedirect    Description: You are being redirected to the bucket while DNS updates.    HTTP Status Code: 307 Moved Temporarily    SOAP Fault Code Prefix: Client        Code: TokenRefreshRequired    Description: The provided token must be refreshed.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: TooManyBuckets    Description: You have attempted to create more buckets than allowed.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: UnexpectedContent    Description: This request does not support content.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: UnresolvableGrantByEmailAddress    Description: The email address you provided does not match any account on record.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: UserKeyMustBeSpecified    Description: The bucket POST must contain the specified field name. If it is specified, check the order of the fields.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client     
     */
    Code?: Code;
    /**
     * The error message contains a generic description of the error condition in English. It is intended for a human audience. Simple programs display the message directly to the end user if they encounter an error condition they don't know how or don't care to handle. Sophisticated programs with more exhaustive error handling and proper internationalization are more likely to ignore the error message.
     */
    Message?: Message;
  }
  export type ErrorCode = string;
  export interface ErrorDocument {
    /**
     * The object key name to use when a 4XX class error occurs.  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see  XML related object key constraints. 
     */
    Key: ObjectKey;
  }
  export type ErrorMessage = string;
  export type Errors = Error[];
  export type Event = "s3:ReducedRedundancyLostObject"|"s3:ObjectCreated:*"|"s3:ObjectCreated:Put"|"s3:ObjectCreated:Post"|"s3:ObjectCreated:Copy"|"s3:ObjectCreated:CompleteMultipartUpload"|"s3:ObjectRemoved:*"|"s3:ObjectRemoved:Delete"|"s3:ObjectRemoved:DeleteMarkerCreated"|string;
  export type EventList = Event[];
  export type Expiration = string;
  export type ExpirationStatus = "Enabled"|"Disabled"|string;
  export type ExpiredObjectDeleteMarker = boolean;
  export type Expires = Date;
  export type ExposeHeader = string;
  export type ExposeHeaders = ExposeHeader[];
  export type Expression = string;
  export interface ExtendObjectRetentionRequest {
    Bucket: BucketName;
    Key: ObjectKey;
    AdditionalRetentionPeriod?: AdditionalRetentionPeriod;
    ExtendRetentionFromCurrentTime?: ExtendRetentionFromCurrentTime;
    NewRetentionExpirationDate?: NewRetentionExpirationDate;
    NewRetentionPeriod?: NewRetentionPeriod;
  }
  export type ExtendRetentionFromCurrentTime = number;
  export type FetchOwner = boolean;
  export type FieldDelimiter = string;
  export interface FilterRule {
    /**
     * The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see Configuring Event Notifications in the Amazon S3 User Guide.
     */
    Name?: FilterRuleName;
    /**
     * The value that the filter searches for in object key names.
     */
    Value?: FilterRuleValue;
  }
  export type FilterRuleList = FilterRule[];
  export type FilterRuleName = "prefix"|"suffix"|string;
  export type FilterRuleValue = string;
  export interface GetBucketAclOutput {
    /**
     * Container for the bucket owner's display name and ID.
     */
    Owner?: Owner;
    /**
     * A list of grants.
     */
    Grants?: Grants;
  }
  export interface GetBucketAclRequest {
    /**
     * Specifies the S3 bucket whose ACL is being requested. To use this API operation against an access point, provide the alias of the access point in place of the bucket name. To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.
     */
    Bucket: BucketName;
  }
  export interface GetBucketCorsOutput {
    /**
     * A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.
     */
    CORSRules?: CORSRules;
  }
  export interface GetBucketCorsRequest {
    /**
     * The bucket name for which to get the cors configuration. To use this API operation against an access point, provide the alias of the access point in place of the bucket name. To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.
     */
    Bucket: BucketName;
    MirrorDestination?: MirrorDestination;
  }
  export interface GetBucketLifecycleConfigurationOutput {
    /**
     * Container for a lifecycle rule.
     */
    Rules?: LifecycleRules;
  }
  export interface GetBucketLifecycleConfigurationRequest {
    /**
     * The name of the bucket for which to get the lifecycle information.
     */
    Bucket: BucketName;
  }
  export interface GetBucketLifecycleOutput {
    /**
     * Container for a lifecycle rule.
     */
    Rules?: Rules;
  }
  export interface GetBucketLifecycleRequest {
    /**
     * The name of the bucket for which to get the lifecycle information.
     */
    Bucket: BucketName;
  }
  export interface GetBucketLocationOutput {
    /**
     * Specifies the Region where the bucket resides. For a list of all the Amazon S3 supported location constraints by Region, see Regions and Endpoints. Buckets in Region us-east-1 have a LocationConstraint of null.
     */
    LocationConstraint?: BucketLocationConstraint;
  }
  export interface GetBucketLocationRequest {
    /**
     * The name of the bucket for which to get the location. To use this API operation against an access point, provide the alias of the access point in place of the bucket name. To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.
     */
    Bucket: BucketName;
  }
  export interface GetBucketProtectionConfigurationOutput {
    /**
     * Retention status of a bucket.
     */
    Status?: BucketProtectionStatus;
    /**
     * Minimum retention period for an object, if a PUT of an object specifies a shorter retention period the PUT object will fail.
     */
    MinimumRetention?: BucketProtectionMinimumRetention;
    /**
     * Default retention period for an object, if a PUT of an object does not specify a retention period this value will be converted to seconds and used.
     */
    DefaultRetention?: BucketProtectionDefaultRetention;
    /**
     * Maximum retention period for an object, if a PUT of an object specifies a longer retention period the PUT object will fail.
     */
    MaximumRetention?: BucketProtectionMaximumRetention;
    /**
     * Enable permanent retention for an object.
     */
    EnablePermanentRetention?: BucketProtectionEnablePermanentRetention;
    /**
     * Indicates whether this bucket has an active protection management state. This header is only included if protection management is activated on a bucket
     */
    IbmProtectionManagementState?: IbmProtectionManagementState;
  }
  export interface GetBucketProtectionConfigurationRequest {
    Bucket: BucketName;
  }
  export interface GetBucketReplicationOutput {
    ReplicationConfiguration?: ReplicationConfiguration;
  }
  export interface GetBucketReplicationRequest {
    /**
     * The bucket name for which to get the replication information.
     */
    Bucket: BucketName;
  }
  export interface GetBucketTaggingOutput {
    /**
     * Contains the tag set.
     */
    TagSet: TagSet;
  }
  export interface GetBucketTaggingRequest {
    /**
     * The name of the bucket for which to get the tagging information.
     */
    Bucket: BucketName;
    MirrorDestination?: MirrorDestination;
  }
  export interface GetBucketVersioningOutput {
    /**
     * The versioning state of the bucket.
     */
    Status?: BucketVersioningStatus;
    /**
     * Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only returned if the bucket has been configured with MFA delete. If the bucket has never been so configured, this element is not returned.
     */
    MFADelete?: MFADeleteStatus;
  }
  export interface GetBucketVersioningRequest {
    /**
     * The name of the bucket for which to get the versioning information.
     */
    Bucket: BucketName;
  }
  export interface GetBucketWebsiteOutput {
    /**
     * Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
     */
    RedirectAllRequestsTo?: RedirectAllRequestsTo;
    /**
     * The name of the index document for the website (for example index.html).
     */
    IndexDocument?: IndexDocument;
    /**
     * The object key name of the website error document to use for 4XX class errors.
     */
    ErrorDocument?: ErrorDocument;
    /**
     * Rules that define when a redirect is applied and the redirect behavior.
     */
    RoutingRules?: RoutingRules;
  }
  export interface GetBucketWebsiteRequest {
    /**
     * The bucket name for which to get the website configuration.
     */
    Bucket: BucketName;
  }
  export interface GetObjectAclOutput {
    /**
     *  Container for the bucket owner's display name and ID.
     */
    Owner?: Owner;
    /**
     * A list of grants.
     */
    Grants?: Grants;
  }
  export interface GetObjectAclRequest {
    /**
     * The bucket name that contains the object for which to get the ACL information.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * The key of the object for which to get the ACL information.
     */
    Key: ObjectKey;
    MirrorDestination?: MirrorDestination;
    /**
     * VersionId used to reference a specific version of the object.
     */
    VersionId?: ObjectVersionId;
  }
  export interface GetObjectLegalHoldOutput {
    /**
     * The current legal hold status for the specified object.
     */
    LegalHold?: ObjectLockLegalHold;
  }
  export interface GetObjectLegalHoldRequest {
    /**
     * The bucket name containing the object whose legal hold status you want to retrieve.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * The key name for the object whose legal hold status you want to retrieve.
     */
    Key: ObjectKey;
    /**
     * The version ID of the object whose legal hold status you want to retrieve.
     */
    VersionId?: ObjectVersionId;
    /**
     * Ignored by COS if present.
     */
    ExpectedBucketOwner?: AccountId;
  }
  export interface GetObjectLockConfigurationOutput {
    /**
     * The specified bucket's Object Lock configuration.
     */
    ObjectLockConfiguration?: ObjectLockConfiguration;
    /**
     * Indicates whether this bucket has an active protection management state. This header is only included if protection management is activated on a bucket
     */
    IbmProtectionManagementState?: IbmProtectionManagementState;
  }
  export interface GetObjectLockConfigurationRequest {
    /**
     * The bucket whose Object Lock configuration you want to retrieve. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Ignored by COS if present.
     */
    ExpectedBucketOwner?: AccountId;
  }
  export interface GetObjectOutput {
    /**
     * Object data.
     */
    Body?: Body;
    /**
     * Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this response header does not appear in the response.
     */
    DeleteMarker?: DeleteMarker;
    /**
     * Indicates that a range of bytes was specified.
     */
    AcceptRanges?: AcceptRanges;
    /**
     * If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the expiry-date and rule-id key-value pairs providing object expiration information. The value of the rule-id is URL-encoded.
     */
    Expiration?: Expiration;
    /**
     * If the object is an archived object (an object whose storage class is GLACIER), the response includes this header if either the archive restoration is in progress (see RestoreObject or an archive copy is already restored.  If an archive copy is already restored, the header value indicates when Amazon S3 is scheduled to delete the object copy. For example:  x-amz-restore: ongoing-request="false", expiry-date="Fri, 21 Dec 2012 00:00:00 GMT"  If the object restoration is in progress, the header returns the value ongoing-request="true". For more information about archiving objects, see Transitioning Objects: General Considerations.
     */
    Restore?: Restore;
    /**
     * Creation date of the object.
     */
    LastModified?: LastModified;
    /**
     * Size of the body in bytes.
     */
    ContentLength?: ContentLength;
    /**
     * An entity tag (ETag) is an opaque identifier assigned by a web server to a specific version of a resource found at a URL.
     */
    ETag?: ETag;
    /**
     * Version of the object.
     */
    VersionId?: ObjectVersionId;
    /**
     * Specifies caching behavior along the request/reply chain.
     */
    CacheControl?: CacheControl;
    /**
     * Specifies presentational information for the object.
     */
    ContentDisposition?: ContentDisposition;
    /**
     * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
     */
    ContentEncoding?: ContentEncoding;
    /**
     * The language the content is in.
     */
    ContentLanguage?: ContentLanguage;
    /**
     * The portion of the object returned in the response.
     */
    ContentRange?: ContentRange;
    /**
     * A standard MIME type describing the format of the object data.
     */
    ContentType?: ContentType;
    /**
     * The date and time at which the object is no longer cacheable.
     */
    Expires?: Expires;
    /**
     * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
     */
    WebsiteRedirectLocation?: WebsiteRedirectLocation;
    /**
     * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * A map of metadata to store with the object in S3.
     */
    Metadata?: Metadata;
    /**
     * Date on which it will be legal to delete or modify the object. You can only specify this or the Retention-Period header. If both are specified a 400 error will be returned. If neither is specified the bucket's DefaultRetention period will be used. This header should be used to calculate a retention period in seconds and then stored in that manner.
     */
    RetentionExpirationDate?: RetentionExpirationDate;
    /**
     * Returns the count of legal holds on the object. If there are no legal holds, the header is not returned
     */
    RetentionLegalHoldCount?: RetentionLegalHoldCount;
    /**
     * Retention period to store on the object in seconds. If this field and Retention-Expiration-Date are specified a 400 error is returned. If neither is specified the bucket's DefaultRetention period will be used. 0 is a legal value assuming the bucket's minimum retention period is also 0.
     */
    RetentionPeriod?: RetentionPeriod;
    /**
     * The source of the retention period stored for the object
     */
    RetentionPeriodSource?: RetentionPeriodSource;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
    /**
     * Provides storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects. For more information, see Storage Classes.
     */
    StorageClass?: StorageClass;
    /**
     * The count of parts this object has. This value is only returned if you specify partNumber in your request and the object was uploaded as a multipart upload.
     */
    PartsCount?: PartsCount;
    /**
     * The number of tags, if any, on the object.
     */
    TagCount?: TagCount;
    /**
     * The Object Lock mode, if any, that's in effect for this object. This header is only returned if the requester has the s3:GetObjectRetention permission. For more information about S3 Object Lock, see Object Lock. 
     */
    ObjectLockMode?: ObjectLockMode;
    /**
     * The date and time when the Object Lock retention period expires. This header is only returned if the requester has the s3:GetObjectRetention permission.
     */
    ObjectLockRetainUntilDate?: ObjectLockRetainUntilDate;
    /**
     * Specifies whether a legal hold is in effect for this object. This header is only returned if the requester has the s3:GetObjectLegalHold permission. This header is not returned if the specified version of this object has never had a legal hold applied. For more information about S3 Object Lock, see Object Lock.
     */
    ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
    /**
     * This header is only included if an object has transition metadata.  This header will indicate the transition storage class and time of transition.  If this header and the x-amz-restore header are both included, this header will indicate the time at which the object was originally archived.
     */
    TemporaryCopyStorageClass?: StorageClass;
    /**
     * Provides information of the transition storage class and time of transition.
     */
    Transition?: IBMTransition;
  }
  export interface GetObjectRequest {
    /**
     * The bucket name containing the object.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When using an Object Lambda access point the hostname takes the form AccessPointName-AccountId.s3-object-lambda.Region.amazonaws.com. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using Amazon S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Return the object only if its entity tag (ETag) is the same as the one specified; otherwise, return a 412 (precondition failed) error.
     */
    IfMatch?: IfMatch;
    /**
     * Return the object only if it has been modified since the specified time; otherwise, return a 304 (not modified) error.
     */
    IfModifiedSince?: IfModifiedSince;
    /**
     * Return the object only if its entity tag (ETag) is different from the one specified; otherwise, return a 304 (not modified) error.
     */
    IfNoneMatch?: IfNoneMatch;
    /**
     * Return the object only if it has not been modified since the specified time; otherwise, return a 412 (precondition failed) error.
     */
    IfUnmodifiedSince?: IfUnmodifiedSince;
    /**
     * Key of the object to get.
     */
    Key: ObjectKey;
    MirrorDestination?: MirrorDestination;
    /**
     * Downloads the specified range bytes of an object. For more information about the HTTP Range header, see https://www.rfc-editor.org/rfc/rfc9110.html#name-range.  Amazon S3 doesn't support retrieving multiple ranges of data per GET request. 
     */
    Range?: Range;
    /**
     * Sets the Cache-Control header of the response.
     */
    ResponseCacheControl?: ResponseCacheControl;
    /**
     * Sets the Content-Disposition header of the response
     */
    ResponseContentDisposition?: ResponseContentDisposition;
    /**
     * Sets the Content-Encoding header of the response.
     */
    ResponseContentEncoding?: ResponseContentEncoding;
    /**
     * Sets the Content-Language header of the response.
     */
    ResponseContentLanguage?: ResponseContentLanguage;
    /**
     * Sets the Content-Type header of the response.
     */
    ResponseContentType?: ResponseContentType;
    /**
     * Sets the Expires header of the response.
     */
    ResponseExpires?: ResponseExpires;
    /**
     * VersionId used to reference a specific version of the object.
     */
    VersionId?: ObjectVersionId;
    /**
     * Specifies the algorithm to use to when decrypting the object (for example, AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 used to encrypt the data. This value is used to decrypt the object when recovering it and must match the one used when storing the data. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' GET request for the part specified. Useful for downloading just a part of an object.
     */
    PartNumber?: PartNumber;
  }
  export interface GetObjectRetentionOutput {
    /**
     * The container element for an object's retention settings.
     */
    Retention?: ObjectLockRetention;
  }
  export interface GetObjectRetentionRequest {
    /**
     * The bucket name containing the object whose retention settings you want to retrieve.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * The key name for the object whose retention settings you want to retrieve.
     */
    Key: ObjectKey;
    /**
     * The version ID for the object whose retention settings you want to retrieve.
     */
    VersionId?: ObjectVersionId;
    /**
     * Ignored by COS if present.
     */
    ExpectedBucketOwner?: AccountId;
  }
  export interface GetObjectTaggingOutput {
    /**
     * The versionId of the object for which you got the tagging information.
     */
    VersionId?: ObjectVersionId;
    /**
     * Contains the tag set.
     */
    TagSet: TagSet;
  }
  export interface GetObjectTaggingRequest {
    /**
     * The bucket name containing the object for which to get the tagging information.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Object key for which to get the tagging information.
     */
    Key: ObjectKey;
    /**
     * The versionId of the object for which to get the tagging information.
     */
    VersionId?: ObjectVersionId;
  }
  export interface GetPublicAccessBlockOutput {
    /**
     * The PublicAccessBlock configuration currently in effect for this Amazon S3 bucket.
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  }
  export interface GetPublicAccessBlockRequest {
    /**
     * The name of the Amazon S3 bucket whose PublicAccessBlock configuration you want to retrieve. 
     */
    Bucket: BucketName;
    /**
     * Ignored by COS.
     */
    ExpectedBucketOwner?: AccountId;
  }
  export interface GlacierJobParameters {
    /**
     * Retrieval tier at which the restore will be processed.
     */
    Tier: Tier;
  }
  export interface Grant {
    /**
     * The person being granted permissions.
     */
    Grantee?: Grantee;
    /**
     * Specifies the permission given to the grantee.
     */
    Permission?: Permission;
  }
  export type GrantFullControl = string;
  export type GrantRead = string;
  export type GrantReadACP = string;
  export type GrantWrite = string;
  export type GrantWriteACP = string;
  export interface Grantee {
    /**
     * Screen name of the grantee.
     */
    DisplayName?: DisplayName;
    /**
     * Email address of the grantee.  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference. 
     */
    EmailAddress?: EmailAddress;
    /**
     * The canonical user ID of the grantee.
     */
    ID?: ID;
    /**
     * Type of grantee
     */
    Type: Type;
    /**
     * URI of the grantee group.
     */
    URI?: URI;
  }
  export type Grants = Grant[];
  export interface HeadBucketRequest {
    /**
     * The bucket name. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
  }
  export interface HeadObjectOutput {
    /**
     * Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this response header does not appear in the response.
     */
    DeleteMarker?: DeleteMarker;
    /**
     * Indicates that a range of bytes was specified.
     */
    AcceptRanges?: AcceptRanges;
    /**
     * If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the expiry-date and rule-id key-value pairs providing object expiration information. The value of the rule-id is URL-encoded.
     */
    Expiration?: Expiration;
    /**
     * If the object is an archived object (an object whose storage class is GLACIER), the response includes this header if either the archive restoration is in progress (see RestoreObject or an archive copy is already restored.  If an archive copy is already restored, the header value indicates when Amazon S3 is scheduled to delete the object copy. For example:  x-amz-restore: ongoing-request="false", expiry-date="Fri, 21 Dec 2012 00:00:00 GMT"  If the object restoration is in progress, the header returns the value ongoing-request="true". For more information about archiving objects, see Transitioning Objects: General Considerations.
     */
    Restore?: Restore;
    /**
     * Creation date of the object.
     */
    LastModified?: LastModified;
    /**
     * Size of the body in bytes.
     */
    ContentLength?: ContentLength;
    /**
     * An entity tag (ETag) is an opaque identifier assigned by a web server to a specific version of a resource found at a URL.
     */
    ETag?: ETag;
    /**
     * Version of the object.
     */
    VersionId?: ObjectVersionId;
    /**
     * Specifies caching behavior along the request/reply chain.
     */
    CacheControl?: CacheControl;
    /**
     * Specifies presentational information for the object.
     */
    ContentDisposition?: ContentDisposition;
    /**
     * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
     */
    ContentEncoding?: ContentEncoding;
    /**
     * The language the content is in.
     */
    ContentLanguage?: ContentLanguage;
    /**
     * A standard MIME type describing the format of the object data.
     */
    ContentType?: ContentType;
    /**
     * The date and time at which the object is no longer cacheable.
     */
    Expires?: Expires;
    /**
     * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
     */
    WebsiteRedirectLocation?: WebsiteRedirectLocation;
    /**
     * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * A map of metadata to store with the object in S3.
     */
    Metadata?: Metadata;
    /**
     * Date on which it will be legal to delete or modify the object. You can only specify this or the Retention-Period header. If both are specified a 400 error will be returned. If neither is specified the bucket's DefaultRetention period will be used. This header should be used to calculate a retention period in seconds and then stored in that manner.
     */
    RetentionExpirationDate?: RetentionExpirationDate;
    /**
     * Returns the count of legal holds on the object. If there are no legal holds, the header is not returned
     */
    RetentionLegalHoldCount?: RetentionLegalHoldCount;
    /**
     * Retention period to store on the object in seconds. If this field and Retention-Expiration-Date are specified a 400 error is returned. If neither is specified the bucket's DefaultRetention period will be used. 0 is a legal value assuming the bucket's minimum retention period is also 0.
     */
    RetentionPeriod?: RetentionPeriod;
    /**
     * The source of the retention period stored for the object
     */
    RetentionPeriodSource?: RetentionPeriodSource;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
    /**
     * Provides storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects. For more information, see Storage Classes.
     */
    StorageClass?: StorageClass;
    /**
     * The count of parts this object has. This value is only returned if you specify partNumber in your request and the object was uploaded as a multipart upload.
     */
    PartsCount?: PartsCount;
    /**
     * The Object Lock mode, if any, that's in effect for this object. This header is only returned if the requester has the s3:GetObjectRetention permission. For more information about S3 Object Lock, see Object Lock. 
     */
    ObjectLockMode?: ObjectLockMode;
    /**
     * The date and time when the Object Lock retention period expires. This header is only returned if the requester has the s3:GetObjectRetention permission.
     */
    ObjectLockRetainUntilDate?: ObjectLockRetainUntilDate;
    /**
     * Specifies whether a legal hold is in effect for this object. This header is only returned if the requester has the s3:GetObjectLegalHold permission. This header is not returned if the specified version of this object has never had a legal hold applied. For more information about S3 Object Lock, see Object Lock.
     */
    ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
    /**
     * This header is only included if an object has transition metadata.  This header will indicate the transition storage class and time of transition.  If this header and the x-amz-restore header are both included, this header will indicate the time at which the object was originally archived.
     */
    TemporaryCopyStorageClass?: StorageClass;
    /**
     * Provides information of the transition storage class and time of transition.
     */
    Transition?: IBMTransition;
  }
  export interface HeadObjectRequest {
    /**
     * The name of the bucket containing the object. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Return the object only if its entity tag (ETag) is the same as the one specified; otherwise, return a 412 (precondition failed) error.
     */
    IfMatch?: IfMatch;
    /**
     * Return the object only if it has been modified since the specified time; otherwise, return a 304 (not modified) error.
     */
    IfModifiedSince?: IfModifiedSince;
    /**
     * Return the object only if its entity tag (ETag) is different from the one specified; otherwise, return a 304 (not modified) error.
     */
    IfNoneMatch?: IfNoneMatch;
    /**
     * Return the object only if it has not been modified since the specified time; otherwise, return a 412 (precondition failed) error.
     */
    IfUnmodifiedSince?: IfUnmodifiedSince;
    /**
     * The object key.
     */
    Key: ObjectKey;
    MirrorDestination?: MirrorDestination;
    /**
     * HeadObject returns only the metadata for an object. If the Range is satisfiable, only the ContentLength is affected in the response. If the Range is not satisfiable, S3 returns a 416 - Requested Range Not Satisfiable error.
     */
    Range?: Range;
    /**
     * VersionId used to reference a specific version of the object.
     */
    VersionId?: ObjectVersionId;
    /**
     * Specifies the algorithm to use to when encrypting the object (for example, AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about the size of the part and the number of parts in this object.
     */
    PartNumber?: PartNumber;
  }
  export interface HeadBucketOutput {
    IBMSSEKPEnabled?: IBMSSEKPEnabled;
    IBMSSEKPCustomerRootKeyCrn?: IBMSSEKPCustomerRootKeyCrn;
  }
  export type HostName = string;
  export type HttpErrorCodeReturnedEquals = string;
  export type HttpRedirectCode = string;
  export type IBMServiceInstanceId = string;
  export type IBMSSEKPCustomerRootKeyCrn = string;
  export type IBMSSEKPEnabled = boolean;
  export type IBMSSEKPEncryptionAlgorithm = string;
  export type ID = string;
  export type IfMatch = string;
  export type IfModifiedSince = Date;
  export type IfNoneMatch = string;
  export type IfUnmodifiedSince = Date;
  export interface IndexDocument {
    /**
     * A suffix that is appended to a request that is for a directory on the website endpoint (for example,if the suffix is index.html and you make a request to samplebucket/images/ the data that is returned will be for the object with the key name images/index.html) The suffix must not be empty and must not include a slash character.  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see  XML related object key constraints. 
     */
    Suffix: Suffix;
  }
  export type Initiated = Date;
  export interface Initiator {
    /**
     * If the principal is an Amazon Web Services account, it provides the Canonical User ID. If the principal is an IAM User, it provides a user ARN value.
     */
    ID?: ID;
    /**
     * Name of the Principal.
     */
    DisplayName?: DisplayName;
  }
  export type IsEnabled = boolean;
  export type IsLatest = boolean;
  export type IsTruncated = boolean;
  export type KeyCount = number;
  export type KeyMarker = string;
  export type KeyPrefixEquals = string;
  export type LastModified = Date;
  export interface LegalHold {
    Date?: _Date;
    ID?: LegalHoldID;
  }
  export type LegalHoldID = string;
  export interface LegalHoldRequest {
    Bucket: BucketName;
    Key: ObjectKey;
    RetentionLegalHoldId: RetentionLegalHoldID;
  }
  export type LegalHolds = LegalHold[];
  export interface LifecycleConfiguration {
    /**
     * Specifies lifecycle configuration rules for an Amazon S3 bucket. 
     */
    Rules: LifecycleRules;
  }
  export interface LifecycleExpiration {
    /**
     * Indicates at what date the object is to be moved or deleted. The date value must conform to the ISO 8601 format. The time is always midnight UTC.
     */
    Date?: _Date;
    /**
     * Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.
     */
    Days?: Days;
    /**
     * Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set to true, the delete marker will be expired; if set to false the policy takes no action. This cannot be specified with Days or Date in a Lifecycle Expiration Policy.
     */
    ExpiredObjectDeleteMarker?: ExpiredObjectDeleteMarker;
  }
  export interface LifecycleRule {
    /**
     * Specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object has a delete marker.
     */
    Expiration?: LifecycleExpiration;
    /**
     * Unique identifier for the rule. The value cannot be longer than 255 characters.
     */
    ID?: ID;
    /**
     * Prefix identifying one or more objects to which the rule applies. This is no longer used; use Filter instead.  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see  XML related object key constraints. 
     */
    Prefix?: Prefix;
    /**
     * The Filter is used to identify objects that a Lifecycle Rule applies to. A Filter must have exactly one of Prefix, Tag, or And specified. Filter is required if the LifecycleRule does not contain a Prefix element.
     */
    Filter: LifecycleRuleFilter;
    /**
     * If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.
     */
    Status: ExpirationStatus;
    /**
     * Currently only one Transition allowed, also Date and Days fields are mutually exclusive.
     */
    Transitions?: TransitionList;
    NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
  }
  export interface LifecycleRuleAndOperator {
    /**
     * Prefix identifying one or more objects to which the rule applies.
     */
    Prefix?: Prefix;
    /**
     * All of these tags must exist in the object's tag set in order for the rule to apply.
     */
    Tags?: TagSet;
    /**
     * Minimum object size to which the rule applies.
     */
    ObjectSizeGreaterThan?: ObjectSizeGreaterThanBytes;
    /**
     * Maximum object size to which the rule applies.
     */
    ObjectSizeLessThan?: ObjectSizeLessThanBytes;
  }
  export interface LifecycleRuleFilter {
    /**
     * Prefix identifying one or more objects to which the rule applies.  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see  XML related object key constraints. 
     */
    Prefix?: Prefix;
    /**
     * This tag must exist in the object's tag set in order for the rule to apply.
     */
    Tag?: Tag;
    /**
     * Minimum object size to which the rule applies.
     */
    ObjectSizeGreaterThan?: ObjectSizeGreaterThanBytes;
    /**
     * Maximum object size to which the rule applies.
     */
    ObjectSizeLessThan?: ObjectSizeLessThanBytes;
    And?: LifecycleRuleAndOperator;
  }
  export type LifecycleRules = LifecycleRule[];
  export interface ListBucketsInput {
    IBMServiceInstanceId?: undefined;
  }
  export interface ListBucketsExtendedInput {
    IBMServiceInstanceId?: undefined;
    /**
     * Specifies the key to start with when listing objects in a bucket.
     */
    Marker?: Marker;
    /**
     * Sets the maximum number of keys returned in the response. The response might contain fewer keys but will never contain more.
     */
    MaxKeys?: MaxKeys;
    /**
     * Limits the response to keys that begin with the specified prefix.
     */
    Prefix?: Prefix;
  }
  export interface ListBucketsOutput {
    /**
     * The list of buckets owned by the requestor.
     */
    Buckets?: Buckets;
    /**
     * The owner of the buckets listed.
     */
    Owner?: Owner;
  }
  export interface ListBucketsExtendedOutput {
    IsTruncated?: IsTruncated;
    Marker?: Marker;
    Buckets?: Buckets;
    Owner?: Owner;
  }
  export interface ListLegalHoldsOutput {
    CreateTime?: _Date;
    LegalHolds?: LegalHolds;
    RetentionPeriod?: RetentionPeriod;
    RetentionPeriodExpirationDate?: RetentionExpirationDate;
  }
  export interface ListLegalHoldsRequest {
    Bucket: BucketName;
    Key: ObjectKey;
    MirrorDestination?: MirrorDestination;
  }
  export interface ListMultipartUploadsOutput {
    /**
     * The name of the bucket to which the multipart upload was initiated. Does not return the access point ARN or access point alias if used.
     */
    Bucket?: BucketName;
    /**
     * The key at or after which the listing began.
     */
    KeyMarker?: KeyMarker;
    /**
     * Upload ID after which listing began.
     */
    UploadIdMarker?: UploadIdMarker;
    /**
     * When a list is truncated, this element specifies the value that should be used for the key-marker request parameter in a subsequent request.
     */
    NextKeyMarker?: NextKeyMarker;
    /**
     * When a prefix is provided in the request, this field contains the specified prefix. The result contains only keys starting with the specified prefix.
     */
    Prefix?: Prefix;
    /**
     * Contains the delimiter you specified in the request. If you don't specify a delimiter in your request, this element is absent from the response.
     */
    Delimiter?: Delimiter;
    /**
     * When a list is truncated, this element specifies the value that should be used for the upload-id-marker request parameter in a subsequent request.
     */
    NextUploadIdMarker?: NextUploadIdMarker;
    /**
     * Maximum number of multipart uploads that could have been included in the response.
     */
    MaxUploads?: MaxUploads;
    /**
     * Indicates whether the returned list of multipart uploads is truncated. A value of true indicates that the list was truncated. The list can be truncated if the number of multipart uploads exceeds the limit allowed or specified by max uploads.
     */
    IsTruncated?: IsTruncated;
    /**
     * Container for elements related to a particular multipart upload. A response can contain zero or more Upload elements.
     */
    Uploads?: MultipartUploadList;
    /**
     * If you specify a delimiter in the request, then the result returns each distinct key prefix containing the delimiter in a CommonPrefixes element. The distinct key prefixes are returned in the Prefix child element.
     */
    CommonPrefixes?: CommonPrefixList;
    /**
     * Encoding type used by Amazon S3 to encode object keys in the response. If you specify encoding-type request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:  Delimiter, KeyMarker, Prefix, NextKeyMarker, Key.
     */
    EncodingType?: EncodingType;
  }
  export interface ListMultipartUploadsRequest {
    /**
     * The name of the bucket to which the multipart upload was initiated.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Character you use to group keys. All keys that contain the same string between the prefix, if specified, and the first occurrence of the delimiter after the prefix are grouped under a single result element, CommonPrefixes. If you don't specify the prefix parameter, then the substring starts at the beginning of the key. The keys that are grouped under CommonPrefixes result element are not returned elsewhere in the response.
     */
    Delimiter?: Delimiter;
    EncodingType?: EncodingType;
    /**
     * Together with upload-id-marker, this parameter specifies the multipart upload after which listing should begin. If upload-id-marker is not specified, only the keys lexicographically greater than the specified key-marker will be included in the list. If upload-id-marker is specified, any multipart uploads for a key equal to the key-marker might also be included, provided those multipart uploads have upload IDs lexicographically greater than the specified upload-id-marker.
     */
    KeyMarker?: KeyMarker;
    /**
     * Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the response body. 1,000 is the maximum number of uploads that can be returned in a response.
     */
    MaxUploads?: MaxUploads;
    MirrorDestination?: MirrorDestination;
    /**
     * Lists in-progress uploads only for those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different grouping of keys. (You can think of using prefix to make groups in the same way you'd use a folder in a file system.)
     */
    Prefix?: Prefix;
    /**
     * Together with key-marker, specifies the multipart upload after which listing should begin. If key-marker is not specified, the upload-id-marker parameter is ignored. Otherwise, any multipart uploads for a key equal to the key-marker might be included in the list only if they have an upload ID lexicographically greater than the specified upload-id-marker.
     */
    UploadIdMarker?: UploadIdMarker;
  }
  export interface ListObjectVersionsOutput {
    /**
     * A flag that indicates whether Amazon S3 returned all of the results that satisfied the search criteria. If your results were truncated, you can make a follow-up paginated request using the NextKeyMarker and NextVersionIdMarker response parameters as a starting place in another request to return the rest of the results.
     */
    IsTruncated?: IsTruncated;
    /**
     * Marks the last key returned in a truncated response.
     */
    KeyMarker?: KeyMarker;
    /**
     * Marks the last version of the key returned in a truncated response.
     */
    VersionIdMarker?: VersionIdMarker;
    /**
     * When the number of responses exceeds the value of MaxKeys, NextKeyMarker specifies the first key not returned that satisfies the search criteria. Use this value for the key-marker request parameter in a subsequent request.
     */
    NextKeyMarker?: NextKeyMarker;
    /**
     * When the number of responses exceeds the value of MaxKeys, NextVersionIdMarker specifies the first object version not returned that satisfies the search criteria. Use this value for the version-id-marker request parameter in a subsequent request.
     */
    NextVersionIdMarker?: NextVersionIdMarker;
    /**
     * Container for version information.
     */
    Versions?: ObjectVersionList;
    /**
     * Container for an object that is a delete marker.
     */
    DeleteMarkers?: DeleteMarkers;
    /**
     * The bucket name.
     */
    Name?: BucketName;
    /**
     * Selects objects that start with the value supplied by this parameter.
     */
    Prefix?: Prefix;
    /**
     * The delimiter grouping the included keys. A delimiter is a character that you specify to group keys. All keys that contain the same string between the prefix and the first occurrence of the delimiter are grouped under a single result element in CommonPrefixes. These groups are counted as one result against the max-keys limitation. These keys are not returned elsewhere in the response.
     */
    Delimiter?: Delimiter;
    /**
     * Specifies the maximum number of objects to return.
     */
    MaxKeys?: MaxKeys;
    /**
     * All of the keys rolled up into a common prefix count as a single return when calculating the number of returns.
     */
    CommonPrefixes?: CommonPrefixList;
    /**
     *  Encoding type used by Amazon S3 to encode object key names in the XML response. If you specify encoding-type request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:  KeyMarker, NextKeyMarker, Prefix, Key, and Delimiter.
     */
    EncodingType?: EncodingType;
  }
  export interface ListObjectVersionsRequest {
    /**
     * The bucket name that contains the objects. 
     */
    Bucket: BucketName;
    /**
     * A delimiter is a character that you specify to group keys. All keys that contain the same string between the prefix and the first occurrence of the delimiter are grouped under a single result element in CommonPrefixes. These groups are counted as one result against the max-keys limitation. These keys are not returned elsewhere in the response.
     */
    Delimiter?: Delimiter;
    EncodingType?: EncodingType;
    /**
     * Specifies the key to start with when listing objects in a bucket.
     */
    KeyMarker?: KeyMarker;
    /**
     * Sets the maximum number of keys returned in the response. By default the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more. If additional keys satisfy the search criteria, but were not returned because max-keys was exceeded, the response contains &lt;isTruncated&gt;true&lt;/isTruncated&gt;. To return the additional keys, see key-marker and version-id-marker.
     */
    MaxKeys?: MaxKeys;
    /**
     * Use this parameter to select only those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different groupings of keys. (You can think of using prefix to make groups in the same way you'd use a folder in a file system.) You can use prefix with delimiter to roll up numerous objects into a single result under CommonPrefixes. 
     */
    Prefix?: Prefix;
    /**
     * Specifies the object version you want to start listing from.
     */
    VersionIdMarker?: VersionIdMarker;
  }
  export interface ListObjectsOutput {
    IBMSSEKPEnabled?: IBMSSEKPEnabled;
    IBMSSEKPCustomerRootKeyCrn?: IBMSSEKPCustomerRootKeyCrn;
    /**
     * A flag that indicates whether Amazon S3 returned all of the results that satisfied the search criteria.
     */
    IsTruncated?: IsTruncated;
    /**
     * Indicates where in the bucket listing begins. Marker is included in the response if it was sent with the request.
     */
    Marker?: Marker;
    /**
     * When response is truncated (the IsTruncated element value in the response is true), you can use the key name in this field as marker in the subsequent request to get next set of objects. Amazon S3 lists objects in alphabetical order Note: This element is returned only if you have delimiter request parameter specified. If response does not include the NextMarker and it is truncated, you can use the value of the last Key in the response as the marker in the subsequent request to get the next set of object keys.
     */
    NextMarker?: NextMarker;
    /**
     * Metadata about each object returned.
     */
    Contents?: ObjectList;
    /**
     * The bucket name.
     */
    Name?: BucketName;
    /**
     * Keys that begin with the indicated prefix.
     */
    Prefix?: Prefix;
    /**
     * Causes keys that contain the same string between the prefix and the first occurrence of the delimiter to be rolled up into a single result element in the CommonPrefixes collection. These rolled-up keys are not returned elsewhere in the response. Each rolled-up result counts as only one return against the MaxKeys value.
     */
    Delimiter?: Delimiter;
    /**
     * The maximum number of keys returned in the response body.
     */
    MaxKeys?: MaxKeys;
    /**
     * All of the keys (up to 1,000) rolled up in a common prefix count as a single return when calculating the number of returns.  A response can contain CommonPrefixes only if you specify a delimiter. CommonPrefixes contains all (if there are any) keys between Prefix and the next occurrence of the string specified by the delimiter.  CommonPrefixes lists keys that act like subdirectories in the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter is a slash (/) as in notes/summer/july, the common prefix is notes/summer/. All of the keys that roll up into a common prefix count as a single return when calculating the number of returns.
     */
    CommonPrefixes?: CommonPrefixList;
    /**
     * Encoding type used by Amazon S3 to encode object keys in the response.
     */
    EncodingType?: EncodingType;
  }
  export interface ListObjectsRequest {
    /**
     * The name of the bucket containing the objects. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * A delimiter is a character you use to group keys.
     */
    Delimiter?: Delimiter;
    EncodingType?: EncodingType;
    /**
     * Marker is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. Marker can be any key in the bucket.
     */
    Marker?: Marker;
    /**
     * Sets the maximum number of keys returned in the response. By default the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more. 
     */
    MaxKeys?: MaxKeys;
    MirrorDestination?: MirrorDestination;
    /**
     * Limits the response to keys that begin with the specified prefix.
     */
    Prefix?: Prefix;
  }
  export interface ListObjectsV2Output {
    /**
     * Set to false if all of the results were returned. Set to true if more keys are available to return. If the number of results exceeds that specified by MaxKeys, all of the results might not be returned.
     */
    IsTruncated?: IsTruncated;
    /**
     * Metadata about each object returned.
     */
    Contents?: ObjectList;
    /**
     * The bucket name. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Name?: BucketName;
    /**
     *  Keys that begin with the indicated prefix.
     */
    Prefix?: Prefix;
    /**
     * Causes keys that contain the same string between the prefix and the first occurrence of the delimiter to be rolled up into a single result element in the CommonPrefixes collection. These rolled-up keys are not returned elsewhere in the response. Each rolled-up result counts as only one return against the MaxKeys value.
     */
    Delimiter?: Delimiter;
    /**
     * Sets the maximum number of keys returned in the response. By default the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more.
     */
    MaxKeys?: MaxKeys;
    /**
     * All of the keys (up to 1,000) rolled up into a common prefix count as a single return when calculating the number of returns. A response can contain CommonPrefixes only if you specify a delimiter.  CommonPrefixes contains all (if there are any) keys between Prefix and the next occurrence of the string specified by a delimiter.  CommonPrefixes lists keys that act like subdirectories in the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter is a slash (/) as in notes/summer/july, the common prefix is notes/summer/. All of the keys that roll up into a common prefix count as a single return when calculating the number of returns. 
     */
    CommonPrefixes?: CommonPrefixList;
    /**
     * Encoding type used by Amazon S3 to encode object key names in the XML response. If you specify the encoding-type request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:  Delimiter, Prefix, Key, and StartAfter.
     */
    EncodingType?: EncodingType;
    /**
     * KeyCount is the number of keys returned with this request. KeyCount will always be less than or equal to the MaxKeys field. Say you ask for 50 keys, your result will include 50 keys or fewer.
     */
    KeyCount?: KeyCount;
    /**
     *  If ContinuationToken was sent with the request, it is included in the response.
     */
    ContinuationToken?: Token;
    /**
     *  NextContinuationToken is sent when isTruncated is true, which means there are more keys in the bucket that can be listed. The next list requests to Amazon S3 can be continued with this NextContinuationToken. NextContinuationToken is obfuscated and is not a real key
     */
    NextContinuationToken?: NextToken;
    /**
     * If StartAfter was sent with the request, it is included in the response.
     */
    StartAfter?: StartAfter;
  }
  export interface ListObjectsV2Request {
    /**
     * Bucket name to list.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * A delimiter is a character you use to group keys.
     */
    Delimiter?: Delimiter;
    /**
     * Encoding type used by Amazon S3 to encode object keys in the response.
     */
    EncodingType?: EncodingType;
    /**
     * Sets the maximum number of keys returned in the response. By default the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more.
     */
    MaxKeys?: MaxKeys;
    /**
     * Limits the response to keys that begin with the specified prefix.
     */
    Prefix?: Prefix;
    /**
     * ContinuationToken indicates Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key.
     */
    ContinuationToken?: Token;
    /**
     * The owner field is not present in listV2 by default, if you want to return owner field with each key in the result then set the fetch owner field to true.
     */
    FetchOwner?: FetchOwner;
    /**
     * StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. StartAfter can be any key in the bucket.
     */
    StartAfter?: StartAfter;
  }
  export interface ListPartsOutput {
    /**
     * If the bucket has a lifecycle rule configured with an action to abort incomplete multipart uploads and the prefix in the lifecycle rule matches the object name in the request, then the response includes this header indicating when the initiated multipart upload will become eligible for abort operation. For more information, see Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration. The response will also include the x-amz-abort-rule-id header that will provide the ID of the lifecycle configuration rule that defines this action.
     */
    AbortDate?: AbortDate;
    /**
     * This header is returned along with the x-amz-abort-date header. It identifies applicable lifecycle configuration rule that defines the action to abort incomplete multipart uploads.
     */
    AbortRuleId?: AbortRuleId;
    /**
     * The name of the bucket to which the multipart upload was initiated. Does not return the access point ARN or access point alias if used.
     */
    Bucket?: BucketName;
    /**
     * Object key for which the multipart upload was initiated.
     */
    Key?: ObjectKey;
    /**
     * Upload ID identifying the multipart upload whose parts are being listed.
     */
    UploadId?: MultipartUploadId;
    /**
     * When a list is truncated, this element specifies the last part in the list, as well as the value to use for the part-number-marker request parameter in a subsequent request.
     */
    PartNumberMarker?: PartNumberMarker;
    /**
     * When a list is truncated, this element specifies the last part in the list, as well as the value to use for the part-number-marker request parameter in a subsequent request.
     */
    NextPartNumberMarker?: NextPartNumberMarker;
    /**
     * Maximum number of parts that were allowed in the response.
     */
    MaxParts?: MaxParts;
    /**
     *  Indicates whether the returned list of parts is truncated. A true value indicates that the list was truncated. A list can be truncated if the number of parts exceeds the limit returned in the MaxParts element.
     */
    IsTruncated?: IsTruncated;
    /**
     *  Container for elements related to a particular part. A response can contain zero or more Part elements.
     */
    Parts?: Parts;
    /**
     * Container element that identifies who initiated the multipart upload. If the initiator is an Amazon Web Services account, this element provides the same information as the Owner element. If the initiator is an IAM User, this element provides the user ARN and display name.
     */
    Initiator?: Initiator;
    /**
     *  Container element that identifies the object owner, after the object is created. If multipart upload is initiated by an IAM user, this element provides the parent account ID and display name.
     */
    Owner?: Owner;
    /**
     * Class of storage (STANDARD or REDUCED_REDUNDANCY) used to store the uploaded object.
     */
    StorageClass?: StorageClass;
  }
  export interface ListPartsRequest {
    /**
     * The name of the bucket to which the parts are being uploaded.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Object key for which the multipart upload was initiated.
     */
    Key: ObjectKey;
    /**
     * Sets the maximum number of parts to return.
     */
    MaxParts?: MaxParts;
    MirrorDestination?: MirrorDestination;
    /**
     * Specifies the part after which listing should begin. Only parts with higher part numbers will be listed.
     */
    PartNumberMarker?: PartNumberMarker;
    /**
     * Upload ID identifying the multipart upload whose parts are being listed.
     */
    UploadId: MultipartUploadId;
  }
  export type Location = string;
  export type LocationPrefix = string;
  export type MFA = string;
  export type MFADelete = "Enabled"|"Disabled"|string;
  export type MFADeleteStatus = "Enabled"|"Disabled"|string;
  export type Marker = string;
  export type MaxAgeSeconds = number;
  export type MaxKeys = number;
  export type MaxParts = number;
  export type MaxUploads = number;
  export type Message = string;
  export type Metadata = {[key: string]: MetadataValue};
  export type MetadataDirective = "COPY"|"REPLACE"|string;
  export type MetadataKey = string;
  export type MetadataValue = string;
  export type MirrorDestination = string;
  export interface MultipartUpload {
    /**
     * Upload ID that identifies the multipart upload.
     */
    UploadId?: MultipartUploadId;
    /**
     * Key of the object for which the multipart upload was initiated.
     */
    Key?: ObjectKey;
    /**
     * Date and time at which the multipart upload was initiated.
     */
    Initiated?: Initiated;
    /**
     * The class of storage used to store the object.
     */
    StorageClass?: StorageClass;
    /**
     * Specifies the owner of the object that is part of the multipart upload. 
     */
    Owner?: Owner;
    /**
     * Identifies who initiated the multipart upload.
     */
    Initiator?: Initiator;
  }
  export type MultipartUploadId = string;
  export type MultipartUploadList = MultipartUpload[];
  export type NewRetentionExpirationDate = Date;
  export type NewRetentionPeriod = number;
  export type NextKeyMarker = string;
  export type NextMarker = string;
  export type NextPartNumberMarker = number;
  export type NextToken = string;
  export type NextUploadIdMarker = string;
  export type NextVersionIdMarker = string;
  export interface NoncurrentVersionExpiration {
    /**
     * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. The value must be a non-zero positive integer. For information about the noncurrent days calculations, see How Amazon S3 Calculates When an Object Became Noncurrent in the Amazon S3 User Guide.
     */
    NoncurrentDays?: Days;
    /**
     * Specifies how many noncurrent versions Amazon S3 will retain. You can specify up to 100 noncurrent versions to retain. Amazon S3 will permanently delete any additional noncurrent versions beyond the specified number to retain. For more information about noncurrent versions, see Lifecycle configuration elements in the Amazon S3 User Guide.
     */
    NewerNoncurrentVersions?: VersionCount;
  }
  export interface NoncurrentVersionTransition {
    /**
     * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see How Amazon S3 Calculates How Long an Object Has Been Noncurrent in the Amazon S3 User Guide.
     */
    NoncurrentDays?: Days;
    /**
     * The class of storage used to store the object.
     */
    StorageClass?: TransitionStorageClass;
  }
  export type NoncurrentVersionTransitionList = NoncurrentVersionTransition[];
  export interface Object {
    /**
     * The name that you assign to an object. You use the object key to retrieve the object.
     */
    Key?: ObjectKey;
    /**
     * Creation date of the object.
     */
    LastModified?: LastModified;
    /**
     * The entity tag is a hash of the object. The ETag reflects changes only to the contents of an object, not its metadata. The ETag may or may not be an MD5 digest of the object data. Whether or not it is depends on how the object was created and how it is encrypted as described below:   Objects created by the PUT Object, POST Object, or Copy operation, or through the Amazon Web Services Management Console, and are encrypted by SSE-S3 or plaintext, have ETags that are an MD5 digest of their object data.   Objects created by the PUT Object, POST Object, or Copy operation, or through the Amazon Web Services Management Console, and are encrypted by SSE-C or SSE-KMS, have ETags that are not an MD5 digest of their object data.   If an object is created by either the Multipart Upload or Part Copy operation, the ETag is not an MD5 digest, regardless of the method of encryption. If an object is larger than 16 MB, the Amazon Web Services Management Console will upload or copy that object as a Multipart Upload, and therefore the ETag will not be an MD5 digest.  
     */
    ETag?: ETag;
    /**
     * Size in bytes of the object
     */
    Size?: Size;
    /**
     * The class of storage used to store the object.
     */
    StorageClass?: ObjectStorageClass;
    /**
     * The owner of the object
     */
    Owner?: Owner;
  }
  export type ObjectCannedACL = "private"|"public-read"|"public-read-write"|"authenticated-read"|"aws-exec-read"|"bucket-owner-read"|"bucket-owner-full-control"|string;
  export interface ObjectIdentifier {
    /**
     * Key name of the object.  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see  XML related object key constraints. 
     */
    Key: ObjectKey;
    /**
     * VersionId for the specific version of the object to delete.
     */
    VersionId?: ObjectVersionId;
  }
  export type ObjectIdentifierList = ObjectIdentifier[];
  export type ObjectKey = string;
  export type ObjectList = Object[];
  export interface ObjectLockConfiguration {
    /**
     * Indicates whether this bucket has an Object Lock configuration enabled. Enable ObjectLockEnabled when you apply ObjectLockConfiguration to a bucket. 
     */
    ObjectLockEnabled?: ObjectLockEnabled;
    /**
     * Specifies the Object Lock rule for the specified object. Enable the this rule when you apply ObjectLockConfiguration to a bucket. Bucket settings require both a mode and a period. The period can be either Days or Years but you must select one. You cannot specify Days and Years at the same time.
     */
    Rule?: ObjectLockRule;
  }
  export type IbmProtectionManagementState = "active"|string;
  export type ObjectLockEnabled = "Enabled"|string;
  export type ObjectLockEnabledForBucket = boolean;
  export interface ObjectLockLegalHold {
    /**
     * Indicates whether the specified object has a legal hold in place.
     */
    Status?: ObjectLockLegalHoldStatus;
  }
  export type ObjectLockLegalHoldStatus = "ON"|"OFF"|string;
  export type ObjectLockMode = "GOVERNANCE"|"COMPLIANCE"|string;
  export type ObjectLockRetainUntilDate = Date;
  export interface ObjectLockRetention {
    /**
     * Indicates the Retention mode for the specified object.
     */
    Mode?: ObjectLockRetentionMode;
    /**
     * The date on which this Object Lock Retention will expire.
     */
    RetainUntilDate?: _Date;
  }
  export type ObjectLockRetentionMode = "GOVERNANCE"|"COMPLIANCE"|string;
  export interface ObjectLockRule {
    /**
     * The default Object Lock retention mode and period that you want to apply to new objects placed in the specified bucket. Bucket settings require both a mode and a period. The period can be either Days or Years but you must select one. You cannot specify Days and Years at the same time.
     */
    DefaultRetention?: DefaultRetention;
  }
  export type ObjectLockToken = string;
  export type ObjectSizeGreaterThanBytes = number;
  export type ObjectSizeLessThanBytes = number;
  export type ObjectStorageClass = "ACCELERATED"|"STANDARD"|"REDUCED_REDUNDANCY"|"GLACIER"|"STANDARD_IA"|"ONEZONE_IA"|"INTELLIGENT_TIERING"|"DEEP_ARCHIVE"|string;
  export interface ObjectVersion {
    /**
     * The entity tag is an MD5 hash of that version of the object.
     */
    ETag?: ETag;
    /**
     * Size in bytes of the object.
     */
    Size?: Size;
    /**
     * The class of storage used to store the object.
     */
    StorageClass?: ObjectVersionStorageClass;
    /**
     * The object key.
     */
    Key?: ObjectKey;
    /**
     * Version ID of an object.
     */
    VersionId?: ObjectVersionId;
    /**
     * Specifies whether the object is (true) or is not (false) the latest version of an object.
     */
    IsLatest?: IsLatest;
    /**
     * Date and time the object was last modified.
     */
    LastModified?: LastModified;
    /**
     * Specifies the owner of the object.
     */
    Owner?: Owner;
  }
  export type ObjectVersionId = string;
  export type ObjectVersionList = ObjectVersion[];
  export type ObjectVersionStorageClass = "STANDARD"|string;
  export interface Owner {
    /**
     * Container for the display name of the owner. This value is only supported in the following Amazon Web Services Regions:   US East (N. Virginia)   US West (N. California)   US West (Oregon)   Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)  
     */
    DisplayName?: DisplayName;
    /**
     * Container for the ID of the owner.
     */
    ID?: ID;
  }
  export interface Part {
    /**
     * Part number identifying the part. This is a positive integer between 1 and 10,000.
     */
    PartNumber?: PartNumber;
    /**
     * Date and time at which the part was uploaded.
     */
    LastModified?: LastModified;
    /**
     * Entity tag returned when the part was uploaded.
     */
    ETag?: ETag;
    /**
     * Size in bytes of the uploaded part data.
     */
    Size?: Size;
  }
  export type PartNumber = number;
  export type PartNumberMarker = number;
  export type Parts = Part[];
  export type PartsCount = number;
  export type Permission = "FULL_CONTROL"|"WRITE"|"WRITE_ACP"|"READ"|"READ_ACP"|string;
  export type Policy = string;
  export type Prefix = string;
  export type Priority = number;
  export interface ProtectionConfiguration {
    /**
     * Retention status of a bucket.
     */
    Status?: BucketProtectionStatus;
    /**
     * Minimum retention period for an object, if a PUT of an object specifies a shorter retention period the PUT object will fail.
     */
    MinimumRetention?: BucketProtectionMinimumRetention;
    /**
     * Default retention period for an object, if a PUT of an object does not specify a retention period this value will be converted to seconds and used.
     */
    DefaultRetention?: BucketProtectionDefaultRetention;
    /**
     * Maximum retention period for an object, if a PUT of an object specifies a longer retention period the PUT object will fail.
     */
    MaximumRetention?: BucketProtectionMaximumRetention;
    /**
     * Enable permanent retention for an object.
     */
    EnablePermanentRetention?: BucketProtectionEnablePermanentRetention;
  }
  export type Protocol = "http"|"https"|string;
  export interface PublicAccessBlockConfiguration {
    /**
     * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to TRUE causes the following behavior:   PUT Bucket ACL and PUT Object ACL calls fail if the specified ACL is public.   PUT Object calls fail if the request includes a public ACL.   PUT Bucket calls fail if the request includes a public ACL.   Enabling this setting doesn't affect existing policies or ACLs.
     */
    BlockPublicAcls?: Setting;
    /**
     * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
     */
    IgnorePublicAcls?: Setting;
  }
  export interface PutBucketAclRequest {
    /**
     * The canned ACL to apply to the bucket.
     */
    ACL?: BucketCannedACL;
    /**
     * Contains the elements that set the ACL permissions for an object per grantee.
     */
    AccessControlPolicy?: AccessControlPolicy;
    /**
     * The bucket to which to apply the ACL.
     */
    Bucket: BucketName;
    /**
     * The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864.  For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
    /**
     * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.
     */
    GrantFullControl?: GrantFullControl;
    /**
     * Allows grantee to list the objects in the bucket.
     */
    GrantRead?: GrantRead;
    /**
     * Allows grantee to read the bucket ACL.
     */
    GrantReadACP?: GrantReadACP;
    /**
     * Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects.
     */
    GrantWrite?: GrantWrite;
    /**
     * Allows grantee to write the ACL for the applicable bucket.
     */
    GrantWriteACP?: GrantWriteACP;
  }
  export interface PutBucketCorsRequest {
    /**
     * Specifies the bucket impacted by the corsconfiguration.
     */
    Bucket: BucketName;
    /**
     * Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see Enabling Cross-Origin Resource Sharing in the Amazon S3 User Guide.
     */
    CORSConfiguration: CORSConfiguration;
    /**
     * The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864.  For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
  }
  export interface PutBucketProtectionConfigurationRequest {
    Bucket: BucketName;
    /**
     * Container for setting retention settings.
     */
    ProtectionConfiguration: ProtectionConfiguration;
  }
  export interface PutBucketLifecycleConfigurationRequest {
    /**
     * The name of the bucket for which to set the configuration.
     */
    Bucket: BucketName;
    /**
     * Container for lifecycle rules. You can add as many as 1,000 rules.
     */
    LifecycleConfiguration?: BucketLifecycleConfiguration;
  }
  export interface PutBucketLifecycleRequest {
    /**
     * 
     */
    Bucket: BucketName;
    /**
     *  For requests made using the IBM Cloud Object Storage Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
    /**
     * 
     */
    LifecycleConfiguration?: LifecycleConfiguration;
  }
  export interface PutBucketReplicationRequest {
    /**
     * The name of the bucket
     */
    Bucket: BucketName;
    /**
     * The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
    ReplicationConfiguration: ReplicationConfiguration;
    /**
     * Ignored by COS if present.
     */
    Token?: ObjectLockToken;
  }
  export interface PutBucketTaggingRequest {
    /**
     * The bucket name.
     */
    Bucket: BucketName;
    /**
     * The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the IBM Cloud Object Storage Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
    /**
     * Container for the TagSet and Tag elements.
     */
    Tagging: Tagging;
  }
  export interface PutBucketVersioningRequest {
    /**
     * The bucket name.
     */
    Bucket: BucketName;
    /**
     * &gt;The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the IBM Cloud Object Storage Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
    /**
     * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.
     */
    MFA?: MFA;
    /**
     * Container for setting the versioning state.
     */
    VersioningConfiguration: VersioningConfiguration;
  }
  export interface PutBucketWebsiteRequest {
    /**
     * The bucket name.
     */
    Bucket: BucketName;
    /**
     * The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the IBM Cloud Object Storage Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
    /**
     * Container for the request.
     */
    WebsiteConfiguration: WebsiteConfiguration;
  }
  export interface PutObjectAclOutput {
    RequestCharged?: RequestCharged;
  }
  export interface PutObjectAclRequest {
    /**
     * The canned ACL to apply to the object. For more information, see Canned ACL.
     */
    ACL?: ObjectCannedACL;
    /**
     * Contains the elements that set the ACL permissions for an object per grantee.
     */
    AccessControlPolicy?: AccessControlPolicy;
    /**
     * The bucket name that contains the object to which you want to attach the ACL.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864.&gt;  For requests made using the IBM Cloud Object Storage Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
    /**
     * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket. This action is not supported by Amazon S3 on Outposts.
     */
    GrantFullControl?: GrantFullControl;
    /**
     * Allows grantee to list the objects in the bucket. This action is not supported by Amazon S3 on Outposts.
     */
    GrantRead?: GrantRead;
    /**
     * Allows grantee to read the bucket ACL. This action is not supported by Amazon S3 on Outposts.
     */
    GrantReadACP?: GrantReadACP;
    /**
     * Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects.
     */
    GrantWrite?: GrantWrite;
    /**
     * Allows grantee to write the ACL for the applicable bucket. This action is not supported by Amazon S3 on Outposts.
     */
    GrantWriteACP?: GrantWriteACP;
    /**
     * Key for which the PUT action was initiated. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Key: ObjectKey;
    /**
     * VersionId used to reference a specific version of the object.
     */
    VersionId?: ObjectVersionId;
  }
  export interface PutObjectLegalHoldOutput {
    RequestCharged?: RequestCharged;
  }
  export interface PutObjectLegalHoldRequest {
    /**
     * The bucket name containing the object that you want to place a legal hold on.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * The key name for the object that you want to place a legal hold on.
     */
    Key: ObjectKey;
    /**
     * Container element for the legal hold configuration you want to apply to the specified object.
     */
    LegalHold?: ObjectLockLegalHold;
    /**
     * The version ID of the object that you want to place a legal hold on.
     */
    VersionId?: ObjectVersionId;
    /**
     * The MD5 hash for the request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
    /**
     * Ignored by COS if present.
     */
    ExpectedBucketOwner?: AccountId;
  }
  export interface PutObjectLockConfigurationOutput {
    RequestCharged?: RequestCharged;
  }
  export interface PutObjectLockConfigurationRequest {
    /**
     * The bucket whose Object Lock configuration you want to create or replace.
     */
    Bucket: BucketName;
    /**
     * The Object Lock configuration that you want to apply to the specified bucket.
     */
    ObjectLockConfiguration?: ObjectLockConfiguration;
    /**
     * Ignored by COS if present.
     */
    Token?: ObjectLockToken;
    /**
     * The MD5 hash for the request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
    /**
     * Ignored by COS if present.
     */
    ExpectedBucketOwner?: AccountId;
  }
  export interface PutObjectOutput {
    /**
     * If the expiration is configured for the object (see PutBucketLifecycleConfiguration), the response includes this header. It includes the expiry-date and rule-id key-value pairs that provide information about object expiration. The value of the rule-id is URL-encoded.
     */
    Expiration?: Expiration;
    /**
     * Entity tag for the uploaded object.
     */
    ETag?: ETag;
    /**
     * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * Version of the object.
     */
    VersionId?: ObjectVersionId;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If x-amz-server-side-encryption is has a valid value of aws:kms, this header specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key that was used for the object. 
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export interface PutObjectRequest {
    /**
     * The canned ACL to apply to the object. For more information, see Canned ACL. This action is not supported by Amazon S3 on Outposts.
     */
    ACL?: ObjectCannedACL;
    /**
     * Object data.
     */
    Body?: Body;
    /**
     * The bucket name to which the PUT action was initiated.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     *  Can be used to specify caching behavior along the request/reply chain. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9.
     */
    CacheControl?: CacheControl;
    /**
     * Specifies presentational information for the object. For more information, see https://www.rfc-editor.org/rfc/rfc6266#section-4.
     */
    ContentDisposition?: ContentDisposition;
    /**
     * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For more information, see https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding.
     */
    ContentEncoding?: ContentEncoding;
    /**
     * The language the content is in.
     */
    ContentLanguage?: ContentLanguage;
    /**
     * Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically. For more information, see https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length.
     */
    ContentLength?: ContentLength;
    /**
     * The base64-encoded 128-bit MD5 digest of the message (without the headers) according to RFC 1864. This header can be used as a message integrity check to verify that the data is the same data that was originally sent. Although it is optional, we recommend using the Content-MD5 mechanism as an end-to-end integrity check. For more information about REST request authentication, see REST Authentication.
     */
    ContentMD5?: ContentMD5;
    /**
     * A standard MIME type describing the format of the contents. For more information, see https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type.
     */
    ContentType?: ContentType;
    /**
     * The date and time at which the object is no longer cacheable. For more information, see https://www.rfc-editor.org/rfc/rfc7234#section-5.3.
     */
    Expires?: Expires;
    /**
     * Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. This action is not supported by Amazon S3 on Outposts.
     */
    GrantFullControl?: GrantFullControl;
    /**
     * Allows grantee to read the object data and its metadata. This action is not supported by Amazon S3 on Outposts.
     */
    GrantRead?: GrantRead;
    /**
     * Allows grantee to read the object ACL. This action is not supported by Amazon S3 on Outposts.
     */
    GrantReadACP?: GrantReadACP;
    /**
     * Allows grantee to write the ACL for the applicable object. This action is not supported by Amazon S3 on Outposts.
     */
    GrantWriteACP?: GrantWriteACP;
    /**
     * Object key for which the PUT action was initiated.
     */
    Key: ObjectKey;
    /**
     * A map of metadata to store with the object in S3.
     */
    Metadata?: Metadata;
    /**
     * Date on which it will be legal to delete or modify the object. You can only specify this or the Retention-Period header. If both are specified a 400 error will be returned. If neither is specified the bucket's DefaultRetention period will be used. This header should be used to calculate a retention period in seconds and then stored in that manner.
     */
    RetentionExpirationDate?: RetentionExpirationDate;
    /**
     * A single legal hold to apply to the object. A legal hold is a Y character long string. The object cannot be overwritten or deleted until all legal holds associated with the object are removed.
     */
    RetentionLegalHoldId?: RetentionLegalHoldID;
    /**
     * Retention period to store on the object in seconds. If this field and Retention-Expiration-Date are specified a 400 error is returned. If neither is specified the bucket's DefaultRetention period will be used. 0 is a legal value assuming the bucket's minimum retention period is also 0.
     */
    RetentionPeriod?: RetentionPeriod;
    /**
     * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide.
     */
    StorageClass?: StorageClass;
    /**
     * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. For information about object metadata, see Object Key and Metadata. In the following example, the request header sets the redirect to an object (anotherPage.html) in the same bucket:  x-amz-website-redirect-location: /anotherPage.html  In the following example, the request header sets the object redirect to another website:  x-amz-website-redirect-location: http://www.example.com/  For more information about website hosting in Amazon S3, see Hosting Websites on Amazon S3 and How to Configure Website Page Redirects. 
     */
    WebsiteRedirectLocation?: WebsiteRedirectLocation;
    /**
     * Specifies the algorithm to use to when encrypting the object (for example, AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If x-amz-server-side-encryption has a valid value of aws:kms, this header specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key that was used for the object. If you specify x-amz-server-side-encryption:aws:kms, but do not provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key to protect the data. If the KMS key does not exist in the same account issuing the command, you must use the full ARN and not just the ID. 
     */
    SSEKMSKeyId?: SSEKMSKeyId;
    /**
     * The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For example, "Key1=Value1")
     */
    Tagging?: TaggingHeader;
    /**
     * The Object Lock mode that you want to apply to this object.
     */
    ObjectLockMode?: ObjectLockMode;
    /**
     * The date and time when you want this object's Object Lock to expire. Must be formatted as a timestamp parameter.
     */
    ObjectLockRetainUntilDate?: ObjectLockRetainUntilDate;
    /**
     * Specifies whether a legal hold will be applied to this object. For more information about S3 Object Lock, see Object Lock.
     */
    ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
  }
  export interface PutObjectRetentionOutput {
    RequestCharged?: RequestCharged;
  }
  export interface PutObjectRetentionRequest {
    /**
     * The bucket name that contains the object you want to apply this Object Retention configuration to.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * The key name for the object that you want to apply this Object Retention configuration to.
     */
    Key: ObjectKey;
    /**
     * The container element for the Object Retention configuration.
     */
    Retention?: ObjectLockRetention;
    /**
     * The version ID for the object that you want to apply this Object Retention configuration to.
     */
    VersionId?: ObjectVersionId;
    /**
     * Ignored by COS if present.
     */
    BypassGovernanceRetention?: BypassGovernanceRetention;
    /**
     * The MD5 hash for the request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
    /**
     * Ignored by COS if present.
     */
    ExpectedBucketOwner?: AccountId;
  }
  export interface PutObjectTaggingOutput {
    /**
     * The versionId of the object the tag-set was added to.
     */
    VersionId?: ObjectVersionId;
  }
  export interface PutObjectTaggingRequest {
    /**
     * The bucket name containing the object.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Name of the object key.
     */
    Key: ObjectKey;
    /**
     * The versionId of the object that the tag-set will be added to.
     */
    VersionId?: ObjectVersionId;
    /**
     * The MD5 hash for the request body. For requests made using the IBM Cloud Object Storage Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
    /**
     * Container for the TagSet and Tag elements
     */
    Tagging: Tagging;
  }
  export interface PutPublicAccessBlockRequest {
    /**
     * The name of the Amazon S3 bucket whose PublicAccessBlock configuration you want to set.
     */
    Bucket: BucketName;
    /**
     * The MD5 hash of the PutPublicAccessBlock request body.  For requests made using the IBM Cloud Object Storage Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
     */
    ContentMD5?: ContentMD5;
    /**
     * The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see The Meaning of "Public" in the Amazon S3 User Guide.
     */
    PublicAccessBlockConfiguration: PublicAccessBlockConfiguration;
    /**
     * Ignored by COS.
     */
    ExpectedBucketOwner?: AccountId;
  }
  export type Quiet = boolean;
  export type QuoteCharacter = string;
  export type QuoteEscapeCharacter = string;
  export type QuoteFields = "ALWAYS"|"ASNEEDED"|string;
  export type Range = string;
  export interface Redirect {
    /**
     * The host name to use in the redirect request.
     */
    HostName?: HostName;
    /**
     * The HTTP redirect code to use on the response. Not required if one of the siblings is present.
     */
    HttpRedirectCode?: HttpRedirectCode;
    /**
     * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
     */
    Protocol?: Protocol;
    /**
     * The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix docs/ (objects in the docs/ folder) to documents/, you can set a condition block with KeyPrefixEquals set to docs/ and in the Redirect set ReplaceKeyPrefixWith to /documents. Not required if one of the siblings is present. Can be present only if ReplaceKeyWith is not provided.  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see  XML related object key constraints. 
     */
    ReplaceKeyPrefixWith?: ReplaceKeyPrefixWith;
    /**
     * The specific object key to use in the redirect request. For example, redirect request to error.html. Not required if one of the siblings is present. Can be present only if ReplaceKeyPrefixWith is not provided.  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see  XML related object key constraints. 
     */
    ReplaceKeyWith?: ReplaceKeyWith;
  }
  export interface RedirectAllRequestsTo {
    /**
     * Name of the host where requests are redirected.
     */
    HostName: HostName;
    /**
     * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
     */
    Protocol?: Protocol;
  }
  export type ReplaceKeyPrefixWith = string;
  export type ReplaceKeyWith = string;
  export interface ReplicationConfiguration {
    /**
     * Not supported by COS
     */
    Role?: Role;
    /**
     * A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules. 
     */
    Rules: ReplicationRules;
  }
  export interface ReplicationRule {
    /**
     * A unique identifier for the rule. The maximum value is 255 characters.
     */
    ID?: ID;
    /**
     * The priority indicates which rule has precedence whenever two or more replication rules conflict. Amazon S3 will attempt to replicate objects according to all replication rules. However, if there are two or more rules with the same destination bucket, then objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority.  For more information, see Replication in the Amazon S3 User Guide.
     */
    Priority: Priority;
    /**
     * An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string.   Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see  XML related object key constraints. 
     */
    Prefix?: Prefix;
    Filter: ReplicationRuleFilter;
    /**
     * Specifies whether the rule is enabled.
     */
    Status: ReplicationRuleStatus;
    /**
     * A container for information about the replication destination and its configurations including enabling the S3 Replication Time Control (S3 RTC).
     */
    Destination: Destination;
    DeleteMarkerReplication: DeleteMarkerReplication;
  }
  export interface ReplicationRuleAndOperator {
    /**
     * An object key name prefix that identifies the subset of objects to which the rule applies.
     */
    Prefix?: Prefix;
    /**
     * An array of tags containing key and value pairs.
     */
    Tags?: TagSet;
  }
  export interface ReplicationRuleFilter {
    /**
     * An object key name prefix that identifies the subset of objects to which the rule applies.  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see  XML related object key constraints. 
     */
    Prefix?: Prefix;
    /**
     * A container for specifying a tag key and value.  The rule applies only to objects that have the tag in their tag set.
     */
    Tag?: Tag;
    /**
     * A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example:    If you specify both a Prefix and a Tag filter, wrap these filters in an And tag.   If you specify a filter based on multiple tags, wrap the Tag elements in an And tag.  
     */
    And?: ReplicationRuleAndOperator;
  }
  export type ReplicationRuleStatus = "Enabled"|"Disabled"|string;
  export type ReplicationRules = ReplicationRule[];
  export type ReplicationStatus = "COMPLETE"|"PENDING"|"FAILED"|"REPLICA"|string;
  export type RequestCharged = "requester"|string;
  export type ResponseCacheControl = string;
  export type ResponseContentDisposition = string;
  export type ResponseContentEncoding = string;
  export type ResponseContentLanguage = string;
  export type ResponseContentType = string;
  export type ResponseExpires = Date;
  export type Restore = string;
  export interface RestoreObjectOutput {
    RequestCharged?: RequestCharged;
  }
  export interface RestoreObjectRequest {
    /**
     * The bucket name containing the object to restore.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Object key for which the action was initiated.
     */
    Key: ObjectKey;
    /**
     * VersionId used to reference a specific version of the object.
     */
    VersionId?: ObjectVersionId;
    RestoreRequest?: RestoreRequest;
  }
  export interface RestoreRequest {
    /**
     * Lifetime of the active copy in days. Do not use with restores that specify OutputLocation.
     */
    Days: Days;
    /**
     * Glacier related parameters pertaining to this job. Do not use with restores that specify OutputLocation.
     */
    GlacierJobParameters?: GlacierJobParameters;
  }
  export type RetentionDirective = "COPY"|"REPLACE"|string;
  export type RetentionExpirationDate = Date;
  export type RetentionLegalHoldCount = number;
  export type RetentionLegalHoldID = string;
  export type RetentionPeriod = number;
  export type RetentionPeriodSource = "Bucket"|"Object"|string;
  export type Role = string;
  export interface RoutingRule {
    /**
     * A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the /docs folder, redirect to the /documents folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
     */
    Condition?: Condition;
    /**
     * Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.
     */
    Redirect: Redirect;
  }
  export type RoutingRules = RoutingRule[];
  export interface Rule {
    /**
     * Specifies the expiration for the lifecycle of the object.
     */
    Expiration?: LifecycleExpiration;
    /**
     * Unique identifier for the rule. The value can't be longer than 255 characters.
     */
    ID?: ID;
    /**
     * Object key prefix that identifies one or more objects to which this rule applies.  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see  XML related object key constraints. 
     */
    Prefix: Prefix;
    /**
     * If Enabled, the rule is currently being applied. If Disabled, the rule is not currently being applied.
     */
    Status: ExpirationStatus;
    /**
     * Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see Transitioning Objects Using Amazon S3 Lifecycle in the Amazon S3 User Guide.
     */
    Transition?: Transition;
    NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
  }
  export type Rules = Rule[];
  export interface S3KeyFilter {
    FilterRules?: FilterRuleList;
  }
  export type SSECustomerAlgorithm = string;
  export type SSECustomerKey = Buffer|Uint8Array|Blob|string;
  export type SSECustomerKeyMD5 = string;
  export type SSEKMSKeyId = string;
  export type ServerSideEncryption = "AES256"|"aws:kms"|string;
  export type Setting = boolean;
  export type Size = number;
  export type StartAfter = string;
  export type StorageClass = "ACCELERATED"|"STANDARD"|"REDUCED_REDUNDANCY"|"STANDARD_IA"|"ONEZONE_IA"|"INTELLIGENT_TIERING"|"GLACIER"|"DEEP_ARCHIVE"|string;
  export type Suffix = string;
  export interface Tag {
    /**
     * Name of the object key.
     */
    Key: ObjectKey;
    /**
     * Value of the tag.
     */
    Value: Value;
  }
  export type TagCount = number;
  export type TagSet = Tag[];
  export interface Tagging {
    /**
     * A collection for a set of tags
     */
    TagSet: TagSet;
  }
  export type TaggingDirective = "COPY"|"REPLACE"|string;
  export type TaggingHeader = string;
  export type TargetBucket = string;
  export interface TargetGrant {
    /**
     * Container for the person being granted permissions.
     */
    Grantee?: Grantee;
    /**
     * Logging permissions assigned to the grantee for the bucket.
     */
    Permission?: BucketLogsPermission;
  }
  export type TargetGrants = TargetGrant[];
  export type TargetPrefix = string;
  export type Tier = "Accelerated"|"Standard"|"Bulk"|"Expedited"|string;
  export type Token = string;
  export interface Transition {
    /**
     * Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
     */
    Date?: _Date;
    /**
     * Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer.
     */
    Days?: Days;
    /**
     * The storage class to which you want the object to transition.
     */
    StorageClass?: TransitionStorageClass;
  }
  export type TransitionList = Transition[];
  export type TransitionStorageClass = "ACCELERATED"|"GLACIER"|"STANDARD_IA"|"ONEZONE_IA"|"INTELLIGENT_TIERING"|"DEEP_ARCHIVE"|string;
  export type Type = "CanonicalUser"|"AmazonCustomerByEmail"|"Group"|string;
  export type URI = string;
  export type UploadIdMarker = string;
  export interface UploadPartCopyOutput {
    /**
     * The version of the source object that was copied, if you have enabled versioning on the source bucket.
     */
    CopySourceVersionId?: CopySourceVersionId;
    /**
     * Container for all response elements.
     */
    CopyPartResult?: CopyPartResult;
    /**
     * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export interface UploadPartCopyRequest {
    /**
     * The bucket name. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Specifies the source object for the copy operation. You specify the value in one of two formats, depending on whether you want to access the source object through an access point:   For objects not accessed through an access point, specify the name of the source bucket and key of the source object, separated by a slash (/). For example, to copy the object reports/january.pdf from the bucket awsexamplebucket, use awsexamplebucket/reports/january.pdf. The value must be URL-encoded.   For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format arn:aws:s3:&lt;Region&gt;:&lt;account-id&gt;:accesspoint/&lt;access-point-name&gt;/object/&lt;key&gt;. For example, to copy the object reports/january.pdf through access point my-access-point owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf. The value must be URL encoded.  Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same Amazon Web Services Region.  Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/object/&lt;key&gt;. For example, to copy the object reports/january.pdf through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf. The value must be URL-encoded.    To copy a specific version of an object, append ?versionId=&lt;version-id&gt; to the value (for example, awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893). If you don't specify a version ID, Amazon S3 copies the latest version of the source object.
     */
    CopySource: CopySource;
    /**
     * Copies the object if its entity tag (ETag) matches the specified tag.
     */
    CopySourceIfMatch?: CopySourceIfMatch;
    /**
     * Copies the object if it has been modified since the specified time.
     */
    CopySourceIfModifiedSince?: CopySourceIfModifiedSince;
    /**
     * Copies the object if its entity tag (ETag) is different than the specified ETag.
     */
    CopySourceIfNoneMatch?: CopySourceIfNoneMatch;
    /**
     * Copies the object if it hasn't been modified since the specified time.
     */
    CopySourceIfUnmodifiedSince?: CopySourceIfUnmodifiedSince;
    /**
     * The range of bytes to copy from the source object. The range value must use the form bytes=first-last, where the first and last are the zero-based byte offsets to copy. For example, bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You can copy a range only if the source object is greater than 5 MB.
     */
    CopySourceRange?: CopySourceRange;
    /**
     * Object key for which the multipart upload was initiated.
     */
    Key: ObjectKey;
    /**
     * Part number of part being copied. This is a positive integer between 1 and 10,000.
     */
    PartNumber: PartNumber;
    /**
     * Upload ID identifying the multipart upload whose part is being copied.
     */
    UploadId: MultipartUploadId;
    /**
     * Specifies the algorithm to use to when encrypting the object (for example, AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. This must be the same encryption key specified in the initiate multipart upload request.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * Specifies the algorithm to use when decrypting the source object (for example, AES256).
     */
    CopySourceSSECustomerAlgorithm?: CopySourceSSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.
     */
    CopySourceSSECustomerKey?: CopySourceSSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
     */
    CopySourceSSECustomerKeyMD5?: CopySourceSSECustomerKeyMD5;
  }
  export interface UploadPartOutput {
    /**
     * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * Entity tag for the uploaded object.
     */
    ETag?: ETag;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export interface UploadPartRequest {
    /**
     * Object data.
     */
    Body?: Body;
    /**
     * The name of the bucket to which the multipart upload was initiated. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts in the Amazon S3 User Guide.
     */
    Bucket: BucketName;
    /**
     * Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically.
     */
    ContentLength?: ContentLength;
    /**
     * The base64-encoded 128-bit MD5 digest of the part data. This parameter is auto-populated when using the command from the CLI. This parameter is required if object lock parameters are specified.
     */
    ContentMD5?: ContentMD5;
    /**
     * Object key for which the multipart upload was initiated.
     */
    Key: ObjectKey;
    /**
     * Part number of part being uploaded. This is a positive integer between 1 and 10,000.
     */
    PartNumber: PartNumber;
    /**
     * Upload ID identifying the multipart upload whose part is being uploaded.
     */
    UploadId: MultipartUploadId;
    /**
     * Specifies the algorithm to use to when encrypting the object (for example, AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. This must be the same encryption key specified in the initiate multipart upload request.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
  }
  export type Value = string;
  export type VersionCount = number;
  export type VersionIdMarker = string;
  export interface VersioningConfiguration {
    /**
     * Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only returned if the bucket has been configured with MFA delete. If the bucket has never been so configured, this element is not returned.
     */
    MFADelete?: MFADelete;
    /**
     * The versioning state of the bucket.
     */
    Status?: BucketVersioningStatus;
  }
  export interface WebsiteConfiguration {
    /**
     * The name of the error document for the website.
     */
    ErrorDocument?: ErrorDocument;
    /**
     * The name of the index document for the website.
     */
    IndexDocument?: IndexDocument;
    /**
     * The redirect behavior for every request to this bucket's website endpoint.  If you specify this property, you can't specify any other property. 
     */
    RedirectAllRequestsTo?: RedirectAllRequestsTo;
    /**
     * Rules that define when a redirect is applied and the redirect behavior.
     */
    RoutingRules?: RoutingRules;
  }
  export type WebsiteRedirectLocation = string;
  export type Years = number;
  export type IBMTransition = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2006-03-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & UseDualstackConfigOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the S3 client.
   */
  export import Types = S3;
}
export = S3;
