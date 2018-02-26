import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {S3Customizations} from '../lib/services/s3';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
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
   * Aborts a multipart upload.To verify that all parts have been removed, so you don't get charged for the part storage, you should call the List Parts operation and ensure the parts list is empty.
   */
  abortMultipartUpload(params: S3.Types.AbortMultipartUploadRequest, callback?: (err: AWSError, data: S3.Types.AbortMultipartUploadOutput) => void): Request<S3.Types.AbortMultipartUploadOutput, AWSError>;
  /**
   * Aborts a multipart upload.To verify that all parts have been removed, so you don't get charged for the part storage, you should call the List Parts operation and ensure the parts list is empty.
   */
  abortMultipartUpload(callback?: (err: AWSError, data: S3.Types.AbortMultipartUploadOutput) => void): Request<S3.Types.AbortMultipartUploadOutput, AWSError>;
  /**
   * Completes a multipart upload by assembling previously uploaded parts.
   */
  completeMultipartUpload(params: S3.Types.CompleteMultipartUploadRequest, callback?: (err: AWSError, data: S3.Types.CompleteMultipartUploadOutput) => void): Request<S3.Types.CompleteMultipartUploadOutput, AWSError>;
  /**
   * Completes a multipart upload by assembling previously uploaded parts.
   */
  completeMultipartUpload(callback?: (err: AWSError, data: S3.Types.CompleteMultipartUploadOutput) => void): Request<S3.Types.CompleteMultipartUploadOutput, AWSError>;
  /**
   * Creates a copy of an object that is already stored in IBM COS.
   */
  copyObject(params: S3.Types.CopyObjectRequest, callback?: (err: AWSError, data: S3.Types.CopyObjectOutput) => void): Request<S3.Types.CopyObjectOutput, AWSError>;
  /**
   * Creates a copy of an object that is already stored in IBM COS.
   */
  copyObject(callback?: (err: AWSError, data: S3.Types.CopyObjectOutput) => void): Request<S3.Types.CopyObjectOutput, AWSError>;
  /**
   * Creates a new bucket.
   */
  createBucket(params: S3.Types.CreateBucketRequest, callback?: (err: AWSError, data: S3.Types.CreateBucketOutput) => void): Request<S3.Types.CreateBucketOutput, AWSError>;
  /**
   * Creates a new bucket.
   */
  createBucket(callback?: (err: AWSError, data: S3.Types.CreateBucketOutput) => void): Request<S3.Types.CreateBucketOutput, AWSError>;
  /**
   * Initiates a multipart upload and returns an upload ID.Note: After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, IBM COS frees up the parts storage and stops charging you for the parts storage.
   */
  createMultipartUpload(params: S3.Types.CreateMultipartUploadRequest, callback?: (err: AWSError, data: S3.Types.CreateMultipartUploadOutput) => void): Request<S3.Types.CreateMultipartUploadOutput, AWSError>;
  /**
   * Initiates a multipart upload and returns an upload ID.Note: After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, IBM COS frees up the parts storage and stops charging you for the parts storage.
   */
  createMultipartUpload(callback?: (err: AWSError, data: S3.Types.CreateMultipartUploadOutput) => void): Request<S3.Types.CreateMultipartUploadOutput, AWSError>;
  /**
   * Deletes the bucket. All objects (including all object versions and Delete Markers) in the bucket must be deleted before the bucket itself can be deleted.
   */
  deleteBucket(params: S3.Types.DeleteBucketRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the bucket. All objects (including all object versions and Delete Markers) in the bucket must be deleted before the bucket itself can be deleted.
   */
  deleteBucket(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the cors configuration information set for the bucket.
   */
  deleteBucketCors(params: S3.Types.DeleteBucketCorsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the cors configuration information set for the bucket.
   */
  deleteBucketCors(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * If object versioning is not enabled, deletes an object. If versioning is enabled, removes the null version (if there is one) of an object and inserts a delete marker, which becomes the latest version of the object. If there isn't a null version, IBM COS does not remove any objects.
   */
  deleteObject(params: S3.Types.DeleteObjectRequest, callback?: (err: AWSError, data: S3.Types.DeleteObjectOutput) => void): Request<S3.Types.DeleteObjectOutput, AWSError>;
  /**
   * If object versioning is not enabled, deletes an object. If versioning is enabled, removes the null version (if there is one) of an object and inserts a delete marker, which becomes the latest version of the object. If there isn't a null version, IBM COS does not remove any objects.
   */
  deleteObject(callback?: (err: AWSError, data: S3.Types.DeleteObjectOutput) => void): Request<S3.Types.DeleteObjectOutput, AWSError>;
  /**
   * This operation enables you to delete multiple objects from a bucket using a single HTTP request. You may specify up to 1000 keys.
   */
  deleteObjects(params: S3.Types.DeleteObjectsRequest, callback?: (err: AWSError, data: S3.Types.DeleteObjectsOutput) => void): Request<S3.Types.DeleteObjectsOutput, AWSError>;
  /**
   * This operation enables you to delete multiple objects from a bucket using a single HTTP request. You may specify up to 1000 keys.
   */
  deleteObjects(callback?: (err: AWSError, data: S3.Types.DeleteObjectsOutput) => void): Request<S3.Types.DeleteObjectsOutput, AWSError>;
  /**
   * Gets the access control policy for the bucket.
   */
  getBucketAcl(params: S3.Types.GetBucketAclRequest, callback?: (err: AWSError, data: S3.Types.GetBucketAclOutput) => void): Request<S3.Types.GetBucketAclOutput, AWSError>;
  /**
   * Gets the access control policy for the bucket.
   */
  getBucketAcl(callback?: (err: AWSError, data: S3.Types.GetBucketAclOutput) => void): Request<S3.Types.GetBucketAclOutput, AWSError>;
  /**
   * Returns the cors configuration for the bucket.
   */
  getBucketCors(params: S3.Types.GetBucketCorsRequest, callback?: (err: AWSError, data: S3.Types.GetBucketCorsOutput) => void): Request<S3.Types.GetBucketCorsOutput, AWSError>;
  /**
   * Returns the cors configuration for the bucket.
   */
  getBucketCors(callback?: (err: AWSError, data: S3.Types.GetBucketCorsOutput) => void): Request<S3.Types.GetBucketCorsOutput, AWSError>;
  /**
   * Returns the region the bucket resides in.
   */
  getBucketLocation(params: S3.Types.GetBucketLocationRequest, callback?: (err: AWSError, data: S3.Types.GetBucketLocationOutput) => void): Request<S3.Types.GetBucketLocationOutput, AWSError>;
  /**
   * Returns the region the bucket resides in.
   */
  getBucketLocation(callback?: (err: AWSError, data: S3.Types.GetBucketLocationOutput) => void): Request<S3.Types.GetBucketLocationOutput, AWSError>;
  /**
   * Retrieves objects from IBM COS.
   */
  getObject(params: S3.Types.GetObjectRequest, callback?: (err: AWSError, data: S3.Types.GetObjectOutput) => void): Request<S3.Types.GetObjectOutput, AWSError>;
  /**
   * Retrieves objects from IBM COS.
   */
  getObject(callback?: (err: AWSError, data: S3.Types.GetObjectOutput) => void): Request<S3.Types.GetObjectOutput, AWSError>;
  /**
   * Returns the access control list (ACL) of an object.
   */
  getObjectAcl(params: S3.Types.GetObjectAclRequest, callback?: (err: AWSError, data: S3.Types.GetObjectAclOutput) => void): Request<S3.Types.GetObjectAclOutput, AWSError>;
  /**
   * Returns the access control list (ACL) of an object.
   */
  getObjectAcl(callback?: (err: AWSError, data: S3.Types.GetObjectAclOutput) => void): Request<S3.Types.GetObjectAclOutput, AWSError>;
  /**
   * This operation is useful to determine if a bucket exists and you have permission to access it.
   */
  headBucket(params: S3.Types.HeadBucketRequest, callback?: (err: AWSError, data: S3.Types.HeadBucketOutput) => void): Request<S3.Types.HeadBucketOutput, AWSError>;
  /**
   * This operation is useful to determine if a bucket exists and you have permission to access it.
   */
  headBucket(callback?: (err: AWSError, data: S3.Types.HeadBucketOutput) => void): Request<S3.Types.HeadBucketOutput, AWSError>;
  /**
   * The HEAD operation retrieves metadata from an object without returning the object itself. This operation is useful if you're only interested in an object's metadata. To use HEAD, you must have READ access to the object.
   */
  headObject(params: S3.Types.HeadObjectRequest, callback?: (err: AWSError, data: S3.Types.HeadObjectOutput) => void): Request<S3.Types.HeadObjectOutput, AWSError>;
  /**
   * The HEAD operation retrieves metadata from an object without returning the object itself. This operation is useful if you're only interested in an object's metadata. To use HEAD, you must have READ access to the object.
   */
  headObject(callback?: (err: AWSError, data: S3.Types.HeadObjectOutput) => void): Request<S3.Types.HeadObjectOutput, AWSError>;
  /**
   * Returns a list of all buckets owned by the authenticated sender of the request.
   */
  listBuckets(params: S3.Types.ListBucketsInput, callback?: (err: AWSError, data: S3.Types.ListBucketsOutput) => void): Request<S3.Types.ListBucketsOutput, AWSError>;
  /**
   * Returns a list of all buckets owned by the authenticated sender of the request.
   */
  listBuckets(callback?: (err: AWSError, data: S3.Types.ListBucketsOutput) => void): Request<S3.Types.ListBucketsOutput, AWSError>;
  /**
   * This operation lists in-progress multipart uploads.
   */
  listMultipartUploads(params: S3.Types.ListMultipartUploadsRequest, callback?: (err: AWSError, data: S3.Types.ListMultipartUploadsOutput) => void): Request<S3.Types.ListMultipartUploadsOutput, AWSError>;
  /**
   * This operation lists in-progress multipart uploads.
   */
  listMultipartUploads(callback?: (err: AWSError, data: S3.Types.ListMultipartUploadsOutput) => void): Request<S3.Types.ListMultipartUploadsOutput, AWSError>;
  /**
   * Returns some or all (up to 1000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket.
   */
  listObjects(params: S3.Types.ListObjectsRequest, callback?: (err: AWSError, data: S3.Types.ListObjectsOutput) => void): Request<S3.Types.ListObjectsOutput, AWSError>;
  /**
   * Returns some or all (up to 1000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket.
   */
  listObjects(callback?: (err: AWSError, data: S3.Types.ListObjectsOutput) => void): Request<S3.Types.ListObjectsOutput, AWSError>;
  /**
   * Lists the parts that have been uploaded for a specific multipart upload.
   */
  listParts(params: S3.Types.ListPartsRequest, callback?: (err: AWSError, data: S3.Types.ListPartsOutput) => void): Request<S3.Types.ListPartsOutput, AWSError>;
  /**
   * Lists the parts that have been uploaded for a specific multipart upload.
   */
  listParts(callback?: (err: AWSError, data: S3.Types.ListPartsOutput) => void): Request<S3.Types.ListPartsOutput, AWSError>;
  /**
   * Sets the permissions on a bucket using access control lists (ACL).
   */
  putBucketAcl(params: S3.Types.PutBucketAclRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the permissions on a bucket using access control lists (ACL).
   */
  putBucketAcl(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the cors configuration for a bucket.
   */
  putBucketCors(params: S3.Types.PutBucketCorsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the cors configuration for a bucket.
   */
  putBucketCors(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds an object to a bucket.
   */
  putObject(params: S3.Types.PutObjectRequest, callback?: (err: AWSError, data: S3.Types.PutObjectOutput) => void): Request<S3.Types.PutObjectOutput, AWSError>;
  /**
   * Adds an object to a bucket.
   */
  putObject(callback?: (err: AWSError, data: S3.Types.PutObjectOutput) => void): Request<S3.Types.PutObjectOutput, AWSError>;
  /**
   * uses the acl subresource to set the access control list (ACL) permissions for an object that already exists in a bucket
   */
  putObjectAcl(params: S3.Types.PutObjectAclRequest, callback?: (err: AWSError, data: S3.Types.PutObjectAclOutput) => void): Request<S3.Types.PutObjectAclOutput, AWSError>;
  /**
   * uses the acl subresource to set the access control list (ACL) permissions for an object that already exists in a bucket
   */
  putObjectAcl(callback?: (err: AWSError, data: S3.Types.PutObjectAclOutput) => void): Request<S3.Types.PutObjectAclOutput, AWSError>;
  /**
   * Uploads a part in a multipart upload.Note: After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, IBM COS frees up the parts storage and stops charging you for the parts storage.
   */
  uploadPart(params: S3.Types.UploadPartRequest, callback?: (err: AWSError, data: S3.Types.UploadPartOutput) => void): Request<S3.Types.UploadPartOutput, AWSError>;
  /**
   * Uploads a part in a multipart upload.Note: After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, IBM COS frees up the parts storage and stops charging you for the parts storage.
   */
  uploadPart(callback?: (err: AWSError, data: S3.Types.UploadPartOutput) => void): Request<S3.Types.UploadPartOutput, AWSError>;
  /**
   * Uploads a part by copying data from an existing object as data source.
   */
  uploadPartCopy(params: S3.Types.UploadPartCopyRequest, callback?: (err: AWSError, data: S3.Types.UploadPartCopyOutput) => void): Request<S3.Types.UploadPartCopyOutput, AWSError>;
  /**
   * Uploads a part by copying data from an existing object as data source.
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
     * Indicates the number of days that must pass since initiation for Lifecycle to abort an Incomplete Multipart Upload.
     */
    DaysAfterInitiation?: DaysAfterInitiation;
  }
  export interface AbortMultipartUploadOutput {
  }
  export interface AbortMultipartUploadRequest {
    Bucket: BucketName;
    Key: ObjectKey;
    UploadId: MultipartUploadId;
  }
  export type AbortRuleId = string;
  export type AcceptRanges = string;
  export interface AccessControlPolicy {
    /**
     * A list of grants.
     */
    Grants?: Grants;
    Owner?: Owner;
  }
  export type AccountId = string;
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
     * Date the bucket was created.
     */
    CreationDate?: CreationDate;
  }
  export type BucketCannedACL = "private"|"public-read"|"public-read-write"|"authenticated-read"|string;
  export type BucketLocationConstraint = "EU"|"eu-west-1"|"us-west-1"|"us-west-2"|"ap-south-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-northeast-1"|"sa-east-1"|"cn-north-1"|"eu-central-1"|string;
  export type BucketLogsPermission = "FULL_CONTROL"|"READ"|"WRITE"|string;
  export type BucketName = string;
  export type Buckets = Bucket[];
  export interface CORSConfiguration {
    CORSRules: CORSRules;
  }
  export interface CORSRule {
    /**
     * Specifies which headers are allowed in a pre-flight OPTIONS request.
     */
    AllowedHeaders?: AllowedHeaders;
    /**
     * Identifies HTTP methods that the domain/origin specified in the rule is allowed to execute.
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
  export interface CommonPrefix {
    Prefix?: Prefix;
  }
  export type CommonPrefixList = CommonPrefix[];
  export interface CompleteMultipartUploadOutput {
    Location?: Location;
    Bucket?: BucketName;
    Key?: ObjectKey;
    /**
     * If the object expiration is configured, this will contain the expiration date (expiry-date) and rule ID (rule-id). The value of rule-id is URL encoded.
     */
    Expiration?: Expiration;
    /**
     * Entity tag of the object.
     */
    ETag?: ETag;
    /**
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * Version of the object.
     */
    VersionId?: ObjectVersionId;
    /**
     * If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export interface CompleteMultipartUploadRequest {
    Bucket: BucketName;
    Key: ObjectKey;
    MultipartUpload?: CompletedMultipartUpload;
    UploadId: MultipartUploadId;
  }
  export interface CompletedMultipartUpload {
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
  export interface Condition {
    /**
     * The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied. Required when parent element Condition is specified and sibling KeyPrefixEquals is not specified. If both are specified, then both must be true for the redirect to be applied.
     */
    HttpErrorCodeReturnedEquals?: HttpErrorCodeReturnedEquals;
    /**
     * The object key name prefix when the redirect is applied. For example, to redirect requests for ExamplePage.html, the key prefix will be ExamplePage.html. To redirect request for all pages with the prefix docs/, the key prefix will be /docs, which identifies all objects in the docs/ folder. Required when the parent element Condition is specified and sibling HttpErrorCodeReturnedEquals is not specified. If both conditions are specified, both must be true for the redirect to be applied.
     */
    KeyPrefixEquals?: KeyPrefixEquals;
  }
  export type ContentDisposition = string;
  export type ContentEncoding = string;
  export type ContentLanguage = string;
  export type ContentLength = number;
  export type ContentMD5 = string;
  export type ContentRange = string;
  export type ContentType = string;
  export interface CopyObjectOutput {
    CopyObjectResult?: CopyObjectResult;
    /**
     * If the object expiration is configured, the response includes this header.
     */
    Expiration?: Expiration;
    CopySourceVersionId?: CopySourceVersionId;
    /**
     * Version ID of the newly created copy.
     */
    VersionId?: ObjectVersionId;
    /**
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export interface CopyObjectRequest {
    /**
     * The canned ACL to apply to the object.
     */
    ACL?: ObjectCannedACL;
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
     * The name of the source bucket and key name of the source object, separated by a slash (/). Must be URL-encoded.
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
     * Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.
     */
    GrantFullControl?: GrantFullControl;
    /**
     * Allows grantee to read the object data and its metadata.
     */
    GrantRead?: GrantRead;
    /**
     * Allows grantee to read the object ACL.
     */
    GrantReadACP?: GrantReadACP;
    /**
     * Allows grantee to write the ACL for the applicable object.
     */
    GrantWriteACP?: GrantWriteACP;
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
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * The type of storage to use for the object. Defaults to 'STANDARD'.
     */
    StorageClass?: StorageClass;
    /**
     * Specifies the algorithm to use to when encrypting the object (e.g., AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for IBM COS to use in encrypting data. This value is used to store the object and then it is discarded; IBM does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side​-encryption​-customer-algorithm header.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. IBM COS uses this header for a message integrity check to ensure the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * Specifies the AWS KMS key ID to use for object encryption. All GET and PUT requests for an object protected by AWS KMS will fail if not made via SSL or using SigV4. Documentation on configuring any of the officially supported AWS SDKs and CLI can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version
     */
    SSEKMSKeyId?: SSEKMSKeyId;
    /**
     * Specifies the algorithm to use when decrypting the source object (e.g., AES256).
     */
    CopySourceSSECustomerAlgorithm?: CopySourceSSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for IBM COS to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.
     */
    CopySourceSSECustomerKey?: CopySourceSSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. IBM COS uses this header for a message integrity check to ensure the encryption key was transmitted without error.
     */
    CopySourceSSECustomerKeyMD5?: CopySourceSSECustomerKeyMD5;
  }
  export interface CopyObjectResult {
    ETag?: ETag;
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
     * Specifies the region where the bucket will be created. If you don't specify a region, the bucket will be created in US Standard.
     */
    LocationConstraint?: BucketLocationConstraint;
  }
  export interface CreateBucketOutput {
    Location?: Location;
  }
  export interface CreateBucketRequest {
    /**
     * The canned ACL to apply to the bucket.
     */
    ACL?: BucketCannedACL;
    Bucket: BucketName;
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
     * Allows grantee to create, overwrite, and delete any object in the bucket.
     */
    GrantWrite?: GrantWrite;
    /**
     * Allows grantee to write the ACL for the applicable bucket.
     */
    GrantWriteACP?: GrantWriteACP;
    /**
     * The storage account who will be the owner of the bucket.
     */
    IBMServiceInstanceId?: IBMServiceInstanceId;
    IBMSSEKPEncryptionAlgorithm?: IBMSSEKPEncryptionAlgorithm;
    IBMSSEKPCustomerRootKeyCrn?: IBMSSEKPCustomerRootKeyCrn;
  }
  export interface CreateMultipartUploadOutput {
    /**
     * Date when multipart upload will become eligible for abort operation by lifecycle.
     */
    AbortDate?: AbortDate;
    /**
     * Id of the lifecycle rule that makes a multipart upload eligible for abort operation.
     */
    AbortRuleId?: AbortRuleId;
    /**
     * Name of the bucket to which the multipart upload was initiated.
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
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export interface CreateMultipartUploadRequest {
    /**
     * The canned ACL to apply to the object.
     */
    ACL?: ObjectCannedACL;
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
     * Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.
     */
    GrantFullControl?: GrantFullControl;
    /**
     * Allows grantee to read the object data and its metadata.
     */
    GrantRead?: GrantRead;
    /**
     * Allows grantee to read the object ACL.
     */
    GrantReadACP?: GrantReadACP;
    /**
     * Allows grantee to write the ACL for the applicable object.
     */
    GrantWriteACP?: GrantWriteACP;
    Key: ObjectKey;
    /**
     * A map of metadata to store with the object in S3.
     */
    Metadata?: Metadata;
    /**
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * The type of storage to use for the object. Defaults to 'STANDARD'.
     */
    StorageClass?: StorageClass;
    /**
     * Specifies the algorithm to use to when encrypting the object (e.g., AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; IBM does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side​-encryption​-customer-algorithm header.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. IBM COS uses this header for a message integrity check to ensure the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * Specifies the AWS KMS key ID to use for object encryption. All GET and PUT requests for an object protected by AWS KMS will fail if not made via SSL or using SigV4. Documentation on configuring any of the officially supported AWS SDKs and CLI can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export type CreationDate = Date;
  export type _Date = Date;
  export type Days = number;
  export type DaysAfterInitiation = number;
  export interface Delete {
    Objects: ObjectIdentifierList;
    /**
     * Element to enable quiet mode for the request. When you add this element, you must set its value to true.
     */
    Quiet?: Quiet;
  }
  export interface DeleteBucketCorsRequest {
    Bucket: BucketName;
  }
  export interface DeleteBucketRequest {
    Bucket: BucketName;
  }
  export type DeleteMarker = boolean;
  export interface DeleteMarkerEntry {
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
  export type DeleteMarkerVersionId = string;
  export type DeleteMarkers = DeleteMarkerEntry[];
  export interface DeleteObjectOutput {
    /**
     * If versioning is enabled, specifies whether the versioned object that was permanently deleted was (true) or was not (false) a delete marker.
     */
    DeleteMarker?: DeleteMarker;
    /**
     * If versioning is enabled, returns the version ID of the delete marker created as a result of the DELETE operation.
     */
    VersionId?: ObjectVersionId;
  }
  export interface DeleteObjectRequest {
    Bucket: BucketName;
    Key: ObjectKey;
    /**
     * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.
     */
    MFA?: MFA;
    /**
     * VersionId used to reference a specific version of the object.
     */
    VersionId?: ObjectVersionId;
  }
  export interface DeleteObjectsOutput {
    Deleted?: DeletedObjects;
    Errors?: Errors;
  }
  export interface DeleteObjectsRequest {
    Bucket: BucketName;
    Delete: Delete;
    /**
     * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.
     */
    MFA?: MFA;
  }
  export interface DeletedObject {
    Key?: ObjectKey;
    VersionId?: ObjectVersionId;
    DeleteMarker?: DeleteMarker;
    DeleteMarkerVersionId?: DeleteMarkerVersionId;
  }
  export type DeletedObjects = DeletedObject[];
  export type Delimiter = string;
  export interface Destination {
    /**
     * Name of the bucket where you want IBM COS to store replicas of the object identified by the rule.
     */
    Bucket: BucketName;
    /**
     * The class of storage used to store the object.
     */
    StorageClass?: StorageClass;
  }
  export type DisplayName = string;
  export type ETag = string;
  export type EmailAddress = string;
  export type EncodingType = "url"|string;
  export interface Error {
    Key?: ObjectKey;
    VersionId?: ObjectVersionId;
    Code?: Code;
    Message?: Message;
  }
  export interface ErrorDocument {
    /**
     * The object key name to use when a 4XX class error occurs.
     */
    Key: ObjectKey;
  }
  export type Errors = Error[];
  export type Event = "s3:ReducedRedundancyLostObject"|"s3:ObjectCreated:*"|"s3:ObjectCreated:Put"|"s3:ObjectCreated:Post"|"s3:ObjectCreated:Copy"|"s3:ObjectCreated:CompleteMultipartUpload"|"s3:ObjectRemoved:*"|"s3:ObjectRemoved:Delete"|"s3:ObjectRemoved:DeleteMarkerCreated"|string;
  export type EventList = Event[];
  export type Expiration = string;
  export type ExpirationStatus = "Enabled"|"Disabled"|string;
  export type ExpiredObjectDeleteMarker = boolean;
  export type Expires = Date;
  export type ExposeHeader = string;
  export type ExposeHeaders = ExposeHeader[];
  export type FetchOwner = boolean;
  export interface FilterRule {
    /**
     * Object key name prefix or suffix identifying one or more objects to which the filtering rule applies. Maximum prefix length can be up to 1,024 characters. Overlapping prefixes and suffixes are not supported.
     */
    Name?: FilterRuleName;
    Value?: FilterRuleValue;
  }
  export type FilterRuleList = FilterRule[];
  export type FilterRuleName = "prefix"|"suffix"|string;
  export type FilterRuleValue = string;
  export interface GetBucketAclOutput {
    Owner?: Owner;
    /**
     * A list of grants.
     */
    Grants?: Grants;
  }
  export interface GetBucketAclRequest {
    Bucket: BucketName;
  }
  export interface GetBucketCorsOutput {
    CORSRules?: CORSRules;
  }
  export interface GetBucketCorsRequest {
    Bucket: BucketName;
  }
  export interface GetBucketLocationOutput {
    LocationConstraint?: BucketLocationConstraint;
  }
  export interface GetBucketLocationRequest {
    Bucket: BucketName;
  }
  export interface GetObjectAclOutput {
    Owner?: Owner;
    /**
     * A list of grants.
     */
    Grants?: Grants;
  }
  export interface GetObjectAclRequest {
    Bucket: BucketName;
    Key: ObjectKey;
    /**
     * VersionId used to reference a specific version of the object.
     */
    VersionId?: ObjectVersionId;
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
    AcceptRanges?: AcceptRanges;
    /**
     * If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the expiry-date and rule-id key value pairs providing object expiration information. The value of the rule-id is URL encoded.
     */
    Expiration?: Expiration;
    /**
     * Provides information about object restoration operation and expiration time of the restored object copy.
     */
    Restore?: Restore;
    /**
     * Last modified date of the object
     */
    LastModified?: LastModified;
    /**
     * Size of the body in bytes.
     */
    ContentLength?: ContentLength;
    /**
     * An ETag is an opaque identifier assigned by a web server to a specific version of a resource found at a URL
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
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * A map of metadata to store with the object in S3.
     */
    Metadata?: Metadata;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
    StorageClass?: StorageClass;
    /**
     * The count of parts this object has.
     */
    PartsCount?: PartsCount;
  }
  export interface GetObjectRequest {
    Bucket: BucketName;
    /**
     * Return the object only if its entity tag (ETag) is the same as the one specified, otherwise return a 412 (precondition failed).
     */
    IfMatch?: IfMatch;
    /**
     * Return the object only if it has been modified since the specified time, otherwise return a 304 (not modified).
     */
    IfModifiedSince?: IfModifiedSince;
    /**
     * Return the object only if its entity tag (ETag) is different from the one specified, otherwise return a 304 (not modified).
     */
    IfNoneMatch?: IfNoneMatch;
    /**
     * Return the object only if it has not been modified since the specified time, otherwise return a 412 (precondition failed).
     */
    IfUnmodifiedSince?: IfUnmodifiedSince;
    Key: ObjectKey;
    /**
     * Downloads the specified range bytes of an object. For more information about the HTTP Range header, go to http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.
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
     * Specifies the algorithm to use to when encrypting the object (e.g., AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; IBM does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side​-encryption​-customer-algorithm header.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. IBM COS uses this header for a message integrity check to ensure the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' GET request for the part specified. Useful for downloading just a part of an object.
     */
    PartNumber?: PartNumber;
  }
  export interface Grant {
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
     * Email address of the grantee.
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
    Bucket: BucketName;
  }
  export interface HeadObjectOutput {
    /**
     * Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this response header does not appear in the response.
     */
    DeleteMarker?: DeleteMarker;
    AcceptRanges?: AcceptRanges;
    /**
     * If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the expiry-date and rule-id key value pairs providing object expiration information. The value of the rule-id is URL encoded.
     */
    Expiration?: Expiration;
    /**
     * Provides information about object restoration operation and expiration time of the restored object copy.
     */
    Restore?: Restore;
    /**
     * Last modified date of the object
     */
    LastModified?: LastModified;
    /**
     * Size of the body in bytes.
     */
    ContentLength?: ContentLength;
    /**
     * An ETag is an opaque identifier assigned by a web server to a specific version of a resource found at a URL
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
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * A map of metadata to store with the object in S3.
     */
    Metadata?: Metadata;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
    StorageClass?: StorageClass;
    /**
     * The count of parts this object has.
     */
    PartsCount?: PartsCount;
  }
  export interface HeadObjectRequest {
    Bucket: BucketName;
    /**
     * Return the object only if its entity tag (ETag) is the same as the one specified, otherwise return a 412 (precondition failed).
     */
    IfMatch?: IfMatch;
    /**
     * Return the object only if it has been modified since the specified time, otherwise return a 304 (not modified).
     */
    IfModifiedSince?: IfModifiedSince;
    /**
     * Return the object only if its entity tag (ETag) is different from the one specified, otherwise return a 304 (not modified).
     */
    IfNoneMatch?: IfNoneMatch;
    /**
     * Return the object only if it has not been modified since the specified time, otherwise return a 412 (precondition failed).
     */
    IfUnmodifiedSince?: IfUnmodifiedSince;
    Key: ObjectKey;
    /**
     * Downloads the specified range bytes of an object. For more information about the HTTP Range header, go to http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.
     */
    Range?: Range;
    /**
     * VersionId used to reference a specific version of the object.
     */
    VersionId?: ObjectVersionId;
    /**
     * Specifies the algorithm to use to when encrypting the object (e.g., AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; IBM does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side​-encryption​-customer-algorithm header.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. IBM COS uses this header for a message integrity check to ensure the encryption key was transmitted without error.
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
  export type Initiated = Date;
  export interface Initiator {
    /**
     * If the principal is an AWS account, it provides the Canonical User ID. If the principal is an IAM User, it provides a user ARN value.
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
  export interface ListBucketsInput {
    IBMServiceInstanceId?: undefined;
  }
  export interface ListBucketsOutput {
    Buckets?: Buckets;
    Owner?: Owner;
  }
  export interface ListMultipartUploadsOutput {
    /**
     * Name of the bucket to which the multipart upload was initiated.
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
    Uploads?: MultipartUploadList;
    CommonPrefixes?: CommonPrefixList;
    /**
     * Encoding type used by IBM COS to encode object keys in the response.
     */
    EncodingType?: EncodingType;
  }
  export interface ListMultipartUploadsRequest {
    Bucket: BucketName;
    /**
     * Character you use to group keys.
     */
    Delimiter?: Delimiter;
    EncodingType?: EncodingType;
    /**
     * Together with upload-id-marker, this parameter specifies the multipart upload after which listing should begin.
     */
    KeyMarker?: KeyMarker;
    /**
     * Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the response body. 1,000 is the maximum number of uploads that can be returned in a response.
     */
    MaxUploads?: MaxUploads;
    /**
     * Lists in-progress uploads only for those keys that begin with the specified prefix.
     */
    Prefix?: Prefix;
    /**
     * Together with key-marker, specifies the multipart upload after which listing should begin. If key-marker is not specified, the upload-id-marker parameter is ignored.
     */
    UploadIdMarker?: UploadIdMarker;
  }
  export interface ListObjectsOutput {
    IBMSSEKPEnabled?: IBMSSEKPEnabled;
    IBMSSEKPCustomerRootKeyCrn?: IBMSSEKPCustomerRootKeyCrn;
    /**
     * A flag that indicates whether or not IBM COS returned all of the results that satisfied the search criteria.
     */
    IsTruncated?: IsTruncated;
    Marker?: Marker;
    /**
     * When response is truncated (the IsTruncated element value in the response is true), you can use the key name in this field as marker in the subsequent request to get next set of objects. IBM COS lists objects in alphabetical order Note: This element is returned only if you have delimiter request parameter specified. If response does not include the NextMaker and it is truncated, you can use the value of the last Key in the response as the marker in the subsequent request to get the next set of object keys.
     */
    NextMarker?: NextMarker;
    Contents?: ObjectList;
    Name?: BucketName;
    Prefix?: Prefix;
    Delimiter?: Delimiter;
    MaxKeys?: MaxKeys;
    CommonPrefixes?: CommonPrefixList;
    /**
     * Encoding type used by IBM COS to encode object keys in the response.
     */
    EncodingType?: EncodingType;
  }
  export interface ListObjectsRequest {
    Bucket: BucketName;
    /**
     * A delimiter is a character you use to group keys.
     */
    Delimiter?: Delimiter;
    EncodingType?: EncodingType;
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
  export interface ListPartsOutput {
    /**
     * Date when multipart upload will become eligible for abort operation by lifecycle.
     */
    AbortDate?: AbortDate;
    /**
     * Id of the lifecycle rule that makes a multipart upload eligible for abort operation.
     */
    AbortRuleId?: AbortRuleId;
    /**
     * Name of the bucket to which the multipart upload was initiated.
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
     * Part number after which listing begins.
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
     * Indicates whether the returned list of parts is truncated.
     */
    IsTruncated?: IsTruncated;
    Parts?: Parts;
    /**
     * Identifies who initiated the multipart upload.
     */
    Initiator?: Initiator;
    Owner?: Owner;
    /**
     * The class of storage used to store the object.
     */
    StorageClass?: StorageClass;
  }
  export interface ListPartsRequest {
    Bucket: BucketName;
    Key: ObjectKey;
    /**
     * Sets the maximum number of parts to return.
     */
    MaxParts?: MaxParts;
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
  export type MFA = string;
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
    Owner?: Owner;
    /**
     * Identifies who initiated the multipart upload.
     */
    Initiator?: Initiator;
  }
  export type MultipartUploadId = string;
  export type MultipartUploadList = MultipartUpload[];
  export type NextKeyMarker = string;
  export type NextMarker = string;
  export type NextPartNumberMarker = number;
  export type NextToken = string;
  export type NextUploadIdMarker = string;
  export type NextVersionIdMarker = string;
  export interface NoncurrentVersionExpiration {
    /**
     * Specifies the number of days an object is noncurrent before IBM COS can perform the associated action.
     */
    NoncurrentDays?: Days;
  }
  export interface Object {
    Key?: ObjectKey;
    LastModified?: LastModified;
    ETag?: ETag;
    Size?: Size;
    /**
     * The class of storage used to store the object.
     */
    StorageClass?: ObjectStorageClass;
    Owner?: Owner;
  }
  export type ObjectCannedACL = "private"|"public-read"|"public-read-write"|"authenticated-read"|"aws-exec-read"|"bucket-owner-read"|"bucket-owner-full-control"|string;
  export interface ObjectIdentifier {
    /**
     * Key name of the object to delete.
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
  export type ObjectStorageClass = "STANDARD"|"REDUCED_REDUNDANCY"|"GLACIER"|string;
  export interface ObjectVersion {
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
    Owner?: Owner;
  }
  export type ObjectVersionId = string;
  export type ObjectVersionList = ObjectVersion[];
  export type ObjectVersionStorageClass = "STANDARD"|string;
  export interface Owner {
    DisplayName?: DisplayName;
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
     * Size of the uploaded part data.
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
  export type Protocol = "http"|"https"|string;
  export interface PutBucketAclRequest {
    /**
     * The canned ACL to apply to the bucket.
     */
    ACL?: BucketCannedACL;
    AccessControlPolicy?: AccessControlPolicy;
    Bucket: BucketName;
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
     * Allows grantee to create, overwrite, and delete any object in the bucket.
     */
    GrantWrite?: GrantWrite;
    /**
     * Allows grantee to write the ACL for the applicable bucket.
     */
    GrantWriteACP?: GrantWriteACP;
  }
  export interface PutBucketCorsRequest {
    Bucket: BucketName;
    CORSConfiguration: CORSConfiguration;
    ContentMD5?: ContentMD5;
  }
  export interface PutObjectAclOutput {
    RequestCharged?: RequestCharged;
  }
  export interface PutObjectAclRequest {
    /**
     * The canned ACL to apply to the object.
     */
    ACL?: ObjectCannedACL;
    AccessControlPolicy?: AccessControlPolicy;
    Bucket: BucketName;
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
     * Allows grantee to create, overwrite, and delete any object in the bucket.
     */
    GrantWrite?: GrantWrite;
    /**
     * Allows grantee to write the ACL for the applicable bucket.
     */
    GrantWriteACP?: GrantWriteACP;
    Key: ObjectKey;
    /**
     * VersionId used to reference a specific version of the object.
     */
    VersionId?: ObjectVersionId;
  }
  export interface PutObjectOutput {
    /**
     * If the object expiration is configured, this will contain the expiration date (expiry-date) and rule ID (rule-id). The value of rule-id is URL encoded.
     */
    Expiration?: Expiration;
    /**
     * Entity tag for the uploaded object.
     */
    ETag?: ETag;
    /**
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
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
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export interface PutObjectRequest {
    /**
     * The canned ACL to apply to the object.
     */
    ACL?: ObjectCannedACL;
    /**
     * Object data.
     */
    Body?: Body;
    /**
     * Name of the bucket to which the PUT operation was initiated.
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
     * Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically.
     */
    ContentLength?: ContentLength;
    /**
     * The base64-encoded 128-bit MD5 digest of the part data.
     */
    ContentMD5?: ContentMD5;
    /**
     * A standard MIME type describing the format of the object data.
     */
    ContentType?: ContentType;
    /**
     * The date and time at which the object is no longer cacheable.
     */
    Expires?: Expires;
    /**
     * Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.
     */
    GrantFullControl?: GrantFullControl;
    /**
     * Allows grantee to read the object data and its metadata.
     */
    GrantRead?: GrantRead;
    /**
     * Allows grantee to read the object ACL.
     */
    GrantReadACP?: GrantReadACP;
    /**
     * Allows grantee to write the ACL for the applicable object.
     */
    GrantWriteACP?: GrantWriteACP;
    /**
     * Object key for which the PUT operation was initiated.
     */
    Key: ObjectKey;
    /**
     * A map of metadata to store with the object in S3.
     */
    Metadata?: Metadata;
    /**
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * The type of storage to use for the object. Defaults to 'STANDARD'.
     */
    StorageClass?: StorageClass;
    /**
     * Specifies the algorithm to use to when encrypting the object (e.g., AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; IBM does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side​-encryption​-customer-algorithm header.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. IBM COS uses this header for a message integrity check to ensure the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * Specifies the AWS KMS key ID to use for object encryption. All GET and PUT requests for an object protected by AWS KMS will fail if not made via SSL or using SigV4. Documentation on configuring any of the officially supported AWS SDKs and CLI can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export type Quiet = boolean;
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
     * Protocol to use (http, https) when redirecting requests. The default is the protocol that is used in the original request.
     */
    Protocol?: Protocol;
    /**
     * The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix docs/ (objects in the docs/ folder) to documents/, you can set a condition block with KeyPrefixEquals set to docs/ and in the Redirect set ReplaceKeyPrefixWith to /documents. Not required if one of the siblings is present. Can be present only if ReplaceKeyWith is not provided.
     */
    ReplaceKeyPrefixWith?: ReplaceKeyPrefixWith;
    /**
     * The specific object key to use in the redirect request. For example, redirect request to error.html. Not required if one of the sibling is present. Can be present only if ReplaceKeyPrefixWith is not provided.
     */
    ReplaceKeyWith?: ReplaceKeyWith;
  }
  export type ReplaceKeyPrefixWith = string;
  export type ReplaceKeyWith = string;
  export interface ReplicationConfiguration {
    /**
     * Name of an IAM role for IBM COS to assume when replicating the objects.
     */
    Role: Role;
    /**
     * Container for information about a particular replication rule. Replication configuration must have at least one rule and can contain up to 1,000 rules.
     */
    Rules: ReplicationRules;
  }
  export interface ReplicationRule {
    /**
     * Unique identifier for the rule. The value cannot be longer than 255 characters.
     */
    ID?: ID;
    /**
     * Object keyname prefix identifying one or more objects to which the rule applies. Maximum prefix length can be up to 1,024 characters. Overlapping prefixes are not supported.
     */
    Prefix: Prefix;
    /**
     * The rule is ignored if status is not Enabled.
     */
    Status: ReplicationRuleStatus;
    Destination: Destination;
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
    Bucket: BucketName;
    Key: ObjectKey;
    VersionId?: ObjectVersionId;
    RestoreRequest?: RestoreRequest;
  }
  export interface RestoreRequest {
    /**
     * Lifetime of the active copy in days
     */
    Days: Days;
  }
  export type Role = string;
  export interface RoutingRule {
    /**
     * A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the /docs folder, redirect to the /documents folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
     */
    Condition?: Condition;
    /**
     * Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can can specify a different error code to return.
     */
    Redirect: Redirect;
  }
  export type RoutingRules = RoutingRule[];
  export interface Rule {
    /**
     * Unique identifier for the rule. The value cannot be longer than 255 characters.
     */
    ID?: ID;
    /**
     * Prefix identifying one or more objects to which the rule applies.
     */
    Prefix: Prefix;
    /**
     * If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.
     */
    Status: ExpirationStatus;
    Transition?: Transition;
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
  export type Size = number;
  export type StartAfter = string;
  export type StorageClass = "STANDARD"|"REDUCED_REDUNDANCY"|"STANDARD_IA"|string;
  export type Suffix = string;
  export interface Tag {
    /**
     * Name of the tag.
     */
    Key: ObjectKey;
    /**
     * Value of the tag.
     */
    Value: Value;
  }
  export type TagCount = number;
  export type TargetBucket = string;
  export interface TargetGrant {
    Grantee?: Grantee;
    /**
     * Logging permissions assigned to the Grantee for the bucket.
     */
    Permission?: BucketLogsPermission;
  }
  export type TargetGrants = TargetGrant[];
  export type TargetPrefix = string;
  export type Tier = "Standard"|"Bulk"|"Expedited"|string;
  export type Token = string;
  export interface Transition {
    /**
     * Indicates at what date the object is to be moved or deleted. Should be in GMT ISO 8601 Format.
     */
    Date?: _Date;
    /**
     * Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.
     */
    Days?: Days;
    /**
     * The class of storage used to store the object.
     */
    StorageClass?: TransitionStorageClass;
  }
  export type TransitionList = Transition[];
  export type TransitionStorageClass = "GLACIER"|"STANDARD_IA"|string;
  export type Type = "CanonicalUser"|"AmazonCustomerByEmail"|"Group"|string;
  export type URI = string;
  export type UploadIdMarker = string;
  export interface UploadPartCopyOutput {
    /**
     * The version of the source object that was copied, if you have enabled versioning on the source bucket.
     */
    CopySourceVersionId?: CopySourceVersionId;
    CopyPartResult?: CopyPartResult;
    /**
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: ServerSideEncryption;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export interface UploadPartCopyRequest {
    Bucket: BucketName;
    /**
     * The name of the source bucket and key name of the source object, separated by a slash (/). Must be URL-encoded.
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
     * The range of bytes to copy from the source object. The range value must use the form bytes=first-last, where the first and last are the zero-based byte offsets to copy. For example, bytes=0-9 indicates that you want to copy the first ten bytes of the source. You can copy a range only if the source object is greater than 5 GB.
     */
    CopySourceRange?: CopySourceRange;
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
     * Specifies the algorithm to use to when encrypting the object (e.g., AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; IBM does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side​-encryption​-customer-algorithm header. This must be the same encryption key specified in the initiate multipart upload request.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. IBM COS uses this header for a message integrity check to ensure the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * Specifies the algorithm to use when decrypting the source object (e.g., AES256).
     */
    CopySourceSSECustomerAlgorithm?: CopySourceSSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.
     */
    CopySourceSSECustomerKey?: CopySourceSSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. IBM COS uses this header for a message integrity check to ensure the encryption key was transmitted without error.
     */
    CopySourceSSECustomerKeyMD5?: CopySourceSSECustomerKeyMD5;
  }
  export interface UploadPartOutput {
    /**
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
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
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
    /**
     * If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.
     */
    SSEKMSKeyId?: SSEKMSKeyId;
  }
  export interface UploadPartRequest {
    /**
     * Object data.
     */
    Body?: Body;
    /**
     * Name of the bucket to which the multipart upload was initiated.
     */
    Bucket: BucketName;
    /**
     * Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically.
     */
    ContentLength?: ContentLength;
    /**
     * The base64-encoded 128-bit MD5 digest of the part data.
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
     * Specifies the algorithm to use to when encrypting the object (e.g., AES256).
     */
    SSECustomerAlgorithm?: SSECustomerAlgorithm;
    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; IBM does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side​-encryption​-customer-algorithm header. This must be the same encryption key specified in the initiate multipart upload request.
     */
    SSECustomerKey?: SSECustomerKey;
    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. IBM COS uses this header for a message integrity check to ensure the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: SSECustomerKeyMD5;
  }
  export type Value = string;
  export type VersionIdMarker = string;
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
