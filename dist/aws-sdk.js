// AWS SDK for JavaScript v1.14.0
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// License at https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  module.exports={
    "s3": {
      "name": "S3",
      "dualstackAvailable": true,
      "cors": true
    }
  }
  
  },{}],2:[function(require,module,exports){
  module.exports={
    "version": "2.0",
    "metadata": {
      "apiVersion": "2006-03-01",
      "checksumFormat": "md5",
      "endpointPrefix": "s3",
      "globalEndpoint": "s3.amazonaws.com",
      "protocol": "rest-xml",
      "serviceAbbreviation": "IBM COS",
      "serviceFullName": "IBM Cloud Object Storage",
      "serviceId": "S3",
      "signatureVersion": "s3",
      "timestampFormat": "rfc822",
      "uid": "s3-2006-03-01",
      "auth": [
        "aws.auth#sigv4"
      ]
    },
    "operations": {
      "AbortMultipartUpload": {
        "http": {
          "method": "DELETE",
          "requestUri": "/{Bucket}/{Key+}",
          "responseCode": 204
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key",
            "UploadId"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "contextParam": {
                "name": "Key"
              },
              "location": "uri",
              "locationName": "Key"
            },
            "UploadId": {
              "location": "querystring",
              "locationName": "uploadId"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {}
        }
      },
      "AddLegalHold": {
        "http": {
          "requestUri": "/{Bucket}/{Key+}?legalHold&add={RetentionLegalHoldId}"
        },
        "input": {
          "shape": "S6"
        }
      },
      "CompleteMultipartUpload": {
        "http": {
          "requestUri": "/{Bucket}/{Key+}"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key",
            "UploadId"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "contextParam": {
                "name": "Key"
              },
              "location": "uri",
              "locationName": "Key"
            },
            "MultipartUpload": {
              "locationName": "CompleteMultipartUpload",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              },
              "type": "structure",
              "members": {
                "Parts": {
                  "locationName": "Part",
                  "type": "list",
                  "member": {
                    "type": "structure",
                    "members": {
                      "ETag": {},
                      "PartNumber": {
                        "type": "integer"
                      }
                    }
                  },
                  "flattened": true
                }
              }
            },
            "IfNoneMatch": {
              "location": "header",
              "locationName": "If-None-Match"
            },
            "RetentionExpirationDate": {
              "shape": "Sf",
              "location": "header",
              "locationName": "Retention-Expiration-Date"
            },
            "RetentionLegalHoldId": {
              "location": "header",
              "locationName": "Retention-Legal-Hold-ID"
            },
            "RetentionPeriod": {
              "location": "header",
              "locationName": "Retention-Period",
              "type": "integer"
            },
            "UploadId": {
              "location": "querystring",
              "locationName": "uploadId"
            }
          },
          "payload": "MultipartUpload"
        },
        "output": {
          "type": "structure",
          "members": {
            "Location": {},
            "Bucket": {},
            "Key": {},
            "Expiration": {
              "location": "header",
              "locationName": "x-amz-expiration"
            },
            "ETag": {},
            "ServerSideEncryption": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption"
            },
            "VersionId": {
              "location": "header",
              "locationName": "x-amz-version-id"
            },
            "SSEKMSKeyId": {
              "shape": "Sm",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
            }
          }
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "CopyObject": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}/{Key+}"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "CopySource",
            "Key"
          ],
          "members": {
            "ACL": {
              "location": "header",
              "locationName": "x-amz-acl"
            },
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "CacheControl": {
              "location": "header",
              "locationName": "Cache-Control"
            },
            "ContentDisposition": {
              "location": "header",
              "locationName": "Content-Disposition"
            },
            "ContentEncoding": {
              "location": "header",
              "locationName": "Content-Encoding"
            },
            "ContentLanguage": {
              "location": "header",
              "locationName": "Content-Language"
            },
            "ContentType": {
              "location": "header",
              "locationName": "Content-Type"
            },
            "CopySource": {
              "contextParam": {
                "name": "CopySource"
              },
              "location": "header",
              "locationName": "x-amz-copy-source"
            },
            "CopySourceIfMatch": {
              "location": "header",
              "locationName": "x-amz-copy-source-if-match"
            },
            "CopySourceIfModifiedSince": {
              "location": "header",
              "locationName": "x-amz-copy-source-if-modified-since",
              "type": "timestamp"
            },
            "CopySourceIfNoneMatch": {
              "location": "header",
              "locationName": "x-amz-copy-source-if-none-match"
            },
            "CopySourceIfUnmodifiedSince": {
              "location": "header",
              "locationName": "x-amz-copy-source-if-unmodified-since",
              "type": "timestamp"
            },
            "Expires": {
              "location": "header",
              "locationName": "Expires",
              "type": "timestamp"
            },
            "GrantFullControl": {
              "location": "header",
              "locationName": "x-amz-grant-full-control"
            },
            "GrantRead": {
              "location": "header",
              "locationName": "x-amz-grant-read"
            },
            "GrantReadACP": {
              "location": "header",
              "locationName": "x-amz-grant-read-acp"
            },
            "GrantWriteACP": {
              "location": "header",
              "locationName": "x-amz-grant-write-acp"
            },
            "Key": {
              "contextParam": {
                "name": "Key"
              },
              "location": "uri",
              "locationName": "Key"
            },
            "Metadata": {
              "shape": "S14",
              "location": "headers",
              "locationName": "x-amz-meta-"
            },
            "MetadataDirective": {
              "location": "header",
              "locationName": "x-amz-metadata-directive"
            },
            "TaggingDirective": {
              "location": "header",
              "locationName": "x-amz-tagging-directive"
            },
            "RetentionDirective": {
              "location": "header",
              "locationName": "Retention-Directive"
            },
            "RetentionExpirationDate": {
              "shape": "Sf",
              "location": "header",
              "locationName": "Retention-Expiration-Date"
            },
            "RetentionLegalHoldId": {
              "location": "header",
              "locationName": "Retention-Legal-Hold-ID"
            },
            "RetentionPeriod": {
              "location": "header",
              "locationName": "Retention-Period",
              "type": "integer"
            },
            "ServerSideEncryption": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption"
            },
            "StorageClass": {
              "location": "header",
              "locationName": "x-amz-storage-class"
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            },
            "WebsiteRedirectLocation": {
              "location": "header",
              "locationName": "x-amz-website-redirect-location"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKey": {
              "shape": "S1d",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "SSEKMSKeyId": {
              "shape": "Sm",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
            },
            "CopySourceSSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-copy-source-server-side-encryption-customer-algorithm"
            },
            "CopySourceSSECustomerKey": {
              "shape": "S1g",
              "location": "header",
              "locationName": "x-amz-copy-source-server-side-encryption-customer-key"
            },
            "CopySourceSSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-copy-source-server-side-encryption-customer-key-MD5"
            },
            "Tagging": {
              "location": "header",
              "locationName": "x-amz-tagging"
            },
            "ObjectLockMode": {
              "location": "header",
              "locationName": "x-amz-object-lock-mode"
            },
            "ObjectLockRetainUntilDate": {
              "shape": "S1k",
              "location": "header",
              "locationName": "x-amz-object-lock-retain-until-date"
            },
            "ObjectLockLegalHoldStatus": {
              "location": "header",
              "locationName": "x-amz-object-lock-legal-hold"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "CopyObjectResult": {
              "type": "structure",
              "members": {
                "ETag": {},
                "LastModified": {
                  "type": "timestamp"
                }
              }
            },
            "Expiration": {
              "location": "header",
              "locationName": "x-amz-expiration"
            },
            "CopySourceVersionId": {
              "location": "header",
              "locationName": "x-amz-copy-source-version-id"
            },
            "VersionId": {
              "location": "header",
              "locationName": "x-amz-version-id"
            },
            "ServerSideEncryption": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "SSEKMSKeyId": {
              "shape": "Sm",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
            }
          },
          "payload": "CopyObjectResult"
        },
        "alias": "PutObjectCopy"
      },
      "CreateBucket": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "ACL": {
              "location": "header",
              "locationName": "x-amz-acl"
            },
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "CreateBucketConfiguration": {
              "locationName": "CreateBucketConfiguration",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              },
              "type": "structure",
              "members": {
                "LocationConstraint": {}
              }
            },
            "GrantFullControl": {
              "location": "header",
              "locationName": "x-amz-grant-full-control"
            },
            "GrantRead": {
              "location": "header",
              "locationName": "x-amz-grant-read"
            },
            "GrantReadACP": {
              "location": "header",
              "locationName": "x-amz-grant-read-acp"
            },
            "GrantWrite": {
              "location": "header",
              "locationName": "x-amz-grant-write"
            },
            "GrantWriteACP": {
              "location": "header",
              "locationName": "x-amz-grant-write-acp"
            },
            "ObjectLockEnabledForBucket": {
              "location": "header",
              "locationName": "x-amz-bucket-object-lock-enabled",
              "type": "boolean"
            },
            "IBMServiceInstanceId": {
              "location": "header",
              "locationName": "Ibm-Service-Instance-Id"
            },
            "IBMSSEKPEncryptionAlgorithm": {
              "location": "header",
              "locationName": "ibm-sse-kp-encryption-algorithm"
            },
            "IBMSSEKPCustomerRootKeyCrn": {
              "location": "header",
              "locationName": "ibm-sse-kp-customer-root-key-crn"
            }
          },
          "payload": "CreateBucketConfiguration"
        },
        "output": {
          "type": "structure",
          "members": {
            "Location": {
              "location": "header",
              "locationName": "Location"
            }
          }
        },
        "alias": "PutBucket"
      },
      "CreateMultipartUpload": {
        "http": {
          "requestUri": "/{Bucket}/{Key+}?uploads"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "ACL": {
              "location": "header",
              "locationName": "x-amz-acl"
            },
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "CacheControl": {
              "location": "header",
              "locationName": "Cache-Control"
            },
            "ContentDisposition": {
              "location": "header",
              "locationName": "Content-Disposition"
            },
            "ContentEncoding": {
              "location": "header",
              "locationName": "Content-Encoding"
            },
            "ContentLanguage": {
              "location": "header",
              "locationName": "Content-Language"
            },
            "ContentType": {
              "location": "header",
              "locationName": "Content-Type"
            },
            "Expires": {
              "location": "header",
              "locationName": "Expires",
              "type": "timestamp"
            },
            "GrantFullControl": {
              "location": "header",
              "locationName": "x-amz-grant-full-control"
            },
            "GrantRead": {
              "location": "header",
              "locationName": "x-amz-grant-read"
            },
            "GrantReadACP": {
              "location": "header",
              "locationName": "x-amz-grant-read-acp"
            },
            "GrantWriteACP": {
              "location": "header",
              "locationName": "x-amz-grant-write-acp"
            },
            "Key": {
              "contextParam": {
                "name": "Key"
              },
              "location": "uri",
              "locationName": "Key"
            },
            "Metadata": {
              "shape": "S14",
              "location": "headers",
              "locationName": "x-amz-meta-"
            },
            "ServerSideEncryption": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption"
            },
            "StorageClass": {
              "location": "header",
              "locationName": "x-amz-storage-class"
            },
            "WebsiteRedirectLocation": {
              "location": "header",
              "locationName": "x-amz-website-redirect-location"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKey": {
              "shape": "S1d",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "SSEKMSKeyId": {
              "shape": "Sm",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
            },
            "Tagging": {
              "location": "header",
              "locationName": "x-amz-tagging"
            },
            "ObjectLockMode": {
              "location": "header",
              "locationName": "x-amz-object-lock-mode"
            },
            "ObjectLockRetainUntilDate": {
              "shape": "S1k",
              "location": "header",
              "locationName": "x-amz-object-lock-retain-until-date"
            },
            "ObjectLockLegalHoldStatus": {
              "location": "header",
              "locationName": "x-amz-object-lock-legal-hold"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "AbortDate": {
              "location": "header",
              "locationName": "x-amz-abort-date",
              "type": "timestamp"
            },
            "AbortRuleId": {
              "location": "header",
              "locationName": "x-amz-abort-rule-id"
            },
            "Bucket": {
              "locationName": "Bucket"
            },
            "Key": {},
            "UploadId": {},
            "ServerSideEncryption": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "SSEKMSKeyId": {
              "shape": "Sm",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
            }
          }
        },
        "alias": "InitiateMultipartUpload"
      },
      "DeleteBucket": {
        "http": {
          "method": "DELETE",
          "requestUri": "/{Bucket}",
          "responseCode": 204
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        }
      },
      "DeleteBucketCors": {
        "http": {
          "method": "DELETE",
          "requestUri": "/{Bucket}?cors",
          "responseCode": 204
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        }
      },
      "DeleteLegalHold": {
        "http": {
          "requestUri": "/{Bucket}/{Key+}?legalHold&remove={RetentionLegalHoldId}"
        },
        "input": {
          "shape": "S6"
        }
      },
      "DeleteBucketLifecycle": {
        "http": {
          "method": "DELETE",
          "requestUri": "/{Bucket}?lifecycle",
          "responseCode": 204
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        }
      },
      "DeleteBucketReplication": {
        "http": {
          "method": "DELETE",
          "requestUri": "/{Bucket}?replication",
          "responseCode": 204
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        }
      },
      "DeleteBucketTagging": {
        "http": {
          "method": "DELETE",
          "requestUri": "/{Bucket}?tagging",
          "responseCode": 204
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        }
      },
      "DeleteBucketWebsite": {
        "http": {
          "method": "DELETE",
          "requestUri": "/{Bucket}?website",
          "responseCode": 204
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        }
      },
      "DeleteObject": {
        "http": {
          "method": "DELETE",
          "requestUri": "/{Bucket}/{Key+}",
          "responseCode": 204
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "contextParam": {
                "name": "Key"
              },
              "location": "uri",
              "locationName": "Key"
            },
            "MFA": {
              "location": "header",
              "locationName": "x-amz-mfa"
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            },
            "BypassGovernanceRetention": {
              "location": "header",
              "locationName": "x-amz-bypass-governance-retention",
              "type": "boolean"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "DeleteMarker": {
              "location": "header",
              "locationName": "x-amz-delete-marker",
              "type": "boolean"
            },
            "VersionId": {
              "location": "header",
              "locationName": "x-amz-version-id"
            }
          }
        }
      },
      "DeleteObjectTagging": {
        "http": {
          "method": "DELETE",
          "requestUri": "/{Bucket}/{Key+}?tagging",
          "responseCode": 204
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "location": "uri",
              "locationName": "Key"
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "VersionId": {
              "location": "header",
              "locationName": "x-amz-version-id"
            }
          }
        }
      },
      "DeleteObjects": {
        "http": {
          "requestUri": "/{Bucket}?delete"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Delete"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Delete": {
              "locationName": "Delete",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              },
              "type": "structure",
              "required": [
                "Objects"
              ],
              "members": {
                "Objects": {
                  "locationName": "Object",
                  "type": "list",
                  "member": {
                    "type": "structure",
                    "required": [
                      "Key"
                    ],
                    "members": {
                      "Key": {},
                      "VersionId": {}
                    }
                  },
                  "flattened": true
                },
                "Quiet": {
                  "type": "boolean"
                }
              }
            },
            "MFA": {
              "location": "header",
              "locationName": "x-amz-mfa"
            },
            "BypassGovernanceRetention": {
              "location": "header",
              "locationName": "x-amz-bypass-governance-retention",
              "type": "boolean"
            }
          },
          "payload": "Delete"
        },
        "output": {
          "type": "structure",
          "members": {
            "Deleted": {
              "type": "list",
              "member": {
                "type": "structure",
                "members": {
                  "Key": {},
                  "VersionId": {},
                  "DeleteMarker": {
                    "type": "boolean"
                  },
                  "DeleteMarkerVersionId": {}
                }
              },
              "flattened": true
            },
            "Errors": {
              "locationName": "Error",
              "type": "list",
              "member": {
                "type": "structure",
                "members": {
                  "Key": {},
                  "VersionId": {},
                  "Code": {},
                  "Message": {}
                }
              },
              "flattened": true
            }
          }
        },
        "alias": "DeleteMultipleObjects",
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "ExtendObjectRetention": {
        "http": {
          "requestUri": "/{Bucket}/{Key+}?extendRetention"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "location": "uri",
              "locationName": "Key"
            },
            "AdditionalRetentionPeriod": {
              "location": "header",
              "locationName": "Additional-Retention-Period",
              "type": "integer"
            },
            "ExtendRetentionFromCurrentTime": {
              "location": "header",
              "locationName": "Extend-Retention-From-Current-Time",
              "type": "integer"
            },
            "NewRetentionExpirationDate": {
              "location": "header",
              "locationName": "New-Retention-Expiration-Date",
              "type": "timestamp",
              "timestampFormat": "iso8601"
            },
            "NewRetentionPeriod": {
              "location": "header",
              "locationName": "New-Retention-Period",
              "type": "integer"
            }
          }
        }
      },
      "DeletePublicAccessBlock": {
        "http": {
          "method": "DELETE",
          "requestUri": "/{Bucket}?publicAccessBlock",
          "responseCode": 204
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ExpectedBucketOwner": {
              "location": "header",
              "locationName": "x-amz-expected-bucket-owner"
            }
          }
        }
      },
      "GetBucketAcl": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?acl"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "Owner": {
              "shape": "S33"
            },
            "Grants": {
              "shape": "S36",
              "locationName": "AccessControlList"
            }
          }
        }
      },
      "GetBucketCors": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?cors"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "MirrorDestination": {
              "location": "header",
              "locationName": "Mirror-Destination"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "CORSRules": {
              "shape": "S3g",
              "locationName": "CORSRule"
            }
          }
        }
      },
      "GetBucketLifecycle": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?lifecycle"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "Rules": {
              "locationName": "Rule",
              "type": "list",
              "member": {
                "type": "structure",
                "required": [
                  "Prefix",
                  "Status"
                ],
                "members": {
                  "Expiration": {
                    "shape": "S3v"
                  },
                  "ID": {},
                  "Prefix": {},
                  "Status": {},
                  "Transition": {
                    "shape": "S41"
                  },
                  "NoncurrentVersionExpiration": {
                    "shape": "S43"
                  },
                  "AbortIncompleteMultipartUpload": {
                    "shape": "S45"
                  }
                }
              },
              "flattened": true
            }
          }
        },
        "deprecated": true
      },
      "GetBucketLifecycleConfiguration": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?lifecycle"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "Rules": {
              "shape": "S49",
              "locationName": "Rule"
            }
          }
        }
      },
      "GetBucketLocation": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?location"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "LocationConstraint": {}
          }
        }
      },
      "GetBucketProtectionConfiguration": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?protection"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "Status": {},
            "MinimumRetention": {
              "shape": "S4o"
            },
            "DefaultRetention": {
              "shape": "S4p"
            },
            "MaximumRetention": {
              "shape": "S4q"
            },
            "EnablePermanentRetention": {
              "type": "boolean"
            },
            "IbmProtectionManagementState": {
              "location": "header",
              "locationName": "x-ibm-protection-management-state"
            }
          }
        }
      },
      "GetBucketReplication": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?replication"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "ReplicationConfiguration": {
              "shape": "S4v"
            }
          },
          "payload": "ReplicationConfiguration"
        }
      },
      "GetBucketTagging": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?tagging"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "MirrorDestination": {
              "location": "header",
              "locationName": "Mirror-Destination"
            }
          }
        },
        "output": {
          "type": "structure",
          "required": [
            "TagSet"
          ],
          "members": {
            "TagSet": {
              "shape": "S4h"
            }
          }
        }
      },
      "GetBucketVersioning": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?versioning"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "Status": {},
            "MFADelete": {
              "locationName": "MfaDelete"
            }
          }
        }
      },
      "GetBucketWebsite": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?website"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "RedirectAllRequestsTo": {
              "shape": "S5e"
            },
            "IndexDocument": {
              "shape": "S5h"
            },
            "ErrorDocument": {
              "shape": "S5j"
            },
            "RoutingRules": {
              "shape": "S5k"
            }
          }
        }
      },
      "GetObject": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}/{Key+}"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "IfMatch": {
              "location": "header",
              "locationName": "If-Match"
            },
            "IfModifiedSince": {
              "location": "header",
              "locationName": "If-Modified-Since",
              "type": "timestamp"
            },
            "IfNoneMatch": {
              "location": "header",
              "locationName": "If-None-Match"
            },
            "IfUnmodifiedSince": {
              "location": "header",
              "locationName": "If-Unmodified-Since",
              "type": "timestamp"
            },
            "Key": {
              "contextParam": {
                "name": "Key"
              },
              "location": "uri",
              "locationName": "Key"
            },
            "MirrorDestination": {
              "location": "header",
              "locationName": "Mirror-Destination"
            },
            "Range": {
              "location": "header",
              "locationName": "Range"
            },
            "ResponseCacheControl": {
              "location": "querystring",
              "locationName": "response-cache-control"
            },
            "ResponseContentDisposition": {
              "location": "querystring",
              "locationName": "response-content-disposition"
            },
            "ResponseContentEncoding": {
              "location": "querystring",
              "locationName": "response-content-encoding"
            },
            "ResponseContentLanguage": {
              "location": "querystring",
              "locationName": "response-content-language"
            },
            "ResponseContentType": {
              "location": "querystring",
              "locationName": "response-content-type"
            },
            "ResponseExpires": {
              "location": "querystring",
              "locationName": "response-expires",
              "type": "timestamp",
              "timestampFormat": "rfc822"
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKey": {
              "shape": "S1d",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "PartNumber": {
              "location": "querystring",
              "locationName": "partNumber",
              "type": "integer"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "Body": {
              "streaming": true,
              "type": "blob"
            },
            "DeleteMarker": {
              "location": "header",
              "locationName": "x-amz-delete-marker",
              "type": "boolean"
            },
            "AcceptRanges": {
              "location": "header",
              "locationName": "accept-ranges"
            },
            "Expiration": {
              "location": "header",
              "locationName": "x-amz-expiration"
            },
            "Restore": {
              "location": "header",
              "locationName": "x-amz-restore"
            },
            "LastModified": {
              "location": "header",
              "locationName": "Last-Modified",
              "type": "timestamp"
            },
            "ContentLength": {
              "location": "header",
              "locationName": "Content-Length",
              "type": "long"
            },
            "ETag": {
              "location": "header",
              "locationName": "ETag"
            },
            "VersionId": {
              "location": "header",
              "locationName": "x-amz-version-id"
            },
            "CacheControl": {
              "location": "header",
              "locationName": "Cache-Control"
            },
            "ContentDisposition": {
              "location": "header",
              "locationName": "Content-Disposition"
            },
            "ContentEncoding": {
              "location": "header",
              "locationName": "Content-Encoding"
            },
            "ContentLanguage": {
              "location": "header",
              "locationName": "Content-Language"
            },
            "ContentRange": {
              "location": "header",
              "locationName": "Content-Range"
            },
            "ContentType": {
              "location": "header",
              "locationName": "Content-Type"
            },
            "Expires": {
              "location": "header",
              "locationName": "Expires",
              "deprecated": true,
              "type": "timestamp"
            },
            "ExpiresString": {
              "location": "header",
              "locationName": "ExpiresString"
            },
            "WebsiteRedirectLocation": {
              "location": "header",
              "locationName": "x-amz-website-redirect-location"
            },
            "ServerSideEncryption": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption"
            },
            "Metadata": {
              "shape": "S14",
              "location": "headers",
              "locationName": "x-amz-meta-"
            },
            "RetentionExpirationDate": {
              "shape": "Sf",
              "location": "header",
              "locationName": "Retention-Expiration-Date"
            },
            "RetentionLegalHoldCount": {
              "location": "header",
              "locationName": "Retention-Legal-Hold-Count",
              "type": "integer"
            },
            "RetentionPeriod": {
              "location": "header",
              "locationName": "Retention-Period",
              "type": "integer"
            },
            "RetentionPeriodSource": {
              "location": "header",
              "locationName": "Retention-Period-Source"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "SSEKMSKeyId": {
              "shape": "Sm",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
            },
            "StorageClass": {
              "location": "header",
              "locationName": "x-amz-storage-class"
            },
            "PartsCount": {
              "location": "header",
              "locationName": "x-amz-mp-parts-count",
              "type": "integer"
            },
            "TagCount": {
              "location": "header",
              "locationName": "x-amz-tagging-count",
              "type": "integer"
            },
            "ObjectLockMode": {
              "location": "header",
              "locationName": "x-amz-object-lock-mode"
            },
            "ObjectLockRetainUntilDate": {
              "shape": "S1k",
              "location": "header",
              "locationName": "x-amz-object-lock-retain-until-date"
            },
            "ObjectLockLegalHoldStatus": {
              "location": "header",
              "locationName": "x-amz-object-lock-legal-hold"
            },
            "TemporaryCopyStorageClass": {
              "location": "header",
              "locationName": "x-ibm-restored-copy-storage-class"
            },
            "Transition": {
              "location": "header",
              "locationName": "x-ibm-transition"
            }
          },
          "payload": "Body"
        }
      },
      "GetObjectAcl": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}/{Key+}?acl"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "contextParam": {
                "name": "Key"
              },
              "location": "uri",
              "locationName": "Key"
            },
            "MirrorDestination": {
              "location": "header",
              "locationName": "Mirror-Destination"
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "Owner": {
              "shape": "S33"
            },
            "Grants": {
              "shape": "S36",
              "locationName": "AccessControlList"
            }
          }
        }
      },
      "GetObjectLegalHold": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}/{Key+}?legal-hold"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "location": "uri",
              "locationName": "Key"
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            },
            "ExpectedBucketOwner": {
              "location": "header",
              "locationName": "x-amz-expected-bucket-owner"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "LegalHold": {
              "shape": "S6k",
              "locationName": "LegalHold"
            }
          },
          "payload": "LegalHold"
        }
      },
      "GetObjectLockConfiguration": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?object-lock"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ExpectedBucketOwner": {
              "location": "header",
              "locationName": "x-amz-expected-bucket-owner"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "ObjectLockConfiguration": {
              "shape": "S6n"
            },
            "IbmProtectionManagementState": {
              "location": "header",
              "locationName": "x-ibm-protection-management-state"
            }
          },
          "payload": "ObjectLockConfiguration"
        }
      },
      "GetObjectRetention": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}/{Key+}?retention"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "location": "uri",
              "locationName": "Key"
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            },
            "ExpectedBucketOwner": {
              "location": "header",
              "locationName": "x-amz-expected-bucket-owner"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "Retention": {
              "shape": "S6v",
              "locationName": "Retention"
            }
          },
          "payload": "Retention"
        }
      },
      "GetObjectTagging": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}/{Key+}?tagging"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "location": "uri",
              "locationName": "Key"
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            }
          }
        },
        "output": {
          "type": "structure",
          "required": [
            "TagSet"
          ],
          "members": {
            "VersionId": {
              "location": "header",
              "locationName": "x-amz-version-id"
            },
            "TagSet": {
              "shape": "S4h"
            }
          }
        }
      },
      "GetPublicAccessBlock": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?publicAccessBlock"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ExpectedBucketOwner": {
              "location": "header",
              "locationName": "x-amz-expected-bucket-owner"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "PublicAccessBlockConfiguration": {
              "shape": "S70"
            }
          },
          "payload": "PublicAccessBlockConfiguration"
        }
      },
      "HeadBucket": {
        "http": {
          "method": "HEAD",
          "requestUri": "/{Bucket}"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "IBMSSEKPEnabled": {
              "location": "header",
              "locationName": "ibm-sse-kp-enabled",
              "type": "boolean"
            },
            "IBMSSEKPCustomerRootKeyCrn": {
              "location": "header",
              "locationName": "ibm-sse-kp-customer-root-key-crn"
            }
          }
        }
      },
      "HeadObject": {
        "http": {
          "method": "HEAD",
          "requestUri": "/{Bucket}/{Key+}"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "IfMatch": {
              "location": "header",
              "locationName": "If-Match"
            },
            "IfModifiedSince": {
              "location": "header",
              "locationName": "If-Modified-Since",
              "type": "timestamp"
            },
            "IfNoneMatch": {
              "location": "header",
              "locationName": "If-None-Match"
            },
            "IfUnmodifiedSince": {
              "location": "header",
              "locationName": "If-Unmodified-Since",
              "type": "timestamp"
            },
            "Key": {
              "contextParam": {
                "name": "Key"
              },
              "location": "uri",
              "locationName": "Key"
            },
            "MirrorDestination": {
              "location": "header",
              "locationName": "Mirror-Destination"
            },
            "Range": {
              "location": "header",
              "locationName": "Range"
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKey": {
              "shape": "S1d",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "PartNumber": {
              "location": "querystring",
              "locationName": "partNumber",
              "type": "integer"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "DeleteMarker": {
              "location": "header",
              "locationName": "x-amz-delete-marker",
              "type": "boolean"
            },
            "AcceptRanges": {
              "location": "header",
              "locationName": "accept-ranges"
            },
            "Expiration": {
              "location": "header",
              "locationName": "x-amz-expiration"
            },
            "Restore": {
              "location": "header",
              "locationName": "x-amz-restore"
            },
            "LastModified": {
              "location": "header",
              "locationName": "Last-Modified",
              "type": "timestamp"
            },
            "ContentLength": {
              "location": "header",
              "locationName": "Content-Length",
              "type": "long"
            },
            "ETag": {
              "location": "header",
              "locationName": "ETag"
            },
            "VersionId": {
              "location": "header",
              "locationName": "x-amz-version-id"
            },
            "CacheControl": {
              "location": "header",
              "locationName": "Cache-Control"
            },
            "ContentDisposition": {
              "location": "header",
              "locationName": "Content-Disposition"
            },
            "ContentEncoding": {
              "location": "header",
              "locationName": "Content-Encoding"
            },
            "ContentLanguage": {
              "location": "header",
              "locationName": "Content-Language"
            },
            "ContentType": {
              "location": "header",
              "locationName": "Content-Type"
            },
            "Expires": {
              "location": "header",
              "locationName": "Expires",
              "deprecated": true,
              "type": "timestamp"
            },
            "ExpiresString": {
              "location": "header",
              "locationName": "ExpiresString"
            },
            "WebsiteRedirectLocation": {
              "location": "header",
              "locationName": "x-amz-website-redirect-location"
            },
            "ServerSideEncryption": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption"
            },
            "Metadata": {
              "shape": "S14",
              "location": "headers",
              "locationName": "x-amz-meta-"
            },
            "RetentionExpirationDate": {
              "shape": "Sf",
              "location": "header",
              "locationName": "Retention-Expiration-Date"
            },
            "RetentionLegalHoldCount": {
              "location": "header",
              "locationName": "Retention-Legal-Hold-Count",
              "type": "integer"
            },
            "RetentionPeriod": {
              "location": "header",
              "locationName": "Retention-Period",
              "type": "integer"
            },
            "RetentionPeriodSource": {
              "location": "header",
              "locationName": "Retention-Period-Source"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "SSEKMSKeyId": {
              "shape": "Sm",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
            },
            "StorageClass": {
              "location": "header",
              "locationName": "x-amz-storage-class"
            },
            "PartsCount": {
              "location": "header",
              "locationName": "x-amz-mp-parts-count",
              "type": "integer"
            },
            "ObjectLockMode": {
              "location": "header",
              "locationName": "x-amz-object-lock-mode"
            },
            "ObjectLockRetainUntilDate": {
              "shape": "S1k",
              "location": "header",
              "locationName": "x-amz-object-lock-retain-until-date"
            },
            "ObjectLockLegalHoldStatus": {
              "location": "header",
              "locationName": "x-amz-object-lock-legal-hold"
            },
            "TemporaryCopyStorageClass": {
              "location": "header",
              "locationName": "x-ibm-restored-copy-storage-class"
            },
            "Transition": {
              "location": "header",
              "locationName": "x-ibm-transition"
            }
          }
        }
      },
      "ListBuckets": {
        "http": {
          "method": "GET"
        },
        "input": {
          "type": "structure",
          "members": {
            "IBMServiceInstanceId": {
              "location": "header",
              "locationName": "Ibm-Service-Instance-Id"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "Buckets": {
              "shape": "S79"
            },
            "Owner": {
              "shape": "S33"
            }
          }
        },
        "alias": "GetService"
      },
      "ListBucketsExtended": {
        "http": {
          "method": "GET",
          "requestUri": "/?extended"
        },
        "input": {
          "type": "structure",
          "members": {
            "IBMServiceInstanceId": {
              "location": "header",
              "locationName": "Ibm-Service-Instance-Id"
            },
            "Marker": {
              "location": "querystring",
              "locationName": "marker"
            },
            "MaxKeys": {
              "location": "querystring",
              "locationName": "max-keys",
              "type": "integer"
            },
            "Prefix": {
              "location": "querystring",
              "locationName": "prefix"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "IsTruncated": {
              "type": "boolean"
            },
            "Marker": {},
            "Buckets": {
              "shape": "S79"
            },
            "Owner": {
              "shape": "S33"
            }
          }
        },
        "alias": "GetServiceExtended"
      },
      "ListLegalHolds": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}/{Key+}?legalHold"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "location": "uri",
              "locationName": "Key"
            },
            "MirrorDestination": {
              "location": "header",
              "locationName": "Mirror-Destination"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "CreateTime": {
              "shape": "S3w"
            },
            "LegalHolds": {
              "type": "list",
              "member": {
                "locationName": "LegalHold",
                "type": "structure",
                "members": {
                  "Date": {
                    "shape": "S3w"
                  },
                  "ID": {}
                }
              }
            },
            "RetentionPeriod": {
              "type": "integer"
            },
            "RetentionPeriodExpirationDate": {
              "shape": "Sf"
            }
          }
        }
      },
      "ListMultipartUploads": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?uploads"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Delimiter": {
              "location": "querystring",
              "locationName": "delimiter"
            },
            "EncodingType": {
              "location": "querystring",
              "locationName": "encoding-type"
            },
            "KeyMarker": {
              "location": "querystring",
              "locationName": "key-marker"
            },
            "MaxUploads": {
              "location": "querystring",
              "locationName": "max-uploads",
              "type": "integer"
            },
            "MirrorDestination": {
              "location": "header",
              "locationName": "Mirror-Destination"
            },
            "Prefix": {
              "contextParam": {
                "name": "Prefix"
              },
              "location": "querystring",
              "locationName": "prefix"
            },
            "UploadIdMarker": {
              "location": "querystring",
              "locationName": "upload-id-marker"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "Bucket": {},
            "KeyMarker": {},
            "UploadIdMarker": {},
            "NextKeyMarker": {},
            "Prefix": {},
            "Delimiter": {},
            "NextUploadIdMarker": {},
            "MaxUploads": {
              "type": "integer"
            },
            "IsTruncated": {
              "type": "boolean"
            },
            "Uploads": {
              "locationName": "Upload",
              "type": "list",
              "member": {
                "type": "structure",
                "members": {
                  "UploadId": {},
                  "Key": {},
                  "Initiated": {
                    "type": "timestamp"
                  },
                  "StorageClass": {},
                  "Owner": {
                    "shape": "S33"
                  },
                  "Initiator": {
                    "shape": "S7z"
                  }
                }
              },
              "flattened": true
            },
            "CommonPrefixes": {
              "shape": "S80"
            },
            "EncodingType": {}
          }
        }
      },
      "ListObjectVersions": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?versions"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Delimiter": {
              "location": "querystring",
              "locationName": "delimiter"
            },
            "EncodingType": {
              "location": "querystring",
              "locationName": "encoding-type"
            },
            "KeyMarker": {
              "location": "querystring",
              "locationName": "key-marker"
            },
            "MaxKeys": {
              "location": "querystring",
              "locationName": "max-keys",
              "type": "integer"
            },
            "Prefix": {
              "contextParam": {
                "name": "Prefix"
              },
              "location": "querystring",
              "locationName": "prefix"
            },
            "VersionIdMarker": {
              "location": "querystring",
              "locationName": "version-id-marker"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "IsTruncated": {
              "type": "boolean"
            },
            "KeyMarker": {},
            "VersionIdMarker": {},
            "NextKeyMarker": {},
            "NextVersionIdMarker": {},
            "Versions": {
              "locationName": "Version",
              "type": "list",
              "member": {
                "type": "structure",
                "members": {
                  "ETag": {},
                  "Size": {
                    "type": "long"
                  },
                  "StorageClass": {},
                  "Key": {},
                  "VersionId": {},
                  "IsLatest": {
                    "type": "boolean"
                  },
                  "LastModified": {
                    "type": "timestamp"
                  },
                  "Owner": {
                    "shape": "S33"
                  }
                }
              },
              "flattened": true
            },
            "DeleteMarkers": {
              "locationName": "DeleteMarker",
              "type": "list",
              "member": {
                "type": "structure",
                "members": {
                  "Owner": {
                    "shape": "S33"
                  },
                  "Key": {},
                  "VersionId": {},
                  "IsLatest": {
                    "type": "boolean"
                  },
                  "LastModified": {
                    "type": "timestamp"
                  }
                }
              },
              "flattened": true
            },
            "Name": {},
            "Prefix": {},
            "Delimiter": {},
            "MaxKeys": {
              "type": "integer"
            },
            "CommonPrefixes": {
              "shape": "S80"
            },
            "EncodingType": {}
          }
        },
        "alias": "GetBucketObjectVersions"
      },
      "ListObjects": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Delimiter": {
              "location": "querystring",
              "locationName": "delimiter"
            },
            "EncodingType": {
              "location": "querystring",
              "locationName": "encoding-type"
            },
            "Marker": {
              "location": "querystring",
              "locationName": "marker"
            },
            "MaxKeys": {
              "location": "querystring",
              "locationName": "max-keys",
              "type": "integer"
            },
            "MirrorDestination": {
              "location": "header",
              "locationName": "Mirror-Destination"
            },
            "Prefix": {
              "contextParam": {
                "name": "Prefix"
              },
              "location": "querystring",
              "locationName": "prefix"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "IBMSSEKPEnabled": {
              "location": "header",
              "locationName": "ibm-sse-kp-enabled",
              "type": "boolean"
            },
            "IBMSSEKPCustomerRootKeyCrn": {
              "location": "header",
              "locationName": "ibm-sse-kp-customer-root-key-crn"
            },
            "IsTruncated": {
              "type": "boolean"
            },
            "Marker": {},
            "NextMarker": {},
            "Contents": {
              "shape": "S8g"
            },
            "Name": {},
            "Prefix": {},
            "Delimiter": {},
            "MaxKeys": {
              "type": "integer"
            },
            "CommonPrefixes": {
              "shape": "S80"
            },
            "EncodingType": {}
          }
        },
        "alias": "GetBucket"
      },
      "ListObjectsV2": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}?list-type=2"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Delimiter": {
              "location": "querystring",
              "locationName": "delimiter"
            },
            "EncodingType": {
              "location": "querystring",
              "locationName": "encoding-type"
            },
            "MaxKeys": {
              "location": "querystring",
              "locationName": "max-keys",
              "type": "integer"
            },
            "Prefix": {
              "contextParam": {
                "name": "Prefix"
              },
              "location": "querystring",
              "locationName": "prefix"
            },
            "ContinuationToken": {
              "location": "querystring",
              "locationName": "continuation-token"
            },
            "FetchOwner": {
              "location": "querystring",
              "locationName": "fetch-owner",
              "type": "boolean"
            },
            "StartAfter": {
              "location": "querystring",
              "locationName": "start-after"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "IsTruncated": {
              "type": "boolean"
            },
            "Contents": {
              "shape": "S8g"
            },
            "Name": {},
            "Prefix": {},
            "Delimiter": {},
            "MaxKeys": {
              "type": "integer"
            },
            "CommonPrefixes": {
              "shape": "S80"
            },
            "EncodingType": {},
            "KeyCount": {
              "type": "integer"
            },
            "ContinuationToken": {},
            "NextContinuationToken": {},
            "StartAfter": {}
          }
        }
      },
      "ListParts": {
        "http": {
          "method": "GET",
          "requestUri": "/{Bucket}/{Key+}"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key",
            "UploadId"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "contextParam": {
                "name": "Key"
              },
              "location": "uri",
              "locationName": "Key"
            },
            "MaxParts": {
              "location": "querystring",
              "locationName": "max-parts",
              "type": "integer"
            },
            "MirrorDestination": {
              "location": "header",
              "locationName": "Mirror-Destination"
            },
            "PartNumberMarker": {
              "location": "querystring",
              "locationName": "part-number-marker",
              "type": "integer"
            },
            "UploadId": {
              "location": "querystring",
              "locationName": "uploadId"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "AbortDate": {
              "location": "header",
              "locationName": "x-amz-abort-date",
              "type": "timestamp"
            },
            "AbortRuleId": {
              "location": "header",
              "locationName": "x-amz-abort-rule-id"
            },
            "Bucket": {},
            "Key": {},
            "UploadId": {},
            "PartNumberMarker": {
              "type": "integer"
            },
            "NextPartNumberMarker": {
              "type": "integer"
            },
            "MaxParts": {
              "type": "integer"
            },
            "IsTruncated": {
              "type": "boolean"
            },
            "Parts": {
              "locationName": "Part",
              "type": "list",
              "member": {
                "type": "structure",
                "members": {
                  "PartNumber": {
                    "type": "integer"
                  },
                  "LastModified": {
                    "type": "timestamp"
                  },
                  "ETag": {},
                  "Size": {
                    "type": "long"
                  }
                }
              },
              "flattened": true
            },
            "Initiator": {
              "shape": "S7z"
            },
            "Owner": {
              "shape": "S33"
            },
            "StorageClass": {}
          }
        }
      },
      "PutBucketAcl": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}?acl"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "ACL": {
              "location": "header",
              "locationName": "x-amz-acl"
            },
            "AccessControlPolicy": {
              "shape": "S8y",
              "locationName": "AccessControlPolicy",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              }
            },
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "GrantFullControl": {
              "location": "header",
              "locationName": "x-amz-grant-full-control"
            },
            "GrantRead": {
              "location": "header",
              "locationName": "x-amz-grant-read"
            },
            "GrantReadACP": {
              "location": "header",
              "locationName": "x-amz-grant-read-acp"
            },
            "GrantWrite": {
              "location": "header",
              "locationName": "x-amz-grant-write"
            },
            "GrantWriteACP": {
              "location": "header",
              "locationName": "x-amz-grant-write-acp"
            }
          },
          "payload": "AccessControlPolicy"
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutBucketCors": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}?cors"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "CORSConfiguration"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "CORSConfiguration": {
              "locationName": "CORSConfiguration",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              },
              "type": "structure",
              "required": [
                "CORSRules"
              ],
              "members": {
                "CORSRules": {
                  "shape": "S3g",
                  "locationName": "CORSRule"
                }
              }
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            }
          },
          "payload": "CORSConfiguration"
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutBucketProtectionConfiguration": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}?protection"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "ProtectionConfiguration"
          ],
          "members": {
            "Bucket": {
              "location": "uri",
              "locationName": "Bucket"
            },
            "ProtectionConfiguration": {
              "locationName": "ProtectionConfiguration",
              "type": "structure",
              "required": [],
              "members": {
                "Status": {},
                "MinimumRetention": {
                  "shape": "S4o"
                },
                "DefaultRetention": {
                  "shape": "S4p"
                },
                "MaximumRetention": {
                  "shape": "S4q"
                },
                "EnablePermanentRetention": {
                  "type": "boolean"
                }
              }
            }
          },
          "payload": "ProtectionConfiguration"
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutBucketLifecycle": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}?lifecycle"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "LifecycleConfiguration": {
              "locationName": "LifecycleConfiguration",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              },
              "type": "structure",
              "required": [
                "Rules"
              ],
              "members": {
                "Rules": {
                  "shape": "S49",
                  "locationName": "Rule"
                }
              }
            }
          },
          "payload": "LifecycleConfiguration"
        },
        "deprecated": true,
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutBucketLifecycleConfiguration": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}?lifecycle"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "LifecycleConfiguration": {
              "locationName": "LifecycleConfiguration",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              },
              "type": "structure",
              "required": [
                "Rules"
              ],
              "members": {
                "Rules": {
                  "shape": "S49",
                  "locationName": "Rule"
                }
              }
            }
          },
          "payload": "LifecycleConfiguration"
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutBucketReplication": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}?replication"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "ReplicationConfiguration"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "ReplicationConfiguration": {
              "shape": "S4v",
              "locationName": "ReplicationConfiguration",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              }
            },
            "Token": {
              "location": "header",
              "locationName": "x-amz-bucket-object-lock-token"
            }
          },
          "payload": "ReplicationConfiguration"
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutBucketTagging": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}?tagging"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Tagging"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "Tagging": {
              "shape": "S9b",
              "locationName": "Tagging",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              }
            }
          },
          "payload": "Tagging"
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutBucketVersioning": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}?versioning"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "VersioningConfiguration"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "MFA": {
              "location": "header",
              "locationName": "x-amz-mfa"
            },
            "VersioningConfiguration": {
              "locationName": "VersioningConfiguration",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              },
              "type": "structure",
              "members": {
                "MFADelete": {
                  "locationName": "MfaDelete"
                },
                "Status": {}
              }
            }
          },
          "payload": "VersioningConfiguration"
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutBucketWebsite": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}?website"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "WebsiteConfiguration"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "WebsiteConfiguration": {
              "locationName": "WebsiteConfiguration",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              },
              "type": "structure",
              "members": {
                "ErrorDocument": {
                  "shape": "S5j"
                },
                "IndexDocument": {
                  "shape": "S5h"
                },
                "RedirectAllRequestsTo": {
                  "shape": "S5e"
                },
                "RoutingRules": {
                  "shape": "S5k"
                }
              }
            }
          },
          "payload": "WebsiteConfiguration"
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutObject": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}/{Key+}"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "ACL": {
              "location": "header",
              "locationName": "x-amz-acl"
            },
            "Body": {
              "streaming": true,
              "type": "blob"
            },
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "CacheControl": {
              "location": "header",
              "locationName": "Cache-Control"
            },
            "ContentDisposition": {
              "location": "header",
              "locationName": "Content-Disposition"
            },
            "ContentEncoding": {
              "location": "header",
              "locationName": "Content-Encoding"
            },
            "ContentLanguage": {
              "location": "header",
              "locationName": "Content-Language"
            },
            "ContentLength": {
              "location": "header",
              "locationName": "Content-Length",
              "type": "long"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "ContentType": {
              "location": "header",
              "locationName": "Content-Type"
            },
            "Expires": {
              "location": "header",
              "locationName": "Expires",
              "type": "timestamp"
            },
            "IfNoneMatch": {
              "location": "header",
              "locationName": "If-None-Match"
            },
            "GrantFullControl": {
              "location": "header",
              "locationName": "x-amz-grant-full-control"
            },
            "GrantRead": {
              "location": "header",
              "locationName": "x-amz-grant-read"
            },
            "GrantReadACP": {
              "location": "header",
              "locationName": "x-amz-grant-read-acp"
            },
            "GrantWriteACP": {
              "location": "header",
              "locationName": "x-amz-grant-write-acp"
            },
            "Key": {
              "contextParam": {
                "name": "Key"
              },
              "location": "uri",
              "locationName": "Key"
            },
            "Metadata": {
              "shape": "S14",
              "location": "headers",
              "locationName": "x-amz-meta-"
            },
            "RetentionExpirationDate": {
              "shape": "Sf",
              "location": "header",
              "locationName": "Retention-Expiration-Date"
            },
            "RetentionLegalHoldId": {
              "location": "header",
              "locationName": "Retention-Legal-Hold-ID"
            },
            "RetentionPeriod": {
              "location": "header",
              "locationName": "Retention-Period",
              "type": "integer"
            },
            "ServerSideEncryption": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption"
            },
            "StorageClass": {
              "location": "header",
              "locationName": "x-amz-storage-class"
            },
            "WebsiteRedirectLocation": {
              "location": "header",
              "locationName": "x-amz-website-redirect-location"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKey": {
              "shape": "S1d",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "SSEKMSKeyId": {
              "shape": "Sm",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
            },
            "Tagging": {
              "location": "header",
              "locationName": "x-amz-tagging"
            },
            "ObjectLockMode": {
              "location": "header",
              "locationName": "x-amz-object-lock-mode"
            },
            "ObjectLockRetainUntilDate": {
              "shape": "S1k",
              "location": "header",
              "locationName": "x-amz-object-lock-retain-until-date"
            },
            "ObjectLockLegalHoldStatus": {
              "location": "header",
              "locationName": "x-amz-object-lock-legal-hold"
            }
          },
          "payload": "Body"
        },
        "output": {
          "type": "structure",
          "members": {
            "Expiration": {
              "location": "header",
              "locationName": "x-amz-expiration"
            },
            "ETag": {
              "location": "header",
              "locationName": "ETag"
            },
            "ServerSideEncryption": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption"
            },
            "VersionId": {
              "location": "header",
              "locationName": "x-amz-version-id"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "SSEKMSKeyId": {
              "shape": "Sm",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
            }
          }
        },
        "httpChecksum": {
          "requestChecksumRequired": false
        }
      },
      "PutObjectAcl": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}/{Key+}?acl"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "ACL": {
              "location": "header",
              "locationName": "x-amz-acl"
            },
            "AccessControlPolicy": {
              "shape": "S8y",
              "locationName": "AccessControlPolicy",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              }
            },
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "GrantFullControl": {
              "location": "header",
              "locationName": "x-amz-grant-full-control"
            },
            "GrantRead": {
              "location": "header",
              "locationName": "x-amz-grant-read"
            },
            "GrantReadACP": {
              "location": "header",
              "locationName": "x-amz-grant-read-acp"
            },
            "GrantWrite": {
              "location": "header",
              "locationName": "x-amz-grant-write"
            },
            "GrantWriteACP": {
              "location": "header",
              "locationName": "x-amz-grant-write-acp"
            },
            "Key": {
              "contextParam": {
                "name": "Key"
              },
              "location": "uri",
              "locationName": "Key"
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            }
          },
          "payload": "AccessControlPolicy"
        },
        "output": {
          "type": "structure",
          "members": {
            "RequestCharged": {
              "location": "header",
              "locationName": "x-amz-request-charged"
            }
          }
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutObjectLegalHold": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}/{Key+}?legal-hold"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "location": "uri",
              "locationName": "Key"
            },
            "LegalHold": {
              "shape": "S6k",
              "locationName": "LegalHold",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              }
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "ExpectedBucketOwner": {
              "location": "header",
              "locationName": "x-amz-expected-bucket-owner"
            }
          },
          "payload": "LegalHold"
        },
        "output": {
          "type": "structure",
          "members": {
            "RequestCharged": {
              "location": "header",
              "locationName": "x-amz-request-charged"
            }
          }
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutObjectLockConfiguration": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}?object-lock"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ObjectLockConfiguration": {
              "shape": "S6n",
              "locationName": "ObjectLockConfiguration",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              }
            },
            "Token": {
              "location": "header",
              "locationName": "x-amz-bucket-object-lock-token"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "ExpectedBucketOwner": {
              "location": "header",
              "locationName": "x-amz-expected-bucket-owner"
            }
          },
          "payload": "ObjectLockConfiguration"
        },
        "output": {
          "type": "structure",
          "members": {
            "RequestCharged": {
              "location": "header",
              "locationName": "x-amz-request-charged"
            }
          }
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutObjectRetention": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}/{Key+}?retention"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "location": "uri",
              "locationName": "Key"
            },
            "Retention": {
              "shape": "S6v",
              "locationName": "Retention",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              }
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            },
            "BypassGovernanceRetention": {
              "location": "header",
              "locationName": "x-amz-bypass-governance-retention",
              "type": "boolean"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "ExpectedBucketOwner": {
              "location": "header",
              "locationName": "x-amz-expected-bucket-owner"
            }
          },
          "payload": "Retention"
        },
        "output": {
          "type": "structure",
          "members": {
            "RequestCharged": {
              "location": "header",
              "locationName": "x-amz-request-charged"
            }
          }
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutObjectTagging": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}/{Key+}?tagging"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key",
            "Tagging"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "location": "uri",
              "locationName": "Key"
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "Tagging": {
              "shape": "S9b",
              "locationName": "Tagging",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              }
            }
          },
          "payload": "Tagging"
        },
        "output": {
          "type": "structure",
          "members": {
            "VersionId": {
              "location": "header",
              "locationName": "x-amz-version-id"
            }
          }
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "PutPublicAccessBlock": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}?publicAccessBlock"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "PublicAccessBlockConfiguration"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ContentMD5": {
              "deprecated": true,
              "deprecatedMessage": "Content-MD5 header will now be automatically computed and injected in associated operation's Http request.",
              "location": "header",
              "locationName": "Content-MD5"
            },
            "PublicAccessBlockConfiguration": {
              "shape": "S70",
              "locationName": "PublicAccessBlockConfiguration",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              }
            },
            "ExpectedBucketOwner": {
              "location": "header",
              "locationName": "x-amz-expected-bucket-owner"
            }
          },
          "payload": "PublicAccessBlockConfiguration"
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "RestoreObject": {
        "http": {
          "requestUri": "/{Bucket}/{Key+}?restore"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "Key": {
              "location": "uri",
              "locationName": "Key"
            },
            "VersionId": {
              "location": "querystring",
              "locationName": "versionId"
            },
            "RestoreRequest": {
              "locationName": "RestoreRequest",
              "xmlNamespace": {
                "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
              },
              "type": "structure",
              "required": [
                "Days"
              ],
              "members": {
                "Days": {
                  "type": "integer"
                },
                "GlacierJobParameters": {
                  "type": "structure",
                  "required": [
                    "Tier"
                  ],
                  "members": {
                    "Tier": {}
                  }
                }
              }
            }
          },
          "payload": "RestoreRequest"
        },
        "output": {
          "type": "structure",
          "members": {
            "RequestCharged": {
              "location": "header",
              "locationName": "x-amz-request-charged"
            }
          }
        },
        "alias": "PostObjectRestore",
        "httpChecksum": {
          "requestChecksumRequired": false
        }
      },
      "UploadPart": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}/{Key+}"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "Key",
            "PartNumber",
            "UploadId"
          ],
          "members": {
            "Body": {
              "streaming": true,
              "type": "blob"
            },
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "ContentLength": {
              "location": "header",
              "locationName": "Content-Length",
              "type": "long"
            },
            "ContentMD5": {
              "location": "header",
              "locationName": "Content-MD5"
            },
            "Key": {
              "contextParam": {
                "name": "Key"
              },
              "location": "uri",
              "locationName": "Key"
            },
            "PartNumber": {
              "location": "querystring",
              "locationName": "partNumber",
              "type": "integer"
            },
            "UploadId": {
              "location": "querystring",
              "locationName": "uploadId"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKey": {
              "shape": "S1d",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            }
          },
          "payload": "Body"
        },
        "output": {
          "type": "structure",
          "members": {
            "ServerSideEncryption": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption"
            },
            "ETag": {
              "location": "header",
              "locationName": "ETag"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "SSEKMSKeyId": {
              "shape": "Sm",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
            }
          }
        },
        "httpChecksum": {
          "requestChecksumRequired": true
        }
      },
      "UploadPartCopy": {
        "http": {
          "method": "PUT",
          "requestUri": "/{Bucket}/{Key+}"
        },
        "input": {
          "type": "structure",
          "required": [
            "Bucket",
            "CopySource",
            "Key",
            "PartNumber",
            "UploadId"
          ],
          "members": {
            "Bucket": {
              "contextParam": {
                "name": "Bucket"
              },
              "location": "uri",
              "locationName": "Bucket"
            },
            "CopySource": {
              "location": "header",
              "locationName": "x-amz-copy-source"
            },
            "CopySourceIfMatch": {
              "location": "header",
              "locationName": "x-amz-copy-source-if-match"
            },
            "CopySourceIfModifiedSince": {
              "location": "header",
              "locationName": "x-amz-copy-source-if-modified-since",
              "type": "timestamp"
            },
            "CopySourceIfNoneMatch": {
              "location": "header",
              "locationName": "x-amz-copy-source-if-none-match"
            },
            "CopySourceIfUnmodifiedSince": {
              "location": "header",
              "locationName": "x-amz-copy-source-if-unmodified-since",
              "type": "timestamp"
            },
            "CopySourceRange": {
              "location": "header",
              "locationName": "x-amz-copy-source-range"
            },
            "Key": {
              "location": "uri",
              "locationName": "Key"
            },
            "PartNumber": {
              "location": "querystring",
              "locationName": "partNumber",
              "type": "integer"
            },
            "UploadId": {
              "location": "querystring",
              "locationName": "uploadId"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKey": {
              "shape": "S1d",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "CopySourceSSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-copy-source-server-side-encryption-customer-algorithm"
            },
            "CopySourceSSECustomerKey": {
              "shape": "S1g",
              "location": "header",
              "locationName": "x-amz-copy-source-server-side-encryption-customer-key"
            },
            "CopySourceSSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-copy-source-server-side-encryption-customer-key-MD5"
            }
          }
        },
        "output": {
          "type": "structure",
          "members": {
            "CopySourceVersionId": {
              "location": "header",
              "locationName": "x-amz-copy-source-version-id"
            },
            "CopyPartResult": {
              "type": "structure",
              "members": {
                "ETag": {},
                "LastModified": {
                  "type": "timestamp"
                }
              }
            },
            "ServerSideEncryption": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption"
            },
            "SSECustomerAlgorithm": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-algorithm"
            },
            "SSECustomerKeyMD5": {
              "location": "header",
              "locationName": "x-amz-server-side-encryption-customer-key-MD5"
            },
            "SSEKMSKeyId": {
              "shape": "Sm",
              "location": "header",
              "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
            }
          },
          "payload": "CopyPartResult"
        }
      }
    },
    "shapes": {
      "S6": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key",
          "RetentionLegalHoldId"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "RetentionLegalHoldId": {
            "location": "uri"
          }
        }
      },
      "Sf": {
        "type": "timestamp",
        "timestampFormat": "iso8601"
      },
      "Sm": {
        "type": "string",
        "sensitive": true
      },
      "S14": {
        "type": "map",
        "key": {},
        "value": {}
      },
      "S1d": {
        "type": "blob",
        "sensitive": true
      },
      "S1g": {
        "type": "blob",
        "sensitive": true
      },
      "S1k": {
        "type": "timestamp",
        "timestampFormat": "iso8601"
      },
      "S33": {
        "type": "structure",
        "members": {
          "DisplayName": {},
          "ID": {}
        }
      },
      "S36": {
        "type": "list",
        "member": {
          "locationName": "Grant",
          "type": "structure",
          "members": {
            "Grantee": {
              "type": "structure",
              "required": [
                "Type"
              ],
              "members": {
                "DisplayName": {},
                "EmailAddress": {},
                "ID": {},
                "Type": {
                  "locationName": "xsi:type",
                  "xmlAttribute": true
                },
                "URI": {}
              },
              "xmlNamespace": {
                "prefix": "xsi",
                "uri": "http://www.w3.org/2001/XMLSchema-instance"
              }
            },
            "Permission": {}
          }
        }
      },
      "S3g": {
        "type": "list",
        "member": {
          "type": "structure",
          "required": [
            "AllowedMethods",
            "AllowedOrigins"
          ],
          "members": {
            "ID": {},
            "AllowedHeaders": {
              "locationName": "AllowedHeader",
              "type": "list",
              "member": {},
              "flattened": true
            },
            "AllowedMethods": {
              "locationName": "AllowedMethod",
              "type": "list",
              "member": {},
              "flattened": true
            },
            "AllowedOrigins": {
              "locationName": "AllowedOrigin",
              "type": "list",
              "member": {},
              "flattened": true
            },
            "ExposeHeaders": {
              "locationName": "ExposeHeader",
              "type": "list",
              "member": {},
              "flattened": true
            },
            "MaxAgeSeconds": {
              "type": "integer"
            }
          }
        },
        "flattened": true
      },
      "S3v": {
        "type": "structure",
        "members": {
          "Date": {
            "shape": "S3w"
          },
          "Days": {
            "type": "integer"
          },
          "ExpiredObjectDeleteMarker": {
            "type": "boolean"
          }
        }
      },
      "S3w": {
        "type": "timestamp",
        "timestampFormat": "iso8601"
      },
      "S41": {
        "type": "structure",
        "members": {
          "Date": {
            "shape": "S3w"
          },
          "Days": {
            "type": "integer"
          },
          "StorageClass": {}
        }
      },
      "S43": {
        "type": "structure",
        "members": {
          "NoncurrentDays": {
            "type": "integer"
          },
          "NewerNoncurrentVersions": {
            "type": "integer"
          }
        }
      },
      "S45": {
        "type": "structure",
        "members": {
          "DaysAfterInitiation": {
            "type": "integer"
          }
        }
      },
      "S49": {
        "type": "list",
        "member": {
          "type": "structure",
          "required": [
            "Status",
            "Filter"
          ],
          "members": {
            "Expiration": {
              "shape": "S3v"
            },
            "ID": {},
            "Prefix": {
              "deprecated": true
            },
            "Filter": {
              "type": "structure",
              "members": {
                "Prefix": {},
                "Tag": {
                  "shape": "S4c"
                },
                "ObjectSizeGreaterThan": {
                  "type": "long"
                },
                "ObjectSizeLessThan": {
                  "type": "long"
                },
                "And": {
                  "type": "structure",
                  "members": {
                    "Prefix": {},
                    "Tags": {
                      "shape": "S4h",
                      "flattened": true,
                      "locationName": "Tag"
                    },
                    "ObjectSizeGreaterThan": {
                      "type": "long"
                    },
                    "ObjectSizeLessThan": {
                      "type": "long"
                    }
                  }
                }
              }
            },
            "Status": {},
            "Transitions": {
              "locationName": "Transition",
              "type": "list",
              "member": {
                "shape": "S41"
              },
              "flattened": true
            },
            "NoncurrentVersionExpiration": {
              "shape": "S43"
            },
            "AbortIncompleteMultipartUpload": {
              "shape": "S45"
            }
          }
        },
        "flattened": true
      },
      "S4c": {
        "type": "structure",
        "required": [
          "Key",
          "Value"
        ],
        "members": {
          "Key": {},
          "Value": {}
        }
      },
      "S4h": {
        "type": "list",
        "member": {
          "shape": "S4c",
          "locationName": "Tag"
        }
      },
      "S4o": {
        "type": "structure",
        "required": [
          "Days"
        ],
        "members": {
          "Days": {
            "type": "integer"
          }
        }
      },
      "S4p": {
        "type": "structure",
        "required": [
          "Days"
        ],
        "members": {
          "Days": {
            "type": "integer"
          }
        }
      },
      "S4q": {
        "type": "structure",
        "required": [
          "Days"
        ],
        "members": {
          "Days": {
            "type": "integer"
          }
        }
      },
      "S4v": {
        "type": "structure",
        "required": [
          "Rules"
        ],
        "members": {
          "Role": {},
          "Rules": {
            "locationName": "Rule",
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "DeleteMarkerReplication",
                "Filter",
                "Priority",
                "Status",
                "Destination"
              ],
              "members": {
                "ID": {},
                "Priority": {
                  "type": "integer"
                },
                "Prefix": {
                  "deprecated": true
                },
                "Filter": {
                  "type": "structure",
                  "members": {
                    "Prefix": {},
                    "Tag": {
                      "shape": "S4c"
                    },
                    "And": {
                      "type": "structure",
                      "members": {
                        "Prefix": {},
                        "Tags": {
                          "shape": "S4h",
                          "flattened": true,
                          "locationName": "Tag"
                        }
                      }
                    }
                  }
                },
                "Status": {},
                "Destination": {
                  "type": "structure",
                  "required": [
                    "Bucket"
                  ],
                  "members": {
                    "Bucket": {},
                    "StorageClass": {}
                  }
                },
                "DeleteMarkerReplication": {
                  "type": "structure",
                  "required": [
                    "Status"
                  ],
                  "members": {
                    "Status": {}
                  }
                }
              }
            },
            "flattened": true
          }
        }
      },
      "S5e": {
        "type": "structure",
        "required": [
          "HostName"
        ],
        "members": {
          "HostName": {},
          "Protocol": {}
        }
      },
      "S5h": {
        "type": "structure",
        "required": [
          "Suffix"
        ],
        "members": {
          "Suffix": {}
        }
      },
      "S5j": {
        "type": "structure",
        "required": [
          "Key"
        ],
        "members": {
          "Key": {}
        }
      },
      "S5k": {
        "type": "list",
        "member": {
          "locationName": "RoutingRule",
          "type": "structure",
          "required": [
            "Redirect"
          ],
          "members": {
            "Condition": {
              "type": "structure",
              "members": {
                "HttpErrorCodeReturnedEquals": {},
                "KeyPrefixEquals": {}
              }
            },
            "Redirect": {
              "type": "structure",
              "members": {
                "HostName": {},
                "HttpRedirectCode": {},
                "Protocol": {},
                "ReplaceKeyPrefixWith": {},
                "ReplaceKeyWith": {}
              }
            }
          }
        }
      },
      "S6k": {
        "type": "structure",
        "members": {
          "Status": {}
        }
      },
      "S6n": {
        "type": "structure",
        "members": {
          "ObjectLockEnabled": {},
          "Rule": {
            "type": "structure",
            "members": {
              "DefaultRetention": {
                "type": "structure",
                "members": {
                  "Mode": {},
                  "Days": {
                    "type": "integer"
                  },
                  "Years": {
                    "type": "integer"
                  }
                }
              }
            }
          }
        }
      },
      "S6v": {
        "type": "structure",
        "members": {
          "Mode": {},
          "RetainUntilDate": {
            "shape": "S3w"
          }
        }
      },
      "S70": {
        "type": "structure",
        "members": {
          "BlockPublicAcls": {
            "locationName": "BlockPublicAcls",
            "type": "boolean"
          },
          "IgnorePublicAcls": {
            "locationName": "IgnorePublicAcls",
            "type": "boolean"
          }
        }
      },
      "S79": {
        "type": "list",
        "member": {
          "locationName": "Bucket",
          "type": "structure",
          "members": {
            "Name": {},
            "CreationDate": {
              "type": "timestamp"
            },
            "CreationTemplateId": {},
            "LocationConstraint": {}
          }
        }
      },
      "S7z": {
        "type": "structure",
        "members": {
          "ID": {},
          "DisplayName": {}
        }
      },
      "S80": {
        "type": "list",
        "member": {
          "type": "structure",
          "members": {
            "Prefix": {}
          }
        },
        "flattened": true
      },
      "S8g": {
        "type": "list",
        "member": {
          "type": "structure",
          "members": {
            "Key": {},
            "LastModified": {
              "type": "timestamp"
            },
            "ETag": {},
            "Size": {
              "type": "long"
            },
            "StorageClass": {},
            "Owner": {
              "shape": "S33"
            }
          }
        },
        "flattened": true
      },
      "S8y": {
        "type": "structure",
        "members": {
          "Grants": {
            "shape": "S36",
            "locationName": "AccessControlList"
          },
          "Owner": {
            "shape": "S33"
          }
        }
      },
      "S9b": {
        "type": "structure",
        "required": [
          "TagSet"
        ],
        "members": {
          "TagSet": {
            "shape": "S4h"
          }
        }
      }
    }
  }
  },{}],3:[function(require,module,exports){
  module.exports={
    "pagination": {
      "ListBuckets": {
        "input_token": "ContinuationToken",
        "limit_key": "MaxBuckets",
        "output_token": "ContinuationToken",
        "result_key": "Buckets"
      },
      "ListMultipartUploads": {
        "input_token": [
          "KeyMarker",
          "UploadIdMarker"
        ],
        "limit_key": "MaxUploads",
        "more_results": "IsTruncated",
        "output_token": [
          "NextKeyMarker",
          "NextUploadIdMarker"
        ],
        "result_key": [
          "Uploads",
          "CommonPrefixes"
        ]
      },
      "ListObjectVersions": {
        "input_token": [
          "KeyMarker",
          "VersionIdMarker"
        ],
        "limit_key": "MaxKeys",
        "more_results": "IsTruncated",
        "output_token": [
          "NextKeyMarker",
          "NextVersionIdMarker"
        ],
        "result_key": [
          "Versions",
          "DeleteMarkers",
          "CommonPrefixes"
        ]
      },
      "ListObjects": {
        "input_token": "Marker",
        "limit_key": "MaxKeys",
        "more_results": "IsTruncated",
        "output_token": "NextMarker || Contents[-1].Key",
        "result_key": [
          "Contents",
          "CommonPrefixes"
        ]
      },
      "ListObjectsV2": {
        "input_token": "ContinuationToken",
        "limit_key": "MaxKeys",
        "output_token": "NextContinuationToken",
        "result_key": [
          "Contents",
          "CommonPrefixes"
        ]
      },
      "ListParts": {
        "input_token": "PartNumberMarker",
        "limit_key": "MaxParts",
        "more_results": "IsTruncated",
        "output_token": "NextPartNumberMarker",
        "result_key": "Parts"
      }
    }
  }
  
  },{}],4:[function(require,module,exports){
  module.exports={
    "version": 2,
    "waiters": {
      "BucketExists": {
        "delay": 5,
        "operation": "HeadBucket",
        "maxAttempts": 20,
        "acceptors": [
          {
            "expected": 200,
            "matcher": "status",
            "state": "success"
          },
          {
            "expected": 301,
            "matcher": "status",
            "state": "success"
          },
          {
            "expected": 403,
            "matcher": "status",
            "state": "success"
          },
          {
            "expected": 404,
            "matcher": "status",
            "state": "retry"
          }
        ]
      },
      "BucketNotExists": {
        "delay": 5,
        "operation": "HeadBucket",
        "maxAttempts": 20,
        "acceptors": [
          {
            "expected": 404,
            "matcher": "status",
            "state": "success"
          }
        ]
      },
      "ObjectExists": {
        "delay": 5,
        "operation": "HeadObject",
        "maxAttempts": 20,
        "acceptors": [
          {
            "expected": 200,
            "matcher": "status",
            "state": "success"
          },
          {
            "expected": 404,
            "matcher": "status",
            "state": "retry"
          }
        ]
      },
      "ObjectNotExists": {
        "delay": 5,
        "operation": "HeadObject",
        "maxAttempts": 20,
        "acceptors": [
          {
            "expected": 404,
            "matcher": "status",
            "state": "success"
          }
        ]
      }
    }
  }
  
  },{}],5:[function(require,module,exports){
  require('../lib/node_loader');
  var AWS = require('../lib/core');
  
  module.exports = {
    S3: require('./s3')
  };
  },{"../lib/core":16,"../lib/node_loader":14,"./s3":6}],6:[function(require,module,exports){
  require('../lib/node_loader');
  var AWS = require('../lib/core');
  var Service = require('../lib/service');
  var apiLoader = require('../lib/api_loader');
  
  apiLoader.services['s3'] = {};
  AWS.S3 = Service.defineService('s3', ['2006-03-01']);
  require('../lib/services/s3');
  Object.defineProperty(apiLoader.services['s3'], '2006-03-01', {
    get: function get() {
      var model = require('../apis/s3-2006-03-01.min.json');
      model.paginators = require('../apis/s3-2006-03-01.paginators.json').pagination;
      model.waiters = require('../apis/s3-2006-03-01.waiters2.json').waiters;
      return model;
    },
    enumerable: true,
    configurable: true
  });
  
  module.exports = AWS.S3;
  
  },{"../apis/s3-2006-03-01.min.json":2,"../apis/s3-2006-03-01.paginators.json":3,"../apis/s3-2006-03-01.waiters2.json":4,"../lib/api_loader":7,"../lib/core":16,"../lib/node_loader":14,"../lib/service":47,"../lib/services/s3":48}],7:[function(require,module,exports){
  function apiLoader(svc, version) {
    if (!apiLoader.services.hasOwnProperty(svc)) {
      throw new Error('InvalidService: Failed to load api for ' + svc);
    }
    return apiLoader.services[svc][version];
  }
  
  
  apiLoader.services = {};
  
  
  module.exports = apiLoader;
  
  },{}],8:[function(require,module,exports){
  var Hmac = require('./browserHmac');
  var Md5 = require('./browserMd5');
  var Sha1 = require('./browserSha1');
  var Sha256 = require('./browserSha256');
  
  
  module.exports = exports = {
      createHash: function createHash(alg) {
        alg = alg.toLowerCase();
        if (alg === 'md5') {
          return new Md5();
        } else if (alg === 'sha256') {
          return new Sha256();
        } else if (alg === 'sha1') {
          return new Sha1();
        }
  
        throw new Error('Hash algorithm ' + alg + ' is not supported in the browser SDK');
      },
      createHmac: function createHmac(alg, key) {
        alg = alg.toLowerCase();
        if (alg === 'md5') {
          return new Hmac(Md5, key);
        } else if (alg === 'sha256') {
          return new Hmac(Sha256, key);
        } else if (alg === 'sha1') {
          return new Hmac(Sha1, key);
        }
  
        throw new Error('HMAC algorithm ' + alg + ' is not supported in the browser SDK');
      },
      createSign: function() {
        throw new Error('createSign is not implemented in the browser');
      }
    };
  
  },{"./browserHmac":10,"./browserMd5":11,"./browserSha1":12,"./browserSha256":13}],9:[function(require,module,exports){
  var Buffer = require('buffer/').Buffer;
  
  
  if (
      typeof ArrayBuffer !== 'undefined' &&
      typeof ArrayBuffer.isView === 'undefined'
  ) {
      ArrayBuffer.isView = function(arg) {
          return viewStrings.indexOf(Object.prototype.toString.call(arg)) > -1;
      };
  }
  
  
  var viewStrings = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]',
      '[object DataView]',
  ];
  
  
  function isEmptyData(data) {
      if (typeof data === 'string') {
          return data.length === 0;
      }
      return data.byteLength === 0;
  }
  
  
  function convertToBuffer(data) {
      if (typeof data === 'string') {
          data = new Buffer(data, 'utf8');
      }
  
      if (ArrayBuffer.isView(data)) {
          return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
  
      return new Uint8Array(data);
  }
  
  
  module.exports = exports = {
      isEmptyData: isEmptyData,
      convertToBuffer: convertToBuffer,
  };
  
  },{"buffer/":76}],10:[function(require,module,exports){
  var hashUtils = require('./browserHashUtils');
  
  
  function Hmac(hashCtor, secret) {
      this.hash = new hashCtor();
      this.outer = new hashCtor();
  
      var inner = bufferFromSecret(hashCtor, secret);
      var outer = new Uint8Array(hashCtor.BLOCK_SIZE);
      outer.set(inner);
  
      for (var i = 0; i < hashCtor.BLOCK_SIZE; i++) {
          inner[i] ^= 0x36;
          outer[i] ^= 0x5c;
      }
  
      this.hash.update(inner);
      this.outer.update(outer);
  
      for (var i = 0; i < inner.byteLength; i++) {
          inner[i] = 0;
      }
  }
  
  
  module.exports = exports = Hmac;
  
  Hmac.prototype.update = function (toHash) {
      if (hashUtils.isEmptyData(toHash) || this.error) {
          return this;
      }
  
      try {
          this.hash.update(hashUtils.convertToBuffer(toHash));
      } catch (e) {
          this.error = e;
      }
  
      return this;
  };
  
  Hmac.prototype.digest = function (encoding) {
      if (!this.outer.finished) {
          this.outer.update(this.hash.digest());
      }
  
      return this.outer.digest(encoding);
  };
  
  function bufferFromSecret(hashCtor, secret) {
      var input = hashUtils.convertToBuffer(secret);
      if (input.byteLength > hashCtor.BLOCK_SIZE) {
          var bufferHash = new hashCtor;
          bufferHash.update(input);
          input = bufferHash.digest();
      }
      var buffer = new Uint8Array(hashCtor.BLOCK_SIZE);
      buffer.set(input);
      return buffer;
  }
  
  },{"./browserHashUtils":9}],11:[function(require,module,exports){
  var hashUtils = require('./browserHashUtils');
  var Buffer = require('buffer/').Buffer;
  
  var BLOCK_SIZE = 64;
  
  var DIGEST_LENGTH = 16;
  
  var INIT = [
      0x67452301,
      0xefcdab89,
      0x98badcfe,
      0x10325476,
  ];
  
  
  function Md5() {
      this.state = [
          0x67452301,
          0xefcdab89,
          0x98badcfe,
          0x10325476,
      ];
      this.buffer = new DataView(new ArrayBuffer(BLOCK_SIZE));
      this.bufferLength = 0;
      this.bytesHashed = 0;
      this.finished = false;
  }
  
  
  module.exports = exports = Md5;
  
  Md5.BLOCK_SIZE = BLOCK_SIZE;
  
  Md5.prototype.update = function (sourceData) {
      if (hashUtils.isEmptyData(sourceData)) {
          return this;
      } else if (this.finished) {
          throw new Error('Attempted to update an already finished hash.');
      }
  
      var data = hashUtils.convertToBuffer(sourceData);
      var position = 0;
      var byteLength = data.byteLength;
      this.bytesHashed += byteLength;
      while (byteLength > 0) {
          this.buffer.setUint8(this.bufferLength++, data[position++]);
          byteLength--;
          if (this.bufferLength === BLOCK_SIZE) {
              this.hashBuffer();
              this.bufferLength = 0;
          }
      }
  
      return this;
  };
  
  Md5.prototype.digest = function (encoding) {
      if (!this.finished) {
          var _a = this, buffer = _a.buffer, undecoratedLength = _a.bufferLength, bytesHashed = _a.bytesHashed;
          var bitsHashed = bytesHashed * 8;
          buffer.setUint8(this.bufferLength++, 128);
          if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
              for (var i = this.bufferLength; i < BLOCK_SIZE; i++) {
                  buffer.setUint8(i, 0);
              }
              this.hashBuffer();
              this.bufferLength = 0;
          }
          for (var i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
              buffer.setUint8(i, 0);
          }
          buffer.setUint32(BLOCK_SIZE - 8, bitsHashed >>> 0, true);
          buffer.setUint32(BLOCK_SIZE - 4, Math.floor(bitsHashed / 0x100000000), true);
          this.hashBuffer();
          this.finished = true;
      }
      var out = new DataView(new ArrayBuffer(DIGEST_LENGTH));
      for (var i = 0; i < 4; i++) {
          out.setUint32(i * 4, this.state[i], true);
      }
      var buff = new Buffer(out.buffer, out.byteOffset, out.byteLength);
      return encoding ? buff.toString(encoding) : buff;
  };
  
  Md5.prototype.hashBuffer = function () {
      var _a = this, buffer = _a.buffer, state = _a.state;
      var a = state[0], b = state[1], c = state[2], d = state[3];
      a = ff(a, b, c, d, buffer.getUint32(0, true), 7, 0xd76aa478);
      d = ff(d, a, b, c, buffer.getUint32(4, true), 12, 0xe8c7b756);
      c = ff(c, d, a, b, buffer.getUint32(8, true), 17, 0x242070db);
      b = ff(b, c, d, a, buffer.getUint32(12, true), 22, 0xc1bdceee);
      a = ff(a, b, c, d, buffer.getUint32(16, true), 7, 0xf57c0faf);
      d = ff(d, a, b, c, buffer.getUint32(20, true), 12, 0x4787c62a);
      c = ff(c, d, a, b, buffer.getUint32(24, true), 17, 0xa8304613);
      b = ff(b, c, d, a, buffer.getUint32(28, true), 22, 0xfd469501);
      a = ff(a, b, c, d, buffer.getUint32(32, true), 7, 0x698098d8);
      d = ff(d, a, b, c, buffer.getUint32(36, true), 12, 0x8b44f7af);
      c = ff(c, d, a, b, buffer.getUint32(40, true), 17, 0xffff5bb1);
      b = ff(b, c, d, a, buffer.getUint32(44, true), 22, 0x895cd7be);
      a = ff(a, b, c, d, buffer.getUint32(48, true), 7, 0x6b901122);
      d = ff(d, a, b, c, buffer.getUint32(52, true), 12, 0xfd987193);
      c = ff(c, d, a, b, buffer.getUint32(56, true), 17, 0xa679438e);
      b = ff(b, c, d, a, buffer.getUint32(60, true), 22, 0x49b40821);
      a = gg(a, b, c, d, buffer.getUint32(4, true), 5, 0xf61e2562);
      d = gg(d, a, b, c, buffer.getUint32(24, true), 9, 0xc040b340);
      c = gg(c, d, a, b, buffer.getUint32(44, true), 14, 0x265e5a51);
      b = gg(b, c, d, a, buffer.getUint32(0, true), 20, 0xe9b6c7aa);
      a = gg(a, b, c, d, buffer.getUint32(20, true), 5, 0xd62f105d);
      d = gg(d, a, b, c, buffer.getUint32(40, true), 9, 0x02441453);
      c = gg(c, d, a, b, buffer.getUint32(60, true), 14, 0xd8a1e681);
      b = gg(b, c, d, a, buffer.getUint32(16, true), 20, 0xe7d3fbc8);
      a = gg(a, b, c, d, buffer.getUint32(36, true), 5, 0x21e1cde6);
      d = gg(d, a, b, c, buffer.getUint32(56, true), 9, 0xc33707d6);
      c = gg(c, d, a, b, buffer.getUint32(12, true), 14, 0xf4d50d87);
      b = gg(b, c, d, a, buffer.getUint32(32, true), 20, 0x455a14ed);
      a = gg(a, b, c, d, buffer.getUint32(52, true), 5, 0xa9e3e905);
      d = gg(d, a, b, c, buffer.getUint32(8, true), 9, 0xfcefa3f8);
      c = gg(c, d, a, b, buffer.getUint32(28, true), 14, 0x676f02d9);
      b = gg(b, c, d, a, buffer.getUint32(48, true), 20, 0x8d2a4c8a);
      a = hh(a, b, c, d, buffer.getUint32(20, true), 4, 0xfffa3942);
      d = hh(d, a, b, c, buffer.getUint32(32, true), 11, 0x8771f681);
      c = hh(c, d, a, b, buffer.getUint32(44, true), 16, 0x6d9d6122);
      b = hh(b, c, d, a, buffer.getUint32(56, true), 23, 0xfde5380c);
      a = hh(a, b, c, d, buffer.getUint32(4, true), 4, 0xa4beea44);
      d = hh(d, a, b, c, buffer.getUint32(16, true), 11, 0x4bdecfa9);
      c = hh(c, d, a, b, buffer.getUint32(28, true), 16, 0xf6bb4b60);
      b = hh(b, c, d, a, buffer.getUint32(40, true), 23, 0xbebfbc70);
      a = hh(a, b, c, d, buffer.getUint32(52, true), 4, 0x289b7ec6);
      d = hh(d, a, b, c, buffer.getUint32(0, true), 11, 0xeaa127fa);
      c = hh(c, d, a, b, buffer.getUint32(12, true), 16, 0xd4ef3085);
      b = hh(b, c, d, a, buffer.getUint32(24, true), 23, 0x04881d05);
      a = hh(a, b, c, d, buffer.getUint32(36, true), 4, 0xd9d4d039);
      d = hh(d, a, b, c, buffer.getUint32(48, true), 11, 0xe6db99e5);
      c = hh(c, d, a, b, buffer.getUint32(60, true), 16, 0x1fa27cf8);
      b = hh(b, c, d, a, buffer.getUint32(8, true), 23, 0xc4ac5665);
      a = ii(a, b, c, d, buffer.getUint32(0, true), 6, 0xf4292244);
      d = ii(d, a, b, c, buffer.getUint32(28, true), 10, 0x432aff97);
      c = ii(c, d, a, b, buffer.getUint32(56, true), 15, 0xab9423a7);
      b = ii(b, c, d, a, buffer.getUint32(20, true), 21, 0xfc93a039);
      a = ii(a, b, c, d, buffer.getUint32(48, true), 6, 0x655b59c3);
      d = ii(d, a, b, c, buffer.getUint32(12, true), 10, 0x8f0ccc92);
      c = ii(c, d, a, b, buffer.getUint32(40, true), 15, 0xffeff47d);
      b = ii(b, c, d, a, buffer.getUint32(4, true), 21, 0x85845dd1);
      a = ii(a, b, c, d, buffer.getUint32(32, true), 6, 0x6fa87e4f);
      d = ii(d, a, b, c, buffer.getUint32(60, true), 10, 0xfe2ce6e0);
      c = ii(c, d, a, b, buffer.getUint32(24, true), 15, 0xa3014314);
      b = ii(b, c, d, a, buffer.getUint32(52, true), 21, 0x4e0811a1);
      a = ii(a, b, c, d, buffer.getUint32(16, true), 6, 0xf7537e82);
      d = ii(d, a, b, c, buffer.getUint32(44, true), 10, 0xbd3af235);
      c = ii(c, d, a, b, buffer.getUint32(8, true), 15, 0x2ad7d2bb);
      b = ii(b, c, d, a, buffer.getUint32(36, true), 21, 0xeb86d391);
      state[0] = (a + state[0]) & 0xFFFFFFFF;
      state[1] = (b + state[1]) & 0xFFFFFFFF;
      state[2] = (c + state[2]) & 0xFFFFFFFF;
      state[3] = (d + state[3]) & 0xFFFFFFFF;
  };
  
  function cmn(q, a, b, x, s, t) {
      a = (((a + q) & 0xFFFFFFFF) + ((x + t) & 0xFFFFFFFF)) & 0xFFFFFFFF;
      return (((a << s) | (a >>> (32 - s))) + b) & 0xFFFFFFFF;
  }
  
  function ff(a, b, c, d, x, s, t) {
      return cmn((b & c) | ((~b) & d), a, b, x, s, t);
  }
  
  function gg(a, b, c, d, x, s, t) {
      return cmn((b & d) | (c & (~d)), a, b, x, s, t);
  }
  
  function hh(a, b, c, d, x, s, t) {
      return cmn(b ^ c ^ d, a, b, x, s, t);
  }
  
  function ii(a, b, c, d, x, s, t) {
      return cmn(c ^ (b | (~d)), a, b, x, s, t);
  }
  
  },{"./browserHashUtils":9,"buffer/":76}],12:[function(require,module,exports){
  var Buffer = require('buffer/').Buffer;
  var hashUtils = require('./browserHashUtils');
  
  var BLOCK_SIZE = 64;
  
  var DIGEST_LENGTH = 20;
  
  var KEY = new Uint32Array([
      0x5a827999,
      0x6ed9eba1,
      0x8f1bbcdc | 0,
      0xca62c1d6 | 0
  ]);
  
  var INIT = [
      0x6a09e667,
      0xbb67ae85,
      0x3c6ef372,
      0xa54ff53a,
      0x510e527f,
      0x9b05688c,
      0x1f83d9ab,
      0x5be0cd19,
  ];
  
  var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
  
  
  function Sha1() {
      this.h0 = 0x67452301;
      this.h1 = 0xEFCDAB89;
      this.h2 = 0x98BADCFE;
      this.h3 = 0x10325476;
      this.h4 = 0xC3D2E1F0;
      this.block = new Uint32Array(80);
      this.offset = 0;
      this.shift = 24;
      this.totalLength = 0;
  }
  
  
  module.exports = exports = Sha1;
  
  Sha1.BLOCK_SIZE = BLOCK_SIZE;
  
  Sha1.prototype.update = function (data) {
      if (this.finished) {
          throw new Error('Attempted to update an already finished hash.');
      }
  
      if (hashUtils.isEmptyData(data)) {
          return this;
      }
  
      data = hashUtils.convertToBuffer(data);
  
      var length = data.length;
      this.totalLength += length * 8;
      for (var i = 0; i < length; i++) {
          this.write(data[i]);
      }
  
      return this;
  };
  
  Sha1.prototype.write = function write(byte) {
      this.block[this.offset] |= (byte & 0xff) << this.shift;
      if (this.shift) {
          this.shift -= 8;
      } else {
          this.offset++;
          this.shift = 24;
      }
  
      if (this.offset === 16) this.processBlock();
  };
  
  Sha1.prototype.digest = function (encoding) {
      this.write(0x80);
      if (this.offset > 14 || (this.offset === 14 && this.shift < 24)) {
        this.processBlock();
      }
      this.offset = 14;
      this.shift = 24;
  
      this.write(0x00); // numbers this big aren't accurate in javascript anyway
      this.write(0x00); // ..So just hard-code to zero.
      this.write(this.totalLength > 0xffffffffff ? this.totalLength / 0x10000000000 : 0x00);
      this.write(this.totalLength > 0xffffffff ? this.totalLength / 0x100000000 : 0x00);
      for (var s = 24; s >= 0; s -= 8) {
          this.write(this.totalLength >> s);
      }
      var out = new Buffer(DIGEST_LENGTH);
      var outView = new DataView(out.buffer);
      outView.setUint32(0, this.h0, false);
      outView.setUint32(4, this.h1, false);
      outView.setUint32(8, this.h2, false);
      outView.setUint32(12, this.h3, false);
      outView.setUint32(16, this.h4, false);
  
      return encoding ? out.toString(encoding) : out;
  };
  
  Sha1.prototype.processBlock = function processBlock() {
      for (var i = 16; i < 80; i++) {
        var w = this.block[i - 3] ^ this.block[i - 8] ^ this.block[i - 14] ^ this.block[i - 16];
        this.block[i] = (w << 1) | (w >>> 31);
      }
  
      var a = this.h0;
      var b = this.h1;
      var c = this.h2;
      var d = this.h3;
      var e = this.h4;
      var f, k;
  
      for (i = 0; i < 80; i++) {
        if (i < 20) {
          f = d ^ (b & (c ^ d));
          k = 0x5A827999;
        }
        else if (i < 40) {
          f = b ^ c ^ d;
          k = 0x6ED9EBA1;
        }
        else if (i < 60) {
          f = (b & c) | (d & (b | c));
          k = 0x8F1BBCDC;
        }
        else {
          f = b ^ c ^ d;
          k = 0xCA62C1D6;
        }
        var temp = (a << 5 | a >>> 27) + f + e + k + (this.block[i]|0);
        e = d;
        d = c;
        c = (b << 30 | b >>> 2);
        b = a;
        a = temp;
      }
  
      this.h0 = (this.h0 + a) | 0;
      this.h1 = (this.h1 + b) | 0;
      this.h2 = (this.h2 + c) | 0;
      this.h3 = (this.h3 + d) | 0;
      this.h4 = (this.h4 + e) | 0;
  
      this.offset = 0;
      for (i = 0; i < 16; i++) {
          this.block[i] = 0;
      }
  };
  
  },{"./browserHashUtils":9,"buffer/":76}],13:[function(require,module,exports){
  var Buffer = require('buffer/').Buffer;
  var hashUtils = require('./browserHashUtils');
  
  var BLOCK_SIZE = 64;
  
  var DIGEST_LENGTH = 32;
  
  var KEY = new Uint32Array([
      0x428a2f98,
      0x71374491,
      0xb5c0fbcf,
      0xe9b5dba5,
      0x3956c25b,
      0x59f111f1,
      0x923f82a4,
      0xab1c5ed5,
      0xd807aa98,
      0x12835b01,
      0x243185be,
      0x550c7dc3,
      0x72be5d74,
      0x80deb1fe,
      0x9bdc06a7,
      0xc19bf174,
      0xe49b69c1,
      0xefbe4786,
      0x0fc19dc6,
      0x240ca1cc,
      0x2de92c6f,
      0x4a7484aa,
      0x5cb0a9dc,
      0x76f988da,
      0x983e5152,
      0xa831c66d,
      0xb00327c8,
      0xbf597fc7,
      0xc6e00bf3,
      0xd5a79147,
      0x06ca6351,
      0x14292967,
      0x27b70a85,
      0x2e1b2138,
      0x4d2c6dfc,
      0x53380d13,
      0x650a7354,
      0x766a0abb,
      0x81c2c92e,
      0x92722c85,
      0xa2bfe8a1,
      0xa81a664b,
      0xc24b8b70,
      0xc76c51a3,
      0xd192e819,
      0xd6990624,
      0xf40e3585,
      0x106aa070,
      0x19a4c116,
      0x1e376c08,
      0x2748774c,
      0x34b0bcb5,
      0x391c0cb3,
      0x4ed8aa4a,
      0x5b9cca4f,
      0x682e6ff3,
      0x748f82ee,
      0x78a5636f,
      0x84c87814,
      0x8cc70208,
      0x90befffa,
      0xa4506ceb,
      0xbef9a3f7,
      0xc67178f2
  ]);
  
  var INIT = [
      0x6a09e667,
      0xbb67ae85,
      0x3c6ef372,
      0xa54ff53a,
      0x510e527f,
      0x9b05688c,
      0x1f83d9ab,
      0x5be0cd19,
  ];
  
  var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
  
  
  function Sha256() {
      this.state = [
          0x6a09e667,
          0xbb67ae85,
          0x3c6ef372,
          0xa54ff53a,
          0x510e527f,
          0x9b05688c,
          0x1f83d9ab,
          0x5be0cd19,
      ];
      this.temp = new Int32Array(64);
      this.buffer = new Uint8Array(64);
      this.bufferLength = 0;
      this.bytesHashed = 0;
  
      this.finished = false;
  }
  
  
  module.exports = exports = Sha256;
  
  Sha256.BLOCK_SIZE = BLOCK_SIZE;
  
  Sha256.prototype.update = function (data) {
      if (this.finished) {
          throw new Error('Attempted to update an already finished hash.');
      }
  
      if (hashUtils.isEmptyData(data)) {
          return this;
      }
  
      data = hashUtils.convertToBuffer(data);
  
      var position = 0;
      var byteLength = data.byteLength;
      this.bytesHashed += byteLength;
      if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
          throw new Error('Cannot hash more than 2^53 - 1 bits');
      }
  
      while (byteLength > 0) {
          this.buffer[this.bufferLength++] = data[position++];
          byteLength--;
          if (this.bufferLength === BLOCK_SIZE) {
              this.hashBuffer();
              this.bufferLength = 0;
          }
      }
  
      return this;
  };
  
  Sha256.prototype.digest = function (encoding) {
      if (!this.finished) {
          var bitsHashed = this.bytesHashed * 8;
          var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
          var undecoratedLength = this.bufferLength;
          bufferView.setUint8(this.bufferLength++, 0x80);
          if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
              for (var i = this.bufferLength; i < BLOCK_SIZE; i++) {
                  bufferView.setUint8(i, 0);
              }
              this.hashBuffer();
              this.bufferLength = 0;
          }
          for (var i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
              bufferView.setUint8(i, 0);
          }
          bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 0x100000000), true);
          bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
          this.hashBuffer();
          this.finished = true;
      }
      var out = new Buffer(DIGEST_LENGTH);
      for (var i = 0; i < 8; i++) {
          out[i * 4] = (this.state[i] >>> 24) & 0xff;
          out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;
          out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;
          out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;
      }
      return encoding ? out.toString(encoding) : out;
  };
  
  Sha256.prototype.hashBuffer = function () {
      var _a = this,
          buffer = _a.buffer,
          state = _a.state;
      var state0 = state[0],
          state1 = state[1],
          state2 = state[2],
          state3 = state[3],
          state4 = state[4],
          state5 = state[5],
          state6 = state[6],
          state7 = state[7];
      for (var i = 0; i < BLOCK_SIZE; i++) {
          if (i < 16) {
              this.temp[i] = (((buffer[i * 4] & 0xff) << 24) |
                  ((buffer[(i * 4) + 1] & 0xff) << 16) |
                  ((buffer[(i * 4) + 2] & 0xff) << 8) |
                  (buffer[(i * 4) + 3] & 0xff));
          }
          else {
              var u = this.temp[i - 2];
              var t1_1 = (u >>> 17 | u << 15) ^
                  (u >>> 19 | u << 13) ^
                  (u >>> 10);
              u = this.temp[i - 15];
              var t2_1 = (u >>> 7 | u << 25) ^
                  (u >>> 18 | u << 14) ^
                  (u >>> 3);
              this.temp[i] = (t1_1 + this.temp[i - 7] | 0) +
                  (t2_1 + this.temp[i - 16] | 0);
          }
          var t1 = (((((state4 >>> 6 | state4 << 26) ^
              (state4 >>> 11 | state4 << 21) ^
              (state4 >>> 25 | state4 << 7))
              + ((state4 & state5) ^ (~state4 & state6))) | 0)
              + ((state7 + ((KEY[i] + this.temp[i]) | 0)) | 0)) | 0;
          var t2 = (((state0 >>> 2 | state0 << 30) ^
              (state0 >>> 13 | state0 << 19) ^
              (state0 >>> 22 | state0 << 10)) + ((state0 & state1) ^ (state0 & state2) ^ (state1 & state2))) | 0;
          state7 = state6;
          state6 = state5;
          state5 = state4;
          state4 = (state3 + t1) | 0;
          state3 = state2;
          state2 = state1;
          state1 = state0;
          state0 = (t1 + t2) | 0;
      }
      state[0] += state0;
      state[1] += state1;
      state[2] += state2;
      state[3] += state3;
      state[4] += state4;
      state[5] += state5;
      state[6] += state6;
      state[7] += state7;
  };
  
  },{"./browserHashUtils":9,"buffer/":76}],14:[function(require,module,exports){
  (function (process){(function (){
  var util = require('./util');
  
  util.crypto.lib = require('./browserCryptoLib');
  util.Buffer = require('buffer/').Buffer;
  util.url = require('url/');
  util.querystring = require('querystring/');
  
  var AWS = require('./core');
  
  
  module.exports = AWS;
  
  require('./api_loader');
  
  AWS.XML.Parser = require('./xml/browser_parser');
  
  require('./http/xhr');
  
  if (typeof process === 'undefined') {
    var process = {
      browser: true
    };
  }
  
  }).call(this)}).call(this,require('_process'))
  },{"./api_loader":7,"./browserCryptoLib":8,"./core":16,"./http/xhr":21,"./util":62,"./xml/browser_parser":63,"_process":116,"buffer/":76,"querystring/":128,"url/":134}],15:[function(require,module,exports){
  var AWS = require('./core');
  require('./credentials');
  require('./credentials/credential_provider_chain');
  var PromisesDependency;
  
  
  AWS.Config = AWS.util.inherit({
  
  
  
    constructor: function Config(options) {
      if (options === undefined) options = {};
      options = this.extractCredentials(options);
  
      AWS.util.each.call(this, this.keys, function (key, value) {
        this.set(key, options[key], value);
      });
    },
  
  
  
  
    getCredentials: function getCredentials(callback) {
      var self = this;
  
      function finish(err) {
        if (!err) {
          if (self.credentials.apiKeyId || self.credentials.tokenManager) {
            self.signatureVersion = 'iam';
          } else if (self.credentials.accessKeyId) {
            self.signatureVersion = 'v4';
          } else if (self.credentials && self.credentials.constructor === AWS.AnonymousCredentials) {
            self.signatureVersion = 'none';
          }
        }
        callback(err, err ? null : self.credentials);
      }
  
      function credError(msg, err) {
        return new AWS.util.error(err || new Error(), {
          code: 'CredentialsError',
          message: msg,
          name: 'CredentialsError'
        });
      }
  
      function getAsyncCredentials() {
        self.credentials.get(function(err) {
          if (err) {
            var msg = 'Could not load credentials from ' +
              self.credentials.constructor.name;
            err = credError(msg, err);
          }
          finish(err);
        });
      }
  
      function getStaticCredentials() {
        var err = null;
        if (!self.credentials.accessKeyId || !self.credentials.secretAccessKey) {
          err = credError('Missing credentials');
        }
        finish(err);
      }
  
      if (self.credentials) {
        if (typeof self.credentials.get === 'function') {
          getAsyncCredentials();
        } else { // static credentials
          getStaticCredentials();
        }
      } else if (self.credentialProvider) {
        self.credentialProvider.resolve(function(err, creds) {
          if (err) {
            err = credError('Could not load credentials from any providers', err);
          }
          self.credentials = creds;
          finish(err);
        });
      } else {
        finish(credError('No credentials to load'));
      }
    },
  
  
    getToken: function getToken(callback) {
      var self = this;
  
      function finish(err) {
        callback(err, err ? null : self.token);
      }
  
      function tokenError(msg, err) {
        return new AWS.util.error(err || new Error(), {
          code: 'TokenError',
          message: msg,
          name: 'TokenError'
        });
      }
  
      function getAsyncToken() {
        self.token.get(function(err) {
          if (err) {
            var msg = 'Could not load token from ' +
              self.token.constructor.name;
            err = tokenError(msg, err);
          }
          finish(err);
        });
      }
  
      function getStaticToken() {
        var err = null;
        if (!self.token.token) {
          err = tokenError('Missing token');
        }
        finish(err);
      }
  
      if (self.token) {
        if (typeof self.token.get === 'function') {
          getAsyncToken();
        } else { // static token
          getStaticToken();
        }
      } else if (self.tokenProvider) {
        self.tokenProvider.resolve(function(err, token) {
          if (err) {
            err = tokenError('Could not load token from any providers', err);
          }
          self.token = token;
          finish(err);
        });
      } else {
        finish(tokenError('No token to load'));
      }
    },
  
  
  
  
    update: function update(options, allowUnknownKeys) {
      allowUnknownKeys = allowUnknownKeys || false;
      options = this.extractCredentials(options);
      AWS.util.each.call(this, options, function (key, value) {
        if (allowUnknownKeys || Object.prototype.hasOwnProperty.call(this.keys, key) ||
            AWS.Service.hasService(key)) {
          this.set(key, value);
        }
      });
      if (this.credentials.accessKeyId || this.credentials.tokenManager) {
        this.credentials.expired = true;
      }
    },
  
  
    loadFromPath: function loadFromPath(path) {
      this.clear();
  
      var options = JSON.parse(AWS.util.readFileSync(path));
      var fileSystemCreds = new AWS.FileSystemCredentials(path);
      var chain = new AWS.CredentialProviderChain();
      chain.providers.unshift(fileSystemCreds);
      chain.resolve(function (err, creds) {
        if (err) throw err;
        else options.credentials = creds;
      });
  
      this.constructor(options);
  
      return this;
    },
  
  
    clear: function clear() {
  
      AWS.util.each.call(this, this.keys, function (key) {
        delete this[key];
      });
  
      this.set('credentials', undefined);
      this.set('credentialProvider', undefined);
    },
  
  
    set: function set(property, value, defaultValue) {
      if (value === undefined) {
        if (defaultValue === undefined) {
          defaultValue = this.keys[property];
        }
        if (typeof defaultValue === 'function') {
          this[property] = defaultValue.call(this);
        } else {
          this[property] = defaultValue;
        }
      } else if (property === 'httpOptions' && this[property]) {
        this[property] = AWS.util.merge(this[property], value);
      } else {
        this[property] = value;
      }
    },
  
  
    keys: {
      credentials: null,
      credentialProvider: null,
      region: null,
      logger: null,
      apiVersions: {},
      apiVersion: null,
      endpoint: undefined,
      httpOptions: {
        timeout: 120000
      },
      maxRetries: undefined,
      maxRedirects: 10,
      paramValidation: true,
      sslEnabled: true,
      s3ForcePathStyle: false,
      s3BucketEndpoint: false,
      s3DisableBodySigning: true,
      computeChecksums: true,
      convertResponseTypes: true,
      correctClockSkew: false,
      customUserAgent: null,
      dynamoDbCrc32: true,
      systemClockOffset: 0,
      signatureVersion: null,
      signatureCache: true,
      retryDelayOptions: {base: 100},
      useAccelerateEndpoint: false,
      useDualstackEndpoint: false,
      token: null
    },
  
  
    extractCredentials: function extractCredentials(options) {
      if ((options.accessKeyId && options.secretAccessKey) ||
          (options.apiKeyId || options.authCallback) ||
          (options.tokenManager)) {
        options = AWS.util.copy(options);
        options.credentials = new AWS.Credentials(options);
      }
      return options;
    },
  
  
    setPromisesDependency: function setPromisesDependency(dep) {
      PromisesDependency = dep;
      if (dep === null && typeof Promise === 'function') {
        PromisesDependency = Promise;
      }
      var constructors = [AWS.Request, AWS.Credentials, AWS.CredentialProviderChain];
      if (AWS.S3) {
        constructors.push(AWS.S3);
        if (AWS.S3.ManagedUpload) {
          constructors.push(AWS.S3.ManagedUpload);
        }
      }
      AWS.util.addPromises(constructors, PromisesDependency);
    },
  
  
    getPromisesDependency: function getPromisesDependency() {
      return PromisesDependency;
    }
  });
  
  
  AWS.config = new AWS.Config();
  
  },{"./core":16,"./credentials":17,"./credentials/credential_provider_chain":18}],16:[function(require,module,exports){
  
  var AWS = { util: require('./util') };
  
  
  var _hidden = {}; _hidden.toString(); // hack to parse macro
  
  
  module.exports = AWS;
  
  AWS.util.update(AWS, {
  
  
    VERSION: '1.14.0',
  
  
    Signers: {},
  
  
    Protocol: {
      Json: require('./protocol/json'),
      Query: require('./protocol/query'),
      Rest: require('./protocol/rest'),
      RestJson: require('./protocol/rest_json'),
      RestXml: require('./protocol/rest_xml')
    },
  
  
    XML: {
      Builder: require('./xml/builder'),
      Parser: null // conditionally set based on environment
    },
  
  
    JSON: {
      Builder: require('./json/builder'),
      Parser: require('./json/parser')
    },
  
  
    Model: {
      Api: require('./model/api'),
      Operation: require('./model/operation'),
      Shape: require('./model/shape'),
      Paginator: require('./model/paginator'),
      ResourceWaiter: require('./model/resource_waiter')
    },
  
  
    apiLoader: require('./api_loader'),
  
  
    util: require('./util'),
  });
  require('./sequential_executor');
  require('./service');
  require('./config');
  require('./credentials');
  require('./credentials/credential_provider_chain');
  require('./http');
  require('./event_listeners');
  require('./request');
  require('./response');
  require('./resource_waiter');
  require('./signers/request_signer');
  require('./param_validator');
  
  
  AWS.events = new AWS.SequentialExecutor();
  
  },{"./api_loader":7,"./config":15,"./credentials":17,"./credentials/credential_provider_chain":18,"./event_listeners":19,"./http":20,"./json/builder":23,"./json/parser":24,"./model/api":25,"./model/operation":27,"./model/paginator":28,"./model/resource_waiter":29,"./model/shape":30,"./param_validator":31,"./protocol/json":33,"./protocol/query":34,"./protocol/rest":35,"./protocol/rest_json":36,"./protocol/rest_xml":37,"./request":42,"./resource_waiter":43,"./response":44,"./sequential_executor":46,"./service":47,"./signers/request_signer":54,"./util":62,"./xml/builder":64}],17:[function(require,module,exports){
  var AWS = require('./core');
  var TokenManager = require('./iam/token_manager');
  
  
  AWS.Credentials = AWS.util.inherit({
  
    constructor: function Credentials() {
      AWS.util.hideProperties(this, ['secretAccessKey', 'apiKeyId']);
  
      this.expired = false;
      this.expireTime = null;
      this.refreshCallbacks = [];
      if (arguments.length === 1 && typeof arguments[0] === 'object') {
        var creds = arguments[0].credentials || arguments[0];
        this.apiKeyId = creds.apiKeyId;
        this.serviceInstanceId = creds.serviceInstanceId;
        this.authCallback = creds.authCallback;
        this.tokenManager = creds.tokenManager;
        this.ibmAuthEndpoint = creds.ibmAuthEndpoint;
        this.accessKeyId = creds.accessKeyId;
        this.secretAccessKey = creds.secretAccessKey;
        this.sessionToken = creds.sessionToken;
        this.httpOptions = creds.httpOptions;
      } else {
        this.accessKeyId = arguments[0];
        this.secretAccessKey = arguments[1];
        this.sessionToken = arguments[2];
        this.apiKeyId = arguments[3];
        this.serviceInstanceId = arguments[4];
      }
    },
  
  
    expiryWindow: 15,
  
  
    needsRefresh: function needsRefresh() {
      var currentTime = AWS.util.date.getDate().getTime();
      var adjustedTime = new Date(currentTime + this.expiryWindow * 1000);
  
      if (this.tokenManager) {
          return !this.tokenManager.token || this.tokenManager.token.isExpired(this.expiryWindow * 1000);
      } else if (this.expireTime && adjustedTime > this.expireTime) {
        return true;
      } else {
        return this.expired || !this.accessKeyId || !this.secretAccessKey;
      }
    },
  
  
    get: function get(callback) {
      var self = this;
      try {
          if ((self.apiKeyId || self.token || self.authCallback) && !self.tokenManager) {
              self.tokenManager = new TokenManager(self);
          }
      } catch (e) {
          return callback(e);
      }
      if (this.needsRefresh()) {
        this.refresh(function(err) {
          if (!err) self.expired = false; // reset expired flag
          if (callback) callback(err);
        });
      } else if (callback) {
        callback();
      }
    },
  
  
  
  
  
  
    refresh: function refresh(callback) {
      if (this.tokenManager && this.tokenManager.refreshToken) {
        this.tokenManager.refreshToken(null, null, callback);
      } else {
        this.expired = false;
        callback();
      }
    },
  
  
    coalesceRefresh: function coalesceRefresh(callback, sync) {
      var self = this;
      if (self.refreshCallbacks.push(callback) === 1) {
        self.load(function onLoad(err) {
          AWS.util.arrayEach(self.refreshCallbacks, function(callback) {
            if (sync) {
              callback(err);
            } else {
              AWS.util.defer(function () {
                callback(err);
              });
            }
          });
          self.refreshCallbacks.length = 0;
        });
      }
    },
  
  
    load: function load(callback) {
      callback();
    }
  });
  
  
  AWS.Credentials.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
    this.prototype.getPromise = AWS.util.promisifyMethod('get', PromiseDependency);
    this.prototype.refreshPromise = AWS.util.promisifyMethod('refresh', PromiseDependency);
  };
  
  
  AWS.Credentials.deletePromisesFromClass = function deletePromisesFromClass() {
    delete this.prototype.getPromise;
    delete this.prototype.refreshPromise;
  };
  
  AWS.util.addPromises(AWS.Credentials);
  
  },{"./core":16,"./iam/token_manager":22}],18:[function(require,module,exports){
  var AWS = require('../core');
  
  
  AWS.CredentialProviderChain = AWS.util.inherit(AWS.Credentials, {
  
  
    constructor: function CredentialProviderChain(providers) {
      if (providers) {
        this.providers = providers;
      } else {
        this.providers = AWS.CredentialProviderChain.defaultProviders.slice(0);
      }
      this.resolveCallbacks = [];
    },
  
  
  
  
    resolve: function resolve(callback) {
      var self = this;
      if (self.providers.length === 0) {
        callback(new Error('No providers'));
        return self;
      }
  
      if (self.resolveCallbacks.push(callback) === 1) {
        var index = 0;
        var providers = self.providers.slice(0);
  
        function resolveNext(err, creds) {
          if ((!err && creds) || index === providers.length) {
            AWS.util.arrayEach(self.resolveCallbacks, function (callback) {
              callback(err, creds);
            });
            self.resolveCallbacks.length = 0;
            return;
          }
  
          var provider = providers[index++];
          if (typeof provider === 'function') {
            creds = provider.call();
          } else {
            creds = provider;
          }
  
          if (creds.get) {
            creds.get(function (getErr) {
              resolveNext(getErr, getErr ? null : creds);
            });
          } else {
            resolveNext(null, creds);
          }
        }
  
        resolveNext();
      }
  
      return self;
    }
  });
  
  
  AWS.CredentialProviderChain.defaultProviders = [];
  
  
  AWS.CredentialProviderChain.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
    this.prototype.resolvePromise = AWS.util.promisifyMethod('resolve', PromiseDependency);
  };
  
  
  AWS.CredentialProviderChain.deletePromisesFromClass = function deletePromisesFromClass() {
    delete this.prototype.resolvePromise;
  };
  
  AWS.util.addPromises(AWS.CredentialProviderChain);
  
  },{"../core":16}],19:[function(require,module,exports){
  (function (process){(function (){
  var AWS = require('./core');
  var SequentialExecutor = require('./sequential_executor');
  
  AWS.EventListeners = {
  
    Core: {} /* doc hack */
  };
  
  
  function getOperationAuthtype(req) {
    if (!req.service.api.operations) {
      return '';
    }
    var operation = req.service.api.operations[req.operation];
    return operation ? operation.authtype : '';
  }
  
  
  function getIdentityType(req) {
    var service = req.service;
  
    if (service.config.signatureVersion) {
      return service.config.signatureVersion;
    }
  
    if (service.api.signatureVersion) {
      return service.api.signatureVersion;
    }
  
    return getOperationAuthtype(req);
  }
  
  AWS.EventListeners = {
    Core: new SequentialExecutor().addNamedListeners(function(add, addAsync) {
      addAsync(
        'VALIDATE_CREDENTIALS', 'validate',
        function VALIDATE_CREDENTIALS(req, done) {
          if (!req.service.api.signatureVersion && !req.service.config.signatureVersion) return done(); // none
  
          var identityType = getIdentityType(req);
          if (identityType === 'bearer') {
            req.service.config.getToken(function(err) {
              if (err) {
                req.response.error = AWS.util.error(err, {code: 'TokenError'});
              }
              done();
            });
            return;
          }
  
          req.service.config.getCredentials(function(err) {
            if (err) {
              req.response.error = AWS.util.error(err,
                {
                  code: 'CredentialsError',
                  message: 'Missing credentials in config, if using AWS_CONFIG_FILE, set AWS_SDK_LOAD_CONFIG=1'
                }
              );
            }
            done();
          });
      });
  
      add('VALIDATE_REGION', 'validate', function VALIDATE_REGION(req) {
        if (!req.service.isGlobalEndpoint) {
          var dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
          if (!req.service.config.region) {
            req.response.error = AWS.util.error(new Error(),
              {code: 'ConfigError', message: 'Missing region in config'});
          } else if (!dnsHostRegex.test(req.service.config.region)) {
            req.response.error = AWS.util.error(new Error(),
              {code: 'ConfigError', message: 'Invalid region in config'});
          }
        }
      });
  
      add('BUILD_IDEMPOTENCY_TOKENS', 'validate', function BUILD_IDEMPOTENCY_TOKENS(req) {
        if (!req.service.api.operations) {
          return;
        }
        var operation = req.service.api.operations[req.operation];
        if (!operation) {
          return;
        }
        var idempotentMembers = operation.idempotentMembers;
        if (!idempotentMembers.length) {
          return;
        }
        var params = AWS.util.copy(req.params);
        for (var i = 0, iLen = idempotentMembers.length; i < iLen; i++) {
          if (!params[idempotentMembers[i]]) {
            params[idempotentMembers[i]] = AWS.util.uuid.v4();
          }
        }
        req.params = params;
      });
  
      add('VALIDATE_PARAMETERS', 'validate', function VALIDATE_PARAMETERS(req) {
        if (!req.service.api.operations) {
          return;
        }
        var rules = req.service.api.operations[req.operation].input;
        var validation = req.service.config.paramValidation;
        new AWS.ParamValidator(validation).validate(rules, req.params);
      });
  
      add('COMPUTE_CHECKSUM', 'afterBuild', function COMPUTE_CHECKSUM(req) {
        if (!req.service.api.operations) {
          return;
        }
        var operation = req.service.api.operations[req.operation];
        if (!operation) {
          return;
        }
        var body = req.httpRequest.body;
        var isNonStreamingPayload = body && (AWS.util.Buffer.isBuffer(body) || typeof body === 'string');
        var headers = req.httpRequest.headers;
        if (
          operation.httpChecksumRequired &&
          req.service.config.computeChecksums &&
          isNonStreamingPayload &&
          !headers['Content-MD5']
        ) {
          var md5 = AWS.util.crypto.md5(body, 'base64');
          headers['Content-MD5'] = md5;
        }
      });
  
      addAsync('COMPUTE_SHA256', 'afterBuild', function COMPUTE_SHA256(req, done) {
        req.haltHandlersOnError();
        if (!req.service.api.operations) {
          return;
        }
        var operation = req.service.api.operations[req.operation];
        var authtype = operation ? operation.authtype : '';
        if (!req.service.api.signatureVersion && !authtype && !req.service.config.signatureVersion) return done(); // none
        if (req.service.getSignerClass(req) === AWS.Signers.V4) {
          var body = req.httpRequest.body || '';
          if (authtype.indexOf('unsigned-body') >= 0) {
            req.httpRequest.headers['X-Amz-Content-Sha256'] = 'UNSIGNED-PAYLOAD';
            return done();
          }
          AWS.util.computeSha256(body, function(err, sha) {
            if (err) {
              done(err);
            }
            else {
              req.httpRequest.headers['X-Amz-Content-Sha256'] = sha;
              done();
            }
          });
        } else {
          done();
        }
      });
  
      add('SET_CONTENT_LENGTH', 'afterBuild', function SET_CONTENT_LENGTH(req) {
        var authtype = getOperationAuthtype(req);
        var payloadMember = AWS.util.getRequestPayloadShape(req);
        if (req.httpRequest.headers['Content-Length'] === undefined) {
          try {
            var length = AWS.util.string.byteLength(req.httpRequest.body);
            req.httpRequest.headers['Content-Length'] = length;
          } catch (err) {
            if (payloadMember && payloadMember.isStreaming) {
              if (payloadMember.requiresLength) {
                throw err;
              } else if (authtype.indexOf('unsigned-body') >= 0) {
                req.httpRequest.headers['Transfer-Encoding'] = 'chunked';
                return;
              } else {
                throw err;
              }
            }
            throw err;
          }
        }
      });
  
      add('SET_HTTP_HOST', 'afterBuild', function SET_HTTP_HOST(req) {
        req.httpRequest.headers['Host'] = req.httpRequest.endpoint.host;
      });
  
      add('SET_TRACE_ID', 'afterBuild', function SET_TRACE_ID(req) {
        var traceIdHeaderName = 'X-Amzn-Trace-Id';
        if (AWS.util.isNode() && !Object.hasOwnProperty.call(req.httpRequest.headers, traceIdHeaderName)) {
          var ENV_LAMBDA_FUNCTION_NAME = 'AWS_LAMBDA_FUNCTION_NAME';
          var ENV_TRACE_ID = '_X_AMZN_TRACE_ID';
          var functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
          var traceId = process.env[ENV_TRACE_ID];
          if (
            typeof functionName === 'string' &&
            functionName.length > 0 &&
            typeof traceId === 'string' &&
            traceId.length > 0
          ) {
            req.httpRequest.headers[traceIdHeaderName] = traceId;
          }
        }
      });
  
      add('RESTART', 'restart', function RESTART() {
        var err = this.response.error;
        if (!err || !err.retryable) return;
  
        this.httpRequest = new AWS.HttpRequest(
          this.service.endpoint,
          this.service.region
        );
  
        if (this.response.retryCount < this.service.config.maxRetries) {
          this.response.retryCount++;
        } else {
          this.response.error = null;
        }
      });
  
      var addToHead = true;
  
      addAsync('SIGN', 'sign', function SIGN(req, done) {
        var service = req.service;
        var identityType = getIdentityType(req);
        if (!identityType || identityType.length === 0) return done(); // none
  
        if (identityType === 'bearer') {
          service.config.getToken(function (err, token) {
            if (err) {
              req.response.error = err;
              return done();
            }
  
            try {
              var SignerClass = service.getSignerClass(req);
              var signer = new SignerClass(req.httpRequest);
              signer.addAuthorization(token);
            } catch (e) {
              req.response.error = e;
            }
            done();
          });
        } else {
          service.config.getCredentials(function (err, credentials) {
            if (err) {
              req.response.error = err;
              return done();
            }
  
            try {
              var date = service.getSkewCorrectedDate();
              var SignerClass = service.getSignerClass(req);
              var operations = req.service.api.operations || {};
              var operation = operations[req.operation];
              var signer = new SignerClass(req.httpRequest,
                service.getSigningName(req),
                {
                  signatureCache: service.config.signatureCache,
                  operation: operation,
                  signatureVersion: service.api.signatureVersion
                });
              signer.setServiceClientId(service._clientId);
  
              delete req.httpRequest.headers['Authorization'];
              delete req.httpRequest.headers['Date'];
              delete req.httpRequest.headers['X-Amz-Date'];
  
              signer.addAuthorization(credentials, date, req);  // IAM expectes req
              req.signedAt = date;
            } catch (e) {
              req.response.error = e;
            }
            done();
          });
        }
      });
  
      add('VALIDATE_RESPONSE', 'validateResponse', function VALIDATE_RESPONSE(resp) {
        if (this.service.successfulResponse(resp, this)) {
          resp.data = {};
          resp.error = null;
        } else {
          resp.data = null;
          resp.error = AWS.util.error(new Error(),
            {code: 'UnknownError', message: 'An unknown error occurred.'});
        }
      });
  
      add('ERROR', 'error', function ERROR(err, resp) {
        var awsQueryCompatible = resp.request.service.api.awsQueryCompatible;
        if (awsQueryCompatible) {
          var headers = resp.httpResponse.headers;
          var queryErrorCode = headers ? headers['x-amzn-query-error'] : undefined;
          if (queryErrorCode && queryErrorCode.includes(';')) {
            resp.error.code = queryErrorCode.split(';')[0];
          }
        }
      }, true);
  
      addAsync('SEND', 'send', function SEND(resp, done) {
        resp.httpResponse._abortCallback = done;
        resp.error = null;
        resp.data = null;
  
        function callback(httpResp) {
          resp.httpResponse.stream = httpResp;
          var stream = resp.request.httpRequest.stream;
          var service = resp.request.service;
          var api = service.api;
          var operationName = resp.request.operation;
          var operation = api.operations[operationName] || {};
  
          httpResp.on('headers', function onHeaders(statusCode, headers, statusMessage) {
            resp.request.emit(
              'httpHeaders',
              [statusCode, headers, resp, statusMessage]
            );
  
            if (!resp.httpResponse.streaming) {
              if (AWS.HttpClient.streamsApiVersion === 2) { // streams2 API check
                if (operation.hasEventOutput && service.successfulResponse(resp)) {
                  resp.request.emit('httpDone');
                  done();
                  return;
                }
  
                httpResp.on('readable', function onReadable() {
                  var data = httpResp.read();
                  if (data !== null) {
                    resp.request.emit('httpData', [data, resp]);
                  }
                });
              } else { // legacy streams API
                httpResp.on('data', function onData(data) {
                  resp.request.emit('httpData', [data, resp]);
                });
              }
            }
          });
  
          httpResp.on('end', function onEnd() {
            if (!stream || !stream.didCallback) {
              if (AWS.HttpClient.streamsApiVersion === 2 && (operation.hasEventOutput && service.successfulResponse(resp))) {
                return;
              }
              resp.request.emit('httpDone');
              done();
            }
          });
        }
  
        function progress(httpResp) {
          httpResp.on('sendProgress', function onSendProgress(value) {
            resp.request.emit('httpUploadProgress', [value, resp]);
          });
  
          httpResp.on('receiveProgress', function onReceiveProgress(value) {
            resp.request.emit('httpDownloadProgress', [value, resp]);
          });
        }
  
        function error(err) {
          if (err.code !== 'RequestAbortedError') {
            var errCode = err.code === 'TimeoutError' ? err.code : 'NetworkingError';
            err = AWS.util.error(err, {
              code: errCode,
              region: resp.request.httpRequest.region,
              hostname: resp.request.httpRequest.endpoint.hostname,
              retryable: true
            });
          }
          resp.error = err;
          resp.request.emit('httpError', [resp.error, resp], function() {
            done();
          });
        }
  
        function executeSend() {
          var http = AWS.HttpClient.getInstance();
          var httpOptions = resp.request.service.config.httpOptions || {};
          try {
            var stream = http.handleRequest(resp.request.httpRequest, httpOptions,
                                            callback, error);
            progress(stream);
          } catch (err) {
            error(err);
          }
        }
        var timeDiff = (resp.request.service.getSkewCorrectedDate() - this.signedAt) / 1000;
        if (timeDiff >= 60 * 10) { // if we signed 10min ago, re-sign
          this.emit('sign', [this], function(err) {
            if (err) done(err);
            else executeSend();
          });
        } else {
          executeSend();
        }
      });
  
      add('HTTP_HEADERS', 'httpHeaders',
          function HTTP_HEADERS(statusCode, headers, resp, statusMessage) {
        resp.httpResponse.statusCode = statusCode;
        resp.httpResponse.statusMessage = statusMessage;
        resp.httpResponse.headers = headers;
        resp.httpResponse.body = AWS.util.buffer.toBuffer('');
        resp.httpResponse.buffers = [];
        resp.httpResponse.numBytes = 0;
        var dateHeader = headers.date || headers.Date;
        var service = resp.request.service;
        if (dateHeader) {
          var serverTime = Date.parse(dateHeader);
          if (service.config.correctClockSkew
              && service.isClockSkewed(serverTime)) {
            service.applyClockOffset(serverTime);
          }
        }
      });
  
      add('HTTP_DATA', 'httpData', function HTTP_DATA(chunk, resp) {
        if (chunk) {
          if (AWS.util.isNode()) {
            resp.httpResponse.numBytes += chunk.length;
  
            var total = resp.httpResponse.headers['content-length'];
            var progress = { loaded: resp.httpResponse.numBytes, total: total };
            resp.request.emit('httpDownloadProgress', [progress, resp]);
          }
  
          resp.httpResponse.buffers.push(AWS.util.buffer.toBuffer(chunk));
        }
      });
  
      add('HTTP_DONE', 'httpDone', function HTTP_DONE(resp) {
        if (resp.httpResponse.buffers && resp.httpResponse.buffers.length > 0) {
          var body = AWS.util.buffer.concat(resp.httpResponse.buffers);
          resp.httpResponse.body = body;
        }
        delete resp.httpResponse.numBytes;
        delete resp.httpResponse.buffers;
      });
  
      add('FINALIZE_ERROR', 'retry', function FINALIZE_ERROR(resp) {
        if (resp.httpResponse.statusCode) {
          resp.error.statusCode = resp.httpResponse.statusCode;
          if (resp.error.retryable === undefined) {
            resp.error.retryable = this.service.retryableError(resp.error, this);
          }
        }
      });
  
      add('INVALIDATE_CREDENTIALS', 'retry', function INVALIDATE_CREDENTIALS(resp) {
        if (!resp.error) return;
        switch (resp.error.code) {
          case 'RequestExpired': // EC2 only
          case 'ExpiredTokenException':
          case 'ExpiredToken':
            resp.error.retryable = true;
            resp.request.service.config.credentials.expired = true;
        }
      });
  
      add('EXPIRED_SIGNATURE', 'retry', function EXPIRED_SIGNATURE(resp) {
        var err = resp.error;
        if (!err) return;
        if (typeof err.code === 'string' && typeof err.message === 'string') {
          if (err.code.match(/Signature/) && err.message.match(/expired/)) {
            resp.error.retryable = true;
          }
        }
      });
  
      add('CLOCK_SKEWED', 'retry', function CLOCK_SKEWED(resp) {
        if (!resp.error) return;
        if (this.service.clockSkewError(resp.error)
            && this.service.config.correctClockSkew) {
          resp.error.retryable = true;
        }
      });
  
      add('REDIRECT', 'retry', function REDIRECT(resp) {
        if (resp.error && resp.error.statusCode >= 300 &&
            resp.error.statusCode < 400 && resp.httpResponse.headers['location']) {
          this.httpRequest.endpoint =
            new AWS.Endpoint(resp.httpResponse.headers['location']);
          this.httpRequest.headers['Host'] = this.httpRequest.endpoint.host;
          resp.error.redirect = true;
          resp.error.retryable = true;
        }
      });
  
      add('RETRY_CHECK', 'retry', function RETRY_CHECK(resp) {
        if (resp.error) {
          if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
            resp.error.retryDelay = 0;
          } else if (resp.retryCount < resp.maxRetries) {
            resp.error.retryDelay = this.service.retryDelays(resp.retryCount, resp.error) || 0;
          }
        }
      });
  
      addAsync('RESET_RETRY_STATE', 'afterRetry', function RESET_RETRY_STATE(resp, done) {
        var delay, willRetry = false;
  
        if (resp.error) {
          delay = resp.error.retryDelay || 0;
          if (resp.error.retryable && resp.retryCount < resp.maxRetries) {
            resp.retryCount++;
            willRetry = true;
          } else if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
            resp.redirectCount++;
            willRetry = true;
          }
        }
  
        if (willRetry && delay >= 0) {
          resp.error = null;
          setTimeout(done, delay);
        } else {
          done();
        }
      });
    }),
  
    CorePost: new SequentialExecutor().addNamedListeners(function(add) {
      add('EXTRACT_REQUEST_ID', 'extractData', AWS.util.extractRequestId);
      add('EXTRACT_REQUEST_ID', 'extractError', AWS.util.extractRequestId);
  
      add('ENOTFOUND_ERROR', 'httpError', function ENOTFOUND_ERROR(err) {
        function isDNSError(err) {
          return err.errno === 'ENOTFOUND' ||
            typeof err.errno === 'number' &&
            typeof AWS.util.getSystemErrorName === 'function' &&
            ['EAI_NONAME', 'EAI_NODATA'].indexOf(AWS.util.getSystemErrorName(err.errno) >= 0);
        }
        if (err.code === 'NetworkingError' && isDNSError(err)) {
          var message = 'Inaccessible host: `' + err.hostname + '\' at port `' + err.port +
            '\'. This service may not be available in the `' + err.region +
            '\' region.';
          this.response.error = AWS.util.error(new Error(message), {
            code: 'UnknownEndpoint',
            region: err.region,
            hostname: err.hostname,
            retryable: true,
            originalError: err
          });
        }
      });
    }),
  
    Logger: new SequentialExecutor().addNamedListeners(function(add) {
      add('LOG_REQUEST', 'complete', function LOG_REQUEST(resp) {
        var req = resp.request;
        var logger = req.service.config.logger;
        if (!logger) return;
        function filterSensitiveLog(inputShape, shape) {
          if (!shape) {
            return shape;
          }
          if (inputShape.isSensitive) {
            return '***SensitiveInformation***';
          }
          switch (inputShape.type) {
            case 'structure':
              var struct = {};
              AWS.util.each(shape, function(subShapeName, subShape) {
                if (Object.prototype.hasOwnProperty.call(inputShape.members, subShapeName)) {
                  struct[subShapeName] = filterSensitiveLog(inputShape.members[subShapeName], subShape);
                } else {
                  struct[subShapeName] = subShape;
                }
              });
              return struct;
            case 'list':
              var list = [];
              AWS.util.arrayEach(shape, function(subShape, index) {
                list.push(filterSensitiveLog(inputShape.member, subShape));
              });
              return list;
            case 'map':
              var map = {};
              AWS.util.each(shape, function(key, value) {
                map[key] = filterSensitiveLog(inputShape.value, value);
              });
              return map;
            default:
              return shape;
          }
        }
  
        function buildMessage() {
          var time = resp.request.service.getSkewCorrectedDate().getTime();
          var delta = (time - req.startTime.getTime()) / 1000;
          var ansi = logger.isTTY ? true : false;
          var status = resp.httpResponse.statusCode;
          var censoredParams = req.params;
          if (
            req.service.api.operations &&
                req.service.api.operations[req.operation] &&
                req.service.api.operations[req.operation].input
          ) {
            var inputShape = req.service.api.operations[req.operation].input;
            censoredParams = filterSensitiveLog(inputShape, req.params);
          }
          var params = require('util').inspect(censoredParams, true, null);
          var message = '';
          if (ansi) message += '\x1B[33m';
          message += '[AWS ' + req.service.serviceIdentifier + ' ' + status;
          message += ' ' + delta.toString() + 's ' + resp.retryCount + ' retries]';
          if (ansi) message += '\x1B[0;1m';
          message += ' ' + AWS.util.string.lowerFirst(req.operation);
          message += '(' + params + ')';
          if (ansi) message += '\x1B[0m';
          return message;
        }
  
        var line = buildMessage();
        if (typeof logger.log === 'function') {
          logger.log(line);
        } else if (typeof logger.write === 'function') {
          logger.write(line + '\n');
        }
      });
    }),
  
    Json: new SequentialExecutor().addNamedListeners(function(add) {
      var svc = require('./protocol/json');
      add('BUILD', 'build', svc.buildRequest);
      add('EXTRACT_DATA', 'extractData', svc.extractData);
      add('EXTRACT_ERROR', 'extractError', svc.extractError);
    }),
  
    Rest: new SequentialExecutor().addNamedListeners(function(add) {
      var svc = require('./protocol/rest');
      add('BUILD', 'build', svc.buildRequest);
      add('EXTRACT_DATA', 'extractData', svc.extractData);
      add('EXTRACT_ERROR', 'extractError', svc.extractError);
    }),
  
    RestJson: new SequentialExecutor().addNamedListeners(function(add) {
      var svc = require('./protocol/rest_json');
      add('BUILD', 'build', svc.buildRequest);
      add('EXTRACT_DATA', 'extractData', svc.extractData);
      add('EXTRACT_ERROR', 'extractError', svc.extractError);
      add('UNSET_CONTENT_LENGTH', 'afterBuild', svc.unsetContentLength);
    }),
  
    RestXml: new SequentialExecutor().addNamedListeners(function(add) {
      var svc = require('./protocol/rest_xml');
      add('BUILD', 'build', svc.buildRequest);
      add('EXTRACT_DATA', 'extractData', svc.extractData);
      add('EXTRACT_ERROR', 'extractError', svc.extractError);
    }),
  
    Query: new SequentialExecutor().addNamedListeners(function(add) {
      var svc = require('./protocol/query');
      add('BUILD', 'build', svc.buildRequest);
      add('EXTRACT_DATA', 'extractData', svc.extractData);
      add('EXTRACT_ERROR', 'extractError', svc.extractError);
    })
  };
  
  }).call(this)}).call(this,require('_process'))
  },{"./core":16,"./protocol/json":33,"./protocol/query":34,"./protocol/rest":35,"./protocol/rest_json":36,"./protocol/rest_xml":37,"./sequential_executor":46,"_process":116,"util":75}],20:[function(require,module,exports){
  var AWS = require('./core');
  var inherit = AWS.util.inherit;
  
  
  AWS.Endpoint = inherit({
  
  
    constructor: function Endpoint(endpoint, config) {
      AWS.util.hideProperties(this, ['slashes', 'auth', 'hash', 'search', 'query']);
  
      if (typeof endpoint === 'undefined' || endpoint === null) {
        throw new Error('Invalid endpoint: ' + endpoint);
      } else if (typeof endpoint !== 'string') {
        return AWS.util.copy(endpoint);
      }
  
      if (!endpoint.match(/^http/)) {
        var useSSL = config && config.sslEnabled !== undefined ?
          config.sslEnabled : AWS.config.sslEnabled;
        endpoint = (useSSL ? 'https' : 'http') + '://' + endpoint;
      }
  
      AWS.util.update(this, AWS.util.urlParse(endpoint));
  
      if (this.port) {
        this.port = parseInt(this.port, 10);
      } else {
        this.port = this.protocol === 'https:' ? 443 : 80;
      }
    }
  
  });
  
  
  AWS.HttpRequest = inherit({
  
  
    constructor: function HttpRequest(endpoint, region) {
      endpoint = new AWS.Endpoint(endpoint);
      this.method = 'POST';
      this.path = endpoint.path || '/';
      this.headers = {};
      this.body = '';
      this.endpoint = endpoint;
      this.region = region;
      this._userAgent = '';
      this.setUserAgent();
    },
  
  
    setUserAgent: function setUserAgent() {
      this._userAgent = this.headers[this.getUserAgentHeaderName()] = AWS.util.userAgent();
    },
  
    getUserAgentHeaderName: function getUserAgentHeaderName() {
      var prefix = AWS.util.isBrowser() ? 'X-Amz-' : '';
      return prefix + 'User-Agent';
    },
  
  
    appendToUserAgent: function appendToUserAgent(agentPartial) {
      if (typeof agentPartial === 'string' && agentPartial) {
        this._userAgent += ' ' + agentPartial;
      }
      this.headers[this.getUserAgentHeaderName()] = this._userAgent;
    },
  
  
    getUserAgent: function getUserAgent() {
      return this._userAgent;
    },
  
  
    pathname: function pathname() {
      return this.path.split('?', 1)[0];
    },
  
  
    search: function search() {
      var query = this.path.split('?', 2)[1];
      if (query) {
        query = AWS.util.queryStringParse(query);
        return AWS.util.queryParamsToString(query);
      }
      return '';
    }
  
  });
  
  
  AWS.HttpResponse = inherit({
  
  
    constructor: function HttpResponse() {
      this.statusCode = undefined;
      this.headers = {};
      this.body = undefined;
      this.streaming = false;
      this.stream = null;
    },
  
  
    createUnbufferedStream: function createUnbufferedStream() {
      this.streaming = true;
      return this.stream;
    }
  });
  
  
  AWS.HttpClient = inherit({});
  
  
  AWS.HttpClient.getInstance = function getInstance() {
    if (this.singleton === undefined) {
      this.singleton = new this();
    }
    return this.singleton;
  };
  
  },{"./core":16}],21:[function(require,module,exports){
  var AWS = require('../core');
  var EventEmitter = require('events').EventEmitter;
  require('../http');
  
  
  AWS.XHRClient = AWS.util.inherit({
    handleRequest: function handleRequest(httpRequest, httpOptions, callback, errCallback) {
      var self = this;
      var endpoint = httpRequest.endpoint;
      var emitter = new EventEmitter();
      var href = endpoint.protocol + '//' + endpoint.hostname;
      if (endpoint.port !== 80 && endpoint.port !== 443) {
        href += ':' + endpoint.port;
      }
      href += httpRequest.path;
  
      var xhr = new XMLHttpRequest(), headersEmitted = false;
      httpRequest.stream = xhr;
  
      xhr.addEventListener('readystatechange', function() {
        try {
          if (xhr.status === 0) return; // 0 code is invalid
        } catch (e) { return; }
  
        if (this.readyState >= this.HEADERS_RECEIVED && !headersEmitted) {
          emitter.statusCode = xhr.status;
          emitter.headers = self.parseHeaders(xhr.getAllResponseHeaders());
          emitter.emit(
            'headers',
            emitter.statusCode,
            emitter.headers,
            xhr.statusText
          );
          headersEmitted = true;
        }
        if (this.readyState === this.DONE) {
          self.finishRequest(xhr, emitter);
        }
      }, false);
      xhr.upload.addEventListener('progress', function (evt) {
        emitter.emit('sendProgress', evt);
      });
      xhr.addEventListener('progress', function (evt) {
        emitter.emit('receiveProgress', evt);
      }, false);
      xhr.addEventListener('timeout', function () {
        errCallback(AWS.util.error(new Error('Timeout'), {code: 'TimeoutError'}));
      }, false);
      xhr.addEventListener('error', function () {
        errCallback(AWS.util.error(new Error('Network Failure'), {
          code: 'NetworkingError'
        }));
      }, false);
      xhr.addEventListener('abort', function () {
        errCallback(AWS.util.error(new Error('Request aborted'), {
          code: 'RequestAbortedError'
        }));
      }, false);
  
      callback(emitter);
      xhr.open(httpRequest.method, href, httpOptions.xhrAsync !== false);
      AWS.util.each(httpRequest.headers, function (key, value) {
        if (key !== 'Content-Length' && key !== 'User-Agent' && key !== 'Host') {
          xhr.setRequestHeader(key, value);
        }
      });
  
      if (httpOptions.timeout && httpOptions.xhrAsync !== false) {
        xhr.timeout = httpOptions.timeout;
      }
  
      if (httpOptions.xhrWithCredentials) {
        xhr.withCredentials = true;
      }
      try { xhr.responseType = 'arraybuffer'; } catch (e) {}
  
      try {
        if (httpRequest.body) {
          xhr.send(httpRequest.body);
        } else {
          xhr.send();
        }
      } catch (err) {
        if (httpRequest.body && typeof httpRequest.body.buffer === 'object') {
          xhr.send(httpRequest.body.buffer); // send ArrayBuffer directly
        } else {
          throw err;
        }
      }
  
      return emitter;
    },
  
    parseHeaders: function parseHeaders(rawHeaders) {
      var headers = {};
      AWS.util.arrayEach(rawHeaders.split(/\r?\n/), function (line) {
        var key = line.split(':', 1)[0];
        var value = line.substring(key.length + 2);
        if (key.length > 0) headers[key.toLowerCase()] = value;
      });
      return headers;
    },
  
    finishRequest: function finishRequest(xhr, emitter) {
      var buffer;
      if (xhr.responseType === 'arraybuffer' && xhr.response) {
        var ab = xhr.response;
        buffer = new AWS.util.Buffer(ab.byteLength);
        var view = new Uint8Array(ab);
        for (var i = 0; i < buffer.length; ++i) {
          buffer[i] = view[i];
        }
      }
  
      try {
        if (!buffer && typeof xhr.responseText === 'string') {
          buffer = new AWS.util.Buffer(xhr.responseText);
        }
      } catch (e) {}
  
      if (buffer) emitter.emit('data', buffer);
      emitter.emit('end');
    }
  });
  
  
  AWS.HttpClient.prototype = AWS.XHRClient.prototype;
  
  
  AWS.HttpClient.streamsApiVersion = 1;
  
  },{"../core":16,"../http":20,"events":72}],22:[function(require,module,exports){
  var querystring = require('querystring');
  var AWS = require('../../lib/core');
  
  
  function Token(token) {
      if (!token.accessToken) {
          throw new Error('Token constructor must have an access token provided.');
      }
  
      this.tokenType = token.tokenType || 'Bearer';
      this.accessToken = token.accessToken;
      this.refreshToken = token.refreshToken;
      if (typeof token.expiration === 'number') {
          this.expiration = new Date(token.expiration);
      } else {
          this.expiration = token.expiration;
      }
  }
  
  
  Token.prototype.isExpired = function(gracePeriod) {
      return (!this.expiration || (Date.now() > +this.expiration - gracePeriod));
  };
  
  
  function TokenManager() {
      var options = {};
      var config = {};
      var authCallback;
  
      if (typeof arguments[0] === 'object') {
          options = arguments[0];
      } else if (typeof arguments[0] === 'function') {
          authCallback = arguments[0];
      }
  
      this.DEFAULT_HEADERS = {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic Yng6Yng=', // 'bx:bx'
          'cache-control': 'no-cache'
      };
  
      config = {
          ibmAuthEndpoint: 'https://iam.cloud.ibm.com/identity/token',
          apiKeyId: null,
          token: null,
          refreshToken: null,
          tokenExpiration: null,
          authCallback: authCallback
      };
  
      if (!(options.apiKeyId || options.token || (authCallback || options.authCallback))) {
          throw new Error('An authentication mechanism must be provided to the IAM token manager. This could be ' +
              'either an API Key, a valid API token, or a custom authentication callback.');
      }
  
      if (typeof options.ibmAuthEndpoint !== 'undefined' && !options.ibmAuthEndpoint) {
          throw new Error('Endpoint must not be null or empty string.');
      }
  
      AWS.util.each(options, function(key, value) {
          if (value) {
              config[key] = value;
          }
      });
      config.apiKeyId = options.apiKeyId;
      this.config = config;
  }
  
  
  TokenManager.prototype.getToken = function() {
      return this.token;
  };
  
  function generateTokenRefreshRequest(config, callbacks, body) {
      var tokenRequestConfig = {
          uri: config.ibmAuthEndpoint,
          headers: config.headers,
          body: body
      };
      AWS.util.update(tokenRequestConfig, this.config.httpOptions);
      if (typeof tokenRequestConfig.body === 'object') {
          tokenRequestConfig.body = JSON.stringify(tokenRequestConfig.body);
      }
  
      var httpRequest = new AWS.HttpRequest(tokenRequestConfig.uri, '');
      httpRequest.headers = tokenRequestConfig.headers;
      httpRequest.body = tokenRequestConfig.body;
  
      var httpRequestOptions = {
          httpOptions: this.config.httpOptions,
          maxRetries : 2,
          errorMessage: 'Unable to get IAM token'
      };
  
      var sendRefreshTokenRequest = function(resolve, reject) {
          AWS.util.handleRequestWithRetries(httpRequest, httpRequestOptions, function(requestErr, response) {
              if (requestErr) {
                  callbacks(requestErr);
                  if (reject) {
                      return reject(requestErr);
                  }
                  return;
              }
              try {
                  var token = JSON.parse(response);
                  var newToken;
                  try {
                      newToken = this.createToken({
                          tokenType: token.token_type && token.token_type.toLowerCase(),
                          accessToken: token.access_token || token.uaa_token,
                          refreshToken: token.refresh_token,
                          expiration: token.expiration * 1000 // Expiration is returned in seconds; convert to epoch here.
                      });
                  } catch (e) {
                      var err = new AWS.util.error(e, new Error(
                          'Expected valid token in IAM authentication request. Received: ' + token));
                      callbacks(err);
                      if (reject) {
                          return reject(err);
                      }
                      return;
                  }
                  callbacks(null, newToken);
                  if (resolve) {
                      return resolve(newToken);
                  }
              } catch (createTokenErr) {
                  callbacks(createTokenErr);
                  if (reject) {
                      return reject(createTokenErr);
                  }
              }
          }.bind(this));
      }.bind(this);
  
      return sendRefreshTokenRequest;
  }
  
  function handleAuthCallback(config, callbacks) {
      return function(resolve, reject) {
          var _callback = function(token) {
              try {
                  var t = this.createToken(token);
                  callbacks(null, token);
                  if (resolve) {
                      return resolve(t);
                  }
              } catch (createTokenErr) {
                  callbacks(createTokenErr);
                  if (reject) {
                      return reject(createTokenErr);
                  }
              }
          }.bind(this);
          var postCallback = config.authCallback(_callback);
          if (postCallback && postCallback.then) {
              postCallback.then(function(token) {
                  try {
                      var t = this.createToken(token);
                      callbacks(null, token);
                      if (resolve) {
                          return resolve(t);
                      }
                  } catch (createTokenErr) {
                      callbacks(createTokenErr);
                      if (reject) {
                          return reject(createTokenErr);
                      }
                  }
              }.bind(this))
              .catch(function(err) {
                  callbacks(err);
                  if (reject) {
                      return reject(err);
                  }
              }.bind(this));
          }
      }.bind(this);
  }
  
  
  TokenManager.prototype.refreshToken = function(options, forceRenew, callback) {
      if (typeof callback === 'undefined') {
          if (typeof forceRenew === 'function') {
              callback = forceRenew;
              forceRenew = undefined;
          } else if (typeof forceRenew === 'undefined' && typeof options === 'function') {
              callback = options;
              options = undefined;
          }
      }
  
      var callbacks = function() {
          var args = arguments;
          AWS.util.arrayEach(this._callbacks, function(cb) {
              cb.apply(this, args);
          }.bind(this));
          this._callbacks = [];
      }.bind(this);
  
      var sdkPromise = AWS.config.getPromisesDependency() || (typeof Promise === 'function' && Promise);
  
      var config = AWS.util.merge(this.config, options);
      config.headers = AWS.util.merge(this.DEFAULT_HEADERS, config.headers);
  
      var rejectOrCallbackError = function(message) {
          var err = new Error(message);
          if (this._callbacks) {
              this._callbacks.forEach(function (cb) {
                  cb(err);
              });
          } else if (callback) {
              callback(err)
          }
          if (sdkPromise !== undefined) {
              return sdkPromise.reject(err);
          }
          this._callbacks = [];
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
  
      var grantType;
      if (config.refreshToken) {
          grantType = 'refresh_token';
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
          config.url = (config.url.indexOf('?') === -1 ? '?' : '&') + query;
      }
  
      if (callback) {
          if (!this._callbacks) {
              this._callbacks = [callback];
          } else {
              this._callbacks.push(callback);
          }
      }
  
      if (this._tokenRequest) {
          return this._tokenRequest;
      }
  
      if (typeof config.authCallback === 'function') {
          var authFn = handleAuthCallback.call(this, config, callbacks);
  
          if (sdkPromise) {
              this._tokenRequest = new Promise(authFn).then(function(token) {
                  this._tokenRequest = undefined;
                  return token;
              }.bind(this));
              return this._tokenRequest;
          } else {
              return authFn();
          }
      }
  
      var sendRefreshTokenRequest = generateTokenRefreshRequest.call(this, config, callbacks, body);
  
      if (sdkPromise) {
          this._tokenRequest = new sdkPromise(sendRefreshTokenRequest).then(function(token) {
              this._tokenRequest = undefined;
              return token;
          }.bind(this)).catch(function(err) {
              this._tokenRequest = undefined;
              return err;
          }.bind(this));
          return this._tokenRequest;
      } else {
          return sendRefreshTokenRequest();
      }
  };
  
  
  TokenManager.prototype.createToken = function(tokenConfig) {
      this.token = new Token(tokenConfig);
  
      if (this.token.expiration) {
          var refreshTime = (+this.token.expiration - Date.now()) * 0.75;
  
          var t1 = setTimeout(function preemptiveRefresh(attempt) {
              this.refreshToken(function(err) {
                  if (err && attempt < 2) {
                      var t = setTimeout(preemptiveRefresh, 30000, attempt + 1);
                      t.unref();
                  }
              });
          }.bind(this), refreshTime);
          t1.unref();
      }
  
      return this.token;
  };
  
  module.exports = TokenManager;
  
  },{"../../lib/core":16,"querystring":125}],23:[function(require,module,exports){
  var util = require('../util');
  
  function JsonBuilder() { }
  
  JsonBuilder.prototype.build = function(value, shape) {
    return JSON.stringify(translate(value, shape));
  };
  
  function translate(value, shape) {
    if (!shape || value === undefined || value === null) return undefined;
  
    switch (shape.type) {
      case 'structure': return translateStructure(value, shape);
      case 'map': return translateMap(value, shape);
      case 'list': return translateList(value, shape);
      default: return translateScalar(value, shape);
    }
  }
  
  function translateStructure(structure, shape) {
    if (shape.isDocument) {
      return structure;
    }
    var struct = {};
    util.each(structure, function(name, value) {
      var memberShape = shape.members[name];
      if (memberShape) {
        if (memberShape.location !== 'body') return;
        var locationName = memberShape.isLocationName ? memberShape.name : name;
        var result = translate(value, memberShape);
        if (result !== undefined) struct[locationName] = result;
      }
    });
    return struct;
  }
  
  function translateList(list, shape) {
    var out = [];
    util.arrayEach(list, function(value) {
      var result = translate(value, shape.member);
      if (result !== undefined) out.push(result);
    });
    return out;
  }
  
  function translateMap(map, shape) {
    var out = {};
    util.each(map, function(key, value) {
      var result = translate(value, shape.value);
      if (result !== undefined) out[key] = result;
    });
    return out;
  }
  
  function translateScalar(value, shape) {
    return shape.toWireFormat(value);
  }
  
  
  module.exports = JsonBuilder;
  
  },{"../util":62}],24:[function(require,module,exports){
  var util = require('../util');
  
  function JsonParser() { }
  
  JsonParser.prototype.parse = function(value, shape) {
    return translate(JSON.parse(value), shape);
  };
  
  function translate(value, shape) {
    if (!shape || value === undefined) return undefined;
  
    switch (shape.type) {
      case 'structure': return translateStructure(value, shape);
      case 'map': return translateMap(value, shape);
      case 'list': return translateList(value, shape);
      default: return translateScalar(value, shape);
    }
  }
  
  function translateStructure(structure, shape) {
    if (structure == null) return undefined;
    if (shape.isDocument) return structure;
  
    var struct = {};
    var shapeMembers = shape.members;
    var isAwsQueryCompatible = shape.api && shape.api.awsQueryCompatible;
    util.each(shapeMembers, function(name, memberShape) {
      var locationName = memberShape.isLocationName ? memberShape.name : name;
      if (Object.prototype.hasOwnProperty.call(structure, locationName)) {
        var value = structure[locationName];
        var result = translate(value, memberShape);
        if (result !== undefined) struct[name] = result;
      } else if (isAwsQueryCompatible && memberShape.defaultValue) {
        if (memberShape.type === 'list') {
          struct[name] = typeof memberShape.defaultValue === 'function' ? memberShape.defaultValue() : memberShape.defaultValue;
        }
      }
    });
    return struct;
  }
  
  function translateList(list, shape) {
    if (list == null) return undefined;
  
    var out = [];
    util.arrayEach(list, function(value) {
      var result = translate(value, shape.member);
      if (result === undefined) out.push(null);
      else out.push(result);
    });
    return out;
  }
  
  function translateMap(map, shape) {
    if (map == null) return undefined;
  
    var out = {};
    util.each(map, function(key, value) {
      var result = translate(value, shape.value);
      if (result === undefined) out[key] = null;
      else out[key] = result;
    });
    return out;
  }
  
  function translateScalar(value, shape) {
    return shape.toType(value);
  }
  
  
  module.exports = JsonParser;
  
  },{"../util":62}],25:[function(require,module,exports){
  var Collection = require('./collection');
  var Operation = require('./operation');
  var Shape = require('./shape');
  var Paginator = require('./paginator');
  var ResourceWaiter = require('./resource_waiter');
  var metadata = require('../../apis/metadata.json');
  
  var util = require('../util');
  var property = util.property;
  var memoizedProperty = util.memoizedProperty;
  
  function Api(api, options) {
    var self = this;
    api = api || {};
    options = options || {};
    options.api = this;
  
    api.metadata = api.metadata || {};
  
    var serviceIdentifier = options.serviceIdentifier;
    delete options.serviceIdentifier;
  
    property(this, 'isApi', true, false);
    property(this, 'apiVersion', api.metadata.apiVersion);
    property(this, 'endpointPrefix', api.metadata.endpointPrefix);
    property(this, 'signingName', api.metadata.signingName);
    property(this, 'globalEndpoint', api.metadata.globalEndpoint);
    property(this, 'signatureVersion', api.metadata.signatureVersion);
    property(this, 'jsonVersion', api.metadata.jsonVersion);
    property(this, 'targetPrefix', api.metadata.targetPrefix);
    property(this, 'protocol', api.metadata.protocol);
    property(this, 'timestampFormat', api.metadata.timestampFormat);
    property(this, 'xmlNamespaceUri', api.metadata.xmlNamespace);
    property(this, 'abbreviation', api.metadata.serviceAbbreviation);
    property(this, 'fullName', api.metadata.serviceFullName);
    property(this, 'serviceId', api.metadata.serviceId);
    if (serviceIdentifier && metadata[serviceIdentifier]) {
        property(this, 'xmlNoDefaultLists', metadata[serviceIdentifier].xmlNoDefaultLists, false);
    }
  
    memoizedProperty(this, 'className', function() {
      var name = api.metadata.serviceAbbreviation || api.metadata.serviceFullName;
      if (!name) return null;
  
      name = name.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, '');
      if (name === 'ElasticLoadBalancing') name = 'ELB';
      return name;
    });
  
    property(this, 'operations', new Collection(api.operations, options, function(name, operation) {
      return new Operation(name, operation, options);
    }, util.string.lowerFirst));
  
    property(this, 'shapes', new Collection(api.shapes, options, function(name, shape) {
      return Shape.create(shape, options);
    }));
  
    property(this, 'paginators', new Collection(api.paginators, options, function(name, paginator) {
      return new Paginator(name, paginator, options);
    }));
  
    property(this, 'waiters', new Collection(api.waiters, options, function(name, waiter) {
      return new ResourceWaiter(name, waiter, options);
    }, util.string.lowerFirst));
  
    if (options.documentation) {
      property(this, 'documentation', api.documentation);
      property(this, 'documentationUrl', api.documentationUrl);
    }
    property(this, 'awsQueryCompatible', api.metadata.awsQueryCompatible);
  }
  
  
  module.exports = Api;
  
  },{"../../apis/metadata.json":1,"../util":62,"./collection":26,"./operation":27,"./paginator":28,"./resource_waiter":29,"./shape":30}],26:[function(require,module,exports){
  var memoizedProperty = require('../util').memoizedProperty;
  
  function memoize(name, value, factory, nameTr) {
    memoizedProperty(this, nameTr(name), function() {
      return factory(name, value);
    });
  }
  
  function Collection(iterable, options, factory, nameTr, callback) {
    nameTr = nameTr || String;
    var self = this;
  
    for (var id in iterable) {
      if (Object.prototype.hasOwnProperty.call(iterable, id)) {
        memoize.call(self, id, iterable[id], factory, nameTr);
        if (callback) callback(id, iterable[id]);
      }
    }
  }
  
  
  module.exports = Collection;
  
  },{"../util":62}],27:[function(require,module,exports){
  var Shape = require('./shape');
  
  var util = require('../util');
  var property = util.property;
  var memoizedProperty = util.memoizedProperty;
  
  function Operation(name, operation, options) {
    var self = this;
    options = options || {};
  
    property(this, 'name', operation.name || name);
    property(this, 'api', options.api, false);
  
    operation.http = operation.http || {};
    property(this, 'httpMethod', operation.http.method || 'POST');
    property(this, 'httpPath', operation.http.requestUri || '/');
    property(this, 'authtype', operation.authtype || '');
  
    var httpChecksumRequired = operation.httpChecksumRequired
      || (operation.httpChecksum && operation.httpChecksum.requestChecksumRequired);
    property(this, 'httpChecksumRequired', httpChecksumRequired, false);
  
    memoizedProperty(this, 'input', function() {
      if (!operation.input) {
        return new Shape.create({type: 'structure'}, options);
      }
      return Shape.create(operation.input, options);
    });
  
    memoizedProperty(this, 'output', function() {
      if (!operation.output) {
        return new Shape.create({type: 'structure'}, options);
      }
      return Shape.create(operation.output, options);
    });
  
    memoizedProperty(this, 'errors', function() {
      var list = [];
      if (!operation.errors) return null;
  
      for (var i = 0; i < operation.errors.length; i++) {
        list.push(Shape.create(operation.errors[i], options));
      }
  
      return list;
    });
  
    memoizedProperty(this, 'paginator', function() {
      return options.api.paginators[name];
    });
  
    if (options.documentation) {
      property(this, 'documentation', operation.documentation);
      property(this, 'documentationUrl', operation.documentationUrl);
    }
  
    memoizedProperty(this, 'idempotentMembers', function() {
      var idempotentMembers = [];
      var input = self.input;
      var members = input.members;
      if (!input.members) {
        return idempotentMembers;
      }
      for (var name in members) {
        if (!members.hasOwnProperty(name)) {
          continue;
        }
        if (members[name].isIdempotent === true) {
          idempotentMembers.push(name);
        }
      }
      return idempotentMembers;
    });
  
    memoizedProperty(this, 'hasEventOutput', function() {
      var output = self.output;
      return hasEventStream(output);
    });
  }
  
  function hasEventStream(topLevelShape) {
    var members = topLevelShape.members;
    var payload = topLevelShape.payload;
  
    if (!topLevelShape.members) {
      return false;
    }
  
    if (payload) {
      var payloadMember = members[payload];
      return payloadMember.isEventStream;
    }
  
    for (var name in members) {
      if (!members.hasOwnProperty(name)) {
        if (members[name].isEventStream === true) {
          return true;
        }
      }
    }
    return false;
  }
  
  
  module.exports = Operation;
  
  },{"../util":62,"./shape":30}],28:[function(require,module,exports){
  var property = require('../util').property;
  
  function Paginator(name, paginator) {
    property(this, 'inputToken', paginator.input_token);
    property(this, 'limitKey', paginator.limit_key);
    property(this, 'moreResults', paginator.more_results);
    property(this, 'outputToken', paginator.output_token);
    property(this, 'resultKey', paginator.result_key);
  }
  
  
  module.exports = Paginator;
  
  },{"../util":62}],29:[function(require,module,exports){
  var util = require('../util');
  var property = util.property;
  
  function ResourceWaiter(name, waiter, options) {
    options = options || {};
    property(this, 'name', name);
    property(this, 'api', options.api, false);
  
    if (waiter.operation) {
      property(this, 'operation', util.string.lowerFirst(waiter.operation));
    }
  
    var self = this;
    var keys = [
      'type',
      'description',
      'delay',
      'maxAttempts',
      'acceptors'
    ];
  
    keys.forEach(function(key) {
      var value = waiter[key];
      if (value) {
        property(self, key, value);
      }
    });
  }
  
  
  module.exports = ResourceWaiter;
  
  },{"../util":62}],30:[function(require,module,exports){
  var Collection = require('./collection');
  
  var util = require('../util');
  
  function property(obj, name, value) {
    if (value !== null && value !== undefined) {
      util.property.apply(this, arguments);
    }
  }
  
  function memoizedProperty(obj, name) {
    if (!obj.constructor.prototype[name]) {
      util.memoizedProperty.apply(this, arguments);
    }
  }
  
  function Shape(shape, options, memberName) {
    options = options || {};
  
    property(this, 'shape', shape.shape);
    property(this, 'api', options.api, false);
    property(this, 'type', shape.type);
    property(this, 'enum', shape.enum);
    property(this, 'min', shape.min);
    property(this, 'max', shape.max);
    property(this, 'pattern', shape.pattern);
    property(this, 'location', shape.location || this.location || 'body');
    property(this, 'name', this.name || shape.xmlName || shape.queryName ||
      shape.locationName || memberName);
    property(this, 'isStreaming', shape.streaming || this.isStreaming || false);
    property(this, 'requiresLength', shape.requiresLength, false);
    property(this, 'isComposite', shape.isComposite || false);
    property(this, 'isShape', true, false);
    property(this, 'isQueryName', Boolean(shape.queryName), false);
    property(this, 'isLocationName', Boolean(shape.locationName), false);
    property(this, 'isIdempotent', shape.idempotencyToken === true);
    property(this, 'isJsonValue', shape.jsonvalue === true);
    property(this, 'isSensitive', shape.sensitive === true || shape.prototype && shape.prototype.sensitive === true);
    property(this, 'isEventStream', Boolean(shape.eventstream), false);
    property(this, 'isEvent', Boolean(shape.event), false);
    property(this, 'isEventPayload', Boolean(shape.eventpayload), false);
    property(this, 'isEventHeader', Boolean(shape.eventheader), false);
    property(this, 'isTimestampFormatSet', Boolean(shape.timestampFormat) || shape.prototype && shape.prototype.isTimestampFormatSet === true, false);
    property(this, 'endpointDiscoveryId', Boolean(shape.endpointdiscoveryid), false);
    property(this, 'hostLabel', Boolean(shape.hostLabel), false);
  
    if (options.documentation) {
      property(this, 'documentation', shape.documentation);
      property(this, 'documentationUrl', shape.documentationUrl);
    }
  
    if (shape.xmlAttribute) {
      property(this, 'isXmlAttribute', shape.xmlAttribute || false);
    }
  
    property(this, 'defaultValue', null);
    this.toWireFormat = function(value) {
      if (value === null || value === undefined) return '';
      return value;
    };
    this.toType = function(value) { return value; };
  }
  
  
  Shape.normalizedTypes = {
    character: 'string',
    double: 'float',
    long: 'integer',
    short: 'integer',
    biginteger: 'integer',
    bigdecimal: 'float',
    blob: 'binary'
  };
  
  
  Shape.types = {
    'structure': StructureShape,
    'list': ListShape,
    'map': MapShape,
    'boolean': BooleanShape,
    'timestamp': TimestampShape,
    'float': FloatShape,
    'integer': IntegerShape,
    'string': StringShape,
    'base64': Base64Shape,
    'binary': BinaryShape
  };
  
  Shape.resolve = function resolve(shape, options) {
    if (shape.shape) {
      var refShape = options.api.shapes[shape.shape];
      if (!refShape) {
        throw new Error('Cannot find shape reference: ' + shape.shape);
      }
  
      return refShape;
    } else {
      return null;
    }
  };
  
  Shape.create = function create(shape, options, memberName) {
    if (shape.isShape) return shape;
  
    var refShape = Shape.resolve(shape, options);
    if (refShape) {
      var filteredKeys = Object.keys(shape);
      if (!options.documentation) {
        filteredKeys = filteredKeys.filter(function(name) {
          return !name.match(/documentation/);
        });
      }
  
      var InlineShape = function() {
        refShape.constructor.call(this, shape, options, memberName);
      };
      InlineShape.prototype = refShape;
      return new InlineShape();
    } else {
      if (!shape.type) {
        if (shape.members) shape.type = 'structure';
        else if (shape.member) shape.type = 'list';
        else if (shape.key) shape.type = 'map';
        else shape.type = 'string';
      }
  
      var origType = shape.type;
      if (Shape.normalizedTypes[shape.type]) {
        shape.type = Shape.normalizedTypes[shape.type];
      }
  
      if (Shape.types[shape.type]) {
        return new Shape.types[shape.type](shape, options, memberName);
      } else {
        throw new Error('Unrecognized shape type: ' + origType);
      }
    }
  };
  
  function CompositeShape(shape) {
    Shape.apply(this, arguments);
    property(this, 'isComposite', true);
  
    if (shape.flattened) {
      property(this, 'flattened', shape.flattened || false);
    }
  }
  
  function StructureShape(shape, options) {
    var self = this;
    var requiredMap = null, firstInit = !this.isShape;
  
    CompositeShape.apply(this, arguments);
  
    if (firstInit) {
      property(this, 'defaultValue', function() { return {}; });
      property(this, 'members', {});
      property(this, 'memberNames', []);
      property(this, 'required', []);
      property(this, 'isRequired', function() { return false; });
      property(this, 'isDocument', Boolean(shape.document));
    }
  
    if (shape.members) {
      property(this, 'members', new Collection(shape.members, options, function(name, member) {
        return Shape.create(member, options, name);
      }));
      memoizedProperty(this, 'memberNames', function() {
        return shape.xmlOrder || Object.keys(shape.members);
      });
  
      if (shape.event) {
        memoizedProperty(this, 'eventPayloadMemberName', function() {
          var members = self.members;
          var memberNames = self.memberNames;
          for (var i = 0, iLen = memberNames.length; i < iLen; i++) {
            if (members[memberNames[i]].isEventPayload) {
              return memberNames[i];
            }
          }
        });
  
        memoizedProperty(this, 'eventHeaderMemberNames', function() {
          var members = self.members;
          var memberNames = self.memberNames;
          var eventHeaderMemberNames = [];
          for (var i = 0, iLen = memberNames.length; i < iLen; i++) {
            if (members[memberNames[i]].isEventHeader) {
              eventHeaderMemberNames.push(memberNames[i]);
            }
          }
          return eventHeaderMemberNames;
        });
      }
    }
  
    if (shape.required) {
      property(this, 'required', shape.required);
      property(this, 'isRequired', function(name) {
        if (!requiredMap) {
          requiredMap = {};
          for (var i = 0; i < shape.required.length; i++) {
            requiredMap[shape.required[i]] = true;
          }
        }
  
        return requiredMap[name];
      }, false, true);
    }
  
    property(this, 'resultWrapper', shape.resultWrapper || null);
  
    if (shape.payload) {
      property(this, 'payload', shape.payload);
    }
  
    if (typeof shape.xmlNamespace === 'string') {
      property(this, 'xmlNamespaceUri', shape.xmlNamespace);
    } else if (typeof shape.xmlNamespace === 'object') {
      property(this, 'xmlNamespacePrefix', shape.xmlNamespace.prefix);
      property(this, 'xmlNamespaceUri', shape.xmlNamespace.uri);
    }
  }
  
  function ListShape(shape, options) {
    var self = this, firstInit = !this.isShape;
    CompositeShape.apply(this, arguments);
  
    if (firstInit) {
      property(this, 'defaultValue', function() { return []; });
    }
  
    if (shape.member) {
      memoizedProperty(this, 'member', function() {
        return Shape.create(shape.member, options);
      });
    }
  
    if (this.flattened) {
      var oldName = this.name;
      memoizedProperty(this, 'name', function() {
        return self.member.name || oldName;
      });
    }
  }
  
  function MapShape(shape, options) {
    var firstInit = !this.isShape;
    CompositeShape.apply(this, arguments);
  
    if (firstInit) {
      property(this, 'defaultValue', function() { return {}; });
      property(this, 'key', Shape.create({type: 'string'}, options));
      property(this, 'value', Shape.create({type: 'string'}, options));
    }
  
    if (shape.key) {
      memoizedProperty(this, 'key', function() {
        return Shape.create(shape.key, options);
      });
    }
    if (shape.value) {
      memoizedProperty(this, 'value', function() {
        return Shape.create(shape.value, options);
      });
    }
  }
  
  function TimestampShape(shape) {
    var self = this;
    Shape.apply(this, arguments);
  
    if (shape.timestampFormat) {
      property(this, 'timestampFormat', shape.timestampFormat);
    } else if (self.isTimestampFormatSet && this.timestampFormat) {
      property(this, 'timestampFormat', this.timestampFormat);
    } else if (this.location === 'header') {
      property(this, 'timestampFormat', 'rfc822');
    } else if (this.location === 'querystring') {
      property(this, 'timestampFormat', 'iso8601');
    } else if (this.api) {
      switch (this.api.protocol) {
        case 'json':
        case 'rest-json':
          property(this, 'timestampFormat', 'unixTimestamp');
          break;
        case 'rest-xml':
        case 'query':
        case 'ec2':
          property(this, 'timestampFormat', 'iso8601');
          break;
      }
    }
  
    this.toType = function(value) {
      if (value === null || value === undefined) return null;
      if (typeof value.toUTCString === 'function') return value;
      return typeof value === 'string' || typeof value === 'number' ?
             util.date.parseTimestamp(value) : null;
    };
  
    this.toWireFormat = function(value) {
      return util.date.format(value, self.timestampFormat);
    };
  }
  
  function StringShape() {
    Shape.apply(this, arguments);
  
    var nullLessProtocols = ['rest-xml', 'query', 'ec2'];
    this.toType = function(value) {
      value = this.api && nullLessProtocols.indexOf(this.api.protocol) > -1 ?
        value || '' : value;
      if (this.isJsonValue) {
        return JSON.parse(value);
      }
  
      return value && typeof value.toString === 'function' ?
        value.toString() : value;
    };
  
    this.toWireFormat = function(value) {
      return this.isJsonValue ? JSON.stringify(value) : value;
    };
  }
  
  function FloatShape() {
    Shape.apply(this, arguments);
  
    this.toType = function(value) {
      if (value === null || value === undefined) return null;
      return parseFloat(value);
    };
    this.toWireFormat = this.toType;
  }
  
  function IntegerShape() {
    Shape.apply(this, arguments);
  
    this.toType = function(value) {
      if (value === null || value === undefined) return null;
      return parseInt(value, 10);
    };
    this.toWireFormat = this.toType;
  }
  
  function BinaryShape() {
    Shape.apply(this, arguments);
    this.toType = function(value) {
      var buf = util.base64.decode(value);
      if (this.isSensitive && util.isNode() && typeof util.Buffer.alloc === 'function') {
  
        var secureBuf = util.Buffer.alloc(buf.length, buf);
        buf.fill(0);
        buf = secureBuf;
      }
      return buf;
    };
    this.toWireFormat = util.base64.encode;
  }
  
  function Base64Shape() {
    BinaryShape.apply(this, arguments);
  }
  
  function BooleanShape() {
    Shape.apply(this, arguments);
  
    this.toType = function(value) {
      if (typeof value === 'boolean') return value;
      if (value === null || value === undefined) return null;
      return value === 'true';
    };
  }
  
  
  Shape.shapes = {
    StructureShape: StructureShape,
    ListShape: ListShape,
    MapShape: MapShape,
    StringShape: StringShape,
    BooleanShape: BooleanShape,
    Base64Shape: Base64Shape
  };
  
  
  module.exports = Shape;
  
  },{"../util":62,"./collection":26}],31:[function(require,module,exports){
  var AWS = require('./core');
  
  
  AWS.ParamValidator = AWS.util.inherit({
  
    constructor: function ParamValidator(validation) {
      if (validation === true || validation === undefined) {
        validation = {'min': true};
      }
      this.validation = validation;
    },
  
    validate: function validate(shape, params, context) {
      this.errors = [];
      this.validateMember(shape, params || {}, context || 'params');
  
      if (this.errors.length > 1) {
        var msg = this.errors.join('\n* ');
        msg = 'There were ' + this.errors.length +
          ' validation errors:\n* ' + msg;
        throw AWS.util.error(new Error(msg),
          {code: 'MultipleValidationErrors', errors: this.errors});
      } else if (this.errors.length === 1) {
        throw this.errors[0];
      } else {
        return true;
      }
    },
  
    fail: function fail(code, message) {
      this.errors.push(AWS.util.error(new Error(message), {code: code}));
    },
  
    validateStructure: function validateStructure(shape, params, context) {
      if (shape.isDocument) return true;
  
      this.validateType(params, context, ['object'], 'structure');
      var paramName;
      for (var i = 0; shape.required && i < shape.required.length; i++) {
        paramName = shape.required[i];
        var value = params[paramName];
        if (value === undefined || value === null) {
          this.fail('MissingRequiredParameter',
            'Missing required key \'' + paramName + '\' in ' + context);
        }
      }
  
      for (paramName in params) {
        if (!Object.prototype.hasOwnProperty.call(params, paramName)) continue;
  
        var paramValue = params[paramName],
            memberShape = shape.members[paramName];
  
        if (memberShape !== undefined) {
          var memberContext = [context, paramName].join('.');
          this.validateMember(memberShape, paramValue, memberContext);
        } else if (paramValue !== undefined && paramValue !== null) {
          this.fail('UnexpectedParameter',
            'Unexpected key \'' + paramName + '\' found in ' + context);
        }
      }
  
      return true;
    },
  
    validateMember: function validateMember(shape, param, context) {
      switch (shape.type) {
        case 'structure':
          return this.validateStructure(shape, param, context);
        case 'list':
          return this.validateList(shape, param, context);
        case 'map':
          return this.validateMap(shape, param, context);
        default:
          return this.validateScalar(shape, param, context);
      }
    },
  
    validateList: function validateList(shape, params, context) {
      if (this.validateType(params, context, [Array])) {
        this.validateRange(shape, params.length, context, 'list member count');
        for (var i = 0; i < params.length; i++) {
          this.validateMember(shape.member, params[i], context + '[' + i + ']');
        }
      }
    },
  
    validateMap: function validateMap(shape, params, context) {
      if (this.validateType(params, context, ['object'], 'map')) {
        var mapCount = 0;
        for (var param in params) {
          if (!Object.prototype.hasOwnProperty.call(params, param)) continue;
          this.validateMember(shape.key, param,
                              context + '[key=\'' + param + '\']');
          this.validateMember(shape.value, params[param],
                              context + '[\'' + param + '\']');
          mapCount++;
        }
        this.validateRange(shape, mapCount, context, 'map member count');
      }
    },
  
    validateScalar: function validateScalar(shape, value, context) {
      switch (shape.type) {
        case null:
        case undefined:
        case 'string':
          return this.validateString(shape, value, context);
        case 'base64':
        case 'binary':
          return this.validatePayload(value, context);
        case 'integer':
        case 'float':
          return this.validateNumber(shape, value, context);
        case 'boolean':
          return this.validateType(value, context, ['boolean']);
        case 'timestamp':
          return this.validateType(value, context, [Date,
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/, 'number'],
            'Date object, ISO-8601 string, or a UNIX timestamp');
        default:
          return this.fail('UnkownType', 'Unhandled type ' +
                           shape.type + ' for ' + context);
      }
    },
  
    validateString: function validateString(shape, value, context) {
      var validTypes = ['string'];
      if (shape.isJsonValue) {
        validTypes = validTypes.concat(['number', 'object', 'boolean']);
      }
      if (value !== null && this.validateType(value, context, validTypes)) {
        this.validateEnum(shape, value, context);
        this.validateRange(shape, value.length, context, 'string length');
        this.validatePattern(shape, value, context);
        this.validateUri(shape, value, context);
      }
    },
  
    validateUri: function validateUri(shape, value, context) {
      if (shape['location'] === 'uri') {
        if (value.length === 0) {
          this.fail('UriParameterError', 'Expected uri parameter to have length >= 1,'
            + ' but found "' + value +'" for ' + context);
        }
      }
    },
  
    validatePattern: function validatePattern(shape, value, context) {
      if (this.validation['pattern'] && shape['pattern'] !== undefined) {
        if (!(new RegExp(shape['pattern'])).test(value)) {
          this.fail('PatternMatchError', 'Provided value "' + value + '" '
            + 'does not match regex pattern /' + shape['pattern'] + '/ for '
            + context);
        }
      }
    },
  
    validateRange: function validateRange(shape, value, context, descriptor) {
      if (this.validation['min']) {
        if (shape['min'] !== undefined && value < shape['min']) {
          this.fail('MinRangeError', 'Expected ' + descriptor + ' >= '
            + shape['min'] + ', but found ' + value + ' for ' + context);
        }
      }
      if (this.validation['max']) {
        if (shape['max'] !== undefined && value > shape['max']) {
          this.fail('MaxRangeError', 'Expected ' + descriptor + ' <= '
            + shape['max'] + ', but found ' + value + ' for ' + context);
        }
      }
    },
  
    validateEnum: function validateRange(shape, value, context) {
      if (this.validation['enum'] && shape['enum'] !== undefined) {
        if (shape['enum'].indexOf(value) === -1) {
          this.fail('EnumError', 'Found string value of ' + value + ', but '
            + 'expected ' + shape['enum'].join('|') + ' for ' + context);
        }
      }
    },
  
    validateType: function validateType(value, context, acceptedTypes, type) {
      if (value === null || value === undefined) return false;
  
      var foundInvalidType = false;
      for (var i = 0; i < acceptedTypes.length; i++) {
        if (typeof acceptedTypes[i] === 'string') {
          if (typeof value === acceptedTypes[i]) return true;
        } else if (acceptedTypes[i] instanceof RegExp) {
          if ((value || '').toString().match(acceptedTypes[i])) return true;
        } else {
          if (value instanceof acceptedTypes[i]) return true;
          if (AWS.util.isType(value, acceptedTypes[i])) return true;
          if (!type && !foundInvalidType) acceptedTypes = acceptedTypes.slice();
          acceptedTypes[i] = AWS.util.typeName(acceptedTypes[i]);
        }
        foundInvalidType = true;
      }
  
      var acceptedType = type;
      if (!acceptedType) {
        acceptedType = acceptedTypes.join(', ').replace(/,([^,]+)$/, ', or$1');
      }
  
      var vowel = acceptedType.match(/^[aeiou]/i) ? 'n' : '';
      this.fail('InvalidParameterType', 'Expected ' + context + ' to be a' +
                vowel + ' ' + acceptedType);
      return false;
    },
  
    validateNumber: function validateNumber(shape, value, context) {
      if (value === null || value === undefined) return;
      if (typeof value === 'string') {
        var castedValue = parseFloat(value);
        if (castedValue.toString() === value) value = castedValue;
      }
      if (this.validateType(value, context, ['number'])) {
        this.validateRange(shape, value, context, 'numeric value');
      }
    },
  
    validatePayload: function validatePayload(value, context) {
      if (value === null || value === undefined) return;
      if (typeof value === 'string') return;
      if (value && typeof value.byteLength === 'number') return; // typed arrays
      if (AWS.util.isNode()) { // special check for buffer/stream in Node.js
        var Stream = AWS.util.stream.Stream;
        if (AWS.util.Buffer.isBuffer(value) || value instanceof Stream) return;
      } else {
        if (typeof Blob !== void 0 && value instanceof Blob) return;
      }
  
      var types = ['Buffer', 'Stream', 'File', 'Blob', 'ArrayBuffer', 'DataView'];
      if (value) {
        for (var i = 0; i < types.length; i++) {
          if (AWS.util.isType(value, types[i])) return;
          if (AWS.util.typeName(value.constructor) === types[i]) return;
        }
      }
  
      this.fail('InvalidParameterType', 'Expected ' + context + ' to be a ' +
        'string, Buffer, Stream, Blob, or typed array object');
    }
  });
  
  },{"./core":16}],32:[function(require,module,exports){
  var util =  require('../util');
  var AWS = require('../core');
  
  
  function populateHostPrefix(request)  {
    var enabled = request.service.config.hostPrefixEnabled;
    if (!enabled) return request;
    var operationModel = request.service.api.operations[request.operation];
    if (hasEndpointDiscover(request)) return request;
    if (operationModel.endpoint && operationModel.endpoint.hostPrefix) {
      var hostPrefixNotation = operationModel.endpoint.hostPrefix;
      var hostPrefix = expandHostPrefix(hostPrefixNotation, request.params, operationModel.input);
      prependEndpointPrefix(request.httpRequest.endpoint, hostPrefix);
      validateHostname(request.httpRequest.endpoint.hostname);
    }
    return request;
  }
  
  
  function hasEndpointDiscover(request) {
    var api = request.service.api;
    var operationModel = api.operations[request.operation];
    var isEndpointOperation = api.endpointOperation && (api.endpointOperation === util.string.lowerFirst(operationModel.name));
    return (operationModel.endpointDiscoveryRequired !== 'NULL' || isEndpointOperation === true);
  }
  
  
  function expandHostPrefix(hostPrefixNotation, params, shape) {
    util.each(shape.members, function(name, member) {
      if (member.hostLabel === true) {
        if (typeof params[name] !== 'string' || params[name] === '') {
          throw util.error(new Error(), {
            message: 'Parameter ' + name + ' should be a non-empty string.',
            code: 'InvalidParameter'
          });
        }
        var regex = new RegExp('\\{' + name + '\\}', 'g');
        hostPrefixNotation = hostPrefixNotation.replace(regex, params[name]);
      }
    });
    return hostPrefixNotation;
  }
  
  
  function prependEndpointPrefix(endpoint, prefix) {
    if (endpoint.host) {
      endpoint.host = prefix + endpoint.host;
    }
    if (endpoint.hostname) {
      endpoint.hostname = prefix + endpoint.hostname;
    }
  }
  
  
  function validateHostname(hostname) {
    var labels = hostname.split('.');
    var hostPattern = /^[a-zA-Z0-9]{1}$|^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/;
    util.arrayEach(labels, function(label) {
      if (!label.length || label.length < 1 || label.length > 63) {
        throw util.error(new Error(), {
          code: 'ValidationError',
          message: 'Hostname label length should be between 1 to 63 characters, inclusive.'
        });
      }
      if (!hostPattern.test(label)) {
        throw AWS.util.error(new Error(),
          {code: 'ValidationError', message: label + ' is not hostname compatible.'});
      }
    });
  }
  
  module.exports = {
    populateHostPrefix: populateHostPrefix
  };
  
  },{"../core":16,"../util":62}],33:[function(require,module,exports){
  var util = require('../util');
  var JsonBuilder = require('../json/builder');
  var JsonParser = require('../json/parser');
  var populateHostPrefix = require('./helpers').populateHostPrefix;
  
  function buildRequest(req) {
    var httpRequest = req.httpRequest;
    var api = req.service.api;
    var target = api.targetPrefix + '.' + api.operations[req.operation].name;
    var version = api.jsonVersion || '1.0';
    var input = api.operations[req.operation].input;
    var builder = new JsonBuilder();
  
    if (version === 1) version = '1.0';
  
    if (api.awsQueryCompatible) {
      if (!httpRequest.params) {
        httpRequest.params = {};
      }
      Object.assign(httpRequest.params, req.params);
    }
  
    httpRequest.body = builder.build(req.params || {}, input);
    httpRequest.headers['Content-Type'] = 'application/x-amz-json-' + version;
    httpRequest.headers['X-Amz-Target'] = target;
  
    populateHostPrefix(req);
  }
  
  function extractError(resp) {
    var error = {};
    var httpResponse = resp.httpResponse;
  
    error.code = httpResponse.headers['x-amzn-errortype'] || 'UnknownError';
    if (typeof error.code === 'string') {
      error.code = error.code.split(':')[0];
    }
  
    if (httpResponse.body.length > 0) {
      try {
        var e = JSON.parse(httpResponse.body.toString());
  
        var code = e.__type || e.code || e.Code;
        if (code) {
          error.code = code.split('#').pop();
        }
        if (error.code === 'RequestEntityTooLarge') {
          error.message = 'Request body must be less than 1 MB';
        } else {
          error.message = (e.message || e.Message || null);
        }
  
  
        for (var key in e || {}) {
          if (key === 'code' || key === 'message') {
            continue;
          }
          error['[' + key + ']'] = 'See error.' + key + ' for details.';
          Object.defineProperty(error, key, {
            value: e[key],
            enumerable: false,
            writable: true
          });
        }
      } catch (e) {
        error.statusCode = httpResponse.statusCode;
        error.message = httpResponse.statusMessage;
      }
    } else {
      error.statusCode = httpResponse.statusCode;
      error.message = httpResponse.statusCode.toString();
    }
  
    resp.error = util.error(new Error(), error);
  }
  
  function extractData(resp) {
    var body = resp.httpResponse.body.toString() || '{}';
    if (resp.request.service.config.convertResponseTypes === false) {
      resp.data = JSON.parse(body);
    } else {
      var operation = resp.request.service.api.operations[resp.request.operation];
      var shape = operation.output || {};
      var parser = new JsonParser();
      resp.data = parser.parse(body, shape);
    }
  }
  
  
  module.exports = {
    buildRequest: buildRequest,
    extractError: extractError,
    extractData: extractData
  };
  
  },{"../json/builder":23,"../json/parser":24,"../util":62,"./helpers":32}],34:[function(require,module,exports){
  var AWS = require('../core');
  var util = require('../util');
  var QueryParamSerializer = require('../query/query_param_serializer');
  var Shape = require('../model/shape');
  var populateHostPrefix = require('./helpers').populateHostPrefix;
  
  function buildRequest(req) {
    var operation = req.service.api.operations[req.operation];
    var httpRequest = req.httpRequest;
    httpRequest.headers['Content-Type'] =
      'application/x-www-form-urlencoded; charset=utf-8';
    httpRequest.params = {
      Version: req.service.api.apiVersion,
      Action: operation.name
    };
  
    var builder = new QueryParamSerializer();
    builder.serialize(req.params, operation.input, function(name, value) {
      httpRequest.params[name] = value;
    });
    httpRequest.body = util.queryParamsToString(httpRequest.params);
  
    populateHostPrefix(req);
  }
  
  function extractError(resp) {
    var data, body = resp.httpResponse.body.toString();
    if (body.match('<UnknownOperationException')) {
      data = {
        Code: 'UnknownOperation',
        Message: 'Unknown operation ' + resp.request.operation
      };
    } else {
      try {
        data = new AWS.XML.Parser().parse(body);
      } catch (e) {
        data = {
          Code: resp.httpResponse.statusCode,
          Message: resp.httpResponse.statusMessage
        };
      }
    }
  
    if (data.requestId && !resp.requestId) resp.requestId = data.requestId;
    if (data.Errors) data = data.Errors;
    if (data.Error) data = data.Error;
    if (data.Code) {
      resp.error = util.error(new Error(), {
        code: data.Code,
        message: data.Message
      });
    } else {
      resp.error = util.error(new Error(), {
        code: resp.httpResponse.statusCode,
        message: null
      });
    }
  }
  
  function extractData(resp) {
    var req = resp.request;
    var operation = req.service.api.operations[req.operation];
    var shape = operation.output || {};
    var origRules = shape;
  
    if (origRules.resultWrapper) {
      var tmp = Shape.create({type: 'structure'});
      tmp.members[origRules.resultWrapper] = shape;
      tmp.memberNames = [origRules.resultWrapper];
      util.property(shape, 'name', shape.resultWrapper);
      shape = tmp;
    }
  
    var parser = new AWS.XML.Parser();
  
    if (shape && shape.members && !shape.members._XAMZRequestId) {
      var requestIdShape = Shape.create(
        { type: 'string' },
        { api: { protocol: 'query' } },
        'requestId'
      );
      shape.members._XAMZRequestId = requestIdShape;
    }
  
    var data = parser.parse(resp.httpResponse.body.toString(), shape);
    resp.requestId = data._XAMZRequestId || data.requestId;
  
    if (data._XAMZRequestId) delete data._XAMZRequestId;
  
    if (origRules.resultWrapper) {
      if (data[origRules.resultWrapper]) {
        util.update(data, data[origRules.resultWrapper]);
        delete data[origRules.resultWrapper];
      }
    }
  
    resp.data = data;
  }
  
  
  module.exports = {
    buildRequest: buildRequest,
    extractError: extractError,
    extractData: extractData
  };
  
  },{"../core":16,"../model/shape":30,"../query/query_param_serializer":38,"../util":62,"./helpers":32}],35:[function(require,module,exports){
  var util = require('../util');
  var populateHostPrefix = require('./helpers').populateHostPrefix;
  
  function populateMethod(req) {
    req.httpRequest.method = req.service.api.operations[req.operation].httpMethod;
  }
  
  function generateURI(endpointPath, operationPath, input, params) {
    var uri = [endpointPath, operationPath].join('/');
    uri = uri.replace(/\/+/g, '/');
  
    var queryString = {}, queryStringSet = false;
    util.each(input.members, function (name, member) {
      var paramValue = params[name];
      if (paramValue === null || paramValue === undefined) return;
      if (member.location === 'uri') {
        var regex = new RegExp('\\{' + member.name + '(\\+)?\\}');
        uri = uri.replace(regex, function(_, plus) {
          var fn = plus ? util.uriEscapePath : util.uriEscape;
          return fn(String(paramValue));
        });
      } else if (member.location === 'querystring') {
        queryStringSet = true;
  
        if (member.type === 'list') {
          queryString[member.name] = paramValue.map(function(val) {
            return util.uriEscape(member.member.toWireFormat(val).toString());
          });
        } else if (member.type === 'map') {
          util.each(paramValue, function(key, value) {
            if (Array.isArray(value)) {
              queryString[key] = value.map(function(val) {
                return util.uriEscape(String(val));
              });
            } else {
              queryString[key] = util.uriEscape(String(value));
            }
          });
        } else {
          queryString[member.name] = util.uriEscape(member.toWireFormat(paramValue).toString());
        }
      }
    });
  
    if (queryStringSet) {
      uri += (uri.indexOf('?') >= 0 ? '&' : '?');
      var parts = [];
      util.arrayEach(Object.keys(queryString).sort(), function(key) {
        if (!Array.isArray(queryString[key])) {
          queryString[key] = [queryString[key]];
        }
        for (var i = 0; i < queryString[key].length; i++) {
          parts.push(util.uriEscape(String(key)) + '=' + queryString[key][i]);
        }
      });
      uri += parts.join('&');
    }
  
    return uri;
  }
  
  function populateURI(req) {
    var operation = req.service.api.operations[req.operation];
    var input = operation.input;
  
    var uri = generateURI(req.httpRequest.endpoint.path, operation.httpPath, input, req.params);
    req.httpRequest.path = uri;
  }
  
  function populateHeaders(req) {
    var operation = req.service.api.operations[req.operation];
    util.each(operation.input.members, function (name, member) {
      var value = req.params[name];
      if (value === null || value === undefined) return;
  
      if (member.location === 'headers' && member.type === 'map') {
        util.each(value, function(key, memberValue) {
          req.httpRequest.headers[member.name + key] = memberValue;
        });
      } else if (member.location === 'header') {
        value = member.toWireFormat(value).toString();
        if (member.isJsonValue) {
          value = util.base64.encode(value);
        }
        req.httpRequest.headers[member.name] = value;
      }
    });
  }
  
  function buildRequest(req) {
    populateMethod(req);
    populateURI(req);
    populateHeaders(req);
    populateHostPrefix(req);
  }
  
  function extractError() {
  }
  
  function extractData(resp) {
    var req = resp.request;
    var data = {};
    var r = resp.httpResponse;
    var operation = req.service.api.operations[req.operation];
    var output = operation.output;
  
    var headers = {};
    util.each(r.headers, function (k, v) {
      headers[k.toLowerCase()] = v;
    });
  
    util.each(output.members, function(name, member) {
      var header = (member.name || name).toLowerCase();
      if (member.location === 'headers' && member.type === 'map') {
        data[name] = {};
        var location = member.isLocationName ? member.name : '';
        var pattern = new RegExp('^' + location + '(.+)', 'i');
        util.each(r.headers, function (k, v) {
          var result = k.match(pattern);
          if (result !== null) {
            data[name][result[1]] = v;
          }
        });
      } else if (member.location === 'header') {
        if (headers[header] !== undefined) {
          var value = member.isJsonValue ?
            util.base64.decode(headers[header]) :
            headers[header];
          data[name] = member.toType(value);
        }
      } else if (member.location === 'statusCode') {
        data[name] = parseInt(r.statusCode, 10);
      }
    });
  
    resp.data = data;
  }
  
  
  module.exports = {
    buildRequest: buildRequest,
    extractError: extractError,
    extractData: extractData,
    generateURI: generateURI
  };
  
  },{"../util":62,"./helpers":32}],36:[function(require,module,exports){
  var AWS = require('../core');
  var util = require('../util');
  var Rest = require('./rest');
  var Json = require('./json');
  var JsonBuilder = require('../json/builder');
  var JsonParser = require('../json/parser');
  
  var METHODS_WITHOUT_BODY = ['GET', 'HEAD', 'DELETE'];
  
  function unsetContentLength(req) {
    var payloadMember = util.getRequestPayloadShape(req);
    if (
      payloadMember === undefined &&
      METHODS_WITHOUT_BODY.indexOf(req.httpRequest.method) >= 0
    ) {
      delete req.httpRequest.headers['Content-Length'];
    }
  }
  
  function populateBody(req) {
    var builder = new JsonBuilder();
    var input = req.service.api.operations[req.operation].input;
  
    if (input.payload) {
      var params = {};
      var payloadShape = input.members[input.payload];
      params = req.params[input.payload];
  
      if (payloadShape.type === 'structure') {
        req.httpRequest.body = builder.build(params || {}, payloadShape);
        applyContentTypeHeader(req);
      } else if (params !== undefined) {
        req.httpRequest.body = params;
        if (payloadShape.type === 'binary' || payloadShape.isStreaming) {
          applyContentTypeHeader(req, true);
        }
      }
    } else {
      req.httpRequest.body = builder.build(req.params, input);
      applyContentTypeHeader(req);
    }
  }
  
  function applyContentTypeHeader(req, isBinary) {
    if (!req.httpRequest.headers['Content-Type']) {
      var type = isBinary ? 'binary/octet-stream' : 'application/json';
      req.httpRequest.headers['Content-Type'] = type;
    }
  }
  
  function buildRequest(req) {
    Rest.buildRequest(req);
  
    if (METHODS_WITHOUT_BODY.indexOf(req.httpRequest.method) < 0) {
      populateBody(req);
    }
  }
  
  function extractError(resp) {
    Json.extractError(resp);
  }
  
  function extractData(resp) {
    Rest.extractData(resp);
  
    var req = resp.request;
    var operation = req.service.api.operations[req.operation];
    var rules = req.service.api.operations[req.operation].output || {};
    var parser;
    var hasEventOutput = operation.hasEventOutput;
  
    if (rules.payload) {
      var payloadMember = rules.members[rules.payload];
      var body = resp.httpResponse.body;
      if (payloadMember.isEventStream) {
        parser = new JsonParser();
        resp.data[rules.payload] = util.createEventStream(
          AWS.HttpClient.streamsApiVersion === 2 ? resp.httpResponse.stream : body,
          parser,
          payloadMember
        );
      } else if (payloadMember.type === 'structure' || payloadMember.type === 'list') {
        var parser = new JsonParser();
        resp.data[rules.payload] = parser.parse(body, payloadMember);
      } else if (payloadMember.type === 'binary' || payloadMember.isStreaming) {
        resp.data[rules.payload] = body;
      } else {
        resp.data[rules.payload] = payloadMember.toType(body);
      }
    } else {
      var data = resp.data;
      Json.extractData(resp);
      resp.data = util.merge(data, resp.data);
    }
  }
  
  
  module.exports = {
    buildRequest: buildRequest,
    extractError: extractError,
    extractData: extractData,
    unsetContentLength: unsetContentLength
  };
  
  },{"../core":16,"../json/builder":23,"../json/parser":24,"../util":62,"./json":33,"./rest":35}],37:[function(require,module,exports){
  var AWS = require('../core');
  var util = require('../util');
  var Rest = require('./rest');
  
  function populateBody(req) {
    var input = req.service.api.operations[req.operation].input;
    var builder = new AWS.XML.Builder();
    var params = req.params;
  
    var payload = input.payload;
    if (payload) {
      var payloadMember = input.members[payload];
      params = params[payload];
      if (params === undefined) return;
  
      if (payloadMember.type === 'structure') {
        var rootElement = payloadMember.name;
        req.httpRequest.body = builder.toXML(params, payloadMember, rootElement, true);
      } else { // non-xml payload
        req.httpRequest.body = params;
      }
    } else {
      req.httpRequest.body = builder.toXML(params, input, input.name ||
        input.shape || util.string.upperFirst(req.operation) + 'Request');
    }
  }
  
  function buildRequest(req) {
    Rest.buildRequest(req);
  
    if (['GET', 'HEAD'].indexOf(req.httpRequest.method) < 0) {
      populateBody(req);
    }
  }
  
  function extractError(resp) {
    Rest.extractError(resp);
  
    var data;
    try {
      data = new AWS.XML.Parser().parse(resp.httpResponse.body.toString());
    } catch (e) {
      data = {
        Code: resp.httpResponse.statusCode,
        Message: resp.httpResponse.statusMessage
      };
    }
  
    if (data.Errors) data = data.Errors;
    if (data.Error) data = data.Error;
    if (data.Code) {
      resp.error = util.error(new Error(), {
        code: data.Code,
        message: data.Message
      });
    } else {
      resp.error = util.error(new Error(), {
        code: resp.httpResponse.statusCode,
        message: null
      });
    }
  }
  
  function extractData(resp) {
    Rest.extractData(resp);
  
    var parser;
    var req = resp.request;
    var body = resp.httpResponse.body;
    var operation = req.service.api.operations[req.operation];
    var output = operation.output;
  
    var hasEventOutput = operation.hasEventOutput;
  
    var payload = output.payload;
    if (payload) {
      var payloadMember = output.members[payload];
      if (payloadMember.isEventStream) {
        parser = new AWS.XML.Parser();
        resp.data[payload] = util.createEventStream(
          AWS.HttpClient.streamsApiVersion === 2 ? resp.httpResponse.stream : resp.httpResponse.body,
          parser,
          payloadMember
        );
      } else if (payloadMember.type === 'structure') {
        parser = new AWS.XML.Parser();
        resp.data[payload] = parser.parse(body.toString(), payloadMember);
      } else if (payloadMember.type === 'binary' || payloadMember.isStreaming) {
        resp.data[payload] = body;
      } else {
        resp.data[payload] = payloadMember.toType(body);
      }
    } else if (body.length > 0) {
      parser = new AWS.XML.Parser();
      var data = parser.parse(body.toString(), output);
      util.update(resp.data, data);
    }
  }
  
  
  module.exports = {
    buildRequest: buildRequest,
    extractError: extractError,
    extractData: extractData
  };
  
  },{"../core":16,"../util":62,"./rest":35}],38:[function(require,module,exports){
  var util = require('../util');
  
  function QueryParamSerializer() {
  }
  
  QueryParamSerializer.prototype.serialize = function(params, shape, fn) {
    serializeStructure('', params, shape, fn);
  };
  
  function ucfirst(shape) {
    if (shape.isQueryName || shape.api.protocol !== 'ec2') {
      return shape.name;
    } else {
      return shape.name[0].toUpperCase() + shape.name.substr(1);
    }
  }
  
  function serializeStructure(prefix, struct, rules, fn) {
    util.each(rules.members, function(name, member) {
      var value = struct[name];
      if (value === null || value === undefined) return;
  
      var memberName = ucfirst(member);
      memberName = prefix ? prefix + '.' + memberName : memberName;
      serializeMember(memberName, value, member, fn);
    });
  }
  
  function serializeMap(name, map, rules, fn) {
    var i = 1;
    util.each(map, function (key, value) {
      var prefix = rules.flattened ? '.' : '.entry.';
      var position = prefix + (i++) + '.';
      var keyName = position + (rules.key.name || 'key');
      var valueName = position + (rules.value.name || 'value');
      serializeMember(name + keyName, key, rules.key, fn);
      serializeMember(name + valueName, value, rules.value, fn);
    });
  }
  
  function serializeList(name, list, rules, fn) {
    var memberRules = rules.member || {};
  
    if (list.length === 0) {
      if (rules.api.protocol !== 'ec2') {
        fn.call(this, name, null);
      }
      return;
    }
  
    util.arrayEach(list, function (v, n) {
      var suffix = '.' + (n + 1);
      if (rules.api.protocol === 'ec2') {
        suffix = suffix + ''; // make linter happy
      } else if (rules.flattened) {
        if (memberRules.name) {
          var parts = name.split('.');
          parts.pop();
          parts.push(ucfirst(memberRules));
          name = parts.join('.');
        }
      } else {
        suffix = '.' + (memberRules.name ? memberRules.name : 'member') + suffix;
      }
      serializeMember(name + suffix, v, memberRules, fn);
    });
  }
  
  function serializeMember(name, value, rules, fn) {
    if (value === null || value === undefined) return;
    if (rules.type === 'structure') {
      serializeStructure(name, value, rules, fn);
    } else if (rules.type === 'list') {
      serializeList(name, value, rules, fn);
    } else if (rules.type === 'map') {
      serializeMap(name, value, rules, fn);
    } else {
      fn(name, rules.toWireFormat(value).toString());
    }
  }
  
  
  module.exports = QueryParamSerializer;
  
  },{"../util":62}],39:[function(require,module,exports){
  
  function isGlobalRegion(region) {
    return typeof region === 'string' && ['aws-global', 'aws-us-gov-global'].includes(region);
  }
  
  function getRealRegion(region) {
    return ['fips-aws-global', 'aws-fips', 'aws-global'].includes(region)
        ? 'us-east-1'
        : ['fips-aws-us-gov-global', 'aws-us-gov-global'].includes(region)
        ? 'us-gov-west-1'
        : region.replace(/fips-(dkr-|prod-)?|-fips/, '');
  }
  
  module.exports = {
    isGlobalRegion: isGlobalRegion,
    getRealRegion: getRealRegion
  };
  
  },{}],40:[function(require,module,exports){
  var util = require('./util');
  var regionConfig = require('./region_config_data.json');
  
  function generateRegionPrefix(region) {
    if (!region) return null;
    var parts = region.split('-');
    if (parts.length < 3) return null;
    return parts.slice(0, parts.length - 2).join('-') + '-*';
  }
  
  function derivedKeys(service) {
    var region = service.config.region;
    var regionPrefix = generateRegionPrefix(region);
    var endpointPrefix = service.api.endpointPrefix;
  
    return [
      [region, endpointPrefix],
      [regionPrefix, endpointPrefix],
      [region, '*'],
      [regionPrefix, '*'],
      ['*', endpointPrefix],
      [region, 'internal-*'],
      ['*', '*']
    ].map(function(item) {
      return item[0] && item[1] ? item.join('/') : null;
    });
  }
  
  function applyConfig(service, config) {
    util.each(config, function(key, value) {
      if (key === 'globalEndpoint') return;
      if (service.config[key] === undefined || service.config[key] === null) {
        service.config[key] = value;
      }
    });
  }
  
  function configureEndpoint(service) {
    var keys = derivedKeys(service);
    var useDualstackEndpoint = service.config.useDualstackEndpoint;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!key) continue;
  
      var rules = useDualstackEndpoint
        ? regionConfig.dualstackRules
        : regionConfig.rules;
  
      if (Object.prototype.hasOwnProperty.call(rules, key)) {
        var config = rules[key];
        if (typeof config === 'string') {
          config = regionConfig.patterns[config];
        }
  
        service.isGlobalEndpoint = !!config.globalEndpoint;
        if (config.signingRegion) {
          service.signingRegion = config.signingRegion;
        }
  
        if (!config.signatureVersion) {
          config.signatureVersion = 'v4';
        }
  
        var useBearer = (service.api && service.api.signatureVersion) === 'bearer';
  
        applyConfig(service, Object.assign(
          {},
          config,
          { signatureVersion: useBearer ? 'bearer' : config.signatureVersion }
        ));
        return;
      }
    }
  }
  
  function getEndpointSuffix(region) {
    var regionRegexes = {
      '^(us|eu|ap|sa|ca|me)\\-\\w+\\-\\d+$': 'amazonaws.com',
      '^cn\\-\\w+\\-\\d+$': 'amazonaws.com.cn',
      '^us\\-gov\\-\\w+\\-\\d+$': 'amazonaws.com',
      '^us\\-iso\\-\\w+\\-\\d+$': 'c2s.ic.gov',
      '^us\\-isob\\-\\w+\\-\\d+$': 'sc2s.sgov.gov'
    };
    var defaultSuffix = 'amazonaws.com';
    var regexes = Object.keys(regionRegexes);
    for (var i = 0; i < regexes.length; i++) {
      var regionPattern = RegExp(regexes[i]);
      var dnsSuffix = regionRegexes[regexes[i]];
      if (regionPattern.test(region)) return dnsSuffix;
    }
    return defaultSuffix;
  }
  
  
  module.exports = {
    configureEndpoint: configureEndpoint,
    getEndpointSuffix: getEndpointSuffix,
  };
  
  },{"./region_config_data.json":41,"./util":62}],41:[function(require,module,exports){
  module.exports={
    "rules": {
      "*/*": {
        "endpoint": "{service}.{region}.amazonaws.com"
      },
      "cn-*/*": {
        "endpoint": "{service}.{region}.amazonaws.com.cn"
      },
      "us-iso-*/*": "usIso",
      "us-isob-*/*": "usIsob",
      "*/budgets": "globalSSL",
      "*/cloudfront": "globalSSL",
      "*/sts": "globalSSL",
      "*/importexport": {
        "endpoint": "{service}.amazonaws.com",
        "signatureVersion": "v2",
        "globalEndpoint": true
      },
  
      "*/route53": "globalSSL",
      "cn-*/route53": {
        "endpoint": "{service}.amazonaws.com.cn",
        "globalEndpoint": true,
        "signingRegion": "cn-northwest-1"
      },
      "us-gov-*/route53": "globalGovCloud",
      "us-iso-*/route53": {
        "endpoint": "{service}.c2s.ic.gov",
        "globalEndpoint": true,
        "signingRegion": "us-iso-east-1"
      },
      "us-isob-*/route53": {
        "endpoint": "{service}.sc2s.sgov.gov",
        "globalEndpoint": true,
        "signingRegion": "us-isob-east-1"
      },
  
      "*/waf": "globalSSL",
  
      "*/iam": "globalSSL",
      "cn-*/iam": {
        "endpoint": "{service}.cn-north-1.amazonaws.com.cn",
        "globalEndpoint": true,
        "signingRegion": "cn-north-1"
      },
      "us-iso-*/iam": {
        "endpoint": "{service}.us-iso-east-1.c2s.ic.gov",
        "globalEndpoint": true,
        "signingRegion": "us-iso-east-1"
      },
  
      "us-gov-*/iam": "globalGovCloud",
      "us-gov-*/sts": {
        "endpoint": "{service}.{region}.amazonaws.com"
      },
      "us-gov-west-1/s3": "s3signature",
      "us-west-1/s3": "s3signature",
      "us-west-2/s3": "s3signature",
      "eu-west-1/s3": "s3signature",
      "ap-southeast-1/s3": "s3signature",
      "ap-southeast-2/s3": "s3signature",
      "ap-northeast-1/s3": "s3signature",
      "sa-east-1/s3": "s3signature",
      "us-east-1/s3": {
        "endpoint": "{service}.amazonaws.com",
        "signatureVersion": "s3"
      },
      "us-east-1/sdb": {
        "endpoint": "{service}.amazonaws.com",
        "signatureVersion": "v2"
      },
      "*/sdb": {
        "endpoint": "{service}.{region}.amazonaws.com",
        "signatureVersion": "v2"
      }
    },
  
    "dualstackRules": {
      "*/*": {
        "endpoint": "{service}.{region}.api.aws"
      },
      "cn-*/*": {
        "endpoint": "{service}.{region}.api.amazonwebservices.com.cn"
      },
  
      "*/s3": "dualstackLegacy",
      "cn-*/s3": "dualstackLegacyCn",
      "*/s3-control": "dualstackLegacy",
      "cn-*/s3-control": "dualstackLegacyCn",
  
      "ap-south-1/ec2": "dualstackLegacyEc2",
      "eu-west-1/ec2": "dualstackLegacyEc2",
      "sa-east-1/ec2": "dualstackLegacyEc2",
      "us-east-1/ec2": "dualstackLegacyEc2",
      "us-east-2/ec2": "dualstackLegacyEc2",
      "us-west-2/ec2": "dualstackLegacyEc2"
    },
  
    "patterns": {
      "globalSSL": {
        "endpoint": "https://{service}.amazonaws.com",
        "globalEndpoint": true,
        "signingRegion": "us-east-1"
      },
      "globalGovCloud": {
        "endpoint": "{service}.us-gov.amazonaws.com",
        "globalEndpoint": true,
        "signingRegion": "us-gov-west-1"
      },
      "s3signature": {
        "endpoint": "{service}.{region}.amazonaws.com",
        "signatureVersion": "s3"
      },
      "usIso": {
        "endpoint": "{service}.{region}.c2s.ic.gov"
      },
      "usIsob": {
        "endpoint": "{service}.{region}.sc2s.sgov.gov"
      },
      "dualstackLegacy": {
        "endpoint": "{service}.dualstack.{region}.amazonaws.com"
      },
      "dualstackLegacyCn": {
        "endpoint": "{service}.dualstack.{region}.amazonaws.com.cn"
      },
      "dualstackLegacyEc2": {
        "endpoint": "api.ec2.{region}.aws"
      }
    }
  }
  
  },{}],42:[function(require,module,exports){
  (function (process){(function (){
  var AWS = require('./core');
  var AcceptorStateMachine = require('./state_machine');
  var inherit = AWS.util.inherit;
  var domain = AWS.util.domain;
  var jmespath = require('jmespath');
  
  
  var hardErrorStates = {success: 1, error: 1, complete: 1};
  
  function isTerminalState(machine) {
    return Object.prototype.hasOwnProperty.call(hardErrorStates, machine._asm.currentState);
  }
  
  var fsm = new AcceptorStateMachine();
  fsm.setupStates = function() {
    var transition = function(_, done) {
      var self = this;
      self._haltHandlersOnError = false;
  
      self.emit(self._asm.currentState, function(err) {
        if (err) {
          if (isTerminalState(self)) {
            if (domain && self.domain instanceof domain.Domain) {
              err.domainEmitter = self;
              err.domain = self.domain;
              err.domainThrown = false;
              self.domain.emit('error', err);
            } else {
              throw err;
            }
          } else {
            self.response.error = err;
            done(err);
          }
        } else {
          done(self.response.error);
        }
      });
  
    };
  
    this.addState('validate', 'build', 'error', transition);
    this.addState('build', 'afterBuild', 'restart', transition);
    this.addState('afterBuild', 'sign', 'restart', transition);
    this.addState('sign', 'send', 'retry', transition);
    this.addState('retry', 'afterRetry', 'afterRetry', transition);
    this.addState('afterRetry', 'sign', 'error', transition);
    this.addState('send', 'validateResponse', 'retry', transition);
    this.addState('validateResponse', 'extractData', 'extractError', transition);
    this.addState('extractError', 'extractData', 'retry', transition);
    this.addState('extractData', 'success', 'retry', transition);
    this.addState('restart', 'build', 'error', transition);
    this.addState('success', 'complete', 'complete', transition);
    this.addState('error', 'complete', 'complete', transition);
    this.addState('complete', null, null, transition);
  };
  fsm.setupStates();
  
  
  AWS.Request = inherit({
  
  
    constructor: function Request(service, operation, params) {
      var endpoint = service.endpoint;
      var region = service.config.region;
      var customUserAgent = service.config.customUserAgent;
  
      if (service.signingRegion) {
        region = service.signingRegion;
      } else if (service.isGlobalEndpoint) {
        region = 'us-east-1';
      }
  
      this.domain = domain && domain.active;
      this.service = service;
      this.operation = operation;
      this.params = params || {};
      this.httpRequest = new AWS.HttpRequest(endpoint, region);
      this.httpRequest.appendToUserAgent(customUserAgent);
      this.startTime = service.getSkewCorrectedDate();
  
      this.response = new AWS.Response(this);
      this._asm = new AcceptorStateMachine(fsm.states, 'validate');
      this._haltHandlersOnError = false;
  
      AWS.SequentialExecutor.call(this);
      this.emit = this.emitEvent;
    },
  
  
  
  
    send: function send(callback) {
      if (callback) {
        this.httpRequest.appendToUserAgent('callback');
        this.on('complete', function (resp) {
          callback.call(resp, resp.error, resp.data);
        });
      }
      this.runTo();
  
      return this.response;
    },
  
  
  
  
    build: function build(callback) {
      return this.runTo('send', callback);
    },
  
  
    runTo: function runTo(state, done) {
      this._asm.runTo(state, done, this);
      return this;
    },
  
  
    abort: function abort() {
      this.removeAllListeners('validateResponse');
      this.removeAllListeners('extractError');
      this.on('validateResponse', function addAbortedError(resp) {
        resp.error = AWS.util.error(new Error('Request aborted by user'), {
           code: 'RequestAbortedError', retryable: false
        });
      });
  
      if (this.httpRequest.stream && !this.httpRequest.stream.didCallback) { // abort HTTP stream
        this.httpRequest.stream.abort();
        if (this.httpRequest._abortCallback) {
           this.httpRequest._abortCallback();
        } else {
          this.removeAllListeners('send'); // haven't sent yet, so let's not
        }
      }
  
      return this;
    },
  
  
    eachPage: function eachPage(callback) {
      callback = AWS.util.fn.makeAsync(callback, 3);
  
      function wrappedCallback(response) {
        callback.call(response, response.error, response.data, function (result) {
          if (result === false) return;
  
          if (response.hasNextPage()) {
            response.nextPage().on('complete', wrappedCallback).send();
          } else {
            callback.call(response, null, null, AWS.util.fn.noop);
          }
        });
      }
  
      this.on('complete', wrappedCallback).send();
    },
  
  
    eachItem: function eachItem(callback) {
      var self = this;
      function wrappedCallback(err, data) {
        if (err) return callback(err, null);
        if (data === null) return callback(null, null);
  
        var config = self.service.paginationConfig(self.operation);
        var resultKey = config.resultKey;
        if (Array.isArray(resultKey)) resultKey = resultKey[0];
        var items = jmespath.search(data, resultKey);
        var continueIteration = true;
        AWS.util.arrayEach(items, function(item) {
          continueIteration = callback(null, item);
          if (continueIteration === false) {
            return AWS.util.abort;
          }
        });
        return continueIteration;
      }
  
      this.eachPage(wrappedCallback);
    },
  
  
    isPageable: function isPageable() {
      return this.service.paginationConfig(this.operation) ? true : false;
    },
  
  
    createReadStream: function createReadStream() {
      var streams = AWS.util.stream;
      var req = this;
      var stream = null;
  
      if (AWS.HttpClient.streamsApiVersion === 2) {
        stream = new streams.PassThrough();
        process.nextTick(function() { req.send(); });
      } else {
        stream = new streams.Stream();
        stream.readable = true;
  
        stream.sent = false;
        stream.on('newListener', function(event) {
          if (!stream.sent && event === 'data') {
            stream.sent = true;
            process.nextTick(function() { req.send(); });
          }
        });
      }
  
      this.on('error', function(err) {
        stream.emit('error', err);
      });
  
      this.on('httpHeaders', function streamHeaders(statusCode, headers, resp) {
        if (statusCode < 300) {
          req.removeListener('httpData', AWS.EventListeners.Core.HTTP_DATA);
          req.removeListener('httpError', AWS.EventListeners.Core.HTTP_ERROR);
          req.on('httpError', function streamHttpError(error) {
            resp.error = error;
            resp.error.retryable = false;
          });
  
          var shouldCheckContentLength = false;
          var expectedLen;
          if (req.httpRequest.method !== 'HEAD') {
            expectedLen = parseInt(headers['content-length'], 10);
          }
          if (expectedLen !== undefined && !isNaN(expectedLen) && expectedLen >= 0) {
            shouldCheckContentLength = true;
            var receivedLen = 0;
          }
  
          var checkContentLengthAndEmit = function checkContentLengthAndEmit() {
            if (shouldCheckContentLength && receivedLen !== expectedLen) {
              stream.emit('error', AWS.util.error(
                new Error('Stream content length mismatch. Received ' +
                  receivedLen + ' of ' + expectedLen + ' bytes.'),
                { code: 'StreamContentLengthMismatch' }
              ));
            } else if (AWS.HttpClient.streamsApiVersion === 2) {
              stream.end();
            } else {
              stream.emit('end');
            }
          };
  
          var httpStream = resp.httpResponse.createUnbufferedStream();
  
          if (AWS.HttpClient.streamsApiVersion === 2) {
            if (shouldCheckContentLength) {
              var lengthAccumulator = new streams.PassThrough();
              lengthAccumulator._write = function(chunk) {
                if (chunk && chunk.length) {
                  receivedLen += chunk.length;
                }
                return streams.PassThrough.prototype._write.apply(this, arguments);
              };
  
              lengthAccumulator.on('end', checkContentLengthAndEmit);
              stream.on('error', function(err) {
                shouldCheckContentLength = false;
                httpStream.unpipe(lengthAccumulator);
                lengthAccumulator.emit('end');
                lengthAccumulator.end();
              });
              httpStream.pipe(lengthAccumulator).pipe(stream, { end: false });
            } else {
              httpStream.pipe(stream);
            }
          } else {
  
            if (shouldCheckContentLength) {
              httpStream.on('data', function(arg) {
                if (arg && arg.length) {
                  receivedLen += arg.length;
                }
              });
            }
  
            httpStream.on('data', function(arg) {
              stream.emit('data', arg);
            });
            httpStream.on('end', checkContentLengthAndEmit);
          }
  
          httpStream.on('error', function(err) {
            shouldCheckContentLength = false;
            stream.emit('error', err);
          });
        }
      });
  
      return stream;
    },
  
  
    emitEvent: function emit(eventName, args, done) {
      if (typeof args === 'function') { done = args; args = null; }
      if (!done) done = function() { };
      if (!args) args = this.eventParameters(eventName, this.response);
  
      var origEmit = AWS.SequentialExecutor.prototype.emit;
      origEmit.call(this, eventName, args, function (err) {
        if (err) this.response.error = err;
        done.call(this, err);
      });
    },
  
  
    eventParameters: function eventParameters(eventName) {
      switch (eventName) {
        case 'restart':
        case 'validate':
        case 'sign':
        case 'build':
        case 'afterValidate':
        case 'afterBuild':
          return [this];
        case 'error':
          return [this.response.error, this.response];
        default:
          return [this.response];
      }
    },
  
  
    presign: function presign(expires, callback) {
      if (!callback && typeof expires === 'function') {
        callback = expires;
        expires = null;
      }
      return new AWS.Signers.Presign().sign(this.toGet(), expires, callback);
    },
  
  
    isPresigned: function isPresigned() {
      return Object.prototype.hasOwnProperty.call(this.httpRequest.headers, 'presigned-expires');
    },
  
  
    toUnauthenticated: function toUnauthenticated() {
      this._unAuthenticated = true;
      this.removeListener('validate', AWS.EventListeners.Core.VALIDATE_CREDENTIALS);
      this.removeListener('sign', AWS.EventListeners.Core.SIGN);
      return this;
    },
  
  
    toGet: function toGet() {
      if (this.service.api.protocol === 'query' ||
          this.service.api.protocol === 'ec2') {
        this.removeListener('build', this.buildAsGet);
        this.addListener('build', this.buildAsGet);
      }
      return this;
    },
  
  
    buildAsGet: function buildAsGet(request) {
      request.httpRequest.method = 'GET';
      request.httpRequest.path = request.service.endpoint.path +
                                 '?' + request.httpRequest.body;
      request.httpRequest.body = '';
  
      delete request.httpRequest.headers['Content-Length'];
      delete request.httpRequest.headers['Content-Type'];
    },
  
  
    haltHandlersOnError: function haltHandlersOnError() {
      this._haltHandlersOnError = true;
    }
  });
  
  
  AWS.Request.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
    this.prototype.promise = function promise() {
      var self = this;
      this.httpRequest.appendToUserAgent('promise');
      return new PromiseDependency(function(resolve, reject) {
        self.on('complete', function(resp) {
          if (resp.error) {
            reject(resp.error);
          } else {
            resolve(Object.defineProperty(
              resp.data || {},
              '$response',
              {value: resp}
            ));
          }
        });
        self.runTo();
      });
    };
  };
  
  
  AWS.Request.deletePromisesFromClass = function deletePromisesFromClass() {
    delete this.prototype.promise;
  };
  
  AWS.util.addPromises(AWS.Request);
  
  AWS.util.mixin(AWS.Request, AWS.SequentialExecutor);
  
  }).call(this)}).call(this,require('_process'))
  },{"./core":16,"./state_machine":61,"_process":116,"jmespath":106}],43:[function(require,module,exports){
  
  
  var AWS = require('./core');
  var inherit = AWS.util.inherit;
  var jmespath = require('jmespath');
  
  
  function CHECK_ACCEPTORS(resp) {
    var waiter = resp.request._waiter;
    var acceptors = waiter.config.acceptors;
    var acceptorMatched = false;
    var state = 'retry';
  
    acceptors.forEach(function(acceptor) {
      if (!acceptorMatched) {
        var matcher = waiter.matchers[acceptor.matcher];
        if (matcher && matcher(resp, acceptor.expected, acceptor.argument)) {
          acceptorMatched = true;
          state = acceptor.state;
        }
      }
    });
  
    if (!acceptorMatched && resp.error) state = 'failure';
  
    if (state === 'success') {
      waiter.setSuccess(resp);
    } else {
      waiter.setError(resp, state === 'retry');
    }
  }
  
  
  AWS.ResourceWaiter = inherit({
  
    constructor: function constructor(service, state) {
      this.service = service;
      this.state = state;
      this.loadWaiterConfig(this.state);
    },
  
    service: null,
  
    state: null,
  
    config: null,
  
    matchers: {
      path: function(resp, expected, argument) {
        try {
          var result = jmespath.search(resp.data, argument);
        } catch (err) {
          return false;
        }
  
        return jmespath.strictDeepEqual(result,expected);
      },
  
      pathAll: function(resp, expected, argument) {
        try {
          var results = jmespath.search(resp.data, argument);
        } catch (err) {
          return false;
        }
  
        if (!Array.isArray(results)) results = [results];
        var numResults = results.length;
        if (!numResults) return false;
        for (var ind = 0 ; ind < numResults; ind++) {
          if (!jmespath.strictDeepEqual(results[ind], expected)) {
            return false;
          }
        }
        return true;
      },
  
      pathAny: function(resp, expected, argument) {
        try {
          var results = jmespath.search(resp.data, argument);
        } catch (err) {
          return false;
        }
  
        if (!Array.isArray(results)) results = [results];
        var numResults = results.length;
        for (var ind = 0 ; ind < numResults; ind++) {
          if (jmespath.strictDeepEqual(results[ind], expected)) {
            return true;
          }
        }
        return false;
      },
  
      status: function(resp, expected) {
        var statusCode = resp.httpResponse.statusCode;
        return (typeof statusCode === 'number') && (statusCode === expected);
      },
  
      error: function(resp, expected) {
        if (typeof expected === 'string' && resp.error) {
          return expected === resp.error.code;
        }
        return expected === !!resp.error;
      }
    },
  
    listeners: new AWS.SequentialExecutor().addNamedListeners(function(add) {
      add('RETRY_CHECK', 'retry', function(resp) {
        var waiter = resp.request._waiter;
        if (resp.error && resp.error.code === 'ResourceNotReady') {
          resp.error.retryDelay = (waiter.config.delay || 0) * 1000;
        }
      });
  
      add('CHECK_OUTPUT', 'extractData', CHECK_ACCEPTORS);
  
      add('CHECK_ERROR', 'extractError', CHECK_ACCEPTORS);
    }),
  
  
    wait: function wait(params, callback) {
      if (typeof params === 'function') {
        callback = params; params = undefined;
      }
  
      if (params && params.$waiter) {
        params = AWS.util.copy(params);
        if (typeof params.$waiter.delay === 'number') {
          this.config.delay = params.$waiter.delay;
        }
        if (typeof params.$waiter.maxAttempts === 'number') {
          this.config.maxAttempts = params.$waiter.maxAttempts;
        }
        delete params.$waiter;
      }
  
      var request = this.service.makeRequest(this.config.operation, params);
      request._waiter = this;
      request.response.maxRetries = this.config.maxAttempts;
      request.addListeners(this.listeners);
  
      if (callback) request.send(callback);
      return request;
    },
  
    setSuccess: function setSuccess(resp) {
      resp.error = null;
      resp.data = resp.data || {};
      resp.request.removeAllListeners('extractData');
    },
  
    setError: function setError(resp, retryable) {
      resp.data = null;
      resp.error = AWS.util.error(resp.error || new Error(), {
        code: 'ResourceNotReady',
        message: 'Resource is not in the state ' + this.state,
        retryable: retryable
      });
    },
  
  
    loadWaiterConfig: function loadWaiterConfig(state) {
      if (!this.service.api.waiters[state]) {
        throw new AWS.util.error(new Error(), {
          code: 'StateNotFoundError',
          message: 'State ' + state + ' not found.'
        });
      }
  
      this.config = AWS.util.copy(this.service.api.waiters[state]);
    }
  });
  
  },{"./core":16,"jmespath":106}],44:[function(require,module,exports){
  var AWS = require('./core');
  var inherit = AWS.util.inherit;
  var jmespath = require('jmespath');
  
  
  AWS.Response = inherit({
  
  
    constructor: function Response(request) {
      this.request = request;
      this.data = null;
      this.error = null;
      this.retryCount = 0;
      this.redirectCount = 0;
      this.httpResponse = new AWS.HttpResponse();
      if (request) {
        this.maxRetries = request.service.numRetries();
        this.maxRedirects = request.service.config.maxRedirects;
      }
    },
  
  
    nextPage: function nextPage(callback) {
      var config;
      var service = this.request.service;
      var operation = this.request.operation;
      try {
        config = service.paginationConfig(operation, true);
      } catch (e) { this.error = e; }
  
      if (!this.hasNextPage()) {
        if (callback) callback(this.error, null);
        else if (this.error) throw this.error;
        return null;
      }
  
      var params = AWS.util.copy(this.request.params);
      if (!this.nextPageTokens) {
        return callback ? callback(null, null) : null;
      } else {
        var inputTokens = config.inputToken;
        if (typeof inputTokens === 'string') inputTokens = [inputTokens];
        for (var i = 0; i < inputTokens.length; i++) {
          params[inputTokens[i]] = this.nextPageTokens[i];
        }
        return service.makeRequest(this.request.operation, params, callback);
      }
    },
  
  
    hasNextPage: function hasNextPage() {
      this.cacheNextPageTokens();
      if (this.nextPageTokens) return true;
      if (this.nextPageTokens === undefined) return undefined;
      else return false;
    },
  
  
    cacheNextPageTokens: function cacheNextPageTokens() {
      if (Object.prototype.hasOwnProperty.call(this, 'nextPageTokens')) return this.nextPageTokens;
      this.nextPageTokens = undefined;
  
      var config = this.request.service.paginationConfig(this.request.operation);
      if (!config) return this.nextPageTokens;
  
      this.nextPageTokens = null;
      if (config.moreResults) {
        if (!jmespath.search(this.data, config.moreResults)) {
          return this.nextPageTokens;
        }
      }
  
      var exprs = config.outputToken;
      if (typeof exprs === 'string') exprs = [exprs];
      AWS.util.arrayEach.call(this, exprs, function (expr) {
        var output = jmespath.search(this.data, expr);
        if (output) {
          this.nextPageTokens = this.nextPageTokens || [];
          this.nextPageTokens.push(output);
        }
      });
  
      return this.nextPageTokens;
    }
  
  });
  
  },{"./core":16,"jmespath":106}],45:[function(require,module,exports){
  var AWS = require('../core');
  var byteLength = AWS.util.string.byteLength;
  var Buffer = AWS.util.Buffer;
  
  
  AWS.S3.ManagedUpload = AWS.util.inherit({
  
    constructor: function ManagedUpload(options) {
      var self = this;
      AWS.SequentialExecutor.call(self);
      self.body = null;
      self.sliceFn = null;
      self.callback = null;
      self.parts = {};
      self.completeInfo = [];
      self.fillQueue = function() {
        self.callback(new Error('Unsupported body payload ' + typeof self.body));
      };
  
      self.configure(options);
    },
  
  
    configure: function configure(options) {
      options = options || {};
      this.partSize = this.minPartSize;
  
      if (options.queueSize) this.queueSize = options.queueSize;
      if (options.partSize) this.partSize = options.partSize;
      if (options.leavePartsOnError) this.leavePartsOnError = true;
      if (options.tags) {
        if (!Array.isArray(options.tags)) {
          throw new Error('Tags must be specified as an array; ' +
            typeof options.tags + ' provided.');
        }
        this.tags = options.tags;
      }
  
      if (this.partSize < this.minPartSize) {
        throw new Error('partSize must be greater than ' +
                        this.minPartSize);
      }
  
      this.service = options.service;
      this.bindServiceObject(options.params);
      this.validateBody();
      this.adjustTotalBytes();
    },
  
  
    leavePartsOnError: false,
  
  
    queueSize: 4,
  
  
    partSize: null,
  
  
    minPartSize: 1024 * 1024 * 5,
  
  
    maxTotalParts: 10000,
  
  
    send: function(callback) {
      var self = this;
      self.failed = false;
      self.callback = callback || function(err) { if (err) throw err; };
  
      var runFill = true;
      if (self.sliceFn) {
        self.fillQueue = self.fillBuffer;
      } else if (AWS.util.isNode()) {
        var Stream = AWS.util.stream.Stream;
        if (self.body instanceof Stream) {
          runFill = false;
          self.fillQueue = self.fillStream;
          self.partBuffers = [];
          self.body.
            on('error', function(err) { self.cleanup(err); }).
            on('readable', function() { self.fillQueue(); }).
            on('end', function() {
              self.isDoneChunking = true;
              self.numParts = self.totalPartNumbers;
              self.fillQueue.call(self);
  
              if (self.isDoneChunking && self.totalPartNumbers >= 1 && self.doneParts === self.numParts) {
                self.finishMultiPart();
              }
            });
        }
      }
  
      if (runFill) self.fillQueue.call(self);
    },
  
  
  
  
    abort: function() {
      var self = this;
      if (self.isDoneChunking === true && self.totalPartNumbers === 1 && self.singlePart) {
        self.singlePart.abort();
      } else {
        self.cleanup(AWS.util.error(new Error('Request aborted by user'), {
          code: 'RequestAbortedError', retryable: false
        }));
      }
    },
  
  
    validateBody: function validateBody() {
      var self = this;
      self.body = self.service.config.params.Body;
      if (typeof self.body === 'string') {
        self.body = AWS.util.buffer.toBuffer(self.body);
      } else if (!self.body) {
        throw new Error('params.Body is required');
      }
      self.sliceFn = AWS.util.arraySliceFn(self.body);
    },
  
  
    bindServiceObject: function bindServiceObject(params) {
      params = params || {};
      var self = this;
      if (!self.service) {
        self.service = new AWS.S3({params: params});
      } else {
        var service = self.service;
        var config = AWS.util.copy(service.config);
        config.signatureVersion = service.getSignatureVersion();
        self.service = new service.constructor.__super__(config);
        self.service.config.params =
          AWS.util.merge(self.service.config.params || {}, params);
        Object.defineProperty(self.service, '_originalConfig', {
          get: function() { return service._originalConfig; },
          enumerable: false,
          configurable: true
        });
      }
    },
  
  
    adjustTotalBytes: function adjustTotalBytes() {
      var self = this;
      try { // try to get totalBytes
        self.totalBytes = byteLength(self.body);
      } catch (e) { }
  
      if (self.totalBytes) {
        var newPartSize = Math.ceil(self.totalBytes / self.maxTotalParts);
        if (newPartSize > self.partSize) self.partSize = newPartSize;
      } else {
        self.totalBytes = undefined;
      }
    },
  
  
    isDoneChunking: false,
  
  
    partPos: 0,
  
  
    totalChunkedBytes: 0,
  
  
    totalUploadedBytes: 0,
  
  
    totalBytes: undefined,
  
  
    numParts: 0,
  
  
    totalPartNumbers: 0,
  
  
    activeParts: 0,
  
  
    doneParts: 0,
  
  
    parts: null,
  
  
    completeInfo: null,
  
  
    failed: false,
  
  
    multipartReq: null,
  
  
    partBuffers: null,
  
  
    partBufferLength: 0,
  
  
    fillBuffer: function fillBuffer() {
      var self = this;
      var bodyLen = byteLength(self.body);
  
      if (bodyLen === 0) {
        self.isDoneChunking = true;
        self.numParts = 1;
        self.nextChunk(self.body);
        return;
      }
  
      while (self.activeParts < self.queueSize && self.partPos < bodyLen) {
        var endPos = Math.min(self.partPos + self.partSize, bodyLen);
        var buf = self.sliceFn.call(self.body, self.partPos, endPos);
        self.partPos += self.partSize;
  
        if (byteLength(buf) < self.partSize || self.partPos === bodyLen) {
          self.isDoneChunking = true;
          self.numParts = self.totalPartNumbers + 1;
        }
        self.nextChunk(buf);
      }
    },
  
  
    fillStream: function fillStream() {
      var self = this;
      if (self.activeParts >= self.queueSize) return;
  
      var buf = self.body.read(self.partSize - self.partBufferLength) ||
                self.body.read();
      if (buf) {
        self.partBuffers.push(buf);
        self.partBufferLength += buf.length;
        self.totalChunkedBytes += buf.length;
      }
  
      if (self.partBufferLength >= self.partSize) {
        var pbuf = self.partBuffers.length === 1 ?
          self.partBuffers[0] : Buffer.concat(self.partBuffers);
        self.partBuffers = [];
        self.partBufferLength = 0;
  
        if (pbuf.length > self.partSize) {
          var rest = pbuf.slice(self.partSize);
          self.partBuffers.push(rest);
          self.partBufferLength += rest.length;
          pbuf = pbuf.slice(0, self.partSize);
        }
  
        self.nextChunk(pbuf);
      }
  
      if (self.isDoneChunking && !self.isDoneSending) {
        pbuf = self.partBuffers.length === 1 ?
            self.partBuffers[0] : Buffer.concat(self.partBuffers);
        self.partBuffers = [];
        self.partBufferLength = 0;
        self.totalBytes = self.totalChunkedBytes;
        self.isDoneSending = true;
  
        if (self.numParts === 0 || pbuf.length > 0) {
          self.numParts++;
          self.nextChunk(pbuf);
        }
      }
  
      self.body.read(0);
    },
  
  
    nextChunk: function nextChunk(chunk) {
      var self = this;
      if (self.failed) return null;
  
      var partNumber = ++self.totalPartNumbers;
      if (self.isDoneChunking && partNumber === 1) {
        var params = {Body: chunk};
        if (this.tags) {
          params.Tagging = this.getTaggingHeader();
        }
        var req = self.service.putObject(params);
        req._managedUpload = self;
        req.on('httpUploadProgress', self.progress).send(self.finishSinglePart);
        self.singlePart = req; //save the single part request
        return null;
      } else if (self.service.config.params.ContentMD5) {
        var err = AWS.util.error(new Error('The Content-MD5 you specified is invalid for multi-part uploads.'), {
          code: 'InvalidDigest', retryable: false
        });
  
        self.cleanup(err);
        return null;
      }
  
      if (self.completeInfo[partNumber] && self.completeInfo[partNumber].ETag !== null) {
        return null; // Already uploaded this part.
      }
  
      self.activeParts++;
      if (!self.service.config.params.UploadId) {
  
        if (!self.multipartReq) { // create multipart
          self.multipartReq = self.service.createMultipartUpload();
          self.multipartReq.on('success', function(resp) {
            self.service.config.params.UploadId = resp.data.UploadId;
            self.multipartReq = null;
          });
          self.queueChunks(chunk, partNumber);
          self.multipartReq.on('error', function(err) {
            self.cleanup(err);
          });
          self.multipartReq.send();
        } else {
          self.queueChunks(chunk, partNumber);
        }
      } else { // multipart is created, just send
        self.uploadPart(chunk, partNumber);
      }
    },
  
  
    getTaggingHeader: function getTaggingHeader() {
      var kvPairStrings = [];
      for (var i = 0; i < this.tags.length; i++) {
        kvPairStrings.push(AWS.util.uriEscape(this.tags[i].Key) + '=' +
          AWS.util.uriEscape(this.tags[i].Value));
      }
  
      return kvPairStrings.join('&');
    },
  
  
    uploadPart: function uploadPart(chunk, partNumber) {
      var self = this;
  
      var partParams = {
        Body: chunk,
        ContentLength: AWS.util.string.byteLength(chunk),
        PartNumber: partNumber
      };
  
      var partInfo = {ETag: null, PartNumber: partNumber};
      self.completeInfo[partNumber] = partInfo;
  
      var req = self.service.uploadPart(partParams);
      self.parts[partNumber] = req;
      req._lastUploadedBytes = 0;
      req._managedUpload = self;
      req.on('httpUploadProgress', self.progress);
      req.send(function(err, data) {
        delete self.parts[partParams.PartNumber];
        self.activeParts--;
  
        if (!err && (!data || !data.ETag)) {
          var message = 'No access to ETag property on response.';
          if (AWS.util.isBrowser()) {
            message += ' Check CORS configuration to expose ETag header.';
          }
  
          err = AWS.util.error(new Error(message), {
            code: 'ETagMissing', retryable: false
          });
        }
        if (err) return self.cleanup(err);
        if (self.completeInfo[partNumber] && self.completeInfo[partNumber].ETag !== null) return null;
        partInfo.ETag = data.ETag;
        self.doneParts++;
        if (self.isDoneChunking && self.doneParts === self.totalPartNumbers) {
          self.finishMultiPart();
        } else {
          self.fillQueue.call(self);
        }
      });
    },
  
  
    queueChunks: function queueChunks(chunk, partNumber) {
      var self = this;
      self.multipartReq.on('success', function() {
        self.uploadPart(chunk, partNumber);
      });
    },
  
  
    cleanup: function cleanup(err) {
      var self = this;
      if (self.failed) return;
  
      if (typeof self.body.removeAllListeners === 'function' &&
          typeof self.body.resume === 'function') {
        self.body.removeAllListeners('readable');
        self.body.removeAllListeners('end');
        self.body.resume();
      }
  
      if (self.multipartReq) {
        self.multipartReq.removeAllListeners('success');
        self.multipartReq.removeAllListeners('error');
        self.multipartReq.removeAllListeners('complete');
        delete self.multipartReq;
      }
  
      if (self.service.config.params.UploadId && !self.leavePartsOnError) {
        self.service.abortMultipartUpload().send();
      } else if (self.leavePartsOnError) {
        self.isDoneChunking = false;
      }
  
      AWS.util.each(self.parts, function(partNumber, part) {
        part.removeAllListeners('complete');
        part.abort();
      });
  
      self.activeParts = 0;
      self.partPos = 0;
      self.numParts = 0;
      self.totalPartNumbers = 0;
      self.parts = {};
      self.failed = true;
      self.callback(err);
    },
  
  
    finishMultiPart: function finishMultiPart() {
      var self = this;
      var completeParams = { MultipartUpload: { Parts: self.completeInfo.slice(1) } };
      self.service.completeMultipartUpload(completeParams, function(err, data) {
        if (err) {
          return self.cleanup(err);
        }
  
        if (data && typeof data.Location === 'string') {
          data.Location = data.Location.replace(/%2F/g, '/');
        }
  
        if (Array.isArray(self.tags)) {
          for (var i = 0; i < self.tags.length; i++) {
            self.tags[i].Value = String(self.tags[i].Value);
          }
          self.service.putObjectTagging(
            {Tagging: {TagSet: self.tags}},
            function(e, d) {
              if (e) {
                self.callback(e);
              } else {
                self.callback(e, data);
              }
            }
          );
        } else {
          self.callback(err, data);
        }
      });
    },
  
  
    finishSinglePart: function finishSinglePart(err, data) {
      var upload = this.request._managedUpload;
      var httpReq = this.request.httpRequest;
      var endpoint = httpReq.endpoint;
      if (err) return upload.callback(err);
      data.Location =
        [endpoint.protocol, '//', endpoint.host, httpReq.path].join('');
      data.key = this.request.params.Key; // will stay undocumented
      data.Key = this.request.params.Key;
      data.Bucket = this.request.params.Bucket;
      upload.callback(err, data);
    },
  
  
    progress: function progress(info) {
      var upload = this._managedUpload;
      if (this.operation === 'putObject') {
        info.part = 1;
        info.key = this.params.Key;
      } else {
        upload.totalUploadedBytes += info.loaded - this._lastUploadedBytes;
        this._lastUploadedBytes = info.loaded;
        info = {
          loaded: upload.totalUploadedBytes,
          total: upload.totalBytes,
          part: this.params.PartNumber,
          key: this.params.Key
        };
      }
      upload.emit('httpUploadProgress', [info]);
    }
  });
  
  AWS.util.mixin(AWS.S3.ManagedUpload, AWS.SequentialExecutor);
  
  
  AWS.S3.ManagedUpload.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
    this.prototype.promise = AWS.util.promisifyMethod('send', PromiseDependency);
  };
  
  
  AWS.S3.ManagedUpload.deletePromisesFromClass = function deletePromisesFromClass() {
    delete this.prototype.promise;
  };
  
  AWS.util.addPromises(AWS.S3.ManagedUpload);
  
  
  module.exports = AWS.S3.ManagedUpload;
  
  },{"../core":16}],46:[function(require,module,exports){
  var AWS = require('./core');
  
  
  AWS.SequentialExecutor = AWS.util.inherit({
  
    constructor: function SequentialExecutor() {
      this._events = {};
    },
  
  
    listeners: function listeners(eventName) {
      return this._events[eventName] ? this._events[eventName].slice(0) : [];
    },
  
    on: function on(eventName, listener, toHead) {
      if (this._events[eventName]) {
        toHead ?
          this._events[eventName].unshift(listener) :
          this._events[eventName].push(listener);
      } else {
        this._events[eventName] = [listener];
      }
      return this;
    },
  
    onAsync: function onAsync(eventName, listener, toHead) {
      listener._isAsync = true;
      return this.on(eventName, listener, toHead);
    },
  
    removeListener: function removeListener(eventName, listener) {
      var listeners = this._events[eventName];
      if (listeners) {
        var length = listeners.length;
        var position = -1;
        for (var i = 0; i < length; ++i) {
          if (listeners[i] === listener) {
            position = i;
          }
        }
        if (position > -1) {
          listeners.splice(position, 1);
        }
      }
      return this;
    },
  
    removeAllListeners: function removeAllListeners(eventName) {
      if (eventName) {
        delete this._events[eventName];
      } else {
        this._events = {};
      }
      return this;
    },
  
  
    emit: function emit(eventName, eventArgs, doneCallback) {
      if (!doneCallback) doneCallback = function() { };
      var listeners = this.listeners(eventName);
      var count = listeners.length;
      this.callListeners(listeners, eventArgs, doneCallback);
      return count > 0;
    },
  
  
    callListeners: function callListeners(listeners, args, doneCallback, prevError) {
      var self = this;
      var error = prevError || null;
  
      function callNextListener(err) {
        if (err) {
          error = AWS.util.error(error || new Error(), err);
          if (self._haltHandlersOnError) {
            return doneCallback.call(self, error);
          }
        }
        self.callListeners(listeners, args, doneCallback, error);
      }
  
      while (listeners.length > 0) {
        var listener = listeners.shift();
        if (listener._isAsync) { // asynchronous listener
          listener.apply(self, args.concat([callNextListener]));
          return; // stop here, callNextListener will continue
        } else { // synchronous listener
          try {
            listener.apply(self, args);
          } catch (err) {
            error = AWS.util.error(error || new Error(), err);
          }
          if (error && self._haltHandlersOnError) {
            doneCallback.call(self, error);
            return;
          }
        }
      }
      doneCallback.call(self, error);
    },
  
  
    addListeners: function addListeners(listeners) {
      var self = this;
  
      if (listeners._events) listeners = listeners._events;
  
      AWS.util.each(listeners, function(event, callbacks) {
        if (typeof callbacks === 'function') callbacks = [callbacks];
        AWS.util.arrayEach(callbacks, function(callback) {
          self.on(event, callback);
        });
      });
  
      return self;
    },
  
  
    addNamedListener: function addNamedListener(name, eventName, callback, toHead) {
      this[name] = callback;
      this.addListener(eventName, callback, toHead);
      return this;
    },
  
  
    addNamedAsyncListener: function addNamedAsyncListener(name, eventName, callback, toHead) {
      callback._isAsync = true;
      return this.addNamedListener(name, eventName, callback, toHead);
    },
  
  
    addNamedListeners: function addNamedListeners(callback) {
      var self = this;
      callback(
        function() {
          self.addNamedListener.apply(self, arguments);
        },
        function() {
          self.addNamedAsyncListener.apply(self, arguments);
        }
      );
      return this;
    }
  });
  
  
  AWS.SequentialExecutor.prototype.addListener = AWS.SequentialExecutor.prototype.on;
  
  
  module.exports = AWS.SequentialExecutor;
  
  },{"./core":16}],47:[function(require,module,exports){
  (function (process){(function (){
  var AWS = require('./core');
  var Api = require('./model/api');
  var regionConfig = require('./region_config');
  
  var inherit = AWS.util.inherit;
  var clientCount = 0;
  var region_utils = require('./region/utils');
  
  
  AWS.Service = inherit({
  
    constructor: function Service(config) {
      if (!this.loadServiceClass) {
        throw AWS.util.error(new Error(),
          'Service must be constructed with `new\' operator');
      }
  
      if (config) {
        if (config.region) {
          var region = config.region;
          if (region_utils.isGlobalRegion(region)) {
            config.region = region_utils.getRealRegion(region);
          }
        }
        if (typeof config.useDualstack === 'boolean'
          && typeof config.useDualstackEndpoint !== 'boolean') {
          config.useDualstackEndpoint = config.useDualstack;
        }
      }
  
      var ServiceClass = this.loadServiceClass(config || {});
      if (ServiceClass) {
        var originalConfig = AWS.util.copy(config);
        var svc = new ServiceClass(config);
        Object.defineProperty(svc, '_originalConfig', {
          get: function() { return originalConfig; },
          enumerable: false,
          configurable: true
        });
        svc._clientId = ++clientCount;
        return svc;
      }
      this.initialize(config);
    },
  
  
    initialize: function initialize(config) {
      var svcConfig = AWS.config[this.serviceIdentifier];
      this.config = new AWS.Config(AWS.config);
      if (svcConfig) this.config.update(svcConfig, true);
      if (config) this.config.update(config, true);
  
      this.validateService();
      if (!this.config.endpoint) regionConfig.configureEndpoint(this);
  
      this.config.endpoint = this.endpointFromTemplate(this.config.endpoint);
      this.setEndpoint(this.config.endpoint);
      AWS.SequentialExecutor.call(this);
      AWS.Service.addDefaultMonitoringListeners(this);
      if ((this.config.clientSideMonitoring || AWS.Service._clientSideMonitoring) && this.publisher) {
        var publisher = this.publisher;
        this.addNamedListener('PUBLISH_API_CALL', 'apiCall', function PUBLISH_API_CALL(event) {
          process.nextTick(function() {publisher.eventHandler(event);});
        });
        this.addNamedListener('PUBLISH_API_ATTEMPT', 'apiCallAttempt', function PUBLISH_API_ATTEMPT(event) {
          process.nextTick(function() {publisher.eventHandler(event);});
        });
      }
    },
  
  
    validateService: function validateService() {
    },
  
  
    loadServiceClass: function loadServiceClass(serviceConfig) {
      var config = serviceConfig;
      if (!AWS.util.isEmpty(this.api)) {
        return null;
      } else if (config.apiConfig) {
        return AWS.Service.defineServiceApi(this.constructor, config.apiConfig);
      } else if (!this.constructor.services) {
        return null;
      } else {
        config = new AWS.Config(AWS.config);
        config.update(serviceConfig, true);
        var version = config.apiVersions[this.constructor.serviceIdentifier];
        version = version || config.apiVersion;
        return this.getLatestServiceClass(version);
      }
    },
  
  
    getLatestServiceClass: function getLatestServiceClass(version) {
      version = this.getLatestServiceVersion(version);
      if (this.constructor.services[version] === null) {
        AWS.Service.defineServiceApi(this.constructor, version);
      }
  
      return this.constructor.services[version];
    },
  
  
    getLatestServiceVersion: function getLatestServiceVersion(version) {
      if (!this.constructor.services || this.constructor.services.length === 0) {
        throw new Error('No services defined on ' +
                        this.constructor.serviceIdentifier);
      }
  
      if (!version) {
        version = 'latest';
      } else if (AWS.util.isType(version, Date)) {
        version = AWS.util.date.iso8601(version).split('T')[0];
      }
  
      if (Object.hasOwnProperty(this.constructor.services, version)) {
        return version;
      }
  
      var keys = Object.keys(this.constructor.services).sort();
      var selectedVersion = null;
      for (var i = keys.length - 1; i >= 0; i--) {
        if (keys[i][keys[i].length - 1] !== '*') {
          selectedVersion = keys[i];
        }
        if (keys[i].substr(0, 10) <= version) {
          return selectedVersion;
        }
      }
  
      throw new Error('Could not find ' + this.constructor.serviceIdentifier +
                      ' API to satisfy version constraint `' + version + '\'');
    },
  
  
    api: {},
  
  
    defaultRetryCount: 3,
  
  
    customizeRequests: function customizeRequests(callback) {
      if (!callback) {
        this.customRequestHandler = null;
      } else if (typeof callback === 'function') {
        this.customRequestHandler = callback;
      } else {
        throw new Error('Invalid callback type \'' + typeof callback + '\' provided in customizeRequests');
      }
    },
  
  
    makeRequest: function makeRequest(operation, params, callback) {
      if (typeof params === 'function') {
        callback = params;
        params = null;
      }
  
      params = params || {};
      if (this.config.params) { // copy only toplevel bound params
        var rules = this.api.operations[operation];
        if (rules) {
          params = AWS.util.copy(params);
          AWS.util.each(this.config.params, function(key, value) {
            if (rules.input.members[key]) {
              if (params[key] === undefined || params[key] === null) {
                params[key] = value;
              }
            }
          });
        }
      }
  
      var request = new AWS.Request(this, operation, params);
      this.addAllRequestListeners(request);
      if (callback) request.send(callback);
      return request;
    },
  
  
    makeUnauthenticatedRequest: function makeUnauthenticatedRequest(operation, params, callback) {
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
  
      var request = this.makeRequest(operation, params).toUnauthenticated();
      return callback ? request.send(callback) : request;
    },
  
  
    waitFor: function waitFor(state, params, callback) {
      var waiter = new AWS.ResourceWaiter(this, state);
      return waiter.wait(params, callback);
    },
  
  
    addAllRequestListeners: function addAllRequestListeners(request) {
      var list = [AWS.events, AWS.EventListeners.Core, this.serviceInterface(),
                  AWS.EventListeners.CorePost];
      for (var i = 0; i < list.length; i++) {
        if (list[i]) request.addListeners(list[i]);
      }
  
      if (!this.config.paramValidation) {
        request.removeListener('validate',
          AWS.EventListeners.Core.VALIDATE_PARAMETERS);
      }
  
      if (this.config.logger) { // add logging events
        request.addListeners(AWS.EventListeners.Logger);
      }
  
      this.setupRequestListeners(request);
      if (typeof this.constructor.prototype.customRequestHandler === 'function') {
        this.constructor.prototype.customRequestHandler(request);
      }
      if (Object.prototype.hasOwnProperty.call(this, 'customRequestHandler') && typeof this.customRequestHandler === 'function') {
        this.customRequestHandler(request);
      }
    },
  
  
    setupRequestListeners: function setupRequestListeners(request) {
    },
  
  
    getSigningName: function getSigningName() {
      return this.api.signingName || this.api.endpointPrefix;
    },
  
  
    getSignerClass: function getSignerClass(request) {
      var version;
      var operation = null;
      var authtype = '';
      if (request) {
        var operations = request.service.api.operations || {};
        operation = operations[request.operation] || null;
        authtype = operation ? operation.authtype : '';
      }
      if (this.config.signatureVersion) {
        version = this.config.signatureVersion;
      } else if (authtype === 'v4' || authtype === 'v4-unsigned-body') {
        version = 'v4';
      } else if (authtype === 'bearer') {
        version = 'bearer';
      } else {
        version = this.api.signatureVersion;
      }
      return AWS.Signers.RequestSigner.getVersion(version);
    },
  
  
    serviceInterface: function serviceInterface() {
      switch (this.api.protocol) {
        case 'ec2': return AWS.EventListeners.Query;
        case 'query': return AWS.EventListeners.Query;
        case 'json': return AWS.EventListeners.Json;
        case 'rest-json': return AWS.EventListeners.RestJson;
        case 'rest-xml': return AWS.EventListeners.RestXml;
      }
      if (this.api.protocol) {
        throw new Error('Invalid service `protocol\' ' +
          this.api.protocol + ' in API config');
      }
    },
  
  
    successfulResponse: function successfulResponse(resp) {
      return resp.httpResponse.statusCode < 300;
    },
  
  
    numRetries: function numRetries() {
      if (this.config.maxRetries !== undefined) {
        return this.config.maxRetries;
      } else {
        return this.defaultRetryCount;
      }
    },
  
  
    retryDelays: function retryDelays(retryCount, err) {
      return AWS.util.calculateRetryDelay(retryCount, this.config.retryDelayOptions, err);
    },
  
  
    retryableError: function retryableError(error) {
      if (this.timeoutError(error)) return true;
      if (this.networkingError(error)) return true;
      if (this.expiredCredentialsError(error)) return true;
      if (this.throttledError(error)) return true;
      if (error.statusCode >= 500) return true;
      return false;
    },
  
  
    networkingError: function networkingError(error) {
      return error.code === 'NetworkingError';
    },
  
  
    timeoutError: function timeoutError(error) {
      return error.code === 'TimeoutError';
    },
  
  
    expiredCredentialsError: function expiredCredentialsError(error) {
      return (error.code === 'ExpiredTokenException');
    },
  
  
    clockSkewError: function clockSkewError(error) {
      switch (error.code) {
        case 'RequestTimeTooSkewed':
        case 'RequestExpired':
        case 'InvalidSignatureException':
        case 'SignatureDoesNotMatch':
        case 'AuthFailure':
        case 'RequestInTheFuture':
          return true;
        default: return false;
      }
    },
  
  
    getSkewCorrectedDate: function getSkewCorrectedDate() {
      return new Date(Date.now() + this.config.systemClockOffset);
    },
  
  
    applyClockOffset: function applyClockOffset(newServerTime) {
      if (newServerTime) {
        this.config.systemClockOffset = newServerTime - Date.now();
      }
    },
  
  
    isClockSkewed: function isClockSkewed(newServerTime) {
      if (newServerTime) {
        return Math.abs(this.getSkewCorrectedDate().getTime() - newServerTime) >= 300000;
      }
    },
  
  
    throttledError: function throttledError(error) {
      if (error.statusCode === 429) return true;
      switch (error.code) {
        case 'ProvisionedThroughputExceededException':
        case 'Throttling':
        case 'ThrottlingException':
        case 'RequestLimitExceeded':
        case 'RequestThrottled':
        case 'RequestThrottledException':
        case 'TooManyRequestsException':
        case 'TransactionInProgressException': //dynamodb
        case 'EC2ThrottledException':
          return true;
        default:
          return false;
      }
    },
  
  
    endpointFromTemplate: function endpointFromTemplate(endpoint) {
      if (typeof endpoint !== 'string') return endpoint;
  
      var e = endpoint;
      e = e.replace(/\{service\}/g, this.api.endpointPrefix);
      e = e.replace(/\{region\}/g, this.config.region);
      e = e.replace(/\{scheme\}/g, this.config.sslEnabled ? 'https' : 'http');
      return e;
    },
  
  
    setEndpoint: function setEndpoint(endpoint) {
      this.endpoint = new AWS.Endpoint(endpoint, this.config);
    },
  
  
    paginationConfig: function paginationConfig(operation, throwException) {
      var paginator = this.api.operations[operation].paginator;
      if (!paginator) {
        if (throwException) {
          var e = new Error();
          throw AWS.util.error(e, 'No pagination configuration for ' + operation);
        }
        return null;
      }
  
      return paginator;
    }
  });
  
  AWS.util.update(AWS.Service, {
  
  
    defineMethods: function defineMethods(svc) {
      AWS.util.each(svc.prototype.api.operations, function iterator(method) {
        if (svc.prototype[method]) return;
        var operation = svc.prototype.api.operations[method];
        if (operation.authtype === 'none') {
          svc.prototype[method] = function (params, callback) {
            return this.makeUnauthenticatedRequest(method, params, callback);
          };
        } else {
          svc.prototype[method] = function (params, callback) {
            return this.makeRequest(method, params, callback);
          };
        }
      });
    },
  
  
    defineService: function defineService(serviceIdentifier, versions, features) {
      AWS.Service._serviceMap[serviceIdentifier] = true;
      if (!Array.isArray(versions)) {
        features = versions;
        versions = [];
      }
  
      var svc = inherit(AWS.Service, features || {});
  
      if (typeof serviceIdentifier === 'string') {
        AWS.Service.addVersions(svc, versions);
  
        var identifier = svc.serviceIdentifier || serviceIdentifier;
        svc.serviceIdentifier = identifier;
      } else { // defineService called with an API
        svc.prototype.api = serviceIdentifier;
        AWS.Service.defineMethods(svc);
      }
      AWS.SequentialExecutor.call(this.prototype);
      if (!this.prototype.publisher && AWS.util.clientSideMonitoring) {
        var Publisher = AWS.util.clientSideMonitoring.Publisher;
        var configProvider = AWS.util.clientSideMonitoring.configProvider;
        var publisherConfig = configProvider();
        this.prototype.publisher = new Publisher(publisherConfig);
        if (publisherConfig.enabled) {
          AWS.Service._clientSideMonitoring = true;
        }
      }
      AWS.SequentialExecutor.call(svc.prototype);
      AWS.Service.addDefaultMonitoringListeners(svc.prototype);
      return svc;
    },
  
  
    addVersions: function addVersions(svc, versions) {
      if (!Array.isArray(versions)) versions = [versions];
  
      svc.services = svc.services || {};
      for (var i = 0; i < versions.length; i++) {
        if (svc.services[versions[i]] === undefined) {
          svc.services[versions[i]] = null;
        }
      }
  
      svc.apiVersions = Object.keys(svc.services).sort();
    },
  
  
    defineServiceApi: function defineServiceApi(superclass, version, apiConfig) {
      var svc = inherit(superclass, {
        serviceIdentifier: superclass.serviceIdentifier
      });
  
      function setApi(api) {
        if (api.isApi) {
          svc.prototype.api = api;
        } else {
          svc.prototype.api = new Api(api, {
            serviceIdentifier: superclass.serviceIdentifier
          });
        }
      }
  
      if (typeof version === 'string') {
        if (apiConfig) {
          setApi(apiConfig);
        } else {
          try {
            setApi(AWS.apiLoader(superclass.serviceIdentifier, version));
          } catch (err) {
            throw AWS.util.error(err, {
              message: 'Could not find API configuration ' +
                superclass.serviceIdentifier + '-' + version
            });
          }
        }
        if (!Object.prototype.hasOwnProperty.call(superclass.services, version)) {
          superclass.apiVersions = superclass.apiVersions.concat(version).sort();
        }
        superclass.services[version] = svc;
      } else {
        setApi(version);
      }
  
      AWS.Service.defineMethods(svc);
      return svc;
    },
  
  
    hasService: function(identifier) {
      return Object.prototype.hasOwnProperty.call(AWS.Service._serviceMap, identifier);
    },
  
  
    addDefaultMonitoringListeners: function addDefaultMonitoringListeners(attachOn) {
      attachOn.addNamedListener('MONITOR_EVENTS_BUBBLE', 'apiCallAttempt', function EVENTS_BUBBLE(event) {
        var baseClass = Object.getPrototypeOf(attachOn);
        if (baseClass._events) baseClass.emit('apiCallAttempt', [event]);
      });
      attachOn.addNamedListener('CALL_EVENTS_BUBBLE', 'apiCall', function CALL_EVENTS_BUBBLE(event) {
        var baseClass = Object.getPrototypeOf(attachOn);
        if (baseClass._events) baseClass.emit('apiCall', [event]);
      });
    },
  
  
    _serviceMap: {}
  });
  
  AWS.util.mixin(AWS.Service, AWS.SequentialExecutor);
  
  
  module.exports = AWS.Service;
  
  }).call(this)}).call(this,require('_process'))
  },{"./core":16,"./model/api":25,"./region/utils":39,"./region_config":40,"_process":116}],48:[function(require,module,exports){
  var AWS = require('../core');
  var v4Credentials = require('../signers/v4_credentials');
  
  var s3util = require('./s3util');
  
  require('../s3/managed_upload');
  
  
  var operationsWith200StatusCodeError = {
    'completeMultipartUpload': true,
    'copyObject': true,
    'uploadPartCopy': true
  };
  
  
   var regionRedirectErrorCodes = [
    'AuthorizationHeaderMalformed', // non-head operations on virtual-hosted global bucket endpoints
    'BadRequest', // head operations on virtual-hosted global bucket endpoints
    'PermanentRedirect', // non-head operations on path-style or regional endpoints
    301 // head operations on path-style or regional endpoints
   ];
  
  var OBJECT_LAMBDA_SERVICE = 's3-object-lambda';
  
  AWS.util.update(AWS.S3.prototype, {
  
    getSignatureVersion: function getSignatureVersion(request) {
      var defaultApiVersion = this.api.signatureVersion;
      var userDefinedVersion = this._originalConfig ? this._originalConfig.signatureVersion : null;
      var regionDefinedVersion = this.config.signatureVersion;
      var isPresigned = request ? request.isPresigned() : false;
  
      if (userDefinedVersion) {
        userDefinedVersion = userDefinedVersion === 'v2' ? 's3' : userDefinedVersion;
        return userDefinedVersion;
      }
      if (isPresigned !== true) {
        defaultApiVersion = 'v4';
        if (request && request.service.config.credentials.tokenManager) {
          defaultApiVersion = 'iam';
        } else if (this.config.credentials.tokenManager) {
          defaultApiVersion = 'iam';
        }
      } else if (regionDefinedVersion) {
        defaultApiVersion = regionDefinedVersion;
      }
      return defaultApiVersion;
    },
  
  
    getSignerClass: function getSignerClass(request) {
      var signatureVersion = this.getSignatureVersion(request);
      return AWS.Signers.RequestSigner.getVersion(signatureVersion);
    },
  
  
    validateService: function validateService() {
      var msg;
      var messages = [];
  
      if (!this.config.region) this.config.region = 'us-east-1';
  
      if (!this.config.endpoint && this.config.s3BucketEndpoint) {
        messages.push('An endpoint must be provided when configuring ' +
                      '`s3BucketEndpoint` to true.');
      }
      if (messages.length === 1) {
        msg = messages[0];
      } else if (messages.length > 1) {
        msg = 'Multiple configuration errors:\n' + messages.join('\n');
      }
      if (msg) {
        throw AWS.util.error(new Error(),
          {name: 'InvalidEndpoint', message: msg});
      }
    },
  
  
    shouldDisableBodySigning: function shouldDisableBodySigning(request) {
      var signerClass = this.getSignerClass();
      if (this.config.s3DisableBodySigning === true && signerClass === AWS.Signers.V4
          && request.httpRequest.endpoint.protocol === 'https:') {
        return true;
      }
      return false;
    },
  
  
    setupRequestListeners: function setupRequestListeners(request) {
      request.addListener('validateResponse', this.setExpiresString);
      var prependListener = true;
      request.addListener('validate', this.validateScheme);
      request.addListener('validate', this.validateBucketName, prependListener);
  
      request.removeListener('validate',
        AWS.EventListeners.Core.VALIDATE_REGION);
      request.addListener('build', this.addContentType);
      request.addListener('build', this.computeContentMd5);
      request.addListener('build', this.computeSseCustomerKeyMd5);
      request.addListener('build', this.populateURI);
      request.addListener('afterBuild', this.addExpect100Continue);
      request.addListener('extractError', this.extractError);
      request.addListener('extractData', AWS.util.hoistPayloadMember);
      request.addListener('extractData', this.extractData);
      request.addListener('extractData', this.extractErrorFrom200Response);
      request.addListener('beforePresign', this.prepareSignedUrl);
      if (this.shouldDisableBodySigning(request))  {
        request.removeListener('afterBuild', AWS.EventListeners.Core.COMPUTE_SHA256);
        request.addListener('afterBuild', this.disableBodySigning);
      }
    },
  
  
    validateScheme: function(req) {
      var params = req.params,
          scheme = req.httpRequest.endpoint.protocol,
          sensitive = params.SSECustomerKey || params.CopySourceSSECustomerKey;
      if (sensitive && scheme !== 'https:') {
        var msg = 'Cannot send SSE keys over HTTP. Set \'sslEnabled\'' +
          'to \'true\' in your configuration';
        throw AWS.util.error(new Error(),
          { code: 'ConfigError', message: msg });
      }
    },
  
  
    validateBucketEndpoint: function(req) {
      if (!req.params.Bucket && req.service.config.s3BucketEndpoint) {
        var msg = 'Cannot send requests to root API with `s3BucketEndpoint` set.';
        throw AWS.util.error(new Error(),
          { code: 'ConfigError', message: msg });
      }
    },
  
  
    validateBucketName: function validateBucketName(req) {
      var service = req.service;
      var signatureVersion = service.getSignatureVersion(req);
      var bucket = req.params && req.params.Bucket;
      var key = req.params && req.params.Key;
      var slashIndex = bucket && bucket.indexOf('/');
      if (bucket && slashIndex >= 0) {
        if (typeof key === 'string' && slashIndex > 0) {
          req.params = AWS.util.copy(req.params);
          var prefix = bucket.substr(slashIndex + 1) || '';
          req.params.Key = prefix + '/' + key;
          req.params.Bucket = bucket.substr(0, slashIndex);
        } else if (signatureVersion === 'v4') {
          var msg = 'Bucket names cannot contain forward slashes. Bucket: ' + bucket;
          throw AWS.util.error(new Error(),
            { code: 'InvalidBucket', message: msg });
        }
      }
    },
  
  
    isValidAccelerateOperation: function isValidAccelerateOperation(operation) {
      var invalidOperations = [
        'createBucket',
        'deleteBucket',
        'listBuckets'
      ];
      return invalidOperations.indexOf(operation) === -1;
    },
  
  
  
    populateURI: function populateURI(req) {
      var httpRequest = req.httpRequest;
      var b = req.params.Bucket;
      var service = req.service;
      var endpoint = httpRequest.endpoint;
      if (b) {
        if (!service.pathStyleBucketName(b)) {
          if (service.config.useAccelerateEndpoint && service.isValidAccelerateOperation(req.operation)) {
            if (service.config.useDualstackEndpoint) {
              endpoint.hostname = b + '.s3-accelerate.dualstack.amazonaws.com';
            } else {
              endpoint.hostname = b + '.s3-accelerate.amazonaws.com';
            }
          } else if (!service.config.s3BucketEndpoint) {
            endpoint.hostname =
              b + '.' + endpoint.hostname;
          }
  
          var port = endpoint.port;
          if (port !== 80 && port !== 443) {
            endpoint.host = endpoint.hostname + ':' +
              endpoint.port;
          } else {
            endpoint.host = endpoint.hostname;
          }
  
          httpRequest.virtualHostedBucket = b; // needed for signing the request
          service.removeVirtualHostedBucketFromPath(req);
        }
      }
    },
  
  
    removeVirtualHostedBucketFromPath: function removeVirtualHostedBucketFromPath(req) {
      var httpRequest = req.httpRequest;
      var bucket = httpRequest.virtualHostedBucket;
      if (bucket && httpRequest.path) {
        if (req.params && req.params.Key) {
          var encodedS3Key = '/' + AWS.util.uriEscapePath(req.params.Key);
          if (httpRequest.path.indexOf(encodedS3Key) === 0 && (httpRequest.path.length === encodedS3Key.length || httpRequest.path[encodedS3Key.length] === '?')) {
            return;
          }
        }
        httpRequest.path = httpRequest.path.replace(new RegExp('/' + bucket), '');
        if (httpRequest.path[0] !== '/') {
          httpRequest.path = '/' + httpRequest.path;
        }
      }
    },
  
  
    addExpect100Continue: function addExpect100Continue(req) {
      var len = req.httpRequest.headers['Content-Length'];
      if (AWS.util.isNode() && (len >= 1024 * 1024 || req.params.Body instanceof AWS.util.stream.Stream)) {
        req.httpRequest.headers['Expect'] = '100-continue';
      }
    },
  
  
    addContentType: function addContentType(req) {
      var httpRequest = req.httpRequest;
      if (httpRequest.method === 'GET' || httpRequest.method === 'HEAD') {
        delete httpRequest.headers['Content-Type'];
        return;
      }
  
      if (!httpRequest.headers['Content-Type']) { // always have a Content-Type
        httpRequest.headers['Content-Type'] = 'application/octet-stream';
      }
  
      var contentType = httpRequest.headers['Content-Type'];
      if (AWS.util.isBrowser()) {
        if (typeof httpRequest.body === 'string' && !contentType.match(/;\s*charset=/)) {
          var charset = '; charset=UTF-8';
          httpRequest.headers['Content-Type'] += charset;
        } else {
          var replaceFn = function(_, prefix, charsetName) {
            return prefix + charsetName.toUpperCase();
          };
  
          httpRequest.headers['Content-Type'] =
            contentType.replace(/(;\s*charset=)(.+)$/, replaceFn);
        }
      }
    },
  
  
    willComputeChecksums: function willComputeChecksums(req) {
      var rules = req.service.api.operations[req.operation].input.members;
      var body = req.httpRequest.body;
      var needsContentMD5 = req.service.config.computeChecksums &&
        rules.ContentMD5 &&
        !req.params.ContentMD5 &&
        body &&
        (AWS.util.Buffer.isBuffer(req.httpRequest.body) || typeof req.httpRequest.body === 'string');
  
      if (needsContentMD5 && req.service.shouldDisableBodySigning(req) && !req.isPresigned()) {
        return true;
      }
  
      if (needsContentMD5 && this.getSignatureVersion(req) === 's3' && req.isPresigned()) {
        return true;
      }
  
      if (needsContentMD5) return true;
  
      return false;
    },
  
  
    computeContentMd5: function computeContentMd5(req) {
      if (req.service.willComputeChecksums(req)) {
        var md5 = AWS.util.crypto.md5(req.httpRequest.body, 'base64');
        req.httpRequest.headers['Content-MD5'] = md5;
      }
    },
  
  
    computeSseCustomerKeyMd5: function computeSseCustomerKeyMd5(req) {
      var keys = {
        SSECustomerKey: 'x-amz-server-side-encryption-customer-key-MD5',
        CopySourceSSECustomerKey: 'x-amz-copy-source-server-side-encryption-customer-key-MD5'
      };
      AWS.util.each(keys, function(key, header) {
        if (req.params[key]) {
          var value = AWS.util.crypto.md5(req.params[key], 'base64');
          req.httpRequest.headers[header] = value;
        }
      });
    },
  
  
    pathStyleBucketName: function pathStyleBucketName(bucketName) {
      if (this.config.s3ForcePathStyle) return true;
      if (this.config.s3BucketEndpoint) return false;
  
      if (s3util.dnsCompatibleBucketName(bucketName)) {
        return (this.config.sslEnabled && bucketName.match(/\./)) ? true : false;
      } else {
        return true; // not dns compatible names must always use path style
      }
    },
  
  
    extractErrorFrom200Response: function extractErrorFrom200Response(resp) {
      var service = this.service ? this.service : this;
      if (!service.is200Error(resp) && !operationsWith200StatusCodeError[resp.request.operation]) {
        return;
      }
      var httpResponse = resp.httpResponse;
      var bodyString = httpResponse.body && httpResponse.body.toString() || '';
      if (bodyString && bodyString.indexOf('</Error>') === bodyString.length - 8) {
        resp.data = null;
        service.extractError(resp);
        resp.error.is200Error = true;
        throw resp.error;
      } else if (!httpResponse.body || !bodyString.match(/<[\w_]/)) {
        resp.data = null;
        throw AWS.util.error(new Error(), {
          code: 'InternalError',
          message: 'S3 aborted request'
        });
      }
    },
  
  
    is200Error: function is200Error(resp) {
      var code = resp && resp.httpResponse && resp.httpResponse.statusCode;
      if (code !== 200) {
        return false;
      }
      try {
        var req = resp.request;
        var outputMembers = req.service.api.operations[req.operation].output.members;
        var keys = Object.keys(outputMembers);
        for (var i = 0; i < keys.length; ++i) {
          var member = outputMembers[keys[i]];
          if (member.type === 'binary' && member.isStreaming) {
            return false;
          }
        }
  
        var body = resp.httpResponse.body;
        if (body && body.byteLength !== undefined) {
          if (body.byteLength < 15 || body.byteLength > 3000) {
            return false;
          }
        }
        if (!body) {
          return false;
        }
        var bodyString = body.toString();
        if (bodyString.indexOf('</Error>') === bodyString.length - 8) {
          return true;
        }
      } catch (e) {
        return false;
      }
      return false;
    },
  
  
    retryableError: function retryableError(error, request) {
      if (error.is200Error ||
        (operationsWith200StatusCodeError[request.operation] && error.statusCode === 200)) {
        return true;
      } else if (request._requestRegionForBucket &&
          request.service.bucketRegionCache[request._requestRegionForBucket]) {
        return false;
      } else if (error && error.code === 'RequestTimeout') {
        return true;
      } else if (error &&
          regionRedirectErrorCodes.indexOf(error.code) != -1 &&
          error.region && error.region != request.httpRequest.region) {
        request.httpRequest.region = error.region;
        if (error.statusCode === 301) {
          request.service.updateReqBucketRegion(request);
        }
        return true;
      } else {
        var _super = AWS.Service.prototype.retryableError;
        return _super.call(this, error, request);
      }
    },
  
  
    updateReqBucketRegion: function updateReqBucketRegion(request, region) {
      var httpRequest = request.httpRequest;
      if (typeof region === 'string' && region.length) {
        httpRequest.region = region;
      }
      if (!httpRequest.endpoint.host.match(/s3(?!-accelerate).*\.amazonaws\.com$/)) {
        return;
      }
      var service = request.service;
      var s3Config = service.config;
      var s3BucketEndpoint = s3Config.s3BucketEndpoint;
      if (s3BucketEndpoint) {
        delete s3Config.s3BucketEndpoint;
      }
      var newConfig = AWS.util.copy(s3Config);
      delete newConfig.endpoint;
      newConfig.region = httpRequest.region;
  
      httpRequest.endpoint = (new AWS.S3(newConfig)).endpoint;
      service.populateURI(request);
      s3Config.s3BucketEndpoint = s3BucketEndpoint;
      httpRequest.headers.Host = httpRequest.endpoint.host;
  
      if (request._asm.currentState === 'validate') {
        request.removeListener('build', service.populateURI);
        request.addListener('build', service.removeVirtualHostedBucketFromPath);
      }
    },
  
  
    extractData: function extractData(resp) {
      var req = resp.request;
      if (req.operation === 'getBucketLocation') {
        var match = resp.httpResponse.body.toString().match(/>(.+)<\/Location/);
        delete resp.data['_'];
        if (match) {
          resp.data.LocationConstraint = match[1];
        } else {
          resp.data.LocationConstraint = '';
        }
      }
      var bucket = req.params.Bucket || null;
      if (req.operation === 'deleteBucket' && typeof bucket === 'string' && !resp.error) {
        req.service.clearBucketRegionCache(bucket);
      } else {
        var headers = resp.httpResponse.headers || {};
        var region = headers['x-amz-bucket-region'] || null;
        if (!region && req.operation === 'createBucket' && !resp.error) {
          var createBucketConfiguration = req.params.CreateBucketConfiguration;
          if (!createBucketConfiguration) {
            region = 'us-east-1';
          } else if (createBucketConfiguration.LocationConstraint === 'EU') {
            region = 'eu-west-1';
          } else {
            region = createBucketConfiguration.LocationConstraint;
          }
        }
        if (region) {
            if (bucket && region !== req.service.bucketRegionCache[bucket]) {
              req.service.bucketRegionCache[bucket] = region;
            }
        }
      }
      req.service.extractRequestIds(resp);
    },
  
  
    extractError: function extractError(resp) {
      var codes = {
        304: 'NotModified',
        403: 'Forbidden',
        400: 'BadRequest',
        404: 'NotFound'
      };
  
      var req = resp.request;
      var code = resp.httpResponse.statusCode;
      var body = resp.httpResponse.body || '';
  
      var headers = resp.httpResponse.headers || {};
      var region = headers['x-amz-bucket-region'] || null;
      var bucket = req.params.Bucket || null;
      var bucketRegionCache = req.service.bucketRegionCache;
      if (region && bucket && region !== bucketRegionCache[bucket]) {
        bucketRegionCache[bucket] = region;
      }
  
      var cachedRegion;
      if (codes[code] && body.length === 0) {
        if (bucket && !region) {
          cachedRegion = bucketRegionCache[bucket] || null;
          if (cachedRegion !== req.httpRequest.region) {
            region = cachedRegion;
          }
        }
        resp.error = AWS.util.error(new Error(), {
          code: codes[code],
          message: null,
          region: region
        });
      } else {
        var data = new AWS.XML.Parser().parse(body.toString());
  
        if (data.Region && !region) {
          region = data.Region;
          if (bucket && region !== bucketRegionCache[bucket]) {
            bucketRegionCache[bucket] = region;
          }
        } else if (bucket && !region && !data.Region) {
          cachedRegion = bucketRegionCache[bucket] || null;
          if (cachedRegion !== req.httpRequest.region) {
            region = cachedRegion;
          }
        }
  
        resp.error = AWS.util.error(new Error(), {
          code: data.Code || code,
          message: data.Message || null,
          region: region
        });
      }
      req.service.extractRequestIds(resp);
    },
  
  
    requestBucketRegion: function requestBucketRegion(resp, done) {
      var error = resp.error;
      var req = resp.request;
      var bucket = req.params.Bucket || null;
  
      if (!error || !bucket || error.region || req.operation === 'listObjects' ||
          (AWS.util.isNode() && req.operation === 'headBucket') ||
          (error.statusCode === 400 && req.operation !== 'headObject') ||
          regionRedirectErrorCodes.indexOf(error.code) === -1) {
        return done();
      }
      var reqOperation = AWS.util.isNode() ? 'headBucket' : 'listObjects';
      var reqParams = {Bucket: bucket};
      if (reqOperation === 'listObjects') reqParams.MaxKeys = 0;
      var regionReq = req.service[reqOperation](reqParams);
      regionReq._requestRegionForBucket = bucket;
      regionReq.send(function() {
        var region = req.service.bucketRegionCache[bucket] || null;
        error.region = region;
        done();
      });
    },
  
  
     reqRegionForNetworkingError: function reqRegionForNetworkingError(resp, done) {
      if (!AWS.util.isBrowser()) {
        return done();
      }
      var error = resp.error;
      var request = resp.request;
      var bucket = request.params.Bucket;
      if (!error || error.code !== 'NetworkingError' || !bucket ||
          request.httpRequest.region === 'us-east-1') {
        return done();
      }
      var service = request.service;
      var bucketRegionCache = service.bucketRegionCache;
      var cachedRegion = bucketRegionCache[bucket] || null;
  
      if (cachedRegion && cachedRegion !== request.httpRequest.region) {
        service.updateReqBucketRegion(request, cachedRegion);
        done();
      } else if (!s3util.dnsCompatibleBucketName(bucket)) {
        service.updateReqBucketRegion(request, 'us-east-1');
        if (bucketRegionCache[bucket] !== 'us-east-1') {
          bucketRegionCache[bucket] = 'us-east-1';
        }
        done();
      } else if (request.httpRequest.virtualHostedBucket) {
        var getRegionReq = service.listObjects({Bucket: bucket, MaxKeys: 0});
        service.updateReqBucketRegion(getRegionReq, 'us-east-1');
        getRegionReq._requestRegionForBucket = bucket;
  
        getRegionReq.send(function() {
          var region = service.bucketRegionCache[bucket] || null;
          if (region && region !== request.httpRequest.region) {
            service.updateReqBucketRegion(request, region);
          }
          done();
        });
      } else {
        done();
      }
     },
  
  
     bucketRegionCache: {},
  
  
     clearBucketRegionCache: function(buckets) {
      var bucketRegionCache = this.bucketRegionCache;
      if (!buckets) {
        buckets = Object.keys(bucketRegionCache);
      } else if (typeof buckets === 'string') {
        buckets = [buckets];
      }
      for (var i = 0; i < buckets.length; i++) {
        delete bucketRegionCache[buckets[i]];
      }
      return bucketRegionCache;
     },
  
  
    correctBucketRegionFromCache: function correctBucketRegionFromCache(req) {
      var bucket = req.params.Bucket || null;
      if (bucket) {
        var service = req.service;
        var requestRegion = req.httpRequest.region;
        var cachedRegion = service.bucketRegionCache[bucket];
        if (cachedRegion && cachedRegion !== requestRegion) {
          service.updateReqBucketRegion(req, cachedRegion);
        }
      }
    },
  
  
    extractRequestIds: function extractRequestIds(resp) {
      var extendedRequestId = resp.httpResponse.headers ? resp.httpResponse.headers['x-amz-id-2'] : null;
      var cfId = resp.httpResponse.headers ? resp.httpResponse.headers['x-amz-cf-id'] : null;
      resp.extendedRequestId = extendedRequestId;
      resp.cfId = cfId;
  
      if (resp.error) {
        resp.error.requestId = resp.requestId || null;
        resp.error.extendedRequestId = extendedRequestId;
        resp.error.cfId = cfId;
      }
    },
  
  
    getSignedUrl: function getSignedUrl(operation, params, callback) {
      params = AWS.util.copy(params || {});
      var expires = params.Expires || 900;
  
      if (typeof expires !== 'number') {
        throw AWS.util.error(new Error(),
          { code: 'InvalidParameterException', message: 'The expiration must be a number, received ' + typeof expires });
      }
  
      delete params.Expires; // we can't validate this
      var request = this.makeRequest(operation, params);
  
      if (callback) {
        AWS.util.defer(function() {
          request.presign(expires, callback);
        });
      } else {
        return request.presign(expires, callback);
      }
    },
  
  
  
  
    createPresignedPost: function createPresignedPost(params, callback) {
      if (typeof params === 'function' && callback === undefined) {
        callback = params;
        params = null;
      }
  
      params = AWS.util.copy(params || {});
      var boundParams = this.config.params || {};
      var bucket = params.Bucket || boundParams.Bucket,
        self = this,
        config = this.config,
        endpoint = AWS.util.copy(this.endpoint);
      if (!config.s3BucketEndpoint) {
        endpoint.pathname = '/' + bucket;
      }
  
      function finalizePost() {
        return {
          url: AWS.util.urlFormat(endpoint),
          fields: self.preparePostFields(
            config.credentials,
            config.region,
            bucket,
            params.Fields,
            params.Conditions,
            params.Expires
          )
        };
      }
  
      if (callback) {
        config.getCredentials(function (err) {
          if (err) {
            callback(err);
          } else {
            try {
              callback(null, finalizePost());
            } catch (err) {
              callback(err);
            }
          }
        });
      } else {
        return finalizePost();
      }
    },
  
  
    preparePostFields: function preparePostFields(
      credentials,
      region,
      bucket,
      fields,
      conditions,
      expiresInSeconds
    ) {
      var now = this.getSkewCorrectedDate();
      if (!credentials || !region || !bucket) {
        throw new Error('Unable to create a POST object policy without a bucket,'
          + ' region, and credentials');
      }
      if (!credentials.accessKeyId || !credentials.secretAccessKey) {
        throw new Error('Unable to create a POST object policy without a ' +
        'credential containing an accessKeyId and secretAccessKey');
      }
      fields = AWS.util.copy(fields || {});
      conditions = (conditions || []).slice(0);
      expiresInSeconds = expiresInSeconds || 3600;
  
      var signingDate = AWS.util.date.iso8601(now).replace(/[:\-]|\.\d{3}/g, '');
      var shortDate = signingDate.substr(0, 8);
      var scope = v4Credentials.createScope(shortDate, region, 's3');
      var credential = credentials.accessKeyId + '/' + scope;
  
      fields['bucket'] = bucket;
      fields['X-Amz-Algorithm'] = 'AWS4-HMAC-SHA256';
      fields['X-Amz-Credential'] = credential;
      fields['X-Amz-Date'] = signingDate;
      if (credentials.sessionToken) {
        fields['X-Amz-Security-Token'] = credentials.sessionToken;
      }
      for (var field in fields) {
        if (fields.hasOwnProperty(field)) {
          var condition = {};
          condition[field] = fields[field];
          conditions.push(condition);
        }
      }
  
      fields.Policy = this.preparePostPolicy(
        new Date(now.valueOf() + expiresInSeconds * 1000),
        conditions
      );
      fields['X-Amz-Signature'] = AWS.util.crypto.hmac(
        v4Credentials.getSigningKey(credentials, shortDate, region, 's3', true),
        fields.Policy,
        'hex'
      );
  
      return fields;
    },
  
  
    prepareConditions: function prepareConditions(fields, conditions) {
      var addedConditionFieldNames = this.getConditionFieldNames(conditions);
  
      for (var field in fields) {
        if (fields.hasOwnProperty(field) && addedConditionFieldNames.indexOf(field) === -1) {
          var condition = {};
          condition[field] = fields[field];
          conditions.push(condition);
        }
      }
    },
  
  
    getConditionFieldNames: function getConditionFieldNames(conditions) {
      var conditionFieldNames = new Array();
      for (var i=0; i<conditions.length; i++) {
        var condition = conditions[i];
        if (Array.isArray(condition)) {
          if (condition.length === 3) {
            var dollarName = condition[1];
            var name = dollarName.substr(1);
            if (conditionFieldNames.indexOf(name) === -1) {
              conditionFieldNames.push(name);
            }
          }
        } else {
            var keys = Object.keys(condition);
            if (keys.length > 0) {
              var name = keys[0];
              conditionFieldNames.push(name);
            }
        }
      }
      return conditionFieldNames;
    },
  
  
    preparePostPolicy: function preparePostPolicy(expiration, conditions) {
      return AWS.util.base64.encode(JSON.stringify({
        expiration: AWS.util.date.iso8601(expiration),
        conditions: conditions
      }));
    },
  
  
    prepareSignedUrl: function prepareSignedUrl(request) {
      request.addListener('validate', request.service.noPresignedContentLength);
      request.removeListener('build', request.service.addContentType);
      if (!request.params.Body) {
        request.removeListener('build', request.service.computeContentMd5);
      } else {
        request.addListener('afterBuild', AWS.EventListeners.Core.COMPUTE_SHA256);
      }
    },
  
  
    disableBodySigning: function disableBodySigning(request) {
      var headers = request.httpRequest.headers;
      if (!Object.prototype.hasOwnProperty.call(headers, 'presigned-expires')) {
        headers['X-Amz-Content-Sha256'] = 'UNSIGNED-PAYLOAD';
      }
    },
  
  
    noPresignedContentLength: function noPresignedContentLength(request) {
      if (request.params.ContentLength !== undefined) {
        throw AWS.util.error(new Error(), {code: 'UnexpectedParameter',
          message: 'ContentLength is not supported in pre-signed URLs.'});
      }
    },
  
    createBucket: function createBucket(params, callback) {
      if (typeof params === 'function' || !params) {
        callback = callback || params;
        params = {};
      }
      var hostname = this.endpoint.hostname;
      var copiedParams = AWS.util.copy(params);
  
      if (
        this.config.region !== 'us-east-1'
          && hostname !== this.api.globalEndpoint
          && !params.CreateBucketConfiguration
      ) {
        copiedParams.CreateBucketConfiguration = { LocationConstraint: this.config.region };
      }
      return this.makeRequest('createBucket', copiedParams, callback);
    },
  
  
    upload: function upload(params, options, callback) {
      if (typeof options === 'function' && callback === undefined) {
        callback = options;
        options = null;
      }
  
      options = options || {};
      options = AWS.util.merge(options || {}, {service: this, params: params});
  
      var uploader = new AWS.S3.ManagedUpload(options);
      if (typeof callback === 'function') uploader.send(callback);
      return uploader;
    },
  
  
      setExpiresString: function setExpiresString(response) {
        if (response && response.httpResponse && response.httpResponse.headers) {
          if ('expires' in response.httpResponse.headers) {
            response.httpResponse.headers.expiresstring = response.httpResponse.headers.expires;
          }
        }
    
        try {
          if (response && response.httpResponse && response.httpResponse.headers) {
            if ('expires' in response.httpResponse.headers) {
              AWS.util.date.parseTimestamp(response.httpResponse.headers.expires);
            }
          }
        } catch (e) {
          console.log('AWS SDK', '(warning)', e);
          delete response.httpResponse.headers.expires;
        }
      }
  });
  
  
  AWS.S3.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
    this.prototype.getSignedUrlPromise = AWS.util.promisifyMethod('getSignedUrl', PromiseDependency);
  };
  
  
  AWS.S3.deletePromisesFromClass = function deletePromisesFromClass() {
    delete this.prototype.getSignedUrlPromise;
  };
  
  AWS.util.addPromises(AWS.S3);
  
  },{"../core":16,"../s3/managed_upload":45,"../signers/v4_credentials":60,"./s3util":49}],49:[function(require,module,exports){
  var AWS = require('../core');
  var regionUtil = require('../region_config');
  
  var s3util = {
  
    dnsCompatibleBucketName: function dnsCompatibleBucketName(bucketName) {
      var b = bucketName;
      var domain = new RegExp(/^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/);
      var ipAddress = new RegExp(/(\d+\.){3}\d+/);
      var dots = new RegExp(/\.\./);
      return (b.match(domain) && !b.match(ipAddress) && !b.match(dots)) ? true : false;
    },
  };
  
  
  module.exports = s3util;
  
  },{"../core":16,"../region_config":40}],50:[function(require,module,exports){
  var AWS = require('../core');
  
  
  AWS.Signers.Bearer = AWS.util.inherit(AWS.Signers.RequestSigner, {
    constructor: function Bearer(request) {
      AWS.Signers.RequestSigner.call(this, request);
    },
  
    addAuthorization: function addAuthorization(token) {
      this.request.headers['Authorization'] = 'Bearer ' + token.token;
    }
  });
  
  },{"../core":16}],51:[function(require,module,exports){
  var AWS = require('../core');
  var inherit = AWS.util.inherit;
  
  
  AWS.Signers.IAM = inherit(AWS.Signers.RequestSigner, {
    addAuthorization: function addAuthorization(credentials, date, req) {
      var token = credentials.tokenManager.getToken();
      this.request.headers['Authorization'] = 'Bearer ' + (token.accessToken || token['access_token']);
  
      if (req.operation === 'createBucket' ||
          req.operation === 'listBuckets' ||
          req.operation === 'listBucketsExtended') {
        if (!this.request.headers['Ibm-Service-Instance-Id']) {
          this.request.headers['Ibm-Service-Instance-Id'] = credentials.serviceInstanceId;
        }
      }
    },
  
    signature: function signature(credentials) {
    }
  
  });
  
  module.exports = AWS.Signers.IAM;
  
  },{"../core":16}],52:[function(require,module,exports){
  var AWS = require('../core');
  
  
  AWS.Signers.None = AWS.util.inherit(AWS.Signers.RequestSigner, {
      addAuthorization: function() {},
      signature: function() {}
  });
  
  module.exports = AWS.Signers.IAM;
  
  },{"../core":16}],53:[function(require,module,exports){
  var AWS = require('../core');
  var inherit = AWS.util.inherit;
  
  
  var expiresHeader = 'presigned-expires';
  
  
  function signedUrlBuilder(request) {
    var expires = request.httpRequest.headers[expiresHeader];
    var signerClass = request.service.getSignerClass(request);
  
    delete request.httpRequest.headers['User-Agent'];
    delete request.httpRequest.headers['X-Amz-User-Agent'];
  
    if (signerClass === AWS.Signers.V4) {
      if (expires > 604800) { // one week expiry is invalid
        var message = 'Presigning does not support expiry time greater ' +
                      'than a week with SigV4 signing.';
        throw AWS.util.error(new Error(), {
          code: 'InvalidExpiryTime', message: message, retryable: false
        });
      }
      request.httpRequest.headers[expiresHeader] = expires;
    } else if (signerClass === AWS.Signers.S3) {
      var now = request.service ? request.service.getSkewCorrectedDate() : AWS.util.date.getDate();
      request.httpRequest.headers[expiresHeader] = parseInt(
        AWS.util.date.unixTimestamp(now) + expires, 10).toString();
    } else {
      throw AWS.util.error(new Error(), {
        message: 'Presigning only supports S3 or SigV4 signing.',
        code: 'UnsupportedSigner', retryable: false
      });
    }
  }
  
  
  function signedUrlSigner(request) {
    var endpoint = request.httpRequest.endpoint;
    var parsedUrl = AWS.util.urlParse(request.httpRequest.path);
    var queryParams = {};
  
    if (parsedUrl.search) {
      queryParams = AWS.util.queryStringParse(parsedUrl.search.substr(1));
    }
  
    var auth = request.httpRequest.headers['Authorization'].split(' ');
    if (auth[0] === 'AWS') {
      auth = auth[1].split(':');
      queryParams['Signature'] = auth.pop();
      queryParams['AWSAccessKeyId'] = auth.join(':');
  
      AWS.util.each(request.httpRequest.headers, function (key, value) {
        if (key === expiresHeader) key = 'Expires';
        if (key.indexOf('x-amz-meta-') === 0) {
          delete queryParams[key];
          key = key.toLowerCase();
        }
        queryParams[key] = value;
      });
      delete request.httpRequest.headers[expiresHeader];
      delete queryParams['Authorization'];
      delete queryParams['Host'];
    } else if (auth[0] === 'AWS4-HMAC-SHA256') { // SigV4 signing
      auth.shift();
      var rest = auth.join(' ');
      var signature = rest.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];
      queryParams['X-Amz-Signature'] = signature;
      delete queryParams['Expires'];
    }
  
    endpoint.pathname = parsedUrl.pathname;
    endpoint.search = AWS.util.queryParamsToString(queryParams);
  }
  
  
  AWS.Signers.Presign = inherit({
  
    sign: function sign(request, expireTime, callback) {
      request.httpRequest.headers[expiresHeader] = expireTime || 3600;
      request.on('build', signedUrlBuilder);
      request.on('sign', signedUrlSigner);
      request.removeListener('afterBuild',
        AWS.EventListeners.Core.SET_CONTENT_LENGTH);
      request.removeListener('afterBuild',
        AWS.EventListeners.Core.COMPUTE_SHA256);
  
      request.emit('beforePresign', [request]);
  
      if (callback) {
        request.build(function() {
          if (this.response.error) callback(this.response.error);
          else {
            callback(null, AWS.util.urlFormat(request.httpRequest.endpoint));
          }
        });
      } else {
        request.build();
        if (request.response.error) throw request.response.error;
        return AWS.util.urlFormat(request.httpRequest.endpoint);
      }
    }
  });
  
  
  module.exports = AWS.Signers.Presign;
  
  },{"../core":16}],54:[function(require,module,exports){
  var AWS = require('../core');
  
  var inherit = AWS.util.inherit;
  
  
  AWS.Signers.RequestSigner = inherit({
    constructor: function RequestSigner(request) {
      this.request = request;
    },
  
    setServiceClientId: function setServiceClientId(id) {
      this.serviceClientId = id;
    },
  
    getServiceClientId: function getServiceClientId() {
      return this.serviceClientId;
    }
  });
  
  AWS.Signers.RequestSigner.getVersion = function getVersion(version) {
    switch (version) {
      case 'v2': return AWS.Signers.V2;
      case 'v3': return AWS.Signers.V3;
      case 's3v4': return AWS.Signers.V4;
      case 'v4': return AWS.Signers.V4;
      case 's3': return AWS.Signers.S3;
      case 'v3https': return AWS.Signers.V3Https;
      case 'iam': return AWS.Signers.IAM;
      case 'none': return AWS.Signers.None;
      case 'bearer': return AWS.Signers.Bearer;
    }
    throw new Error('Unknown signing version ' + version);
  };
  
  require('./v2');
  require('./v3');
  require('./v3https');
  require('./v4');
  require('./s3');
  require('./presign');
  require('./iam');
  require('./none');
  require('./bearer');
  
  },{"../core":16,"./bearer":50,"./iam":51,"./none":52,"./presign":53,"./s3":55,"./v2":56,"./v3":57,"./v3https":58,"./v4":59}],55:[function(require,module,exports){
  var AWS = require('../core');
  var inherit = AWS.util.inherit;
  
  
  AWS.Signers.S3 = inherit(AWS.Signers.RequestSigner, {
  
    subResources: {
      'acl': 1,
      'accelerate': 1,
      'analytics': 1,
      'cors': 1,
      'lifecycle': 1,
      'delete': 1,
      'inventory': 1,
      'location': 1,
      'logging': 1,
      'metrics': 1,
      'notification': 1,
      'partNumber': 1,
      'policy': 1,
      'requestPayment': 1,
      'replication': 1,
      'restore': 1,
      'tagging': 1,
      'torrent': 1,
      'uploadId': 1,
      'uploads': 1,
      'versionId': 1,
      'versioning': 1,
      'versions': 1,
      'website': 1
    },
  
    responseHeaders: {
      'response-content-type': 1,
      'response-content-language': 1,
      'response-expires': 1,
      'response-cache-control': 1,
      'response-content-disposition': 1,
      'response-content-encoding': 1
    },
  
    addAuthorization: function addAuthorization(credentials, date) {
      if (!this.request.headers['presigned-expires']) {
        this.request.headers['X-Amz-Date'] = AWS.util.date.rfc822(date);
      }
  
      if (credentials.sessionToken) {
        this.request.headers['x-amz-security-token'] = credentials.sessionToken;
      }
  
      var signature = this.sign(credentials.secretAccessKey, this.stringToSign());
      var auth = 'AWS ' + credentials.accessKeyId + ':' + signature;
  
      this.request.headers['Authorization'] = auth;
    },
  
    stringToSign: function stringToSign() {
      var r = this.request;
  
      var parts = [];
      parts.push(r.method);
      parts.push(r.headers['Content-MD5'] || '');
      parts.push(r.headers['Content-Type'] || '');
  
      parts.push(r.headers['presigned-expires'] || '');
  
      var headers = this.canonicalizedAmzHeaders();
      if (headers) parts.push(headers);
      parts.push(this.canonicalizedResource());
  
      return parts.join('\n');
  
    },
  
    canonicalizedAmzHeaders: function canonicalizedAmzHeaders() {
  
      var amzHeaders = [];
  
      AWS.util.each(this.request.headers, function (name) {
        if (name.match(/^x-amz-/i))
          amzHeaders.push(name);
      });
  
      amzHeaders.sort(function (a, b) {
        return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
      });
  
      var parts = [];
      AWS.util.arrayEach.call(this, amzHeaders, function (name) {
        parts.push(name.toLowerCase() + ':' + String(this.request.headers[name]));
      });
  
      return parts.join('\n');
  
    },
  
    canonicalizedResource: function canonicalizedResource() {
  
      var r = this.request;
  
      var parts = r.path.split('?');
      var path = parts[0];
      var querystring = parts[1];
  
      var resource = '';
  
      if (r.virtualHostedBucket)
        resource += '/' + r.virtualHostedBucket;
  
      resource += path;
  
      if (querystring) {
  
        var resources = [];
  
        AWS.util.arrayEach.call(this, querystring.split('&'), function (param) {
          var name = param.split('=')[0];
          var value = param.split('=')[1];
          if (this.subResources[name] || this.responseHeaders[name]) {
            var subresource = { name: name };
            if (value !== undefined) {
              if (this.subResources[name]) {
                subresource.value = value;
              } else {
                subresource.value = decodeURIComponent(value);
              }
            }
            resources.push(subresource);
          }
        });
  
        resources.sort(function (a, b) { return a.name < b.name ? -1 : 1; });
  
        if (resources.length) {
  
          querystring = [];
          AWS.util.arrayEach(resources, function (res) {
            if (res.value === undefined) {
              querystring.push(res.name);
            } else {
              querystring.push(res.name + '=' + res.value);
            }
          });
  
          resource += '?' + querystring.join('&');
        }
  
      }
  
      return resource;
  
    },
  
    sign: function sign(secret, string) {
      return AWS.util.crypto.hmac(secret, string, 'base64', 'sha1');
    }
  });
  
  
  module.exports = AWS.Signers.S3;
  
  },{"../core":16}],56:[function(require,module,exports){
  var AWS = require('../core');
  var inherit = AWS.util.inherit;
  
  
  AWS.Signers.V2 = inherit(AWS.Signers.RequestSigner, {
    addAuthorization: function addAuthorization(credentials, date) {
  
      if (!date) date = AWS.util.date.getDate();
  
      var r = this.request;
  
      r.params.Timestamp = AWS.util.date.iso8601(date);
      r.params.SignatureVersion = '2';
      r.params.SignatureMethod = 'HmacSHA256';
      r.params.AWSAccessKeyId = credentials.accessKeyId;
  
      if (credentials.sessionToken) {
        r.params.SecurityToken = credentials.sessionToken;
      }
  
      delete r.params.Signature; // delete old Signature for re-signing
      r.params.Signature = this.signature(credentials);
  
      r.body = AWS.util.queryParamsToString(r.params);
      r.headers['Content-Length'] = r.body.length;
    },
  
    signature: function signature(credentials) {
      return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
    },
  
    stringToSign: function stringToSign() {
      var parts = [];
      parts.push(this.request.method);
      parts.push(this.request.endpoint.host.toLowerCase());
      parts.push(this.request.pathname());
      parts.push(AWS.util.queryParamsToString(this.request.params));
      return parts.join('\n');
    }
  
  });
  
  
  module.exports = AWS.Signers.V2;
  
  },{"../core":16}],57:[function(require,module,exports){
  var AWS = require('../core');
  var inherit = AWS.util.inherit;
  
  
  AWS.Signers.V3 = inherit(AWS.Signers.RequestSigner, {
    addAuthorization: function addAuthorization(credentials, date) {
  
      var datetime = AWS.util.date.rfc822(date);
  
      this.request.headers['X-Amz-Date'] = datetime;
  
      if (credentials.sessionToken) {
        this.request.headers['x-amz-security-token'] = credentials.sessionToken;
      }
  
      this.request.headers['X-Amzn-Authorization'] =
        this.authorization(credentials, datetime);
  
    },
  
    authorization: function authorization(credentials) {
      return 'AWS3 ' +
        'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
        'Algorithm=HmacSHA256,' +
        'SignedHeaders=' + this.signedHeaders() + ',' +
        'Signature=' + this.signature(credentials);
    },
  
    signedHeaders: function signedHeaders() {
      var headers = [];
      AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
        headers.push(h.toLowerCase());
      });
      return headers.sort().join(';');
    },
  
    canonicalHeaders: function canonicalHeaders() {
      var headers = this.request.headers;
      var parts = [];
      AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
        parts.push(h.toLowerCase().trim() + ':' + String(headers[h]).trim());
      });
      return parts.sort().join('\n') + '\n';
    },
  
    headersToSign: function headersToSign() {
      var headers = [];
      AWS.util.each(this.request.headers, function iterator(k) {
        if (k === 'Host' || k === 'Content-Encoding' || k.match(/^X-Amz/i)) {
          headers.push(k);
        }
      });
      return headers;
    },
  
    signature: function signature(credentials) {
      return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
    },
  
    stringToSign: function stringToSign() {
      var parts = [];
      parts.push(this.request.method);
      parts.push('/');
      parts.push('');
      parts.push(this.canonicalHeaders());
      parts.push(this.request.body);
      return AWS.util.crypto.sha256(parts.join('\n'));
    }
  
  });
  
  
  module.exports = AWS.Signers.V3;
  
  },{"../core":16}],58:[function(require,module,exports){
  var AWS = require('../core');
  var inherit = AWS.util.inherit;
  
  require('./v3');
  
  
  AWS.Signers.V3Https = inherit(AWS.Signers.V3, {
    authorization: function authorization(credentials) {
      return 'AWS3-HTTPS ' +
        'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
        'Algorithm=HmacSHA256,' +
        'Signature=' + this.signature(credentials);
    },
  
    stringToSign: function stringToSign() {
      return this.request.headers['X-Amz-Date'];
    }
  });
  
  
  module.exports = AWS.Signers.V3Https;
  
  },{"../core":16,"./v3":57}],59:[function(require,module,exports){
  var AWS = require('../core');
  var v4Credentials = require('./v4_credentials');
  var inherit = AWS.util.inherit;
  
  
  var expiresHeader = 'presigned-expires';
  
  
  AWS.Signers.V4 = inherit(AWS.Signers.RequestSigner, {
    constructor: function V4(request, serviceName, options) {
      AWS.Signers.RequestSigner.call(this, request);
      this.serviceName = serviceName;
      options = options || {};
      this.signatureCache = typeof options.signatureCache === 'boolean' ? options.signatureCache : true;
      this.operation = options.operation;
      this.signatureVersion = options.signatureVersion;
    },
  
    algorithm: 'AWS4-HMAC-SHA256',
  
    addAuthorization: function addAuthorization(credentials, date) {
      var datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '');
  
      if (this.isPresigned()) {
        this.updateForPresigned(credentials, datetime);
      } else {
        this.addHeaders(credentials, datetime);
      }
  
      this.request.headers['Authorization'] =
        this.authorization(credentials, datetime);
    },
  
    addHeaders: function addHeaders(credentials, datetime) {
      this.request.headers['X-Amz-Date'] = datetime;
      if (credentials.sessionToken) {
        this.request.headers['x-amz-security-token'] = credentials.sessionToken;
      }
    },
  
    updateForPresigned: function updateForPresigned(credentials, datetime) {
      var credString = this.credentialString(datetime);
      var qs = {
        'X-Amz-Date': datetime,
        'X-Amz-Algorithm': this.algorithm,
        'X-Amz-Credential': credentials.accessKeyId + '/' + credString,
        'X-Amz-Expires': this.request.headers[expiresHeader],
        'X-Amz-SignedHeaders': this.signedHeaders()
      };
  
      if (credentials.sessionToken) {
        qs['X-Amz-Security-Token'] = credentials.sessionToken;
      }
  
      if (this.request.headers['Content-Type']) {
        qs['Content-Type'] = this.request.headers['Content-Type'];
      }
      if (this.request.headers['Content-MD5']) {
        qs['Content-MD5'] = this.request.headers['Content-MD5'];
      }
      if (this.request.headers['Cache-Control']) {
        qs['Cache-Control'] = this.request.headers['Cache-Control'];
      }
  
      AWS.util.each.call(this, this.request.headers, function(key, value) {
        if (key === expiresHeader) return;
        if (this.isSignableHeader(key)) {
          var lowerKey = key.toLowerCase();
          if (lowerKey.indexOf('x-amz-meta-') === 0) {
            qs[lowerKey] = value;
          } else if (lowerKey.indexOf('x-amz-') === 0) {
            qs[key] = value;
          }
        }
      });
  
      var sep = this.request.path.indexOf('?') >= 0 ? '&' : '?';
      this.request.path += sep + AWS.util.queryParamsToString(qs);
    },
  
    authorization: function authorization(credentials, datetime) {
      var parts = [];
      var credString = this.credentialString(datetime);
      parts.push(this.algorithm + ' Credential=' +
        credentials.accessKeyId + '/' + credString);
      parts.push('SignedHeaders=' + this.signedHeaders());
      parts.push('Signature=' + this.signature(credentials, datetime));
      return parts.join(', ');
    },
  
    signature: function signature(credentials, datetime) {
      var signingKey = v4Credentials.getSigningKey(
        credentials,
        datetime.substr(0, 8),
        this.request.region,
        this.serviceName,
        this.signatureCache
      );
      return AWS.util.crypto.hmac(signingKey, this.stringToSign(datetime), 'hex');
    },
  
    stringToSign: function stringToSign(datetime) {
      var parts = [];
      parts.push('AWS4-HMAC-SHA256');
      parts.push(datetime);
      parts.push(this.credentialString(datetime));
      parts.push(this.hexEncodedHash(this.canonicalString()));
      return parts.join('\n');
    },
  
    canonicalString: function canonicalString() {
      var parts = [], pathname = this.request.pathname();
      if (this.serviceName !== 's3' && this.signatureVersion !== 's3v4') pathname = AWS.util.uriEscapePath(pathname);
  
      parts.push(this.request.method);
      parts.push(pathname);
      parts.push(this.request.search());
      parts.push(this.canonicalHeaders() + '\n');
      parts.push(this.signedHeaders());
      parts.push(this.hexEncodedBodyHash());
      return parts.join('\n');
    },
  
    canonicalHeaders: function canonicalHeaders() {
      var headers = [];
      AWS.util.each.call(this, this.request.headers, function (key, item) {
        headers.push([key, item]);
      });
      headers.sort(function (a, b) {
        return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
      });
      var parts = [];
      AWS.util.arrayEach.call(this, headers, function (item) {
        var key = item[0].toLowerCase();
        if (this.isSignableHeader(key)) {
          var value = item[1];
          if (typeof value === 'undefined' || value === null || typeof value.toString !== 'function') {
            throw AWS.util.error(new Error('Header ' + key + ' contains invalid value'), {
              code: 'InvalidHeader'
            });
          }
          parts.push(key + ':' +
            this.canonicalHeaderValues(value.toString()));
        }
      });
      return parts.join('\n');
    },
  
    canonicalHeaderValues: function canonicalHeaderValues(values) {
      return values.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
    },
  
    signedHeaders: function signedHeaders() {
      var keys = [];
      AWS.util.each.call(this, this.request.headers, function (key) {
        key = key.toLowerCase();
        if (this.isSignableHeader(key)) keys.push(key);
      });
      return keys.sort().join(';');
    },
  
    credentialString: function credentialString(datetime) {
      return v4Credentials.createScope(
        datetime.substr(0, 8),
        this.request.region,
        this.serviceName
      );
    },
  
    hexEncodedHash: function hash(string) {
      return AWS.util.crypto.sha256(string, 'hex');
    },
  
    hexEncodedBodyHash: function hexEncodedBodyHash() {
      var request = this.request;
      if (this.isPresigned() && (['s3', 's3-object-lambda'].indexOf(this.serviceName) > -1) && !request.body) {
        return 'UNSIGNED-PAYLOAD';
      } else if (request.headers['X-Amz-Content-Sha256']) {
        return request.headers['X-Amz-Content-Sha256'];
      } else {
        return this.hexEncodedHash(this.request.body || '');
      }
    },
  
    unsignableHeaders: [
      'authorization',
      'content-type',
      'content-length',
      'user-agent',
      expiresHeader,
      'expect',
      'x-amzn-trace-id'
    ],
  
    isSignableHeader: function isSignableHeader(key) {
      if (key.toLowerCase().indexOf('x-amz-') === 0) return true;
      return this.unsignableHeaders.indexOf(key) < 0;
    },
  
    isPresigned: function isPresigned() {
      return this.request.headers[expiresHeader] ? true : false;
    }
  
  });
  
  
  module.exports = AWS.Signers.V4;
  
  },{"../core":16,"./v4_credentials":60}],60:[function(require,module,exports){
  var AWS = require('../core');
  
  
  var cachedSecret = {};
  
  
  var cacheQueue = [];
  
  
  var maxCacheEntries = 50;
  
  
  var v4Identifier = 'aws4_request';
  
  
  module.exports = {
  
    createScope: function createScope(date, region, serviceName) {
      return [
        date.substr(0, 8),
        region,
        serviceName,
        v4Identifier
      ].join('/');
    },
  
  
    getSigningKey: function getSigningKey(
      credentials,
      date,
      region,
      service,
      shouldCache
    ) {
      var credsIdentifier = AWS.util.crypto
        .hmac(credentials.secretAccessKey, credentials.accessKeyId, 'base64');
      var cacheKey = [credsIdentifier, date, region, service].join('_');
      shouldCache = shouldCache !== false;
      if (shouldCache && (cacheKey in cachedSecret)) {
        return cachedSecret[cacheKey];
      }
  
      var kDate = AWS.util.crypto.hmac(
        'AWS4' + credentials.secretAccessKey,
        date,
        'buffer'
      );
      var kRegion = AWS.util.crypto.hmac(kDate, region, 'buffer');
      var kService = AWS.util.crypto.hmac(kRegion, service, 'buffer');
  
      var signingKey = AWS.util.crypto.hmac(kService, v4Identifier, 'buffer');
      if (shouldCache) {
        cachedSecret[cacheKey] = signingKey;
        cacheQueue.push(cacheKey);
        if (cacheQueue.length > maxCacheEntries) {
          delete cachedSecret[cacheQueue.shift()];
        }
      }
  
      return signingKey;
    },
  
  
    emptyCache: function emptyCache() {
      cachedSecret = {};
      cacheQueue = [];
    }
  };
  
  },{"../core":16}],61:[function(require,module,exports){
  function AcceptorStateMachine(states, state) {
    this.currentState = state || null;
    this.states = states || {};
  }
  
  AcceptorStateMachine.prototype.runTo = function runTo(finalState, done, bindObject, inputError) {
    if (typeof finalState === 'function') {
      inputError = bindObject; bindObject = done;
      done = finalState; finalState = null;
    }
  
    var self = this;
    var state = self.states[self.currentState];
    state.fn.call(bindObject || self, inputError, function(err) {
      if (err) {
        if (state.fail) self.currentState = state.fail;
        else return done ? done.call(bindObject, err) : null;
      } else {
        if (state.accept) self.currentState = state.accept;
        else return done ? done.call(bindObject) : null;
      }
      if (self.currentState === finalState) {
        return done ? done.call(bindObject, err) : null;
      }
  
      self.runTo(finalState, done, bindObject, err);
    });
  };
  
  AcceptorStateMachine.prototype.addState = function addState(name, acceptState, failState, fn) {
    if (typeof acceptState === 'function') {
      fn = acceptState; acceptState = null; failState = null;
    } else if (typeof failState === 'function') {
      fn = failState; failState = null;
    }
  
    if (!this.currentState) this.currentState = name;
    this.states[name] = { accept: acceptState, fail: failState, fn: fn };
    return this;
  };
  
  
  module.exports = AcceptorStateMachine;
  
  },{}],62:[function(require,module,exports){
  (function (process,setImmediate){(function (){
  
  var AWS;
  
  
  var util = {
    environment: 'nodejs',
    engine: function engine() {
      if (util.isBrowser() && typeof navigator !== 'undefined') {
        return navigator.userAgent;
      } else {
        var engine = process.platform + '/' + process.version;
        if (process.env.AWS_EXECUTION_ENV) {
          engine += ' exec-env/' + process.env.AWS_EXECUTION_ENV;
        }
        return engine;
      }
    },
  
    userAgent: function userAgent() {
      var name = util.environment;
      var agent = 'ibm-cos-sdk-' + name + '/' + require('./core').VERSION;
      if (name === 'nodejs') agent += ' ' + util.engine();
      return agent;
    },
  
    isBrowser: function isBrowser() { return process && process.browser; },
    isNode: function isNode() { return !util.isBrowser(); },
  
    uriEscape: function uriEscape(string) {
      var output = encodeURIComponent(string);
      output = output.replace(/[^A-Za-z0-9_.~\-%]+/g, escape);
  
      output = output.replace(/[*]/g, function(ch) {
        return '%' + ch.charCodeAt(0).toString(16).toUpperCase();
      });
  
      return output;
    },
  
    uriEscapePath: function uriEscapePath(string) {
      var parts = [];
      util.arrayEach(string.split('/'), function (part) {
        parts.push(util.uriEscape(part));
      });
      return parts.join('/');
    },
  
    urlParse: function urlParse(url) {
      return util.url.parse(url);
    },
  
    urlFormat: function urlFormat(url) {
      return util.url.format(url);
    },
  
    queryStringParse: function queryStringParse(qs) {
      return util.querystring.parse(qs);
    },
  
    queryParamsToString: function queryParamsToString(params) {
      var items = [];
      var escape = util.uriEscape;
      var sortedKeys = Object.keys(params).sort();
  
      util.arrayEach(sortedKeys, function(name) {
        var value = params[name];
        var ename = escape(name);
        var result = ename + '=';
        if (Array.isArray(value)) {
          var vals = [];
          util.arrayEach(value, function(item) { vals.push(escape(item)); });
          result = ename + '=' + vals.sort().join('&' + ename + '=');
        } else if (value !== undefined && value !== null) {
          result = ename + '=' + escape(value);
        }
        items.push(result);
      });
  
      return items.join('&');
    },
  
    readFileSync: function readFileSync(path) {
      if (util.isBrowser()) return null;
      return require('fs').readFileSync(path, 'utf-8');
    },
  
    base64: {
      encode: function encode64(string) {
        if (typeof string === 'number') {
          throw util.error(new Error('Cannot base64 encode number ' + string));
        }
        if (string === null || typeof string === 'undefined') {
          return string;
        }
        var buf = util.buffer.toBuffer(string);
        return buf.toString('base64');
      },
  
      decode: function decode64(string) {
        if (typeof string === 'number') {
          throw util.error(new Error('Cannot base64 decode number ' + string));
        }
        if (string === null || typeof string === 'undefined') {
          return string;
        }
        return util.buffer.toBuffer(string, 'base64');
      }
  
    },
  
    buffer: {
  
      toBuffer: function(data, encoding) {
        return (typeof util.Buffer.from === 'function' && util.Buffer.from !== Uint8Array.from) ?
          util.Buffer.from(data, encoding) : new util.Buffer(data, encoding);
      },
  
      alloc: function(size, fill, encoding) {
        if (typeof size !== 'number') {
          throw new Error('size passed to alloc must be a number.');
        }
        if (typeof util.Buffer.alloc === 'function') {
          return util.Buffer.alloc(size, fill, encoding);
        } else {
          var buf = new util.Buffer(size);
          if (fill !== undefined && typeof buf.fill === 'function') {
            buf.fill(fill, undefined, undefined, encoding);
          }
          return buf;
        }
      },
  
      toStream: function toStream(buffer) {
        if (!util.Buffer.isBuffer(buffer)) buffer =  util.buffer.toBuffer(buffer);
  
        var readable = new (util.stream.Readable)();
        var pos = 0;
        readable._read = function(size) {
          if (pos >= buffer.length) return readable.push(null);
  
          var end = pos + size;
          if (end > buffer.length) end = buffer.length;
          readable.push(buffer.slice(pos, end));
          pos = end;
        };
  
        return readable;
      },
  
  
      concat: function(buffers) {
        var length = 0,
            offset = 0,
            buffer = null, i;
  
        for (i = 0; i < buffers.length; i++) {
          length += buffers[i].length;
        }
  
        buffer = util.buffer.alloc(length);
  
        for (i = 0; i < buffers.length; i++) {
          buffers[i].copy(buffer, offset);
          offset += buffers[i].length;
        }
  
        return buffer;
      }
    },
  
    string: {
      byteLength: function byteLength(string) {
        if (string === null || string === undefined) return 0;
        if (typeof string === 'string') string = util.buffer.toBuffer(string);
  
        if (typeof string.byteLength === 'number') {
          return string.byteLength;
        } else if (typeof string.length === 'number') {
          return string.length;
        } else if (typeof string.size === 'number') {
          return string.size;
        } else if (typeof string.path === 'string') {
          return require('fs').lstatSync(string.path).size;
        } else {
          throw util.error(new Error('Cannot determine length of ' + string),
            { object: string });
        }
      },
  
      upperFirst: function upperFirst(string) {
        return string[0].toUpperCase() + string.substr(1);
      },
  
      lowerFirst: function lowerFirst(string) {
        return string[0].toLowerCase() + string.substr(1);
      }
    },
  
    ini: {
      parse: function string(ini) {
        var currentSection, map = {};
        util.arrayEach(ini.split(/\r?\n/), function(line) {
          line = line.split(/(^|\s)[;#]/)[0].trim(); // remove comments and trim
          var isSection = line[0] === '[' && line[line.length - 1] === ']';
          if (isSection) {
            currentSection = line.substring(1, line.length - 1);
            if (currentSection === '__proto__' || currentSection.split(/\s/)[1] === '__proto__') {
              throw util.error(
                new Error('Cannot load profile name \'' + currentSection + '\' from shared ini file.')
              );
            }
          } else if (currentSection) {
            var indexOfEqualsSign = line.indexOf('=');
            var start = 0;
            var end = line.length - 1;
            var isAssignment =
              indexOfEqualsSign !== -1 && indexOfEqualsSign !== start && indexOfEqualsSign !== end;
  
            if (isAssignment) {
              var name = line.substring(0, indexOfEqualsSign).trim();
              var value = line.substring(indexOfEqualsSign + 1).trim();
  
              map[currentSection] = map[currentSection] || {};
              map[currentSection][name] = value;
            }
          }
        });
  
        return map;
      }
    },
  
    fn: {
      noop: function() {},
      callback: function (err) { if (err) throw err; },
  
  
      makeAsync: function makeAsync(fn, expectedArgs) {
        if (expectedArgs && expectedArgs <= fn.length) {
          return fn;
        }
  
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          var callback = args.pop();
          var result = fn.apply(null, args);
          callback(result);
        };
      }
    },
  
  
    date: {
  
  
      getDate: function getDate() {
        if (!AWS) AWS = require('./core');
        if (AWS.config.systemClockOffset) { // use offset when non-zero
          return new Date(new Date().getTime() + AWS.config.systemClockOffset);
        } else {
          return new Date();
        }
      },
  
  
      iso8601: function iso8601(date) {
        if (date === undefined) { date = util.date.getDate(); }
        return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
      },
  
  
      rfc822: function rfc822(date) {
        if (date === undefined) { date = util.date.getDate(); }
        return date.toUTCString();
      },
  
  
      unixTimestamp: function unixTimestamp(date) {
        if (date === undefined) { date = util.date.getDate(); }
        return date.getTime() / 1000;
      },
  
  
      from: function format(date) {
        if (typeof date === 'number') {
          return new Date(date * 1000); // unix timestamp
        } else {
          return new Date(date);
        }
      },
  
  
      format: function format(date, formatter) {
        if (!formatter) formatter = 'iso8601';
        return util.date[formatter](util.date.from(date));
      },
  
      parseTimestamp: function parseTimestamp(value) {
        if (typeof value === 'number') { // unix timestamp (number)
          return new Date(value * 1000);
        } else if (value.match(/^\d+$/)) { // unix timestamp
          return new Date(value * 1000);
        } else if (value.match(/^\d{4}/)) { // iso8601
          return new Date(value);
        } else if (value.match(/^\w{3},/)) { // rfc822
          return new Date(value);
        } else {
          throw util.error(
            new Error('unhandled timestamp format: ' + value),
            {code: 'TimestampParserError'});
        }
      }
  
    },
  
    crypto: {
      crc32Table: [
       0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419,
       0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4,
       0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07,
       0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
       0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856,
       0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9,
       0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4,
       0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
       0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3,
       0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A,
       0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599,
       0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
       0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190,
       0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F,
       0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E,
       0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
       0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED,
       0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950,
       0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3,
       0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
       0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A,
       0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5,
       0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010,
       0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
       0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17,
       0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6,
       0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615,
       0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
       0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344,
       0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB,
       0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A,
       0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
       0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1,
       0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C,
       0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF,
       0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
       0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE,
       0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31,
       0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C,
       0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
       0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B,
       0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242,
       0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1,
       0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
       0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278,
       0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7,
       0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66,
       0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
       0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605,
       0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8,
       0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B,
       0x2D02EF8D],
  
      crc32: function crc32(data) {
        var tbl = util.crypto.crc32Table;
        var crc = 0 ^ -1;
  
        if (typeof data === 'string') {
          data = util.buffer.toBuffer(data);
        }
  
        for (var i = 0; i < data.length; i++) {
          var code = data.readUInt8(i);
          crc = (crc >>> 8) ^ tbl[(crc ^ code) & 0xFF];
        }
        return (crc ^ -1) >>> 0;
      },
  
      hmac: function hmac(key, string, digest, fn) {
        if (!digest) digest = 'binary';
        if (digest === 'buffer') { digest = undefined; }
        if (!fn) fn = 'sha256';
        if (typeof string === 'string') string = util.buffer.toBuffer(string);
        return util.crypto.lib.createHmac(fn, key).update(string).digest(digest);
      },
  
      md5: function md5(data, digest, callback) {
        return util.crypto.hash('md5', data, digest, callback);
      },
  
      sha256: function sha256(data, digest, callback) {
        return util.crypto.hash('sha256', data, digest, callback);
      },
  
      hash: function(algorithm, data, digest, callback) {
        var hash = util.crypto.createHash(algorithm);
        if (!digest) { digest = 'binary'; }
        if (digest === 'buffer') { digest = undefined; }
        if (typeof data === 'string') data = util.buffer.toBuffer(data);
        var sliceFn = util.arraySliceFn(data);
        var isBuffer = util.Buffer.isBuffer(data);
        if (util.isBrowser() && typeof ArrayBuffer !== 'undefined' && data && data.buffer instanceof ArrayBuffer) isBuffer = true;
  
        if (callback && typeof data === 'object' &&
            typeof data.on === 'function' && !isBuffer) {
          data.on('data', function(chunk) { hash.update(chunk); });
          data.on('error', function(err) { callback(err); });
          data.on('end', function() { callback(null, hash.digest(digest)); });
        } else if (callback && sliceFn && !isBuffer &&
                   typeof FileReader !== 'undefined') {
          var index = 0, size = 1024 * 512;
          var reader = new FileReader();
          reader.onerror = function() {
            callback(new Error('Failed to read data.'));
          };
          reader.onload = function() {
            var buf = new util.Buffer(new Uint8Array(reader.result));
            hash.update(buf);
            index += buf.length;
            reader._continueReading();
          };
          reader._continueReading = function() {
            if (index >= data.size) {
              callback(null, hash.digest(digest));
              return;
            }
  
            var back = index + size;
            if (back > data.size) back = data.size;
            reader.readAsArrayBuffer(sliceFn.call(data, index, back));
          };
  
          reader._continueReading();
        } else {
          if (util.isBrowser() && typeof data === 'object' && !isBuffer) {
            data = new util.Buffer(new Uint8Array(data));
          }
          var out = hash.update(data).digest(digest);
          if (callback) callback(null, out);
          return out;
        }
      },
  
      toHex: function toHex(data) {
        var out = [];
        for (var i = 0; i < data.length; i++) {
          out.push(('0' + data.charCodeAt(i).toString(16)).substr(-2, 2));
        }
        return out.join('');
      },
  
      createHash: function createHash(algorithm) {
        return util.crypto.lib.createHash(algorithm);
      }
  
    },
  
  
  
  
    abort: {},
  
    each: function each(object, iterFunction) {
      for (var key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          var ret = iterFunction.call(this, key, object[key]);
          if (ret === util.abort) break;
        }
      }
    },
  
    arrayEach: function arrayEach(array, iterFunction) {
      for (var idx in array) {
        if (Object.prototype.hasOwnProperty.call(array, idx)) {
          var ret = iterFunction.call(this, array[idx], parseInt(idx, 10));
          if (ret === util.abort) break;
        }
      }
    },
  
    update: function update(obj1, obj2) {
      util.each(obj2, function iterator(key, item) {
        obj1[key] = item;
      });
      return obj1;
    },
  
    merge: function merge(obj1, obj2) {
      return util.update(util.copy(obj1), obj2);
    },
  
    copy: function copy(object) {
      if (object === null || object === undefined) return object;
      var dupe = {};
      for (var key in object) {
        dupe[key] = object[key];
      }
      return dupe;
    },
  
    isEmpty: function isEmpty(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          return false;
        }
      }
      return true;
    },
  
    arraySliceFn: function arraySliceFn(obj) {
      var fn = obj.slice || obj.webkitSlice || obj.mozSlice;
      return typeof fn === 'function' ? fn : null;
    },
  
    isType: function isType(obj, type) {
      if (typeof type === 'function') type = util.typeName(type);
      return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    },
  
    typeName: function typeName(type) {
      if (Object.prototype.hasOwnProperty.call(type, 'name')) return type.name;
      var str = type.toString();
      var match = str.match(/^\s*function (.+)\(/);
      return match ? match[1] : str;
    },
  
    error: function error(err, options) {
      var originalError = null;
      if (typeof err.message === 'string' && err.message !== '') {
        if (typeof options === 'string' || (options && options.message)) {
          originalError = util.copy(err);
          originalError.message = err.message;
        }
      }
      err.message = err.message || null;
  
      if (typeof options === 'string') {
        err.message = options;
      } else if (typeof options === 'object' && options !== null) {
        util.update(err, options);
        if (options.message)
          err.message = options.message;
        if (options.code || options.name)
          err.code = options.code || options.name;
        if (options.stack)
          err.stack = options.stack;
      }
  
      if (typeof Object.defineProperty === 'function') {
        Object.defineProperty(err, 'name', {writable: true, enumerable: false});
        Object.defineProperty(err, 'message', {enumerable: true});
      }
  
      err.name = String(options && options.name || err.name || err.code || 'Error');
      err.time = new Date();
  
      if (originalError) {
        err.originalError = originalError;
      }
  
  
      for (var key in options || {}) {
        if (key[0] === '[' && key[key.length - 1] === ']') {
          key = key.slice(1, -1);
          if (key === 'code' || key === 'message') {
            continue;
          }
          err['[' + key + ']'] = 'See error.' + key + ' for details.';
          Object.defineProperty(err, key, {
            value: err[key] || (options && options[key]) || (originalError && originalError[key]),
            enumerable: false,
            writable: true
          });
        }
      }
  
      return err;
    },
  
  
    inherit: function inherit(klass, features) {
      var newObject = null;
      if (features === undefined) {
        features = klass;
        klass = Object;
        newObject = {};
      } else {
        var ctor = function ConstructorWrapper() {};
        ctor.prototype = klass.prototype;
        newObject = new ctor();
      }
  
      if (features.constructor === Object) {
        features.constructor = function() {
          if (klass !== Object) {
            return klass.apply(this, arguments);
          }
        };
      }
  
      features.constructor.prototype = newObject;
      util.update(features.constructor.prototype, features);
      features.constructor.__super__ = klass;
      return features.constructor;
    },
  
  
    mixin: function mixin() {
      var klass = arguments[0];
      for (var i = 1; i < arguments.length; i++) {
        for (var prop in arguments[i].prototype) {
          var fn = arguments[i].prototype[prop];
          if (prop !== 'constructor') {
            klass.prototype[prop] = fn;
          }
        }
      }
      return klass;
    },
  
  
    hideProperties: function hideProperties(obj, props) {
      if (typeof Object.defineProperty !== 'function') return;
  
      util.arrayEach(props, function (key) {
        Object.defineProperty(obj, key, {
          enumerable: false, writable: true, configurable: true });
      });
    },
  
  
    property: function property(obj, name, value, enumerable, isValue) {
      var opts = {
        configurable: true,
        enumerable: enumerable !== undefined ? enumerable : true
      };
      if (typeof value === 'function' && !isValue) {
        opts.get = value;
      }
      else {
        opts.value = value; opts.writable = true;
      }
  
      Object.defineProperty(obj, name, opts);
    },
  
  
    memoizedProperty: function memoizedProperty(obj, name, get, enumerable) {
      var cachedValue = null;
  
      util.property(obj, name, function() {
        if (cachedValue === null) {
          cachedValue = get();
        }
        return cachedValue;
      }, enumerable);
    },
  
  
    hoistPayloadMember: function hoistPayloadMember(resp) {
      var req = resp.request;
      var operationName = req.operation;
      var operation = req.service.api.operations[operationName];
      var output = operation.output;
      if (output.payload && !operation.hasEventOutput) {
        var payloadMember = output.members[output.payload];
        var responsePayload = resp.data[output.payload];
        if (payloadMember.type === 'structure') {
          util.each(responsePayload, function(key, value) {
            util.property(resp.data, key, value, false);
          });
        }
      }
    },
  
  
    computeSha256: function computeSha256(body, done) {
      if (util.isNode()) {
        var Stream = util.stream.Stream;
        var fs = require('fs');
        if (typeof Stream === 'function' && body instanceof Stream) {
          if (typeof body.path === 'string') { // assume file object
            var settings = {};
            if (typeof body.start === 'number') {
              settings.start = body.start;
            }
            if (typeof body.end === 'number') {
              settings.end = body.end;
            }
            body = fs.createReadStream(body.path, settings);
          } else { // TODO support other stream types
            return done(new Error('Non-file stream objects are ' +
                                  'not supported with SigV4'));
          }
        }
      }
  
      util.crypto.sha256(body, 'hex', function(err, sha) {
        if (err) done(err);
        else done(null, sha);
      });
    },
  
  
    computeContentMD5: function computeContentMD5(body, done) {
      if (util.isNode()) {
        var Stream = util.stream.Stream;
        var fs = require('fs');
        if (body instanceof Stream) {
          if (typeof body.path === 'string') { // assume file object
            var settings = {};
            if (typeof body.start === 'number') {
              settings.start = body.start;
            }
            if (typeof body.end === 'number') {
              settings.end = body.end;
            }
            body = fs.createReadStream(body.path, settings);
          } else { // TODO support other stream types
            return done(new Error('Non-file stream objects are ' +
                                  'not supported with SigV4'));
          }
        }
      }
  
      util.crypto.md5(body, 'base64', function(err, sha) {
        if (err) done(err);
        else done(null, sha);
      });
    },
  
  
    isClockSkewed: function isClockSkewed(serverTime) {
      if (serverTime) {
        util.property(AWS.config, 'isClockSkewed',
          Math.abs(new Date().getTime() - serverTime) >= 300000, false);
        return AWS.config.isClockSkewed;
      }
    },
  
    applyClockOffset: function applyClockOffset(serverTime) {
      if (serverTime)
        AWS.config.systemClockOffset = serverTime - new Date().getTime();
    },
  
  
    extractRequestId: function extractRequestId(resp) {
      var requestId = resp.httpResponse.headers['x-amz-request-id'] ||
                       resp.httpResponse.headers['x-amzn-requestid'];
  
      if (!requestId && resp.data && resp.data.ResponseMetadata) {
        requestId = resp.data.ResponseMetadata.RequestId;
      }
  
      if (requestId) {
        resp.requestId = requestId;
      }
  
      if (resp.error) {
        resp.error.requestId = requestId;
      }
    },
  
  
    addPromises: function addPromises(constructors, PromiseDependency) {
      var deletePromises = false;
      if (PromiseDependency === undefined && AWS && AWS.config) {
        PromiseDependency = AWS.config.getPromisesDependency();
      }
      if (PromiseDependency === undefined && typeof Promise !== 'undefined') {
        PromiseDependency = Promise;
      }
      if (typeof PromiseDependency !== 'function') deletePromises = true;
      if (!Array.isArray(constructors)) constructors = [constructors];
  
      for (var ind = 0; ind < constructors.length; ind++) {
        var constructor = constructors[ind];
        if (deletePromises) {
          if (constructor.deletePromisesFromClass) {
            constructor.deletePromisesFromClass();
          }
        } else if (constructor.addPromisesToClass) {
          constructor.addPromisesToClass(PromiseDependency);
        }
      }
    },
  
  
    promisifyMethod: function promisifyMethod(methodName, PromiseDependency) {
      return function promise() {
        var self = this;
        var args = Array.prototype.slice.call(arguments);
        return new PromiseDependency(function(resolve, reject) {
          args.push(function(err, data) {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
          self[methodName].apply(self, args);
        });
      };
    },
  
  
    isDualstackAvailable: function isDualstackAvailable(service) {
      if (!service) return false;
      var metadata = require('../apis/metadata.json');
      if (typeof service !== 'string') service = service.serviceIdentifier;
      if (typeof service !== 'string' || !metadata.hasOwnProperty(service)) return false;
      return !!metadata[service].dualstackAvailable;
    },
  
  
    calculateRetryDelay: function calculateRetryDelay(retryCount, retryDelayOptions, err) {
      if (!retryDelayOptions) retryDelayOptions = {};
      var customBackoff = retryDelayOptions.customBackoff || null;
      if (typeof customBackoff === 'function') {
        return customBackoff(retryCount, err);
      }
      var base = typeof retryDelayOptions.base === 'number' ? retryDelayOptions.base : 100;
      var delay = Math.random() * (Math.pow(2, retryCount) * base);
      return delay;
    },
  
  
    handleRequestWithRetries: function handleRequestWithRetries(httpRequest, options, cb) {
      if (!options) options = {};
      var http = AWS.HttpClient.getInstance();
      var httpOptions = options.httpOptions || {};
      var retryCount = 0;
  
      var errCallback = function(err) {
        var maxRetries = options.maxRetries || 0;
        if (err && err.code === 'TimeoutError') err.retryable = true;
  
        if (err && err.retryable && retryCount < maxRetries) {
          var delay = util.calculateRetryDelay(retryCount, options.retryDelayOptions, err);
          if (delay >= 0) {
            retryCount++;
            setTimeout(sendRequest, delay + (err.retryAfter || 0));
            return;
          }
        }
        cb(err);
      };
  
      var sendRequest = function() {
        var data = '';
        http.handleRequest(httpRequest, httpOptions, function(httpResponse) {
          httpResponse.on('data', function(chunk) { data += chunk.toString(); });
          httpResponse.on('end', function() {
            var statusCode = httpResponse.statusCode;
            if (statusCode < 300) {
              cb(null, data);
            } else {
              var retryAfter = parseInt(httpResponse.headers['retry-after'], 10) * 1000 || 0;
              var err = util.error(new Error(),
                {
                  statusCode: statusCode,
                  retryable: statusCode >= 500 || statusCode === 429
                }
              );
              if (retryAfter && err.retryable) err.retryAfter = retryAfter;
              errCallback(err);
            }
          });
        }, errCallback);
      };
  
      AWS.util.defer(sendRequest);
    },
  
  
    uuid: {
      v4: function uuidV4() {
        return require('uuid').v4();
      }
    },
  
  
    convertPayloadToString: function convertPayloadToString(resp) {
      var req = resp.request;
      var operation = req.operation;
      var rules = req.service.api.operations[operation].output || {};
      if (rules.payload && resp.data[rules.payload]) {
        resp.data[rules.payload] = resp.data[rules.payload].toString();
      }
    },
  
  
    defer: function defer(callback) {
      if (typeof process === 'object' && typeof process.nextTick === 'function') {
        process.nextTick(callback);
      } else if (typeof setImmediate === 'function') {
        setImmediate(callback);
      } else {
        setTimeout(callback, 0);
      }
    },
  
  
    getRequestPayloadShape: function getRequestPayloadShape(req) {
      var operations = req.service.api.operations;
      if (!operations) return undefined;
      var operation = (operations || {})[req.operation];
      if (!operation || !operation.input || !operation.input.payload) return undefined;
      return operation.input.members[operation.input.payload];
    },
  
    getProfilesFromSharedConfig: function getProfilesFromSharedConfig(iniLoader, filename) {
      var profiles = {};
      var profilesFromConfig = {};
      if (process.env[util.configOptInEnv]) {
        var profilesFromConfig = iniLoader.loadFrom({
          isConfig: true,
          filename: process.env[util.sharedConfigFileEnv]
        });
      }
      var profilesFromCreds= {};
      try {
        var profilesFromCreds = iniLoader.loadFrom({
          filename: filename ||
            (process.env[util.configOptInEnv] && process.env[util.sharedCredentialsFileEnv])
        });
      } catch (error) {
        if (!process.env[util.configOptInEnv]) throw error;
      }
      for (var i = 0, profileNames = Object.keys(profilesFromConfig); i < profileNames.length; i++) {
        profiles[profileNames[i]] = objectAssign(profiles[profileNames[i]] || {}, profilesFromConfig[profileNames[i]]);
      }
      for (var i = 0, profileNames = Object.keys(profilesFromCreds); i < profileNames.length; i++) {
        profiles[profileNames[i]] = objectAssign(profiles[profileNames[i]] || {}, profilesFromCreds[profileNames[i]]);
      }
      return profiles;
  
  
      function objectAssign(target, source) {
        for (var i = 0, keys = Object.keys(source); i < keys.length; i++) {
          target[keys[i]] = source[keys[i]];
        }
        return target;
      }
    },
  
  
    defaultProfile: 'default',
  
  
    configOptInEnv: 'AWS_SDK_LOAD_CONFIG',
  
  
    sharedCredentialsFileEnv: 'AWS_SHARED_CREDENTIALS_FILE',
  
  
    sharedConfigFileEnv: 'AWS_CONFIG_FILE',
  
  
    imdsDisabledEnv: 'AWS_EC2_METADATA_DISABLED'
  };
  
  
  module.exports = util;
  
  }).call(this)}).call(this,require('_process'),require("timers").setImmediate)
  },{"../apis/metadata.json":1,"./core":16,"_process":116,"fs":70,"timers":133,"uuid":135}],63:[function(require,module,exports){
  var util = require('../util');
  var Shape = require('../model/shape');
  
  function DomXmlParser() { }
  
  DomXmlParser.prototype.parse = function(xml, shape) {
    if (xml.replace(/^\s+/, '') === '') return {};
  
    var result, error;
    try {
      if (window.DOMParser) {
        try {
          var parser = new DOMParser();
          result = parser.parseFromString(xml, 'text/xml');
        } catch (syntaxError) {
          throw util.error(new Error('Parse error in document'),
            {
              originalError: syntaxError,
              code: 'XMLParserError',
              retryable: true
            });
        }
  
        if (result.documentElement === null) {
          throw util.error(new Error('Cannot parse empty document.'),
            {
              code: 'XMLParserError',
              retryable: true
            });
        }
  
        var isError = result.getElementsByTagName('parsererror')[0];
        if (isError && (isError.parentNode === result ||
            isError.parentNode.nodeName === 'body' ||
            isError.parentNode.parentNode === result ||
            isError.parentNode.parentNode.nodeName === 'body')) {
          var errorElement = isError.getElementsByTagName('div')[0] || isError;
          throw util.error(new Error(errorElement.textContent || 'Parser error in document'),
            {
              code: 'XMLParserError',
              retryable: true
            });
        }
      } else if (window.ActiveXObject) {
        result = new window.ActiveXObject('Microsoft.XMLDOM');
        result.async = false;
  
        if (!result.loadXML(xml)) {
          throw util.error(new Error('Parse error in document'),
            {
              code: 'XMLParserError',
              retryable: true
            });
        }
      } else {
        throw new Error('Cannot load XML parser');
      }
    } catch (e) {
      error = e;
    }
  
    if (result && result.documentElement && !error) {
      var data = parseXml(result.documentElement, shape);
      var metadata = getElementByTagName(result.documentElement, 'ResponseMetadata');
      if (metadata) {
        data.ResponseMetadata = parseXml(metadata, {});
      }
      return data;
    } else if (error) {
      throw util.error(error || new Error(), {code: 'XMLParserError', retryable: true});
    } else { // empty xml document
      return {};
    }
  };
  
  function getElementByTagName(xml, tag) {
    var elements = xml.getElementsByTagName(tag);
    for (var i = 0, iLen = elements.length; i < iLen; i++) {
      if (elements[i].parentNode === xml) {
        return elements[i];
      }
    }
  }
  
  function parseXml(xml, shape) {
    if (!shape) shape = {};
    switch (shape.type) {
      case 'structure': return parseStructure(xml, shape);
      case 'map': return parseMap(xml, shape);
      case 'list': return parseList(xml, shape);
      case undefined: case null: return parseUnknown(xml);
      default: return parseScalar(xml, shape);
    }
  }
  
  function parseStructure(xml, shape) {
    var data = {};
    if (xml === null) return data;
  
    util.each(shape.members, function(memberName, memberShape) {
      if (memberShape.isXmlAttribute) {
        if (Object.prototype.hasOwnProperty.call(xml.attributes, memberShape.name)) {
          var value = xml.attributes[memberShape.name].value;
          data[memberName] = parseXml({textContent: value}, memberShape);
        }
      } else {
        var xmlChild = memberShape.flattened ? xml :
          getElementByTagName(xml, memberShape.name);
        if (xmlChild) {
          data[memberName] = parseXml(xmlChild, memberShape);
        } else if (
          !memberShape.flattened &&
          memberShape.type === 'list' &&
          !shape.api.xmlNoDefaultLists) {
          data[memberName] = memberShape.defaultValue;
        }
      }
    });
  
    return data;
  }
  
  function parseMap(xml, shape) {
    var data = {};
    var xmlKey = shape.key.name || 'key';
    var xmlValue = shape.value.name || 'value';
    var tagName = shape.flattened ? shape.name : 'entry';
  
    var child = xml.firstElementChild;
    while (child) {
      if (child.nodeName === tagName) {
        var key = getElementByTagName(child, xmlKey).textContent;
        var value = getElementByTagName(child, xmlValue);
        data[key] = parseXml(value, shape.value);
      }
      child = child.nextElementSibling;
    }
    return data;
  }
  
  function parseList(xml, shape) {
    var data = [];
    var tagName = shape.flattened ? shape.name : (shape.member.name || 'member');
  
    var child = xml.firstElementChild;
    while (child) {
      if (child.nodeName === tagName) {
        data.push(parseXml(child, shape.member));
      }
      child = child.nextElementSibling;
    }
    return data;
  }
  
  function parseScalar(xml, shape) {
    if (xml.getAttribute) {
      var encoding = xml.getAttribute('encoding');
      if (encoding === 'base64') {
        shape = new Shape.create({type: encoding});
      }
    }
  
    var text = xml.textContent;
    if (text === '') text = null;
    if (typeof shape.toType === 'function') {
      return shape.toType(text);
    } else {
      return text;
    }
  }
  
  function parseUnknown(xml) {
    if (xml === undefined || xml === null) return '';
  
    if (!xml.firstElementChild) {
      if (xml.parentNode.parentNode === null) return {};
      if (xml.childNodes.length === 0) return '';
      else return xml.textContent;
    }
  
    var shape = {type: 'structure', members: {}};
    var child = xml.firstElementChild;
    while (child) {
      var tag = child.nodeName;
      if (Object.prototype.hasOwnProperty.call(shape.members, tag)) {
        shape.members[tag].type = 'list';
      } else {
        shape.members[tag] = {name: tag};
      }
      child = child.nextElementSibling;
    }
    return parseStructure(xml, shape);
  }
  
  
  module.exports = DomXmlParser;
  
  },{"../model/shape":30,"../util":62}],64:[function(require,module,exports){
  var util = require('../util');
  var XmlNode = require('./xml-node').XmlNode;
  var XmlText = require('./xml-text').XmlText;
  
  function XmlBuilder() { }
  
  XmlBuilder.prototype.toXML = function(params, shape, rootElement, noEmpty) {
    var xml = new XmlNode(rootElement);
    applyNamespaces(xml, shape, true);
    serialize(xml, params, shape);
    return xml.children.length > 0 || noEmpty ? xml.toString() : '';
  };
  
  function serialize(xml, value, shape) {
    switch (shape.type) {
      case 'structure': return serializeStructure(xml, value, shape);
      case 'map': return serializeMap(xml, value, shape);
      case 'list': return serializeList(xml, value, shape);
      default: return serializeScalar(xml, value, shape);
    }
  }
  
  function serializeStructure(xml, params, shape) {
    util.arrayEach(shape.memberNames, function(memberName) {
      var memberShape = shape.members[memberName];
      if (memberShape.location !== 'body') return;
  
      var value = params[memberName];
      var name = memberShape.name;
      if (value !== undefined && value !== null) {
        if (memberShape.isXmlAttribute) {
          xml.addAttribute(name, value);
        } else if (memberShape.flattened) {
          serialize(xml, value, memberShape);
        } else {
          var element = new XmlNode(name);
          xml.addChildNode(element);
          applyNamespaces(element, memberShape);
          serialize(element, value, memberShape);
        }
      }
    });
  }
  
  function serializeMap(xml, map, shape) {
    var xmlKey = shape.key.name || 'key';
    var xmlValue = shape.value.name || 'value';
  
    util.each(map, function(key, value) {
      var entry = new XmlNode(shape.flattened ? shape.name : 'entry');
      xml.addChildNode(entry);
  
      var entryKey = new XmlNode(xmlKey);
      var entryValue = new XmlNode(xmlValue);
      entry.addChildNode(entryKey);
      entry.addChildNode(entryValue);
  
      serialize(entryKey, key, shape.key);
      serialize(entryValue, value, shape.value);
    });
  }
  
  function serializeList(xml, list, shape) {
    if (shape.flattened) {
      util.arrayEach(list, function(value) {
        var name = shape.member.name || shape.name;
        var element = new XmlNode(name);
        xml.addChildNode(element);
        serialize(element, value, shape.member);
      });
    } else {
      util.arrayEach(list, function(value) {
        var name = shape.member.name || 'member';
        var element = new XmlNode(name);
        xml.addChildNode(element);
        serialize(element, value, shape.member);
      });
    }
  }
  
  function serializeScalar(xml, value, shape) {
    xml.addChildNode(
      new XmlText(shape.toWireFormat(value))
    );
  }
  
  function applyNamespaces(xml, shape, isRoot) {
    var uri, prefix = 'xmlns';
    if (shape.xmlNamespaceUri) {
      uri = shape.xmlNamespaceUri;
      if (shape.xmlNamespacePrefix) prefix += ':' + shape.xmlNamespacePrefix;
    } else if (isRoot && shape.api.xmlNamespaceUri) {
      uri = shape.api.xmlNamespaceUri;
    }
  
    if (uri) xml.addAttribute(prefix, uri);
  }
  
  
  module.exports = XmlBuilder;
  
  },{"../util":62,"./xml-node":67,"./xml-text":68}],65:[function(require,module,exports){
  
  function escapeAttribute(value) {
      return value.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  
  
  module.exports = {
      escapeAttribute: escapeAttribute
  };
  
  },{}],66:[function(require,module,exports){
  
  function escapeElement(value) {
      return value.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/\r/g, '&#x0D;')
                  .replace(/\n/g, '&#x0A;')
                  .replace(/\u0085/g, '&#x85;')
                  .replace(/\u2028/, '&#x2028;');
  }
  
  
  module.exports = {
      escapeElement: escapeElement
  };
  
  },{}],67:[function(require,module,exports){
  var escapeAttribute = require('./escape-attribute').escapeAttribute;
  
  
  function XmlNode(name, children) {
      if (children === void 0) { children = []; }
      this.name = name;
      this.children = children;
      this.attributes = {};
  }
  XmlNode.prototype.addAttribute = function (name, value) {
      this.attributes[name] = value;
      return this;
  };
  XmlNode.prototype.addChildNode = function (child) {
      this.children.push(child);
      return this;
  };
  XmlNode.prototype.removeAttribute = function (name) {
      delete this.attributes[name];
      return this;
  };
  XmlNode.prototype.toString = function () {
      var hasChildren = Boolean(this.children.length);
      var xmlText = '<' + this.name;
      var attributes = this.attributes;
      for (var i = 0, attributeNames = Object.keys(attributes); i < attributeNames.length; i++) {
          var attributeName = attributeNames[i];
          var attribute = attributes[attributeName];
          if (typeof attribute !== 'undefined' && attribute !== null) {
              xmlText += ' ' + attributeName + '=\"' + escapeAttribute('' + attribute) + '\"';
          }
      }
      return xmlText += !hasChildren ? '/>' : '>' + this.children.map(function (c) { return c.toString(); }).join('') + '</' + this.name + '>';
  };
  
  
  module.exports = {
      XmlNode: XmlNode
  };
  
  },{"./escape-attribute":65}],68:[function(require,module,exports){
  var escapeElement = require('./escape-element').escapeElement;
  
  
  function XmlText(value) {
      this.value = value;
  }
  
  XmlText.prototype.toString = function () {
      return escapeElement('' + this.value);
  };
  
  
  module.exports = {
      XmlText: XmlText
  };
  
  },{"./escape-element":66}],69:[function(require,module,exports){
  'use strict'
  
  exports.byteLength = byteLength
  exports.toByteArray = toByteArray
  exports.fromByteArray = fromByteArray
  
  var lookup = []
  var revLookup = []
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
  
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i]
    revLookup[code.charCodeAt(i)] = i
  }
  
  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63
  
  function getLens (b64) {
    var len = b64.length
  
    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4')
    }
  
    var validLen = b64.indexOf('=')
    if (validLen === -1) validLen = len
  
    var placeHoldersLen = validLen === len
      ? 0
      : 4 - (validLen % 4)
  
    return [validLen, placeHoldersLen]
  }
  
  function byteLength (b64) {
    var lens = getLens(b64)
    var validLen = lens[0]
    var placeHoldersLen = lens[1]
    return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
  }
  
  function _byteLength (b64, validLen, placeHoldersLen) {
    return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
  }
  
  function toByteArray (b64) {
    var tmp
    var lens = getLens(b64)
    var validLen = lens[0]
    var placeHoldersLen = lens[1]
  
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))
  
    var curByte = 0
  
    var len = placeHoldersLen > 0
      ? validLen - 4
      : validLen
  
    var i
    for (i = 0; i < len; i += 4) {
      tmp =
        (revLookup[b64.charCodeAt(i)] << 18) |
        (revLookup[b64.charCodeAt(i + 1)] << 12) |
        (revLookup[b64.charCodeAt(i + 2)] << 6) |
        revLookup[b64.charCodeAt(i + 3)]
      arr[curByte++] = (tmp >> 16) & 0xFF
      arr[curByte++] = (tmp >> 8) & 0xFF
      arr[curByte++] = tmp & 0xFF
    }
  
    if (placeHoldersLen === 2) {
      tmp =
        (revLookup[b64.charCodeAt(i)] << 2) |
        (revLookup[b64.charCodeAt(i + 1)] >> 4)
      arr[curByte++] = tmp & 0xFF
    }
  
    if (placeHoldersLen === 1) {
      tmp =
        (revLookup[b64.charCodeAt(i)] << 10) |
        (revLookup[b64.charCodeAt(i + 1)] << 4) |
        (revLookup[b64.charCodeAt(i + 2)] >> 2)
      arr[curByte++] = (tmp >> 8) & 0xFF
      arr[curByte++] = tmp & 0xFF
    }
  
    return arr
  }
  
  function tripletToBase64 (num) {
    return lookup[num >> 18 & 0x3F] +
      lookup[num >> 12 & 0x3F] +
      lookup[num >> 6 & 0x3F] +
      lookup[num & 0x3F]
  }
  
  function encodeChunk (uint8, start, end) {
    var tmp
    var output = []
    for (var i = start; i < end; i += 3) {
      tmp =
        ((uint8[i] << 16) & 0xFF0000) +
        ((uint8[i + 1] << 8) & 0xFF00) +
        (uint8[i + 2] & 0xFF)
      output.push(tripletToBase64(tmp))
    }
    return output.join('')
  }
  
  function fromByteArray (uint8) {
    var tmp
    var len = uint8.length
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    var parts = []
    var maxChunkLength = 16383 // must be multiple of 3
  
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
    }
  
    if (extraBytes === 1) {
      tmp = uint8[len - 1]
      parts.push(
        lookup[tmp >> 2] +
        lookup[(tmp << 4) & 0x3F] +
        '=='
      )
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1]
      parts.push(
        lookup[tmp >> 10] +
        lookup[(tmp >> 4) & 0x3F] +
        lookup[(tmp << 2) & 0x3F] +
        '='
      )
    }
  
    return parts.join('')
  }
  
  },{}],70:[function(require,module,exports){
  
  },{}],71:[function(require,module,exports){
  (function (Buffer){(function (){
  
  
  
  'use strict'
  
  var base64 = require('base64-js')
  var ieee754 = require('ieee754')
  
  exports.Buffer = Buffer
  exports.SlowBuffer = SlowBuffer
  exports.INSPECT_MAX_BYTES = 50
  
  var K_MAX_LENGTH = 0x7fffffff
  exports.kMaxLength = K_MAX_LENGTH
  
  
  Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()
  
  if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
      typeof console.error === 'function') {
    console.error(
      'This browser lacks typed array (Uint8Array) support which is required by ' +
      '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
    )
  }
  
  function typedArraySupport () {
    try {
      var arr = new Uint8Array(1)
      arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
      return arr.foo() === 42
    } catch (e) {
      return false
    }
  }
  
  Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function () {
      if (!Buffer.isBuffer(this)) return undefined
      return this.buffer
    }
  })
  
  Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function () {
      if (!Buffer.isBuffer(this)) return undefined
      return this.byteOffset
    }
  })
  
  function createBuffer (length) {
    if (length > K_MAX_LENGTH) {
      throw new RangeError('The value "' + length + '" is invalid for option "size"')
    }
    var buf = new Uint8Array(length)
    buf.__proto__ = Buffer.prototype
    return buf
  }
  
  
  
  function Buffer (arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        )
      }
      return allocUnsafe(arg)
    }
    return from(arg, encodingOrOffset, length)
  }
  
  if (typeof Symbol !== 'undefined' && Symbol.species != null &&
      Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    })
  }
  
  Buffer.poolSize = 8192 // not used by this implementation
  
  function from (value, encodingOrOffset, length) {
    if (typeof value === 'string') {
      return fromString(value, encodingOrOffset)
    }
  
    if (ArrayBuffer.isView(value)) {
      return fromArrayLike(value)
    }
  
    if (value == null) {
      throw TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
        'or Array-like Object. Received type ' + (typeof value)
      )
    }
  
    if (isInstance(value, ArrayBuffer) ||
        (value && isInstance(value.buffer, ArrayBuffer))) {
      return fromArrayBuffer(value, encodingOrOffset, length)
    }
  
    if (typeof value === 'number') {
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      )
    }
  
    var valueOf = value.valueOf && value.valueOf()
    if (valueOf != null && valueOf !== value) {
      return Buffer.from(valueOf, encodingOrOffset, length)
    }
  
    var b = fromObject(value)
    if (b) return b
  
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
        typeof value[Symbol.toPrimitive] === 'function') {
      return Buffer.from(
        value[Symbol.toPrimitive]('string'), encodingOrOffset, length
      )
    }
  
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }
  
  
  Buffer.from = function (value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length)
  }
  
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  
  function assertSize (size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be of type number')
    } else if (size < 0) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"')
    }
  }
  
  function alloc (size, fill, encoding) {
    assertSize(size)
    if (size <= 0) {
      return createBuffer(size)
    }
    if (fill !== undefined) {
      return typeof encoding === 'string'
        ? createBuffer(size).fill(fill, encoding)
        : createBuffer(size).fill(fill)
    }
    return createBuffer(size)
  }
  
  
  Buffer.alloc = function (size, fill, encoding) {
    return alloc(size, fill, encoding)
  }
  
  function allocUnsafe (size) {
    assertSize(size)
    return createBuffer(size < 0 ? 0 : checked(size) | 0)
  }
  
  
  Buffer.allocUnsafe = function (size) {
    return allocUnsafe(size)
  }
  
  Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(size)
  }
  
  function fromString (string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8'
    }
  
    if (!Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  
    var length = byteLength(string, encoding) | 0
    var buf = createBuffer(length)
  
    var actual = buf.write(string, encoding)
  
    if (actual !== length) {
      buf = buf.slice(0, actual)
    }
  
    return buf
  }
  
  function fromArrayLike (array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0
    var buf = createBuffer(length)
    for (var i = 0; i < length; i += 1) {
      buf[i] = array[i] & 255
    }
    return buf
  }
  
  function fromArrayBuffer (array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('"offset" is outside of buffer bounds')
    }
  
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('"length" is outside of buffer bounds')
    }
  
    var buf
    if (byteOffset === undefined && length === undefined) {
      buf = new Uint8Array(array)
    } else if (length === undefined) {
      buf = new Uint8Array(array, byteOffset)
    } else {
      buf = new Uint8Array(array, byteOffset, length)
    }
  
    buf.__proto__ = Buffer.prototype
    return buf
  }
  
  function fromObject (obj) {
    if (Buffer.isBuffer(obj)) {
      var len = checked(obj.length) | 0
      var buf = createBuffer(len)
  
      if (buf.length === 0) {
        return buf
      }
  
      obj.copy(buf, 0, 0, len)
      return buf
    }
  
    if (obj.length !== undefined) {
      if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
        return createBuffer(0)
      }
      return fromArrayLike(obj)
    }
  
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data)
    }
  }
  
  function checked (length) {
    if (length >= K_MAX_LENGTH) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                           'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
    }
    return length | 0
  }
  
  function SlowBuffer (length) {
    if (+length != length) { // eslint-disable-line eqeqeq
      length = 0
    }
    return Buffer.alloc(+length)
  }
  
  Buffer.isBuffer = function isBuffer (b) {
    return b != null && b._isBuffer === true &&
      b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
  }
  
  Buffer.compare = function compare (a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      )
    }
  
    if (a === b) return 0
  
    var x = a.length
    var y = b.length
  
    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i]
        y = b[i]
        break
      }
    }
  
    if (x < y) return -1
    if (y < x) return 1
    return 0
  }
  
  Buffer.isEncoding = function isEncoding (encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true
      default:
        return false
    }
  }
  
  Buffer.concat = function concat (list, length) {
    if (!Array.isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
  
    if (list.length === 0) {
      return Buffer.alloc(0)
    }
  
    var i
    if (length === undefined) {
      length = 0
      for (i = 0; i < list.length; ++i) {
        length += list[i].length
      }
    }
  
    var buffer = Buffer.allocUnsafe(length)
    var pos = 0
    for (i = 0; i < list.length; ++i) {
      var buf = list[i]
      if (isInstance(buf, Uint8Array)) {
        buf = Buffer.from(buf)
      }
      if (!Buffer.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }
      buf.copy(buffer, pos)
      pos += buf.length
    }
    return buffer
  }
  
  function byteLength (string, encoding) {
    if (Buffer.isBuffer(string)) {
      return string.length
    }
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
      return string.byteLength
    }
    if (typeof string !== 'string') {
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
        'Received type ' + typeof string
      )
    }
  
    var len = string.length
    var mustMatch = (arguments.length > 2 && arguments[2] === true)
    if (!mustMatch && len === 0) return 0
  
    var loweredCase = false
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len
        case 'utf8':
        case 'utf-8':
          return utf8ToBytes(string).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2
        case 'hex':
          return len >>> 1
        case 'base64':
          return base64ToBytes(string).length
        default:
          if (loweredCase) {
            return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
          }
          encoding = ('' + encoding).toLowerCase()
          loweredCase = true
      }
    }
  }
  Buffer.byteLength = byteLength
  
  function slowToString (encoding, start, end) {
    var loweredCase = false
  
  
    if (start === undefined || start < 0) {
      start = 0
    }
    if (start > this.length) {
      return ''
    }
  
    if (end === undefined || end > this.length) {
      end = this.length
    }
  
    if (end <= 0) {
      return ''
    }
  
    end >>>= 0
    start >>>= 0
  
    if (end <= start) {
      return ''
    }
  
    if (!encoding) encoding = 'utf8'
  
    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end)
  
        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end)
  
        case 'ascii':
          return asciiSlice(this, start, end)
  
        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end)
  
        case 'base64':
          return base64Slice(this, start, end)
  
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end)
  
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = (encoding + '').toLowerCase()
          loweredCase = true
      }
    }
  }
  
  Buffer.prototype._isBuffer = true
  
  function swap (b, n, m) {
    var i = b[n]
    b[n] = b[m]
    b[m] = i
  }
  
  Buffer.prototype.swap16 = function swap16 () {
    var len = this.length
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits')
    }
    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1)
    }
    return this
  }
  
  Buffer.prototype.swap32 = function swap32 () {
    var len = this.length
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits')
    }
    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3)
      swap(this, i + 1, i + 2)
    }
    return this
  }
  
  Buffer.prototype.swap64 = function swap64 () {
    var len = this.length
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits')
    }
    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7)
      swap(this, i + 1, i + 6)
      swap(this, i + 2, i + 5)
      swap(this, i + 3, i + 4)
    }
    return this
  }
  
  Buffer.prototype.toString = function toString () {
    var length = this.length
    if (length === 0) return ''
    if (arguments.length === 0) return utf8Slice(this, 0, length)
    return slowToString.apply(this, arguments)
  }
  
  Buffer.prototype.toLocaleString = Buffer.prototype.toString
  
  Buffer.prototype.equals = function equals (b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
    if (this === b) return true
    return Buffer.compare(this, b) === 0
  }
  
  Buffer.prototype.inspect = function inspect () {
    var str = ''
    var max = exports.INSPECT_MAX_BYTES
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
    if (this.length > max) str += ' ... '
    return '<Buffer ' + str + '>'
  }
  
  Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
      target = Buffer.from(target, target.offset, target.byteLength)
    }
    if (!Buffer.isBuffer(target)) {
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. ' +
        'Received type ' + (typeof target)
      )
    }
  
    if (start === undefined) {
      start = 0
    }
    if (end === undefined) {
      end = target ? target.length : 0
    }
    if (thisStart === undefined) {
      thisStart = 0
    }
    if (thisEnd === undefined) {
      thisEnd = this.length
    }
  
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index')
    }
  
    if (thisStart >= thisEnd && start >= end) {
      return 0
    }
    if (thisStart >= thisEnd) {
      return -1
    }
    if (start >= end) {
      return 1
    }
  
    start >>>= 0
    end >>>= 0
    thisStart >>>= 0
    thisEnd >>>= 0
  
    if (this === target) return 0
  
    var x = thisEnd - thisStart
    var y = end - start
    var len = Math.min(x, y)
  
    var thisCopy = this.slice(thisStart, thisEnd)
    var targetCopy = target.slice(start, end)
  
    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i]
        y = targetCopy[i]
        break
      }
    }
  
    if (x < y) return -1
    if (y < x) return 1
    return 0
  }
  
  function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
    if (buffer.length === 0) return -1
  
    if (typeof byteOffset === 'string') {
      encoding = byteOffset
      byteOffset = 0
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000
    }
    byteOffset = +byteOffset // Coerce to Number.
    if (numberIsNaN(byteOffset)) {
      byteOffset = dir ? 0 : (buffer.length - 1)
    }
  
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset
    if (byteOffset >= buffer.length) {
      if (dir) return -1
      else byteOffset = buffer.length - 1
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0
      else return -1
    }
  
    if (typeof val === 'string') {
      val = Buffer.from(val, encoding)
    }
  
    if (Buffer.isBuffer(val)) {
      if (val.length === 0) {
        return -1
      }
      return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
    } else if (typeof val === 'number') {
      val = val & 0xFF // Search for a byte value [0-255]
      if (typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
        }
      }
      return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
    }
  
    throw new TypeError('val must be string, number or Buffer')
  }
  
  function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
    var indexSize = 1
    var arrLength = arr.length
    var valLength = val.length
  
    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase()
      if (encoding === 'ucs2' || encoding === 'ucs-2' ||
          encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1
        }
        indexSize = 2
        arrLength /= 2
        valLength /= 2
        byteOffset /= 2
      }
    }
  
    function read (buf, i) {
      if (indexSize === 1) {
        return buf[i]
      } else {
        return buf.readUInt16BE(i * indexSize)
      }
    }
  
    var i
    if (dir) {
      var foundIndex = -1
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
        } else {
          if (foundIndex !== -1) i -= i - foundIndex
          foundIndex = -1
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
      for (i = byteOffset; i >= 0; i--) {
        var found = true
        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false
            break
          }
        }
        if (found) return i
      }
    }
  
    return -1
  }
  
  Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1
  }
  
  Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
  }
  
  Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
  }
  
  function hexWrite (buf, string, offset, length) {
    offset = Number(offset) || 0
    var remaining = buf.length - offset
    if (!length) {
      length = remaining
    } else {
      length = Number(length)
      if (length > remaining) {
        length = remaining
      }
    }
  
    var strLen = string.length
  
    if (length > strLen / 2) {
      length = strLen / 2
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16)
      if (numberIsNaN(parsed)) return i
      buf[offset + i] = parsed
    }
    return i
  }
  
  function utf8Write (buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
  }
  
  function asciiWrite (buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length)
  }
  
  function latin1Write (buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length)
  }
  
  function base64Write (buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length)
  }
  
  function ucs2Write (buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
  }
  
  Buffer.prototype.write = function write (string, offset, length, encoding) {
    if (offset === undefined) {
      encoding = 'utf8'
      length = this.length
      offset = 0
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset
      length = this.length
      offset = 0
    } else if (isFinite(offset)) {
      offset = offset >>> 0
      if (isFinite(length)) {
        length = length >>> 0
        if (encoding === undefined) encoding = 'utf8'
      } else {
        encoding = length
        length = undefined
      }
    } else {
      throw new Error(
        'Buffer.write(string, encoding, offset[, length]) is no longer supported'
      )
    }
  
    var remaining = this.length - offset
    if (length === undefined || length > remaining) length = remaining
  
    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds')
    }
  
    if (!encoding) encoding = 'utf8'
  
    var loweredCase = false
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length)
  
        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length)
  
        case 'ascii':
          return asciiWrite(this, string, offset, length)
  
        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length)
  
        case 'base64':
          return base64Write(this, string, offset, length)
  
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length)
  
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = ('' + encoding).toLowerCase()
          loweredCase = true
      }
    }
  }
  
  Buffer.prototype.toJSON = function toJSON () {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    }
  }
  
  function base64Slice (buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf)
    } else {
      return base64.fromByteArray(buf.slice(start, end))
    }
  }
  
  function utf8Slice (buf, start, end) {
    end = Math.min(buf.length, end)
    var res = []
  
    var i = start
    while (i < end) {
      var firstByte = buf[i]
      var codePoint = null
      var bytesPerSequence = (firstByte > 0xEF) ? 4
        : (firstByte > 0xDF) ? 3
          : (firstByte > 0xBF) ? 2
            : 1
  
      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint
  
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte
            }
            break
          case 2:
            secondByte = buf[i + 1]
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint
              }
            }
            break
          case 3:
            secondByte = buf[i + 1]
            thirdByte = buf[i + 2]
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint
              }
            }
            break
          case 4:
            secondByte = buf[i + 1]
            thirdByte = buf[i + 2]
            fourthByte = buf[i + 3]
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint
              }
            }
        }
      }
  
      if (codePoint === null) {
        codePoint = 0xFFFD
        bytesPerSequence = 1
      } else if (codePoint > 0xFFFF) {
        codePoint -= 0x10000
        res.push(codePoint >>> 10 & 0x3FF | 0xD800)
        codePoint = 0xDC00 | codePoint & 0x3FF
      }
  
      res.push(codePoint)
      i += bytesPerSequence
    }
  
    return decodeCodePointsArray(res)
  }
  
  var MAX_ARGUMENTS_LENGTH = 0x1000
  
  function decodeCodePointsArray (codePoints) {
    var len = codePoints.length
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    }
  
    var res = ''
    var i = 0
    while (i < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
      )
    }
    return res
  }
  
  function asciiSlice (buf, start, end) {
    var ret = ''
    end = Math.min(buf.length, end)
  
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F)
    }
    return ret
  }
  
  function latin1Slice (buf, start, end) {
    var ret = ''
    end = Math.min(buf.length, end)
  
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i])
    }
    return ret
  }
  
  function hexSlice (buf, start, end) {
    var len = buf.length
  
    if (!start || start < 0) start = 0
    if (!end || end < 0 || end > len) end = len
  
    var out = ''
    for (var i = start; i < end; ++i) {
      out += toHex(buf[i])
    }
    return out
  }
  
  function utf16leSlice (buf, start, end) {
    var bytes = buf.slice(start, end)
    var res = ''
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
    }
    return res
  }
  
  Buffer.prototype.slice = function slice (start, end) {
    var len = this.length
    start = ~~start
    end = end === undefined ? len : ~~end
  
    if (start < 0) {
      start += len
      if (start < 0) start = 0
    } else if (start > len) {
      start = len
    }
  
    if (end < 0) {
      end += len
      if (end < 0) end = 0
    } else if (end > len) {
      end = len
    }
  
    if (end < start) end = start
  
    var newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
    return newBuf
  }
  
  
  function checkOffset (offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
  }
  
  Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)
  
    var val = this[offset]
    var mul = 1
    var i = 0
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul
    }
  
    return val
  }
  
  Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length)
    }
  
    var val = this[offset + --byteLength]
    var mul = 1
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul
    }
  
    return val
  }
  
  Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 1, this.length)
    return this[offset]
  }
  
  Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 2, this.length)
    return this[offset] | (this[offset + 1] << 8)
  }
  
  Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 2, this.length)
    return (this[offset] << 8) | this[offset + 1]
  }
  
  Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return ((this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16)) +
        (this[offset + 3] * 0x1000000)
  }
  
  Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
  }
  
  Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)
  
    var val = this[offset]
    var mul = 1
    var i = 0
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul
    }
    mul *= 0x80
  
    if (val >= mul) val -= Math.pow(2, 8 * byteLength)
  
    return val
  }
  
  Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)
  
    var i = byteLength
    var mul = 1
    var val = this[offset + --i]
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul
    }
    mul *= 0x80
  
    if (val >= mul) val -= Math.pow(2, 8 * byteLength)
  
    return val
  }
  
  Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 1, this.length)
    if (!(this[offset] & 0x80)) return (this[offset])
    return ((0xff - this[offset] + 1) * -1)
  }
  
  Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 2, this.length)
    var val = this[offset] | (this[offset + 1] << 8)
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  }
  
  Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 2, this.length)
    var val = this[offset + 1] | (this[offset] << 8)
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  }
  
  Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
  }
  
  Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
  }
  
  Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
    return ieee754.read(this, offset, true, 23, 4)
  }
  
  Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
    return ieee754.read(this, offset, false, 23, 4)
  }
  
  Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 8, this.length)
    return ieee754.read(this, offset, true, 52, 8)
  }
  
  Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 8, this.length)
    return ieee754.read(this, offset, false, 52, 8)
  }
  
  function checkInt (buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
  }
  
  Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1
      checkInt(this, value, offset, byteLength, maxBytes, 0)
    }
  
    var mul = 1
    var i = 0
    this[offset] = value & 0xFF
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1
      checkInt(this, value, offset, byteLength, maxBytes, 0)
    }
  
    var i = byteLength - 1
    var mul = 1
    this[offset + i] = value & 0xFF
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
    this[offset] = (value & 0xff)
    return offset + 1
  }
  
  Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    return offset + 2
  }
  
  Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
    return offset + 2
  }
  
  Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
    return offset + 4
  }
  
  Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
    return offset + 4
  }
  
  Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) {
      var limit = Math.pow(2, (8 * byteLength) - 1)
  
      checkInt(this, value, offset, byteLength, limit - 1, -limit)
    }
  
    var i = 0
    var mul = 1
    var sub = 0
    this[offset] = value & 0xFF
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) {
      var limit = Math.pow(2, (8 * byteLength) - 1)
  
      checkInt(this, value, offset, byteLength, limit - 1, -limit)
    }
  
    var i = byteLength - 1
    var mul = 1
    var sub = 0
    this[offset + i] = value & 0xFF
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
    if (value < 0) value = 0xff + value + 1
    this[offset] = (value & 0xff)
    return offset + 1
  }
  
  Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    return offset + 2
  }
  
  Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
    return offset + 2
  }
  
  Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
    return offset + 4
  }
  
  Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
    if (value < 0) value = 0xffffffff + value + 1
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
    return offset + 4
  }
  
  function checkIEEE754 (buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
    if (offset < 0) throw new RangeError('Index out of range')
  }
  
  function writeFloat (buf, value, offset, littleEndian, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4)
    return offset + 4
  }
  
  Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert)
  }
  
  Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert)
  }
  
  function writeDouble (buf, value, offset, littleEndian, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8)
    return offset + 8
  }
  
  Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert)
  }
  
  Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert)
  }
  
  Buffer.prototype.copy = function copy (target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
    if (!start) start = 0
    if (!end && end !== 0) end = this.length
    if (targetStart >= target.length) targetStart = target.length
    if (!targetStart) targetStart = 0
    if (end > 0 && end < start) end = start
  
    if (end === start) return 0
    if (target.length === 0 || this.length === 0) return 0
  
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds')
    }
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
    if (end < 0) throw new RangeError('sourceEnd out of bounds')
  
    if (end > this.length) end = this.length
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start
    }
  
    var len = end - start
  
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
      this.copyWithin(targetStart, start, end)
    } else if (this === target && start < targetStart && targetStart < end) {
      for (var i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start]
      }
    } else {
      Uint8Array.prototype.set.call(
        target,
        this.subarray(start, end),
        targetStart
      )
    }
  
    return len
  }
  
  Buffer.prototype.fill = function fill (val, start, end, encoding) {
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start
        start = 0
        end = this.length
      } else if (typeof end === 'string') {
        encoding = end
        end = this.length
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string')
      }
      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0)
        if ((encoding === 'utf8' && code < 128) ||
            encoding === 'latin1') {
          val = code
        }
      }
    } else if (typeof val === 'number') {
      val = val & 255
    }
  
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index')
    }
  
    if (end <= start) {
      return this
    }
  
    start = start >>> 0
    end = end === undefined ? this.length : end >>> 0
  
    if (!val) val = 0
  
    var i
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val
      }
    } else {
      var bytes = Buffer.isBuffer(val)
        ? val
        : Buffer.from(val, encoding)
      var len = bytes.length
      if (len === 0) {
        throw new TypeError('The value "' + val +
          '" is invalid for argument "value"')
      }
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len]
      }
    }
  
    return this
  }
  
  
  var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g
  
  function base64clean (str) {
    str = str.split('=')[0]
    str = str.trim().replace(INVALID_BASE64_RE, '')
    if (str.length < 2) return ''
    while (str.length % 4 !== 0) {
      str = str + '='
    }
    return str
  }
  
  function toHex (n) {
    if (n < 16) return '0' + n.toString(16)
    return n.toString(16)
  }
  
  function utf8ToBytes (string, units) {
    units = units || Infinity
    var codePoint
    var length = string.length
    var leadSurrogate = null
    var bytes = []
  
    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i)
  
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        if (!leadSurrogate) {
          if (codePoint > 0xDBFF) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            continue
          } else if (i + 1 === length) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            continue
          }
  
          leadSurrogate = codePoint
  
          continue
        }
  
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          leadSurrogate = codePoint
          continue
        }
  
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
      } else if (leadSurrogate) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
      }
  
      leadSurrogate = null
  
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break
        bytes.push(codePoint)
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break
        bytes.push(
          codePoint >> 0x6 | 0xC0,
          codePoint & 0x3F | 0x80
        )
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break
        bytes.push(
          codePoint >> 0xC | 0xE0,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        )
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break
        bytes.push(
          codePoint >> 0x12 | 0xF0,
          codePoint >> 0xC & 0x3F | 0x80,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        )
      } else {
        throw new Error('Invalid code point')
      }
    }
  
    return bytes
  }
  
  function asciiToBytes (str) {
    var byteArray = []
    for (var i = 0; i < str.length; ++i) {
      byteArray.push(str.charCodeAt(i) & 0xFF)
    }
    return byteArray
  }
  
  function utf16leToBytes (str, units) {
    var c, hi, lo
    var byteArray = []
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break
  
      c = str.charCodeAt(i)
      hi = c >> 8
      lo = c % 256
      byteArray.push(lo)
      byteArray.push(hi)
    }
  
    return byteArray
  }
  
  function base64ToBytes (str) {
    return base64.toByteArray(base64clean(str))
  }
  
  function blitBuffer (src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if ((i + offset >= dst.length) || (i >= src.length)) break
      dst[i + offset] = src[i]
    }
    return i
  }
  
  function isInstance (obj, type) {
    return obj instanceof type ||
      (obj != null && obj.constructor != null && obj.constructor.name != null &&
        obj.constructor.name === type.name)
  }
  function numberIsNaN (obj) {
    return obj !== obj // eslint-disable-line no-self-compare
  }
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"base64-js":69,"buffer":71,"ieee754":104}],72:[function(require,module,exports){
  
  var objectCreate = Object.create || objectCreatePolyfill
  var objectKeys = Object.keys || objectKeysPolyfill
  var bind = Function.prototype.bind || functionBindPolyfill
  
  function EventEmitter() {
    if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
      this._events = objectCreate(null);
      this._eventsCount = 0;
    }
  
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;
  
  EventEmitter.EventEmitter = EventEmitter;
  
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;
  
  var defaultMaxListeners = 10;
  
  var hasDefineProperty;
  try {
    var o = {};
    if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
    hasDefineProperty = o.x === 0;
  } catch (err) { hasDefineProperty = false }
  if (hasDefineProperty) {
    Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
      enumerable: true,
      get: function() {
        return defaultMaxListeners;
      },
      set: function(arg) {
        if (typeof arg !== 'number' || arg < 0 || arg !== arg)
          throw new TypeError('"defaultMaxListeners" must be a positive number');
        defaultMaxListeners = arg;
      }
    });
  } else {
    EventEmitter.defaultMaxListeners = defaultMaxListeners;
  }
  
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || isNaN(n))
      throw new TypeError('"n" argument must be a positive number');
    this._maxListeners = n;
    return this;
  };
  
  function $getMaxListeners(that) {
    if (that._maxListeners === undefined)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }
  
  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return $getMaxListeners(this);
  };
  
  function emitNone(handler, isFn, self) {
    if (isFn)
      handler.call(self);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self);
    }
  }
  function emitOne(handler, isFn, self, arg1) {
    if (isFn)
      handler.call(self, arg1);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1);
    }
  }
  function emitTwo(handler, isFn, self, arg1, arg2) {
    if (isFn)
      handler.call(self, arg1, arg2);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1, arg2);
    }
  }
  function emitThree(handler, isFn, self, arg1, arg2, arg3) {
    if (isFn)
      handler.call(self, arg1, arg2, arg3);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1, arg2, arg3);
    }
  }
  
  function emitMany(handler, isFn, self, args) {
    if (isFn)
      handler.apply(self, args);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].apply(self, args);
    }
  }
  
  EventEmitter.prototype.emit = function emit(type) {
    var er, handler, len, args, i, events;
    var doError = (type === 'error');
  
    events = this._events;
    if (events)
      doError = (doError && events.error == null);
    else if (!doError)
      return false;
  
    if (doError) {
      if (arguments.length > 1)
        er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        var err = new Error('Unhandled "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
      return false;
    }
  
    handler = events[type];
  
    if (!handler)
      return false;
  
    var isFn = typeof handler === 'function';
    len = arguments.length;
    switch (len) {
      case 1:
        emitNone(handler, isFn, this);
        break;
      case 2:
        emitOne(handler, isFn, this, arguments[1]);
        break;
      case 3:
        emitTwo(handler, isFn, this, arguments[1], arguments[2]);
        break;
      case 4:
        emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
        break;
      default:
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        emitMany(handler, isFn, this, args);
    }
  
    return true;
  };
  
  function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
  
    if (typeof listener !== 'function')
      throw new TypeError('"listener" argument must be a function');
  
    events = target._events;
    if (!events) {
      events = target._events = objectCreate(null);
      target._eventsCount = 0;
    } else {
      if (events.newListener) {
        target.emit('newListener', type,
            listener.listener ? listener.listener : listener);
  
        events = target._events;
      }
      existing = events[type];
    }
  
    if (!existing) {
      existing = events[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === 'function') {
        existing = events[type] =
            prepend ? [listener, existing] : [existing, listener];
      } else {
        if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
      }
  
      if (!existing.warned) {
        m = $getMaxListeners(target);
        if (m && m > 0 && existing.length > m) {
          existing.warned = true;
          var w = new Error('Possible EventEmitter memory leak detected. ' +
              existing.length + ' "' + String(type) + '" listeners ' +
              'added. Use emitter.setMaxListeners() to ' +
              'increase limit.');
          w.name = 'MaxListenersExceededWarning';
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          if (typeof console === 'object' && console.warn) {
            console.warn('%s: %s', w.name, w.message);
          }
        }
      }
    }
  
    return target;
  }
  
  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };
  
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  
  EventEmitter.prototype.prependListener =
      function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };
  
  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      switch (arguments.length) {
        case 0:
          return this.listener.call(this.target);
        case 1:
          return this.listener.call(this.target, arguments[0]);
        case 2:
          return this.listener.call(this.target, arguments[0], arguments[1]);
        case 3:
          return this.listener.call(this.target, arguments[0], arguments[1],
              arguments[2]);
        default:
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; ++i)
            args[i] = arguments[i];
          this.listener.apply(this.target, args);
      }
    }
  }
  
  function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
    var wrapped = bind.call(onceWrapper, state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }
  
  EventEmitter.prototype.once = function once(type, listener) {
    if (typeof listener !== 'function')
      throw new TypeError('"listener" argument must be a function');
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };
  
  EventEmitter.prototype.prependOnceListener =
      function prependOnceListener(type, listener) {
        if (typeof listener !== 'function')
          throw new TypeError('"listener" argument must be a function');
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };
  
  EventEmitter.prototype.removeListener =
      function removeListener(type, listener) {
        var list, events, position, i, originalListener;
  
        if (typeof listener !== 'function')
          throw new TypeError('"listener" argument must be a function');
  
        events = this._events;
        if (!events)
          return this;
  
        list = events[type];
        if (!list)
          return this;
  
        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = objectCreate(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit('removeListener', type, list.listener || listener);
          }
        } else if (typeof list !== 'function') {
          position = -1;
  
          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }
  
          if (position < 0)
            return this;
  
          if (position === 0)
            list.shift();
          else
            spliceOne(list, position);
  
          if (list.length === 1)
            events[type] = list[0];
  
          if (events.removeListener)
            this.emit('removeListener', type, originalListener || listener);
        }
  
        return this;
      };
  
  EventEmitter.prototype.removeAllListeners =
      function removeAllListeners(type) {
        var listeners, events, i;
  
        events = this._events;
        if (!events)
          return this;
  
        if (!events.removeListener) {
          if (arguments.length === 0) {
            this._events = objectCreate(null);
            this._eventsCount = 0;
          } else if (events[type]) {
            if (--this._eventsCount === 0)
              this._events = objectCreate(null);
            else
              delete events[type];
          }
          return this;
        }
  
        if (arguments.length === 0) {
          var keys = objectKeys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = objectCreate(null);
          this._eventsCount = 0;
          return this;
        }
  
        listeners = events[type];
  
        if (typeof listeners === 'function') {
          this.removeListener(type, listeners);
        } else if (listeners) {
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }
  
        return this;
      };
  
  function _listeners(target, type, unwrap) {
    var events = target._events;
  
    if (!events)
      return [];
  
    var evlistener = events[type];
    if (!evlistener)
      return [];
  
    if (typeof evlistener === 'function')
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }
  
  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };
  
  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };
  
  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };
  
  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events = this._events;
  
    if (events) {
      var evlistener = events[type];
  
      if (typeof evlistener === 'function') {
        return 1;
      } else if (evlistener) {
        return evlistener.length;
      }
    }
  
    return 0;
  }
  
  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  };
  
  function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
      list[i] = list[k];
    list.pop();
  }
  
  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }
  
  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }
  
  function objectCreatePolyfill(proto) {
    var F = function() {};
    F.prototype = proto;
    return new F;
  }
  function objectKeysPolyfill(obj) {
    var keys = [];
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) {
      keys.push(k);
    }
    return k;
  }
  function functionBindPolyfill(context) {
    var fn = this;
    return function () {
      return fn.apply(context, arguments);
    };
  }
  
  },{}],73:[function(require,module,exports){
  if (typeof Object.create === 'function') {
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
  
  },{}],74:[function(require,module,exports){
  module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object'
      && typeof arg.copy === 'function'
      && typeof arg.fill === 'function'
      && typeof arg.readUInt8 === 'function';
  }
  },{}],75:[function(require,module,exports){
  (function (process,global){(function (){
  
  var formatRegExp = /%[sdj%]/g;
  exports.format = function(f) {
    if (!isString(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect(arguments[i]));
      }
      return objects.join(' ');
    }
  
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
      if (x === '%%') return '%';
      if (i >= len) return x;
      switch (x) {
        case '%s': return String(args[i++]);
        case '%d': return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
        default:
          return x;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += ' ' + x;
      } else {
        str += ' ' + inspect(x);
      }
    }
    return str;
  };
  
  
  exports.deprecate = function(fn, msg) {
    if (isUndefined(global.process)) {
      return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
      };
    }
  
    if (process.noDeprecation === true) {
      return fn;
    }
  
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (process.throwDeprecation) {
          throw new Error(msg);
        } else if (process.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
  
    return deprecated;
  };
  
  
  var debugs = {};
  var debugEnviron;
  exports.debuglog = function(set) {
    if (isUndefined(debugEnviron))
      debugEnviron = process.env.NODE_DEBUG || '';
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
        var pid = process.pid;
        debugs[set] = function() {
          var msg = exports.format.apply(exports, arguments);
          console.error('%s %d: %s', set, pid, msg);
        };
      } else {
        debugs[set] = function() {};
      }
    }
    return debugs[set];
  };
  
  
  
  
  function inspect(obj, opts) {
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      ctx.showHidden = opts;
    } else if (opts) {
      exports._extend(ctx, opts);
    }
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }
  exports.inspect = inspect;
  
  
  inspect.colors = {
    'bold' : [1, 22],
    'italic' : [3, 23],
    'underline' : [4, 24],
    'inverse' : [7, 27],
    'white' : [37, 39],
    'grey' : [90, 39],
    'black' : [30, 39],
    'blue' : [34, 39],
    'cyan' : [36, 39],
    'green' : [32, 39],
    'magenta' : [35, 39],
    'red' : [31, 39],
    'yellow' : [33, 39]
  };
  
  inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    'regexp': 'red'
  };
  
  
  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
  
    if (style) {
      return '\u001b[' + inspect.colors[style][0] + 'm' + str +
             '\u001b[' + inspect.colors[style][1] + 'm';
    } else {
      return str;
    }
  }
  
  
  function stylizeNoColor(str, styleType) {
    return str;
  }
  
  
  function arrayToHash(array) {
    var hash = {};
  
    array.forEach(function(val, idx) {
      hash[val] = true;
    });
  
    return hash;
  }
  
  
  function formatValue(ctx, value, recurseTimes) {
    if (ctx.customInspect &&
        value &&
        isFunction(value.inspect) &&
        value.inspect !== exports.inspect &&
        !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }
  
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }
  
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
  
    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }
  
    if (isError(value)
        && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
      return formatError(value);
    }
  
    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ': ' + value.name : '';
        return ctx.stylize('[Function' + name + ']', 'special');
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), 'date');
      }
      if (isError(value)) {
        return formatError(value);
      }
    }
  
    var base = '', array = false, braces = ['{', '}'];
  
    if (isArray(value)) {
      array = true;
      braces = ['[', ']'];
    }
  
    if (isFunction(value)) {
      var n = value.name ? ': ' + value.name : '';
      base = ' [Function' + n + ']';
    }
  
    if (isRegExp(value)) {
      base = ' ' + RegExp.prototype.toString.call(value);
    }
  
    if (isDate(value)) {
      base = ' ' + Date.prototype.toUTCString.call(value);
    }
  
    if (isError(value)) {
      base = ' ' + formatError(value);
    }
  
    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }
  
    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      } else {
        return ctx.stylize('[Object]', 'special');
      }
    }
  
    ctx.seen.push(value);
  
    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }
  
    ctx.seen.pop();
  
    return reduceToSingleString(output, base, braces);
  }
  
  
  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');
    }
    if (isNumber(value))
      return ctx.stylize('' + value, 'number');
    if (isBoolean(value))
      return ctx.stylize('' + value, 'boolean');
    if (isNull(value))
      return ctx.stylize('null', 'null');
  }
  
  
  function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
  }
  
  
  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty(value, String(i))) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
            String(i), true));
      } else {
        output.push('');
      }
    }
    keys.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
            key, true));
      }
    });
    return output;
  }
  
  
  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (desc.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
    if (!hasOwnProperty(visibleKeys, key)) {
      name = '[' + key + ']';
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf('\n') > -1) {
          if (array) {
            str = str.split('\n').map(function(line) {
              return '  ' + line;
            }).join('\n').substr(2);
          } else {
            str = '\n' + str.split('\n').map(function(line) {
              return '   ' + line;
            }).join('\n');
          }
        }
      } else {
        str = ctx.stylize('[Circular]', 'special');
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify('' + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, 'name');
      } else {
        name = name.replace(/'/g, "\\'")
                   .replace(/\\"/g, '"')
                   .replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, 'string');
      }
    }
  
    return name + ': ' + str;
  }
  
  
  function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
      numLinesEst++;
      if (cur.indexOf('\n') >= 0) numLinesEst++;
      return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
  
    if (length > 60) {
      return braces[0] +
             (base === '' ? '' : base + '\n ') +
             ' ' +
             output.join(',\n  ') +
             ' ' +
             braces[1];
    }
  
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
  }
  
  
  function isArray(ar) {
    return Array.isArray(ar);
  }
  exports.isArray = isArray;
  
  function isBoolean(arg) {
    return typeof arg === 'boolean';
  }
  exports.isBoolean = isBoolean;
  
  function isNull(arg) {
    return arg === null;
  }
  exports.isNull = isNull;
  
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  exports.isNullOrUndefined = isNullOrUndefined;
  
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  exports.isNumber = isNumber;
  
  function isString(arg) {
    return typeof arg === 'string';
  }
  exports.isString = isString;
  
  function isSymbol(arg) {
    return typeof arg === 'symbol';
  }
  exports.isSymbol = isSymbol;
  
  function isUndefined(arg) {
    return arg === void 0;
  }
  exports.isUndefined = isUndefined;
  
  function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
  }
  exports.isRegExp = isRegExp;
  
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  exports.isObject = isObject;
  
  function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
  }
  exports.isDate = isDate;
  
  function isError(e) {
    return isObject(e) &&
        (objectToString(e) === '[object Error]' || e instanceof Error);
  }
  exports.isError = isError;
  
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  exports.isFunction = isFunction;
  
  function isPrimitive(arg) {
    return arg === null ||
           typeof arg === 'boolean' ||
           typeof arg === 'number' ||
           typeof arg === 'string' ||
           typeof arg === 'symbol' ||  // ES6 symbol
           typeof arg === 'undefined';
  }
  exports.isPrimitive = isPrimitive;
  
  exports.isBuffer = require('./support/isBuffer');
  
  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }
  
  
  function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
  }
  
  
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'];
  
  function timestamp() {
    var d = new Date();
    var time = [pad(d.getHours()),
                pad(d.getMinutes()),
                pad(d.getSeconds())].join(':');
    return [d.getDate(), months[d.getMonth()], time].join(' ');
  }
  
  
  exports.log = function() {
    console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
  };
  
  
  
  exports.inherits = require('inherits');
  
  exports._extend = function(origin, add) {
    if (!add || !isObject(add)) return origin;
  
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  };
  
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  
  }).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  },{"./support/isBuffer":74,"_process":116,"inherits":73}],76:[function(require,module,exports){
  (function (global,Buffer){(function (){
  
  
  
  'use strict'
  
  var base64 = require('base64-js')
  var ieee754 = require('ieee754')
  var isArray = require('isarray')
  
  exports.Buffer = Buffer
  exports.SlowBuffer = SlowBuffer
  exports.INSPECT_MAX_BYTES = 50
  
  
  Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
    ? global.TYPED_ARRAY_SUPPORT
    : typedArraySupport()
  
  
  exports.kMaxLength = kMaxLength()
  
  function typedArraySupport () {
    try {
      var arr = new Uint8Array(1)
      arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
      return arr.foo() === 42 && // typed array instances can be augmented
          typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
          arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
    } catch (e) {
      return false
    }
  }
  
  function kMaxLength () {
    return Buffer.TYPED_ARRAY_SUPPORT
      ? 0x7fffffff
      : 0x3fffffff
  }
  
  function createBuffer (that, length) {
    if (kMaxLength() < length) {
      throw new RangeError('Invalid typed array length')
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      that = new Uint8Array(length)
      that.__proto__ = Buffer.prototype
    } else {
      if (that === null) {
        that = new Buffer(length)
      }
      that.length = length
    }
  
    return that
  }
  
  
  
  function Buffer (arg, encodingOrOffset, length) {
    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
      return new Buffer(arg, encodingOrOffset, length)
    }
  
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new Error(
          'If encoding is specified then the first argument must be a string'
        )
      }
      return allocUnsafe(this, arg)
    }
    return from(this, arg, encodingOrOffset, length)
  }
  
  Buffer.poolSize = 8192 // not used by this implementation
  
  Buffer._augment = function (arr) {
    arr.__proto__ = Buffer.prototype
    return arr
  }
  
  function from (that, value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('"value" argument must not be a number')
    }
  
    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
      return fromArrayBuffer(that, value, encodingOrOffset, length)
    }
  
    if (typeof value === 'string') {
      return fromString(that, value, encodingOrOffset)
    }
  
    return fromObject(that, value)
  }
  
  
  Buffer.from = function (value, encodingOrOffset, length) {
    return from(null, value, encodingOrOffset, length)
  }
  
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype
    Buffer.__proto__ = Uint8Array
    if (typeof Symbol !== 'undefined' && Symbol.species &&
        Buffer[Symbol.species] === Buffer) {
      Object.defineProperty(Buffer, Symbol.species, {
        value: null,
        configurable: true
      })
    }
  }
  
  function assertSize (size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be a number')
    } else if (size < 0) {
      throw new RangeError('"size" argument must not be negative')
    }
  }
  
  function alloc (that, size, fill, encoding) {
    assertSize(size)
    if (size <= 0) {
      return createBuffer(that, size)
    }
    if (fill !== undefined) {
      return typeof encoding === 'string'
        ? createBuffer(that, size).fill(fill, encoding)
        : createBuffer(that, size).fill(fill)
    }
    return createBuffer(that, size)
  }
  
  
  Buffer.alloc = function (size, fill, encoding) {
    return alloc(null, size, fill, encoding)
  }
  
  function allocUnsafe (that, size) {
    assertSize(size)
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < size; ++i) {
        that[i] = 0
      }
    }
    return that
  }
  
  
  Buffer.allocUnsafe = function (size) {
    return allocUnsafe(null, size)
  }
  
  Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(null, size)
  }
  
  function fromString (that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8'
    }
  
    if (!Buffer.isEncoding(encoding)) {
      throw new TypeError('"encoding" must be a valid string encoding')
    }
  
    var length = byteLength(string, encoding) | 0
    that = createBuffer(that, length)
  
    var actual = that.write(string, encoding)
  
    if (actual !== length) {
      that = that.slice(0, actual)
    }
  
    return that
  }
  
  function fromArrayLike (that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0
    that = createBuffer(that, length)
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255
    }
    return that
  }
  
  function fromArrayBuffer (that, array, byteOffset, length) {
    array.byteLength // this throws if `array` is not a valid ArrayBuffer
  
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('\'offset\' is out of bounds')
    }
  
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('\'length\' is out of bounds')
    }
  
    if (byteOffset === undefined && length === undefined) {
      array = new Uint8Array(array)
    } else if (length === undefined) {
      array = new Uint8Array(array, byteOffset)
    } else {
      array = new Uint8Array(array, byteOffset, length)
    }
  
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      that = array
      that.__proto__ = Buffer.prototype
    } else {
      that = fromArrayLike(that, array)
    }
    return that
  }
  
  function fromObject (that, obj) {
    if (Buffer.isBuffer(obj)) {
      var len = checked(obj.length) | 0
      that = createBuffer(that, len)
  
      if (that.length === 0) {
        return that
      }
  
      obj.copy(that, 0, 0, len)
      return that
    }
  
    if (obj) {
      if ((typeof ArrayBuffer !== 'undefined' &&
          obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
        if (typeof obj.length !== 'number' || isnan(obj.length)) {
          return createBuffer(that, 0)
        }
        return fromArrayLike(that, obj)
      }
  
      if (obj.type === 'Buffer' && isArray(obj.data)) {
        return fromArrayLike(that, obj.data)
      }
    }
  
    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
  }
  
  function checked (length) {
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                           'size: 0x' + kMaxLength().toString(16) + ' bytes')
    }
    return length | 0
  }
  
  function SlowBuffer (length) {
    if (+length != length) { // eslint-disable-line eqeqeq
      length = 0
    }
    return Buffer.alloc(+length)
  }
  
  Buffer.isBuffer = function isBuffer (b) {
    return !!(b != null && b._isBuffer)
  }
  
  Buffer.compare = function compare (a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('Arguments must be Buffers')
    }
  
    if (a === b) return 0
  
    var x = a.length
    var y = b.length
  
    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i]
        y = b[i]
        break
      }
    }
  
    if (x < y) return -1
    if (y < x) return 1
    return 0
  }
  
  Buffer.isEncoding = function isEncoding (encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true
      default:
        return false
    }
  }
  
  Buffer.concat = function concat (list, length) {
    if (!isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
  
    if (list.length === 0) {
      return Buffer.alloc(0)
    }
  
    var i
    if (length === undefined) {
      length = 0
      for (i = 0; i < list.length; ++i) {
        length += list[i].length
      }
    }
  
    var buffer = Buffer.allocUnsafe(length)
    var pos = 0
    for (i = 0; i < list.length; ++i) {
      var buf = list[i]
      if (!Buffer.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }
      buf.copy(buffer, pos)
      pos += buf.length
    }
    return buffer
  }
  
  function byteLength (string, encoding) {
    if (Buffer.isBuffer(string)) {
      return string.length
    }
    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
        (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
      return string.byteLength
    }
    if (typeof string !== 'string') {
      string = '' + string
    }
  
    var len = string.length
    if (len === 0) return 0
  
    var loweredCase = false
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len
        case 'utf8':
        case 'utf-8':
        case undefined:
          return utf8ToBytes(string).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2
        case 'hex':
          return len >>> 1
        case 'base64':
          return base64ToBytes(string).length
        default:
          if (loweredCase) return utf8ToBytes(string).length // assume utf8
          encoding = ('' + encoding).toLowerCase()
          loweredCase = true
      }
    }
  }
  Buffer.byteLength = byteLength
  
  function slowToString (encoding, start, end) {
    var loweredCase = false
  
  
    if (start === undefined || start < 0) {
      start = 0
    }
    if (start > this.length) {
      return ''
    }
  
    if (end === undefined || end > this.length) {
      end = this.length
    }
  
    if (end <= 0) {
      return ''
    }
  
    end >>>= 0
    start >>>= 0
  
    if (end <= start) {
      return ''
    }
  
    if (!encoding) encoding = 'utf8'
  
    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end)
  
        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end)
  
        case 'ascii':
          return asciiSlice(this, start, end)
  
        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end)
  
        case 'base64':
          return base64Slice(this, start, end)
  
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end)
  
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = (encoding + '').toLowerCase()
          loweredCase = true
      }
    }
  }
  
  Buffer.prototype._isBuffer = true
  
  function swap (b, n, m) {
    var i = b[n]
    b[n] = b[m]
    b[m] = i
  }
  
  Buffer.prototype.swap16 = function swap16 () {
    var len = this.length
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits')
    }
    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1)
    }
    return this
  }
  
  Buffer.prototype.swap32 = function swap32 () {
    var len = this.length
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits')
    }
    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3)
      swap(this, i + 1, i + 2)
    }
    return this
  }
  
  Buffer.prototype.swap64 = function swap64 () {
    var len = this.length
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits')
    }
    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7)
      swap(this, i + 1, i + 6)
      swap(this, i + 2, i + 5)
      swap(this, i + 3, i + 4)
    }
    return this
  }
  
  Buffer.prototype.toString = function toString () {
    var length = this.length | 0
    if (length === 0) return ''
    if (arguments.length === 0) return utf8Slice(this, 0, length)
    return slowToString.apply(this, arguments)
  }
  
  Buffer.prototype.equals = function equals (b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
    if (this === b) return true
    return Buffer.compare(this, b) === 0
  }
  
  Buffer.prototype.inspect = function inspect () {
    var str = ''
    var max = exports.INSPECT_MAX_BYTES
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
      if (this.length > max) str += ' ... '
    }
    return '<Buffer ' + str + '>'
  }
  
  Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
    if (!Buffer.isBuffer(target)) {
      throw new TypeError('Argument must be a Buffer')
    }
  
    if (start === undefined) {
      start = 0
    }
    if (end === undefined) {
      end = target ? target.length : 0
    }
    if (thisStart === undefined) {
      thisStart = 0
    }
    if (thisEnd === undefined) {
      thisEnd = this.length
    }
  
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index')
    }
  
    if (thisStart >= thisEnd && start >= end) {
      return 0
    }
    if (thisStart >= thisEnd) {
      return -1
    }
    if (start >= end) {
      return 1
    }
  
    start >>>= 0
    end >>>= 0
    thisStart >>>= 0
    thisEnd >>>= 0
  
    if (this === target) return 0
  
    var x = thisEnd - thisStart
    var y = end - start
    var len = Math.min(x, y)
  
    var thisCopy = this.slice(thisStart, thisEnd)
    var targetCopy = target.slice(start, end)
  
    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i]
        y = targetCopy[i]
        break
      }
    }
  
    if (x < y) return -1
    if (y < x) return 1
    return 0
  }
  
  function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
    if (buffer.length === 0) return -1
  
    if (typeof byteOffset === 'string') {
      encoding = byteOffset
      byteOffset = 0
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000
    }
    byteOffset = +byteOffset  // Coerce to Number.
    if (isNaN(byteOffset)) {
      byteOffset = dir ? 0 : (buffer.length - 1)
    }
  
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset
    if (byteOffset >= buffer.length) {
      if (dir) return -1
      else byteOffset = buffer.length - 1
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0
      else return -1
    }
  
    if (typeof val === 'string') {
      val = Buffer.from(val, encoding)
    }
  
    if (Buffer.isBuffer(val)) {
      if (val.length === 0) {
        return -1
      }
      return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
    } else if (typeof val === 'number') {
      val = val & 0xFF // Search for a byte value [0-255]
      if (Buffer.TYPED_ARRAY_SUPPORT &&
          typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
        }
      }
      return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
    }
  
    throw new TypeError('val must be string, number or Buffer')
  }
  
  function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
    var indexSize = 1
    var arrLength = arr.length
    var valLength = val.length
  
    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase()
      if (encoding === 'ucs2' || encoding === 'ucs-2' ||
          encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1
        }
        indexSize = 2
        arrLength /= 2
        valLength /= 2
        byteOffset /= 2
      }
    }
  
    function read (buf, i) {
      if (indexSize === 1) {
        return buf[i]
      } else {
        return buf.readUInt16BE(i * indexSize)
      }
    }
  
    var i
    if (dir) {
      var foundIndex = -1
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
        } else {
          if (foundIndex !== -1) i -= i - foundIndex
          foundIndex = -1
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
      for (i = byteOffset; i >= 0; i--) {
        var found = true
        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false
            break
          }
        }
        if (found) return i
      }
    }
  
    return -1
  }
  
  Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1
  }
  
  Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
  }
  
  Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
  }
  
  function hexWrite (buf, string, offset, length) {
    offset = Number(offset) || 0
    var remaining = buf.length - offset
    if (!length) {
      length = remaining
    } else {
      length = Number(length)
      if (length > remaining) {
        length = remaining
      }
    }
  
    var strLen = string.length
    if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
  
    if (length > strLen / 2) {
      length = strLen / 2
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16)
      if (isNaN(parsed)) return i
      buf[offset + i] = parsed
    }
    return i
  }
  
  function utf8Write (buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
  }
  
  function asciiWrite (buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length)
  }
  
  function latin1Write (buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length)
  }
  
  function base64Write (buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length)
  }
  
  function ucs2Write (buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
  }
  
  Buffer.prototype.write = function write (string, offset, length, encoding) {
    if (offset === undefined) {
      encoding = 'utf8'
      length = this.length
      offset = 0
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset
      length = this.length
      offset = 0
    } else if (isFinite(offset)) {
      offset = offset | 0
      if (isFinite(length)) {
        length = length | 0
        if (encoding === undefined) encoding = 'utf8'
      } else {
        encoding = length
        length = undefined
      }
    } else {
      throw new Error(
        'Buffer.write(string, encoding, offset[, length]) is no longer supported'
      )
    }
  
    var remaining = this.length - offset
    if (length === undefined || length > remaining) length = remaining
  
    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds')
    }
  
    if (!encoding) encoding = 'utf8'
  
    var loweredCase = false
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length)
  
        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length)
  
        case 'ascii':
          return asciiWrite(this, string, offset, length)
  
        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length)
  
        case 'base64':
          return base64Write(this, string, offset, length)
  
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length)
  
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = ('' + encoding).toLowerCase()
          loweredCase = true
      }
    }
  }
  
  Buffer.prototype.toJSON = function toJSON () {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    }
  }
  
  function base64Slice (buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf)
    } else {
      return base64.fromByteArray(buf.slice(start, end))
    }
  }
  
  function utf8Slice (buf, start, end) {
    end = Math.min(buf.length, end)
    var res = []
  
    var i = start
    while (i < end) {
      var firstByte = buf[i]
      var codePoint = null
      var bytesPerSequence = (firstByte > 0xEF) ? 4
        : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
        : 1
  
      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint
  
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte
            }
            break
          case 2:
            secondByte = buf[i + 1]
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint
              }
            }
            break
          case 3:
            secondByte = buf[i + 1]
            thirdByte = buf[i + 2]
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint
              }
            }
            break
          case 4:
            secondByte = buf[i + 1]
            thirdByte = buf[i + 2]
            fourthByte = buf[i + 3]
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint
              }
            }
        }
      }
  
      if (codePoint === null) {
        codePoint = 0xFFFD
        bytesPerSequence = 1
      } else if (codePoint > 0xFFFF) {
        codePoint -= 0x10000
        res.push(codePoint >>> 10 & 0x3FF | 0xD800)
        codePoint = 0xDC00 | codePoint & 0x3FF
      }
  
      res.push(codePoint)
      i += bytesPerSequence
    }
  
    return decodeCodePointsArray(res)
  }
  
  var MAX_ARGUMENTS_LENGTH = 0x1000
  
  function decodeCodePointsArray (codePoints) {
    var len = codePoints.length
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    }
  
    var res = ''
    var i = 0
    while (i < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
      )
    }
    return res
  }
  
  function asciiSlice (buf, start, end) {
    var ret = ''
    end = Math.min(buf.length, end)
  
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F)
    }
    return ret
  }
  
  function latin1Slice (buf, start, end) {
    var ret = ''
    end = Math.min(buf.length, end)
  
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i])
    }
    return ret
  }
  
  function hexSlice (buf, start, end) {
    var len = buf.length
  
    if (!start || start < 0) start = 0
    if (!end || end < 0 || end > len) end = len
  
    var out = ''
    for (var i = start; i < end; ++i) {
      out += toHex(buf[i])
    }
    return out
  }
  
  function utf16leSlice (buf, start, end) {
    var bytes = buf.slice(start, end)
    var res = ''
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
    }
    return res
  }
  
  Buffer.prototype.slice = function slice (start, end) {
    var len = this.length
    start = ~~start
    end = end === undefined ? len : ~~end
  
    if (start < 0) {
      start += len
      if (start < 0) start = 0
    } else if (start > len) {
      start = len
    }
  
    if (end < 0) {
      end += len
      if (end < 0) end = 0
    } else if (end > len) {
      end = len
    }
  
    if (end < start) end = start
  
    var newBuf
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = this.subarray(start, end)
      newBuf.__proto__ = Buffer.prototype
    } else {
      var sliceLen = end - start
      newBuf = new Buffer(sliceLen, undefined)
      for (var i = 0; i < sliceLen; ++i) {
        newBuf[i] = this[i + start]
      }
    }
  
    return newBuf
  }
  
  
  function checkOffset (offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
  }
  
  Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
    offset = offset | 0
    byteLength = byteLength | 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)
  
    var val = this[offset]
    var mul = 1
    var i = 0
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul
    }
  
    return val
  }
  
  Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
    offset = offset | 0
    byteLength = byteLength | 0
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length)
    }
  
    var val = this[offset + --byteLength]
    var mul = 1
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul
    }
  
    return val
  }
  
  Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length)
    return this[offset]
  }
  
  Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length)
    return this[offset] | (this[offset + 1] << 8)
  }
  
  Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length)
    return (this[offset] << 8) | this[offset + 1]
  }
  
  Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return ((this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16)) +
        (this[offset + 3] * 0x1000000)
  }
  
  Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
  }
  
  Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
    offset = offset | 0
    byteLength = byteLength | 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)
  
    var val = this[offset]
    var mul = 1
    var i = 0
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul
    }
    mul *= 0x80
  
    if (val >= mul) val -= Math.pow(2, 8 * byteLength)
  
    return val
  }
  
  Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
    offset = offset | 0
    byteLength = byteLength | 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)
  
    var i = byteLength
    var mul = 1
    var val = this[offset + --i]
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul
    }
    mul *= 0x80
  
    if (val >= mul) val -= Math.pow(2, 8 * byteLength)
  
    return val
  }
  
  Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length)
    if (!(this[offset] & 0x80)) return (this[offset])
    return ((0xff - this[offset] + 1) * -1)
  }
  
  Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length)
    var val = this[offset] | (this[offset + 1] << 8)
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  }
  
  Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length)
    var val = this[offset + 1] | (this[offset] << 8)
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  }
  
  Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
  }
  
  Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
  }
  
  Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length)
    return ieee754.read(this, offset, true, 23, 4)
  }
  
  Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length)
    return ieee754.read(this, offset, false, 23, 4)
  }
  
  Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length)
    return ieee754.read(this, offset, true, 52, 8)
  }
  
  Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length)
    return ieee754.read(this, offset, false, 52, 8)
  }
  
  function checkInt (buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
  }
  
  Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset | 0
    byteLength = byteLength | 0
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1
      checkInt(this, value, offset, byteLength, maxBytes, 0)
    }
  
    var mul = 1
    var i = 0
    this[offset] = value & 0xFF
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset | 0
    byteLength = byteLength | 0
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1
      checkInt(this, value, offset, byteLength, maxBytes, 0)
    }
  
    var i = byteLength - 1
    var mul = 1
    this[offset + i] = value & 0xFF
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
    this[offset] = (value & 0xff)
    return offset + 1
  }
  
  function objectWriteUInt16 (buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
      buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
        (littleEndian ? i : 1 - i) * 8
    }
  }
  
  Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
    } else {
      objectWriteUInt16(this, value, offset, true)
    }
    return offset + 2
  }
  
  Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8)
      this[offset + 1] = (value & 0xff)
    } else {
      objectWriteUInt16(this, value, offset, false)
    }
    return offset + 2
  }
  
  function objectWriteUInt32 (buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
      buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
    }
  }
  
  Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = (value >>> 24)
      this[offset + 2] = (value >>> 16)
      this[offset + 1] = (value >>> 8)
      this[offset] = (value & 0xff)
    } else {
      objectWriteUInt32(this, value, offset, true)
    }
    return offset + 4
  }
  
  Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24)
      this[offset + 1] = (value >>> 16)
      this[offset + 2] = (value >>> 8)
      this[offset + 3] = (value & 0xff)
    } else {
      objectWriteUInt32(this, value, offset, false)
    }
    return offset + 4
  }
  
  Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1)
  
      checkInt(this, value, offset, byteLength, limit - 1, -limit)
    }
  
    var i = 0
    var mul = 1
    var sub = 0
    this[offset] = value & 0xFF
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1)
  
      checkInt(this, value, offset, byteLength, limit - 1, -limit)
    }
  
    var i = byteLength - 1
    var mul = 1
    var sub = 0
    this[offset + i] = value & 0xFF
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
    if (value < 0) value = 0xff + value + 1
    this[offset] = (value & 0xff)
    return offset + 1
  }
  
  Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
    } else {
      objectWriteUInt16(this, value, offset, true)
    }
    return offset + 2
  }
  
  Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8)
      this[offset + 1] = (value & 0xff)
    } else {
      objectWriteUInt16(this, value, offset, false)
    }
    return offset + 2
  }
  
  Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      this[offset + 2] = (value >>> 16)
      this[offset + 3] = (value >>> 24)
    } else {
      objectWriteUInt32(this, value, offset, true)
    }
    return offset + 4
  }
  
  Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
    value = +value
    offset = offset | 0
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
    if (value < 0) value = 0xffffffff + value + 1
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24)
      this[offset + 1] = (value >>> 16)
      this[offset + 2] = (value >>> 8)
      this[offset + 3] = (value & 0xff)
    } else {
      objectWriteUInt32(this, value, offset, false)
    }
    return offset + 4
  }
  
  function checkIEEE754 (buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
    if (offset < 0) throw new RangeError('Index out of range')
  }
  
  function writeFloat (buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4)
    return offset + 4
  }
  
  Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert)
  }
  
  Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert)
  }
  
  function writeDouble (buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8)
    return offset + 8
  }
  
  Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert)
  }
  
  Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert)
  }
  
  Buffer.prototype.copy = function copy (target, targetStart, start, end) {
    if (!start) start = 0
    if (!end && end !== 0) end = this.length
    if (targetStart >= target.length) targetStart = target.length
    if (!targetStart) targetStart = 0
    if (end > 0 && end < start) end = start
  
    if (end === start) return 0
    if (target.length === 0 || this.length === 0) return 0
  
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds')
    }
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
    if (end < 0) throw new RangeError('sourceEnd out of bounds')
  
    if (end > this.length) end = this.length
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start
    }
  
    var len = end - start
    var i
  
    if (this === target && start < targetStart && targetStart < end) {
      for (i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start]
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      for (i = 0; i < len; ++i) {
        target[i + targetStart] = this[i + start]
      }
    } else {
      Uint8Array.prototype.set.call(
        target,
        this.subarray(start, start + len),
        targetStart
      )
    }
  
    return len
  }
  
  Buffer.prototype.fill = function fill (val, start, end, encoding) {
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start
        start = 0
        end = this.length
      } else if (typeof end === 'string') {
        encoding = end
        end = this.length
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0)
        if (code < 256) {
          val = code
        }
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string')
      }
      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
      }
    } else if (typeof val === 'number') {
      val = val & 255
    }
  
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index')
    }
  
    if (end <= start) {
      return this
    }
  
    start = start >>> 0
    end = end === undefined ? this.length : end >>> 0
  
    if (!val) val = 0
  
    var i
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val
      }
    } else {
      var bytes = Buffer.isBuffer(val)
        ? val
        : utf8ToBytes(new Buffer(val, encoding).toString())
      var len = bytes.length
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len]
      }
    }
  
    return this
  }
  
  
  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
  
  function base64clean (str) {
    str = stringtrim(str).replace(INVALID_BASE64_RE, '')
    if (str.length < 2) return ''
    while (str.length % 4 !== 0) {
      str = str + '='
    }
    return str
  }
  
  function stringtrim (str) {
    if (str.trim) return str.trim()
    return str.replace(/^\s+|\s+$/g, '')
  }
  
  function toHex (n) {
    if (n < 16) return '0' + n.toString(16)
    return n.toString(16)
  }
  
  function utf8ToBytes (string, units) {
    units = units || Infinity
    var codePoint
    var length = string.length
    var leadSurrogate = null
    var bytes = []
  
    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i)
  
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        if (!leadSurrogate) {
          if (codePoint > 0xDBFF) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            continue
          } else if (i + 1 === length) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            continue
          }
  
          leadSurrogate = codePoint
  
          continue
        }
  
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          leadSurrogate = codePoint
          continue
        }
  
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
      } else if (leadSurrogate) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
      }
  
      leadSurrogate = null
  
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break
        bytes.push(codePoint)
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break
        bytes.push(
          codePoint >> 0x6 | 0xC0,
          codePoint & 0x3F | 0x80
        )
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break
        bytes.push(
          codePoint >> 0xC | 0xE0,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        )
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break
        bytes.push(
          codePoint >> 0x12 | 0xF0,
          codePoint >> 0xC & 0x3F | 0x80,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        )
      } else {
        throw new Error('Invalid code point')
      }
    }
  
    return bytes
  }
  
  function asciiToBytes (str) {
    var byteArray = []
    for (var i = 0; i < str.length; ++i) {
      byteArray.push(str.charCodeAt(i) & 0xFF)
    }
    return byteArray
  }
  
  function utf16leToBytes (str, units) {
    var c, hi, lo
    var byteArray = []
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break
  
      c = str.charCodeAt(i)
      hi = c >> 8
      lo = c % 256
      byteArray.push(lo)
      byteArray.push(hi)
    }
  
    return byteArray
  }
  
  function base64ToBytes (str) {
    return base64.toByteArray(base64clean(str))
  }
  
  function blitBuffer (src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if ((i + offset >= dst.length) || (i >= src.length)) break
      dst[i + offset] = src[i]
    }
    return i
  }
  
  function isnan (val) {
    return val !== val // eslint-disable-line no-self-compare
  }
  
  }).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
  },{"base64-js":69,"buffer":71,"ieee754":104,"isarray":105}],77:[function(require,module,exports){
  'use strict';
  
  var bind = require('function-bind');
  
  var $apply = require('./functionApply');
  var $call = require('./functionCall');
  var $reflectApply = require('./reflectApply');
  
  
  module.exports = $reflectApply || bind.call($call, $apply);
  
  },{"./functionApply":78,"./functionCall":79,"./reflectApply":81,"function-bind":94}],78:[function(require,module,exports){
  'use strict';
  
  
  module.exports = Function.prototype.apply;
  
  },{}],79:[function(require,module,exports){
  'use strict';
  
  
  module.exports = Function.prototype.call;
  
  },{}],80:[function(require,module,exports){
  'use strict';
  
  var bind = require('function-bind');
  var $TypeError = require('es-errors/type');
  
  var $call = require('./functionCall');
  var $actualApply = require('./actualApply');
  
  
  module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
      throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
  };
  
  },{"./actualApply":77,"./functionCall":79,"es-errors/type":90,"function-bind":94}],81:[function(require,module,exports){
  'use strict';
  
  
  module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
  
  },{}],82:[function(require,module,exports){
  'use strict';
  
  var GetIntrinsic = require('get-intrinsic');
  
  var callBindBasic = require('call-bind-apply-helpers');
  
  
  var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);
  
  
  module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = /** @type {Parameters<typeof callBindBasic>[0][0]} */ (GetIntrinsic(name, !!allowMissing));
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
      return callBindBasic([intrinsic]);
    }
    return intrinsic;
  };
  
  },{"call-bind-apply-helpers":80,"get-intrinsic":95}],83:[function(require,module,exports){
  'use strict';
  
  var callBind = require('call-bind-apply-helpers');
  var gOPD = require('gopd');
  
  var hasProtoAccessor;
  try {
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
  } catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
      throw e;
    }
  }
  
  var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));
  
  var $Object = Object;
  var $getPrototypeOf = $Object.getPrototypeOf;
  
  
  module.exports = desc && typeof desc.get === 'function'
    ? callBind([desc.get])
    : typeof $getPrototypeOf === 'function'
      ? /** @type {import('./get')} */ function getDunder(value) {
        return $getPrototypeOf(value == null ? value : $Object(value));
      }
      : false;
  
  },{"call-bind-apply-helpers":80,"gopd":100}],84:[function(require,module,exports){
  'use strict';
  
  
  var $defineProperty = Object.defineProperty || false;
  if ($defineProperty) {
    try {
      $defineProperty({}, 'a', { value: 1 });
    } catch (e) {
      $defineProperty = false;
    }
  }
  
  module.exports = $defineProperty;
  
  },{}],85:[function(require,module,exports){
  'use strict';
  
  
  module.exports = EvalError;
  
  },{}],86:[function(require,module,exports){
  'use strict';
  
  
  module.exports = Error;
  
  },{}],87:[function(require,module,exports){
  'use strict';
  
  
  module.exports = RangeError;
  
  },{}],88:[function(require,module,exports){
  'use strict';
  
  
  module.exports = ReferenceError;
  
  },{}],89:[function(require,module,exports){
  'use strict';
  
  
  module.exports = SyntaxError;
  
  },{}],90:[function(require,module,exports){
  'use strict';
  
  
  module.exports = TypeError;
  
  },{}],91:[function(require,module,exports){
  'use strict';
  
  
  module.exports = URIError;
  
  },{}],92:[function(require,module,exports){
  'use strict';
  
  
  module.exports = Object;
  
  },{}],93:[function(require,module,exports){
  'use strict';
  
  
  
  var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
  var toStr = Object.prototype.toString;
  var max = Math.max;
  var funcType = '[object Function]';
  
  var concatty = function concatty(a, b) {
      var arr = [];
  
      for (var i = 0; i < a.length; i += 1) {
          arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
          arr[j + a.length] = b[j];
      }
  
      return arr;
  };
  
  var slicy = function slicy(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
          arr[j] = arrLike[i];
      }
      return arr;
  };
  
  var joiny = function (arr, joiner) {
      var str = '';
      for (var i = 0; i < arr.length; i += 1) {
          str += arr[i];
          if (i + 1 < arr.length) {
              str += joiner;
          }
      }
      return str;
  };
  
  module.exports = function bind(that) {
      var target = this;
      if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
  
      var bound;
      var binder = function () {
          if (this instanceof bound) {
              var result = target.apply(
                  this,
                  concatty(args, arguments)
              );
              if (Object(result) === result) {
                  return result;
              }
              return this;
          }
          return target.apply(
              that,
              concatty(args, arguments)
          );
  
      };
  
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
          boundArgs[i] = '$' + i;
      }
  
      bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
  
      if (target.prototype) {
          var Empty = function Empty() {};
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
      }
  
      return bound;
  };
  
  },{}],94:[function(require,module,exports){
  'use strict';
  
  var implementation = require('./implementation');
  
  module.exports = Function.prototype.bind || implementation;
  
  },{"./implementation":93}],95:[function(require,module,exports){
  'use strict';
  
  var undefined;
  
  var $Object = require('es-object-atoms');
  
  var $Error = require('es-errors');
  var $EvalError = require('es-errors/eval');
  var $RangeError = require('es-errors/range');
  var $ReferenceError = require('es-errors/ref');
  var $SyntaxError = require('es-errors/syntax');
  var $TypeError = require('es-errors/type');
  var $URIError = require('es-errors/uri');
  
  var abs = require('math-intrinsics/abs');
  var floor = require('math-intrinsics/floor');
  var max = require('math-intrinsics/max');
  var min = require('math-intrinsics/min');
  var pow = require('math-intrinsics/pow');
  var round = require('math-intrinsics/round');
  var sign = require('math-intrinsics/sign');
  
  var $Function = Function;
  
  var getEvalledConstructor = function (expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
  };
  
  var $gOPD = require('gopd');
  var $defineProperty = require('es-define-property');
  
  var throwTypeError = function () {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD
    ? (function () {
      try {
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }())
    : throwTypeError;
  
  var hasSymbols = require('has-symbols')();
  
  var getProto = require('get-proto');
  var $ObjectGPO = require('get-proto/Object.getPrototypeOf');
  var $ReflectGPO = require('get-proto/Reflect.getPrototypeOf');
  
  var $apply = require('call-bind-apply-helpers/functionApply');
  var $call = require('call-bind-apply-helpers/functionCall');
  
  var needsEval = {};
  
  var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
  
  var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval, // eslint-disable-line no-eval
    '%EvalError%': $EvalError,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
  
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
  };
  
  if (getProto) {
    try {
      null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
      var errorProto = getProto(getProto(e));
      INTRINSICS['%Error.prototype%'] = errorProto;
    }
  }
  
  var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
      value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
      value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
      value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
      var fn = doEval('%AsyncGeneratorFunction%');
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === '%AsyncIteratorPrototype%') {
      var gen = doEval('%AsyncGenerator%');
      if (gen && getProto) {
        value = getProto(gen.prototype);
      }
    }
  
    INTRINSICS[name] = value;
  
    return value;
  };
  
  var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
    '%ArrayPrototype%': ['Array', 'prototype'],
    '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
    '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
    '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
    '%ArrayProto_values%': ['Array', 'prototype', 'values'],
    '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
    '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
    '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
    '%BooleanPrototype%': ['Boolean', 'prototype'],
    '%DataViewPrototype%': ['DataView', 'prototype'],
    '%DatePrototype%': ['Date', 'prototype'],
    '%ErrorPrototype%': ['Error', 'prototype'],
    '%EvalErrorPrototype%': ['EvalError', 'prototype'],
    '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
    '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
    '%FunctionPrototype%': ['Function', 'prototype'],
    '%Generator%': ['GeneratorFunction', 'prototype'],
    '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
    '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
    '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
    '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
    '%JSONParse%': ['JSON', 'parse'],
    '%JSONStringify%': ['JSON', 'stringify'],
    '%MapPrototype%': ['Map', 'prototype'],
    '%NumberPrototype%': ['Number', 'prototype'],
    '%ObjectPrototype%': ['Object', 'prototype'],
    '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
    '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
    '%PromisePrototype%': ['Promise', 'prototype'],
    '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
    '%Promise_all%': ['Promise', 'all'],
    '%Promise_reject%': ['Promise', 'reject'],
    '%Promise_resolve%': ['Promise', 'resolve'],
    '%RangeErrorPrototype%': ['RangeError', 'prototype'],
    '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
    '%RegExpPrototype%': ['RegExp', 'prototype'],
    '%SetPrototype%': ['Set', 'prototype'],
    '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
    '%StringPrototype%': ['String', 'prototype'],
    '%SymbolPrototype%': ['Symbol', 'prototype'],
    '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
    '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
    '%TypeErrorPrototype%': ['TypeError', 'prototype'],
    '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
    '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
    '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
    '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
    '%URIErrorPrototype%': ['URIError', 'prototype'],
    '%WeakMapPrototype%': ['WeakMap', 'prototype'],
    '%WeakSetPrototype%': ['WeakSet', 'prototype']
  };
  
  var bind = require('function-bind');
  var hasOwn = require('hasown');
  var $concat = bind.call($call, Array.prototype.concat);
  var $spliceApply = bind.call($apply, Array.prototype.splice);
  var $replace = bind.call($call, String.prototype.replace);
  var $strSlice = bind.call($call, String.prototype.slice);
  var $exec = bind.call($call, RegExp.prototype.exec);
  
  
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
  var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
      throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
      throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function (match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
  };
  
  
  var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = '%' + alias[0] + '%';
    }
  
    if (hasOwn(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === 'undefined' && !allowMissing) {
        throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
      }
  
      return {
        alias: alias,
        name: intrinsicName,
        value: value
      };
    }
  
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
  };
  
  module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
  
    if ($exec(/^%?[^%]*%?$/, name) === null) {
      throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
  
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
  
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
  
    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if (
        (
          (first === '"' || first === "'" || first === '`')
          || (last === '"' || last === "'" || last === '`')
        )
        && first !== last
      ) {
        throw new $SyntaxError('property names with quotes must have matching quotes');
      }
      if (part === 'constructor' || !isOwn) {
        skipFurtherCaching = true;
      }
  
      intrinsicBaseName += '.' + part;
      intrinsicRealName = '%' + intrinsicBaseName + '%';
  
      if (hasOwn(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
          }
          return void undefined;
        }
        if ($gOPD && (i + 1) >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
  
          if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn(value, part);
          value = value[part];
        }
  
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
  
  },{"call-bind-apply-helpers/functionApply":78,"call-bind-apply-helpers/functionCall":79,"es-define-property":84,"es-errors":86,"es-errors/eval":85,"es-errors/range":87,"es-errors/ref":88,"es-errors/syntax":89,"es-errors/type":90,"es-errors/uri":91,"es-object-atoms":92,"function-bind":94,"get-proto":98,"get-proto/Object.getPrototypeOf":96,"get-proto/Reflect.getPrototypeOf":97,"gopd":100,"has-symbols":101,"hasown":103,"math-intrinsics/abs":107,"math-intrinsics/floor":108,"math-intrinsics/max":110,"math-intrinsics/min":111,"math-intrinsics/pow":112,"math-intrinsics/round":113,"math-intrinsics/sign":114}],96:[function(require,module,exports){
  'use strict';
  
  var $Object = require('es-object-atoms');
  
  
  module.exports = $Object.getPrototypeOf || null;
  
  },{"es-object-atoms":92}],97:[function(require,module,exports){
  'use strict';
  
  
  module.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;
  
  },{}],98:[function(require,module,exports){
  'use strict';
  
  var reflectGetProto = require('./Reflect.getPrototypeOf');
  var originalGetProto = require('./Object.getPrototypeOf');
  
  var getDunderProto = require('dunder-proto/get');
  
  
  module.exports = reflectGetProto
    ? function getProto(O) {
      return reflectGetProto(O);
    }
    : originalGetProto
      ? function getProto(O) {
        if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
          throw new TypeError('getProto: not an object');
        }
        return originalGetProto(O);
      }
      : getDunderProto
        ? function getProto(O) {
          return getDunderProto(O);
        }
        : null;
  
  },{"./Object.getPrototypeOf":96,"./Reflect.getPrototypeOf":97,"dunder-proto/get":83}],99:[function(require,module,exports){
  'use strict';
  
  
  module.exports = Object.getOwnPropertyDescriptor;
  
  },{}],100:[function(require,module,exports){
  'use strict';
  
  
  var $gOPD = require('./gOPD');
  
  if ($gOPD) {
    try {
      $gOPD([], 'length');
    } catch (e) {
      $gOPD = null;
    }
  }
  
  module.exports = $gOPD;
  
  },{"./gOPD":99}],101:[function(require,module,exports){
  'use strict';
  
  var origSymbol = typeof Symbol !== 'undefined' && Symbol;
  var hasSymbolSham = require('./shams');
  
  
  module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') { return false; }
    if (typeof Symbol !== 'function') { return false; }
    if (typeof origSymbol('foo') !== 'symbol') { return false; }
    if (typeof Symbol('bar') !== 'symbol') { return false; }
  
    return hasSymbolSham();
  };
  
  },{"./shams":102}],102:[function(require,module,exports){
  'use strict';
  
  
  
  module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
    if (typeof Symbol.iterator === 'symbol') { return true; }
  
  
    var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') { return false; }
  
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }
  
  
  
    var symVal = 42;
    obj[sym] = symVal;
    for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }
  
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }
  
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) { return false; }
  
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }
  
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
      var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
      if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
    }
  
    return true;
  };
  
  },{}],103:[function(require,module,exports){
  'use strict';
  
  var call = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind = require('function-bind');
  
  
  module.exports = bind.call(call, $hasOwn);
  
  },{"function-bind":94}],104:[function(require,module,exports){
  exports.read = function (buffer, offset, isLE, mLen, nBytes) {
    var e, m
    var eLen = (nBytes * 8) - mLen - 1
    var eMax = (1 << eLen) - 1
    var eBias = eMax >> 1
    var nBits = -7
    var i = isLE ? (nBytes - 1) : 0
    var d = isLE ? -1 : 1
    var s = buffer[offset + i]
  
    i += d
  
    e = s & ((1 << (-nBits)) - 1)
    s >>= (-nBits)
    nBits += eLen
    for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}
  
    m = e & ((1 << (-nBits)) - 1)
    e >>= (-nBits)
    nBits += mLen
    for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}
  
    if (e === 0) {
      e = 1 - eBias
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity)
    } else {
      m = m + Math.pow(2, mLen)
      e = e - eBias
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
  }
  
  exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c
    var eLen = (nBytes * 8) - mLen - 1
    var eMax = (1 << eLen) - 1
    var eBias = eMax >> 1
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
    var i = isLE ? 0 : (nBytes - 1)
    var d = isLE ? 1 : -1
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
  
    value = Math.abs(value)
  
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0
      e = eMax
    } else {
      e = Math.floor(Math.log(value) / Math.LN2)
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--
        c *= 2
      }
      if (e + eBias >= 1) {
        value += rt / c
      } else {
        value += rt * Math.pow(2, 1 - eBias)
      }
      if (value * c >= 2) {
        e++
        c /= 2
      }
  
      if (e + eBias >= eMax) {
        m = 0
        e = eMax
      } else if (e + eBias >= 1) {
        m = ((value * c) - 1) * Math.pow(2, mLen)
        e = e + eBias
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
        e = 0
      }
    }
  
    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
  
    e = (e << mLen) | m
    eLen += mLen
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
  
    buffer[offset + i - d] |= s * 128
  }
  
  },{}],105:[function(require,module,exports){
  var toString = {}.toString;
  
  module.exports = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };
  
  },{}],106:[function(require,module,exports){
  (function(exports) {
    "use strict";
  
    function isArray(obj) {
      if (obj !== null) {
        return Object.prototype.toString.call(obj) === "[object Array]";
      } else {
        return false;
      }
    }
  
    function isObject(obj) {
      if (obj !== null) {
        return Object.prototype.toString.call(obj) === "[object Object]";
      } else {
        return false;
      }
    }
  
    function strictDeepEqual(first, second) {
      if (first === second) {
        return true;
      }
  
      var firstType = Object.prototype.toString.call(first);
      if (firstType !== Object.prototype.toString.call(second)) {
        return false;
      }
      if (isArray(first) === true) {
        if (first.length !== second.length) {
          return false;
        }
        for (var i = 0; i < first.length; i++) {
          if (strictDeepEqual(first[i], second[i]) === false) {
            return false;
          }
        }
        return true;
      }
      if (isObject(first) === true) {
        var keysSeen = {};
        for (var key in first) {
          if (hasOwnProperty.call(first, key)) {
            if (strictDeepEqual(first[key], second[key]) === false) {
              return false;
            }
            keysSeen[key] = true;
          }
        }
        for (var key2 in second) {
          if (hasOwnProperty.call(second, key2)) {
            if (keysSeen[key2] !== true) {
              return false;
            }
          }
        }
        return true;
      }
      return false;
    }
  
    function isFalse(obj) {
  
      if (obj === "" || obj === false || obj === null) {
          return true;
      } else if (isArray(obj) && obj.length === 0) {
          return true;
      } else if (isObject(obj)) {
          for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                return false;
              }
          }
          return true;
      } else {
          return false;
      }
    }
  
    function objValues(obj) {
      var keys = Object.keys(obj);
      var values = [];
      for (var i = 0; i < keys.length; i++) {
        values.push(obj[keys[i]]);
      }
      return values;
    }
  
    function merge(a, b) {
        var merged = {};
        for (var key in a) {
            merged[key] = a[key];
        }
        for (var key2 in b) {
            merged[key2] = b[key2];
        }
        return merged;
    }
  
    var trimLeft;
    if (typeof String.prototype.trimLeft === "function") {
      trimLeft = function(str) {
        return str.trimLeft();
      };
    } else {
      trimLeft = function(str) {
        return str.match(/^\s*(.*)/)[1];
      };
    }
  
    var TYPE_NUMBER = 0;
    var TYPE_ANY = 1;
    var TYPE_STRING = 2;
    var TYPE_ARRAY = 3;
    var TYPE_OBJECT = 4;
    var TYPE_BOOLEAN = 5;
    var TYPE_EXPREF = 6;
    var TYPE_NULL = 7;
    var TYPE_ARRAY_NUMBER = 8;
    var TYPE_ARRAY_STRING = 9;
    var TYPE_NAME_TABLE = {
      0: 'number',
      1: 'any',
      2: 'string',
      3: 'array',
      4: 'object',
      5: 'boolean',
      6: 'expression',
      7: 'null',
      8: 'Array<number>',
      9: 'Array<string>'
    };
  
    var TOK_EOF = "EOF";
    var TOK_UNQUOTEDIDENTIFIER = "UnquotedIdentifier";
    var TOK_QUOTEDIDENTIFIER = "QuotedIdentifier";
    var TOK_RBRACKET = "Rbracket";
    var TOK_RPAREN = "Rparen";
    var TOK_COMMA = "Comma";
    var TOK_COLON = "Colon";
    var TOK_RBRACE = "Rbrace";
    var TOK_NUMBER = "Number";
    var TOK_CURRENT = "Current";
    var TOK_EXPREF = "Expref";
    var TOK_PIPE = "Pipe";
    var TOK_OR = "Or";
    var TOK_AND = "And";
    var TOK_EQ = "EQ";
    var TOK_GT = "GT";
    var TOK_LT = "LT";
    var TOK_GTE = "GTE";
    var TOK_LTE = "LTE";
    var TOK_NE = "NE";
    var TOK_FLATTEN = "Flatten";
    var TOK_STAR = "Star";
    var TOK_FILTER = "Filter";
    var TOK_DOT = "Dot";
    var TOK_NOT = "Not";
    var TOK_LBRACE = "Lbrace";
    var TOK_LBRACKET = "Lbracket";
    var TOK_LPAREN= "Lparen";
    var TOK_LITERAL= "Literal";
  
  
    var basicTokens = {
      ".": TOK_DOT,
      "*": TOK_STAR,
      ",": TOK_COMMA,
      ":": TOK_COLON,
      "{": TOK_LBRACE,
      "}": TOK_RBRACE,
      "]": TOK_RBRACKET,
      "(": TOK_LPAREN,
      ")": TOK_RPAREN,
      "@": TOK_CURRENT
    };
  
    var operatorStartToken = {
        "<": true,
        ">": true,
        "=": true,
        "!": true
    };
  
    var skipChars = {
        " ": true,
        "\t": true,
        "\n": true
    };
  
  
    function isAlpha(ch) {
        return (ch >= "a" && ch <= "z") ||
               (ch >= "A" && ch <= "Z") ||
               ch === "_";
    }
  
    function isNum(ch) {
        return (ch >= "0" && ch <= "9") ||
               ch === "-";
    }
    function isAlphaNum(ch) {
        return (ch >= "a" && ch <= "z") ||
               (ch >= "A" && ch <= "Z") ||
               (ch >= "0" && ch <= "9") ||
               ch === "_";
    }
  
    function Lexer() {
    }
    Lexer.prototype = {
        tokenize: function(stream) {
            var tokens = [];
            this._current = 0;
            var start;
            var identifier;
            var token;
            while (this._current < stream.length) {
                if (isAlpha(stream[this._current])) {
                    start = this._current;
                    identifier = this._consumeUnquotedIdentifier(stream);
                    tokens.push({type: TOK_UNQUOTEDIDENTIFIER,
                                 value: identifier,
                                 start: start});
                } else if (basicTokens[stream[this._current]] !== undefined) {
                    tokens.push({type: basicTokens[stream[this._current]],
                                value: stream[this._current],
                                start: this._current});
                    this._current++;
                } else if (isNum(stream[this._current])) {
                    token = this._consumeNumber(stream);
                    tokens.push(token);
                } else if (stream[this._current] === "[") {
                    token = this._consumeLBracket(stream);
                    tokens.push(token);
                } else if (stream[this._current] === "\"") {
                    start = this._current;
                    identifier = this._consumeQuotedIdentifier(stream);
                    tokens.push({type: TOK_QUOTEDIDENTIFIER,
                                 value: identifier,
                                 start: start});
                } else if (stream[this._current] === "'") {
                    start = this._current;
                    identifier = this._consumeRawStringLiteral(stream);
                    tokens.push({type: TOK_LITERAL,
                                 value: identifier,
                                 start: start});
                } else if (stream[this._current] === "`") {
                    start = this._current;
                    var literal = this._consumeLiteral(stream);
                    tokens.push({type: TOK_LITERAL,
                                 value: literal,
                                 start: start});
                } else if (operatorStartToken[stream[this._current]] !== undefined) {
                    tokens.push(this._consumeOperator(stream));
                } else if (skipChars[stream[this._current]] !== undefined) {
                    this._current++;
                } else if (stream[this._current] === "&") {
                    start = this._current;
                    this._current++;
                    if (stream[this._current] === "&") {
                        this._current++;
                        tokens.push({type: TOK_AND, value: "&&", start: start});
                    } else {
                        tokens.push({type: TOK_EXPREF, value: "&", start: start});
                    }
                } else if (stream[this._current] === "|") {
                    start = this._current;
                    this._current++;
                    if (stream[this._current] === "|") {
                        this._current++;
                        tokens.push({type: TOK_OR, value: "||", start: start});
                    } else {
                        tokens.push({type: TOK_PIPE, value: "|", start: start});
                    }
                } else {
                    var error = new Error("Unknown character:" + stream[this._current]);
                    error.name = "LexerError";
                    throw error;
                }
            }
            return tokens;
        },
  
        _consumeUnquotedIdentifier: function(stream) {
            var start = this._current;
            this._current++;
            while (this._current < stream.length && isAlphaNum(stream[this._current])) {
                this._current++;
            }
            return stream.slice(start, this._current);
        },
  
        _consumeQuotedIdentifier: function(stream) {
            var start = this._current;
            this._current++;
            var maxLength = stream.length;
            while (stream[this._current] !== "\"" && this._current < maxLength) {
                var current = this._current;
                if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                                 stream[current + 1] === "\"")) {
                    current += 2;
                } else {
                    current++;
                }
                this._current = current;
            }
            this._current++;
            return JSON.parse(stream.slice(start, this._current));
        },
  
        _consumeRawStringLiteral: function(stream) {
            var start = this._current;
            this._current++;
            var maxLength = stream.length;
            while (stream[this._current] !== "'" && this._current < maxLength) {
                var current = this._current;
                if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                                 stream[current + 1] === "'")) {
                    current += 2;
                } else {
                    current++;
                }
                this._current = current;
            }
            this._current++;
            var literal = stream.slice(start + 1, this._current - 1);
            return literal.replace("\\'", "'");
        },
  
        _consumeNumber: function(stream) {
            var start = this._current;
            this._current++;
            var maxLength = stream.length;
            while (isNum(stream[this._current]) && this._current < maxLength) {
                this._current++;
            }
            var value = parseInt(stream.slice(start, this._current));
            return {type: TOK_NUMBER, value: value, start: start};
        },
  
        _consumeLBracket: function(stream) {
            var start = this._current;
            this._current++;
            if (stream[this._current] === "?") {
                this._current++;
                return {type: TOK_FILTER, value: "[?", start: start};
            } else if (stream[this._current] === "]") {
                this._current++;
                return {type: TOK_FLATTEN, value: "[]", start: start};
            } else {
                return {type: TOK_LBRACKET, value: "[", start: start};
            }
        },
  
        _consumeOperator: function(stream) {
            var start = this._current;
            var startingChar = stream[start];
            this._current++;
            if (startingChar === "!") {
                if (stream[this._current] === "=") {
                    this._current++;
                    return {type: TOK_NE, value: "!=", start: start};
                } else {
                  return {type: TOK_NOT, value: "!", start: start};
                }
            } else if (startingChar === "<") {
                if (stream[this._current] === "=") {
                    this._current++;
                    return {type: TOK_LTE, value: "<=", start: start};
                } else {
                    return {type: TOK_LT, value: "<", start: start};
                }
            } else if (startingChar === ">") {
                if (stream[this._current] === "=") {
                    this._current++;
                    return {type: TOK_GTE, value: ">=", start: start};
                } else {
                    return {type: TOK_GT, value: ">", start: start};
                }
            } else if (startingChar === "=") {
                if (stream[this._current] === "=") {
                    this._current++;
                    return {type: TOK_EQ, value: "==", start: start};
                }
            }
        },
  
        _consumeLiteral: function(stream) {
            this._current++;
            var start = this._current;
            var maxLength = stream.length;
            var literal;
            while(stream[this._current] !== "`" && this._current < maxLength) {
                var current = this._current;
                if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                                 stream[current + 1] === "`")) {
                    current += 2;
                } else {
                    current++;
                }
                this._current = current;
            }
            var literalString = trimLeft(stream.slice(start, this._current));
            literalString = literalString.replace("\\`", "`");
            if (this._looksLikeJSON(literalString)) {
                literal = JSON.parse(literalString);
            } else {
                literal = JSON.parse("\"" + literalString + "\"");
            }
            this._current++;
            return literal;
        },
  
        _looksLikeJSON: function(literalString) {
            var startingChars = "[{\"";
            var jsonLiterals = ["true", "false", "null"];
            var numberLooking = "-0123456789";
  
            if (literalString === "") {
                return false;
            } else if (startingChars.indexOf(literalString[0]) >= 0) {
                return true;
            } else if (jsonLiterals.indexOf(literalString) >= 0) {
                return true;
            } else if (numberLooking.indexOf(literalString[0]) >= 0) {
                try {
                    JSON.parse(literalString);
                    return true;
                } catch (ex) {
                    return false;
                }
            } else {
                return false;
            }
        }
    };
  
        var bindingPower = {};
        bindingPower[TOK_EOF] = 0;
        bindingPower[TOK_UNQUOTEDIDENTIFIER] = 0;
        bindingPower[TOK_QUOTEDIDENTIFIER] = 0;
        bindingPower[TOK_RBRACKET] = 0;
        bindingPower[TOK_RPAREN] = 0;
        bindingPower[TOK_COMMA] = 0;
        bindingPower[TOK_RBRACE] = 0;
        bindingPower[TOK_NUMBER] = 0;
        bindingPower[TOK_CURRENT] = 0;
        bindingPower[TOK_EXPREF] = 0;
        bindingPower[TOK_PIPE] = 1;
        bindingPower[TOK_OR] = 2;
        bindingPower[TOK_AND] = 3;
        bindingPower[TOK_EQ] = 5;
        bindingPower[TOK_GT] = 5;
        bindingPower[TOK_LT] = 5;
        bindingPower[TOK_GTE] = 5;
        bindingPower[TOK_LTE] = 5;
        bindingPower[TOK_NE] = 5;
        bindingPower[TOK_FLATTEN] = 9;
        bindingPower[TOK_STAR] = 20;
        bindingPower[TOK_FILTER] = 21;
        bindingPower[TOK_DOT] = 40;
        bindingPower[TOK_NOT] = 45;
        bindingPower[TOK_LBRACE] = 50;
        bindingPower[TOK_LBRACKET] = 55;
        bindingPower[TOK_LPAREN] = 60;
  
    function Parser() {
    }
  
    Parser.prototype = {
        parse: function(expression) {
            this._loadTokens(expression);
            this.index = 0;
            var ast = this.expression(0);
            if (this._lookahead(0) !== TOK_EOF) {
                var t = this._lookaheadToken(0);
                var error = new Error(
                    "Unexpected token type: " + t.type + ", value: " + t.value);
                error.name = "ParserError";
                throw error;
            }
            return ast;
        },
  
        _loadTokens: function(expression) {
            var lexer = new Lexer();
            var tokens = lexer.tokenize(expression);
            tokens.push({type: TOK_EOF, value: "", start: expression.length});
            this.tokens = tokens;
        },
  
        expression: function(rbp) {
            var leftToken = this._lookaheadToken(0);
            this._advance();
            var left = this.nud(leftToken);
            var currentToken = this._lookahead(0);
            while (rbp < bindingPower[currentToken]) {
                this._advance();
                left = this.led(currentToken, left);
                currentToken = this._lookahead(0);
            }
            return left;
        },
  
        _lookahead: function(number) {
            return this.tokens[this.index + number].type;
        },
  
        _lookaheadToken: function(number) {
            return this.tokens[this.index + number];
        },
  
        _advance: function() {
            this.index++;
        },
  
        nud: function(token) {
          var left;
          var right;
          var expression;
          switch (token.type) {
            case TOK_LITERAL:
              return {type: "Literal", value: token.value};
            case TOK_UNQUOTEDIDENTIFIER:
              return {type: "Field", name: token.value};
            case TOK_QUOTEDIDENTIFIER:
              var node = {type: "Field", name: token.value};
              if (this._lookahead(0) === TOK_LPAREN) {
                  throw new Error("Quoted identifier not allowed for function names.");
              }
              return node;
            case TOK_NOT:
              right = this.expression(bindingPower.Not);
              return {type: "NotExpression", children: [right]};
            case TOK_STAR:
              left = {type: "Identity"};
              right = null;
              if (this._lookahead(0) === TOK_RBRACKET) {
                  right = {type: "Identity"};
              } else {
                  right = this._parseProjectionRHS(bindingPower.Star);
              }
              return {type: "ValueProjection", children: [left, right]};
            case TOK_FILTER:
              return this.led(token.type, {type: "Identity"});
            case TOK_LBRACE:
              return this._parseMultiselectHash();
            case TOK_FLATTEN:
              left = {type: TOK_FLATTEN, children: [{type: "Identity"}]};
              right = this._parseProjectionRHS(bindingPower.Flatten);
              return {type: "Projection", children: [left, right]};
            case TOK_LBRACKET:
              if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {
                  right = this._parseIndexExpression();
                  return this._projectIfSlice({type: "Identity"}, right);
              } else if (this._lookahead(0) === TOK_STAR &&
                         this._lookahead(1) === TOK_RBRACKET) {
                  this._advance();
                  this._advance();
                  right = this._parseProjectionRHS(bindingPower.Star);
                  return {type: "Projection",
                          children: [{type: "Identity"}, right]};
              }
              return this._parseMultiselectList();
            case TOK_CURRENT:
              return {type: TOK_CURRENT};
            case TOK_EXPREF:
              expression = this.expression(bindingPower.Expref);
              return {type: "ExpressionReference", children: [expression]};
            case TOK_LPAREN:
              var args = [];
              while (this._lookahead(0) !== TOK_RPAREN) {
                if (this._lookahead(0) === TOK_CURRENT) {
                  expression = {type: TOK_CURRENT};
                  this._advance();
                } else {
                  expression = this.expression(0);
                }
                args.push(expression);
              }
              this._match(TOK_RPAREN);
              return args[0];
            default:
              this._errorToken(token);
          }
        },
  
        led: function(tokenName, left) {
          var right;
          switch(tokenName) {
            case TOK_DOT:
              var rbp = bindingPower.Dot;
              if (this._lookahead(0) !== TOK_STAR) {
                  right = this._parseDotRHS(rbp);
                  return {type: "Subexpression", children: [left, right]};
              }
              this._advance();
              right = this._parseProjectionRHS(rbp);
              return {type: "ValueProjection", children: [left, right]};
            case TOK_PIPE:
              right = this.expression(bindingPower.Pipe);
              return {type: TOK_PIPE, children: [left, right]};
            case TOK_OR:
              right = this.expression(bindingPower.Or);
              return {type: "OrExpression", children: [left, right]};
            case TOK_AND:
              right = this.expression(bindingPower.And);
              return {type: "AndExpression", children: [left, right]};
            case TOK_LPAREN:
              var name = left.name;
              var args = [];
              var expression, node;
              while (this._lookahead(0) !== TOK_RPAREN) {
                if (this._lookahead(0) === TOK_CURRENT) {
                  expression = {type: TOK_CURRENT};
                  this._advance();
                } else {
                  expression = this.expression(0);
                }
                if (this._lookahead(0) === TOK_COMMA) {
                  this._match(TOK_COMMA);
                }
                args.push(expression);
              }
              this._match(TOK_RPAREN);
              node = {type: "Function", name: name, children: args};
              return node;
            case TOK_FILTER:
              var condition = this.expression(0);
              this._match(TOK_RBRACKET);
              if (this._lookahead(0) === TOK_FLATTEN) {
                right = {type: "Identity"};
              } else {
                right = this._parseProjectionRHS(bindingPower.Filter);
              }
              return {type: "FilterProjection", children: [left, right, condition]};
            case TOK_FLATTEN:
              var leftNode = {type: TOK_FLATTEN, children: [left]};
              var rightNode = this._parseProjectionRHS(bindingPower.Flatten);
              return {type: "Projection", children: [leftNode, rightNode]};
            case TOK_EQ:
            case TOK_NE:
            case TOK_GT:
            case TOK_GTE:
            case TOK_LT:
            case TOK_LTE:
              return this._parseComparator(left, tokenName);
            case TOK_LBRACKET:
              var token = this._lookaheadToken(0);
              if (token.type === TOK_NUMBER || token.type === TOK_COLON) {
                  right = this._parseIndexExpression();
                  return this._projectIfSlice(left, right);
              }
              this._match(TOK_STAR);
              this._match(TOK_RBRACKET);
              right = this._parseProjectionRHS(bindingPower.Star);
              return {type: "Projection", children: [left, right]};
            default:
              this._errorToken(this._lookaheadToken(0));
          }
        },
  
        _match: function(tokenType) {
            if (this._lookahead(0) === tokenType) {
                this._advance();
            } else {
                var t = this._lookaheadToken(0);
                var error = new Error("Expected " + tokenType + ", got: " + t.type);
                error.name = "ParserError";
                throw error;
            }
        },
  
        _errorToken: function(token) {
            var error = new Error("Invalid token (" +
                                  token.type + "): \"" +
                                  token.value + "\"");
            error.name = "ParserError";
            throw error;
        },
  
  
        _parseIndexExpression: function() {
            if (this._lookahead(0) === TOK_COLON || this._lookahead(1) === TOK_COLON) {
                return this._parseSliceExpression();
            } else {
                var node = {
                    type: "Index",
                    value: this._lookaheadToken(0).value};
                this._advance();
                this._match(TOK_RBRACKET);
                return node;
            }
        },
  
        _projectIfSlice: function(left, right) {
            var indexExpr = {type: "IndexExpression", children: [left, right]};
            if (right.type === "Slice") {
                return {
                    type: "Projection",
                    children: [indexExpr, this._parseProjectionRHS(bindingPower.Star)]
                };
            } else {
                return indexExpr;
            }
        },
  
        _parseSliceExpression: function() {
            var parts = [null, null, null];
            var index = 0;
            var currentToken = this._lookahead(0);
            while (currentToken !== TOK_RBRACKET && index < 3) {
                if (currentToken === TOK_COLON) {
                    index++;
                    this._advance();
                } else if (currentToken === TOK_NUMBER) {
                    parts[index] = this._lookaheadToken(0).value;
                    this._advance();
                } else {
                    var t = this._lookahead(0);
                    var error = new Error("Syntax error, unexpected token: " +
                                          t.value + "(" + t.type + ")");
                    error.name = "Parsererror";
                    throw error;
                }
                currentToken = this._lookahead(0);
            }
            this._match(TOK_RBRACKET);
            return {
                type: "Slice",
                children: parts
            };
        },
  
        _parseComparator: function(left, comparator) {
          var right = this.expression(bindingPower[comparator]);
          return {type: "Comparator", name: comparator, children: [left, right]};
        },
  
        _parseDotRHS: function(rbp) {
            var lookahead = this._lookahead(0);
            var exprTokens = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER, TOK_STAR];
            if (exprTokens.indexOf(lookahead) >= 0) {
                return this.expression(rbp);
            } else if (lookahead === TOK_LBRACKET) {
                this._match(TOK_LBRACKET);
                return this._parseMultiselectList();
            } else if (lookahead === TOK_LBRACE) {
                this._match(TOK_LBRACE);
                return this._parseMultiselectHash();
            }
        },
  
        _parseProjectionRHS: function(rbp) {
            var right;
            if (bindingPower[this._lookahead(0)] < 10) {
                right = {type: "Identity"};
            } else if (this._lookahead(0) === TOK_LBRACKET) {
                right = this.expression(rbp);
            } else if (this._lookahead(0) === TOK_FILTER) {
                right = this.expression(rbp);
            } else if (this._lookahead(0) === TOK_DOT) {
                this._match(TOK_DOT);
                right = this._parseDotRHS(rbp);
            } else {
                var t = this._lookaheadToken(0);
                var error = new Error("Sytanx error, unexpected token: " +
                                      t.value + "(" + t.type + ")");
                error.name = "ParserError";
                throw error;
            }
            return right;
        },
  
        _parseMultiselectList: function() {
            var expressions = [];
            while (this._lookahead(0) !== TOK_RBRACKET) {
                var expression = this.expression(0);
                expressions.push(expression);
                if (this._lookahead(0) === TOK_COMMA) {
                    this._match(TOK_COMMA);
                    if (this._lookahead(0) === TOK_RBRACKET) {
                      throw new Error("Unexpected token Rbracket");
                    }
                }
            }
            this._match(TOK_RBRACKET);
            return {type: "MultiSelectList", children: expressions};
        },
  
        _parseMultiselectHash: function() {
          var pairs = [];
          var identifierTypes = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER];
          var keyToken, keyName, value, node;
          for (;;) {
            keyToken = this._lookaheadToken(0);
            if (identifierTypes.indexOf(keyToken.type) < 0) {
              throw new Error("Expecting an identifier token, got: " +
                              keyToken.type);
            }
            keyName = keyToken.value;
            this._advance();
            this._match(TOK_COLON);
            value = this.expression(0);
            node = {type: "KeyValuePair", name: keyName, value: value};
            pairs.push(node);
            if (this._lookahead(0) === TOK_COMMA) {
              this._match(TOK_COMMA);
            } else if (this._lookahead(0) === TOK_RBRACE) {
              this._match(TOK_RBRACE);
              break;
            }
          }
          return {type: "MultiSelectHash", children: pairs};
        }
    };
  
  
    function TreeInterpreter(runtime) {
      this.runtime = runtime;
    }
  
    TreeInterpreter.prototype = {
        search: function(node, value) {
            return this.visit(node, value);
        },
  
        visit: function(node, value) {
            var matched, current, result, first, second, field, left, right, collected, i;
            switch (node.type) {
              case "Field":
                if (value !== null && isObject(value)) {
                    field = value[node.name];
                    if (field === undefined) {
                        return null;
                    } else {
                        return field;
                    }
                }
                return null;
              case "Subexpression":
                result = this.visit(node.children[0], value);
                for (i = 1; i < node.children.length; i++) {
                    result = this.visit(node.children[1], result);
                    if (result === null) {
                        return null;
                    }
                }
                return result;
              case "IndexExpression":
                left = this.visit(node.children[0], value);
                right = this.visit(node.children[1], left);
                return right;
              case "Index":
                if (!isArray(value)) {
                  return null;
                }
                var index = node.value;
                if (index < 0) {
                  index = value.length + index;
                }
                result = value[index];
                if (result === undefined) {
                  result = null;
                }
                return result;
              case "Slice":
                if (!isArray(value)) {
                  return null;
                }
                var sliceParams = node.children.slice(0);
                var computed = this.computeSliceParams(value.length, sliceParams);
                var start = computed[0];
                var stop = computed[1];
                var step = computed[2];
                result = [];
                if (step > 0) {
                    for (i = start; i < stop; i += step) {
                        result.push(value[i]);
                    }
                } else {
                    for (i = start; i > stop; i += step) {
                        result.push(value[i]);
                    }
                }
                return result;
              case "Projection":
                var base = this.visit(node.children[0], value);
                if (!isArray(base)) {
                  return null;
                }
                collected = [];
                for (i = 0; i < base.length; i++) {
                  current = this.visit(node.children[1], base[i]);
                  if (current !== null) {
                    collected.push(current);
                  }
                }
                return collected;
              case "ValueProjection":
                base = this.visit(node.children[0], value);
                if (!isObject(base)) {
                  return null;
                }
                collected = [];
                var values = objValues(base);
                for (i = 0; i < values.length; i++) {
                  current = this.visit(node.children[1], values[i]);
                  if (current !== null) {
                    collected.push(current);
                  }
                }
                return collected;
              case "FilterProjection":
                base = this.visit(node.children[0], value);
                if (!isArray(base)) {
                  return null;
                }
                var filtered = [];
                var finalResults = [];
                for (i = 0; i < base.length; i++) {
                  matched = this.visit(node.children[2], base[i]);
                  if (!isFalse(matched)) {
                    filtered.push(base[i]);
                  }
                }
                for (var j = 0; j < filtered.length; j++) {
                  current = this.visit(node.children[1], filtered[j]);
                  if (current !== null) {
                    finalResults.push(current);
                  }
                }
                return finalResults;
              case "Comparator":
                first = this.visit(node.children[0], value);
                second = this.visit(node.children[1], value);
                switch(node.name) {
                  case TOK_EQ:
                    result = strictDeepEqual(first, second);
                    break;
                  case TOK_NE:
                    result = !strictDeepEqual(first, second);
                    break;
                  case TOK_GT:
                    result = first > second;
                    break;
                  case TOK_GTE:
                    result = first >= second;
                    break;
                  case TOK_LT:
                    result = first < second;
                    break;
                  case TOK_LTE:
                    result = first <= second;
                    break;
                  default:
                    throw new Error("Unknown comparator: " + node.name);
                }
                return result;
              case TOK_FLATTEN:
                var original = this.visit(node.children[0], value);
                if (!isArray(original)) {
                  return null;
                }
                var merged = [];
                for (i = 0; i < original.length; i++) {
                  current = original[i];
                  if (isArray(current)) {
                    merged.push.apply(merged, current);
                  } else {
                    merged.push(current);
                  }
                }
                return merged;
              case "Identity":
                return value;
              case "MultiSelectList":
                if (value === null) {
                  return null;
                }
                collected = [];
                for (i = 0; i < node.children.length; i++) {
                    collected.push(this.visit(node.children[i], value));
                }
                return collected;
              case "MultiSelectHash":
                if (value === null) {
                  return null;
                }
                collected = {};
                var child;
                for (i = 0; i < node.children.length; i++) {
                  child = node.children[i];
                  collected[child.name] = this.visit(child.value, value);
                }
                return collected;
              case "OrExpression":
                matched = this.visit(node.children[0], value);
                if (isFalse(matched)) {
                    matched = this.visit(node.children[1], value);
                }
                return matched;
              case "AndExpression":
                first = this.visit(node.children[0], value);
  
                if (isFalse(first) === true) {
                  return first;
                }
                return this.visit(node.children[1], value);
              case "NotExpression":
                first = this.visit(node.children[0], value);
                return isFalse(first);
              case "Literal":
                return node.value;
              case TOK_PIPE:
                left = this.visit(node.children[0], value);
                return this.visit(node.children[1], left);
              case TOK_CURRENT:
                return value;
              case "Function":
                var resolvedArgs = [];
                for (i = 0; i < node.children.length; i++) {
                    resolvedArgs.push(this.visit(node.children[i], value));
                }
                return this.runtime.callFunction(node.name, resolvedArgs);
              case "ExpressionReference":
                var refNode = node.children[0];
                refNode.jmespathType = TOK_EXPREF;
                return refNode;
              default:
                throw new Error("Unknown node type: " + node.type);
            }
        },
  
        computeSliceParams: function(arrayLength, sliceParams) {
          var start = sliceParams[0];
          var stop = sliceParams[1];
          var step = sliceParams[2];
          var computed = [null, null, null];
          if (step === null) {
            step = 1;
          } else if (step === 0) {
            var error = new Error("Invalid slice, step cannot be 0");
            error.name = "RuntimeError";
            throw error;
          }
          var stepValueNegative = step < 0 ? true : false;
  
          if (start === null) {
              start = stepValueNegative ? arrayLength - 1 : 0;
          } else {
              start = this.capSliceRange(arrayLength, start, step);
          }
  
          if (stop === null) {
              stop = stepValueNegative ? -1 : arrayLength;
          } else {
              stop = this.capSliceRange(arrayLength, stop, step);
          }
          computed[0] = start;
          computed[1] = stop;
          computed[2] = step;
          return computed;
        },
  
        capSliceRange: function(arrayLength, actualValue, step) {
            if (actualValue < 0) {
                actualValue += arrayLength;
                if (actualValue < 0) {
                    actualValue = step < 0 ? -1 : 0;
                }
            } else if (actualValue >= arrayLength) {
                actualValue = step < 0 ? arrayLength - 1 : arrayLength;
            }
            return actualValue;
        }
  
    };
  
    function Runtime(interpreter) {
      this._interpreter = interpreter;
      this.functionTable = {
          abs: {_func: this._functionAbs, _signature: [{types: [TYPE_NUMBER]}]},
          avg: {_func: this._functionAvg, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
          ceil: {_func: this._functionCeil, _signature: [{types: [TYPE_NUMBER]}]},
          contains: {
              _func: this._functionContains,
              _signature: [{types: [TYPE_STRING, TYPE_ARRAY]},
                          {types: [TYPE_ANY]}]},
          "ends_with": {
              _func: this._functionEndsWith,
              _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
          floor: {_func: this._functionFloor, _signature: [{types: [TYPE_NUMBER]}]},
          length: {
              _func: this._functionLength,
              _signature: [{types: [TYPE_STRING, TYPE_ARRAY, TYPE_OBJECT]}]},
          map: {
              _func: this._functionMap,
              _signature: [{types: [TYPE_EXPREF]}, {types: [TYPE_ARRAY]}]},
          max: {
              _func: this._functionMax,
              _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
          "merge": {
              _func: this._functionMerge,
              _signature: [{types: [TYPE_OBJECT], variadic: true}]
          },
          "max_by": {
            _func: this._functionMaxBy,
            _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
          },
          sum: {_func: this._functionSum, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
          "starts_with": {
              _func: this._functionStartsWith,
              _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
          min: {
              _func: this._functionMin,
              _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
          "min_by": {
            _func: this._functionMinBy,
            _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
          },
          type: {_func: this._functionType, _signature: [{types: [TYPE_ANY]}]},
          keys: {_func: this._functionKeys, _signature: [{types: [TYPE_OBJECT]}]},
          values: {_func: this._functionValues, _signature: [{types: [TYPE_OBJECT]}]},
          sort: {_func: this._functionSort, _signature: [{types: [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER]}]},
          "sort_by": {
            _func: this._functionSortBy,
            _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
          },
          join: {
              _func: this._functionJoin,
              _signature: [
                  {types: [TYPE_STRING]},
                  {types: [TYPE_ARRAY_STRING]}
              ]
          },
          reverse: {
              _func: this._functionReverse,
              _signature: [{types: [TYPE_STRING, TYPE_ARRAY]}]},
          "to_array": {_func: this._functionToArray, _signature: [{types: [TYPE_ANY]}]},
          "to_string": {_func: this._functionToString, _signature: [{types: [TYPE_ANY]}]},
          "to_number": {_func: this._functionToNumber, _signature: [{types: [TYPE_ANY]}]},
          "not_null": {
              _func: this._functionNotNull,
              _signature: [{types: [TYPE_ANY], variadic: true}]
          }
      };
    }
  
    Runtime.prototype = {
      callFunction: function(name, resolvedArgs) {
        var functionEntry = this.functionTable[name];
        if (functionEntry === undefined) {
            throw new Error("Unknown function: " + name + "()");
        }
        this._validateArgs(name, resolvedArgs, functionEntry._signature);
        return functionEntry._func.call(this, resolvedArgs);
      },
  
      _validateArgs: function(name, args, signature) {
          var pluralized;
          if (signature[signature.length - 1].variadic) {
              if (args.length < signature.length) {
                  pluralized = signature.length === 1 ? " argument" : " arguments";
                  throw new Error("ArgumentError: " + name + "() " +
                                  "takes at least" + signature.length + pluralized +
                                  " but received " + args.length);
              }
          } else if (args.length !== signature.length) {
              pluralized = signature.length === 1 ? " argument" : " arguments";
              throw new Error("ArgumentError: " + name + "() " +
                              "takes " + signature.length + pluralized +
                              " but received " + args.length);
          }
          var currentSpec;
          var actualType;
          var typeMatched;
          for (var i = 0; i < signature.length; i++) {
              typeMatched = false;
              currentSpec = signature[i].types;
              actualType = this._getTypeName(args[i]);
              for (var j = 0; j < currentSpec.length; j++) {
                  if (this._typeMatches(actualType, currentSpec[j], args[i])) {
                      typeMatched = true;
                      break;
                  }
              }
              if (!typeMatched) {
                  var expected = currentSpec
                      .map(function(typeIdentifier) {
                          return TYPE_NAME_TABLE[typeIdentifier];
                      })
                      .join(',');
                  throw new Error("TypeError: " + name + "() " +
                                  "expected argument " + (i + 1) +
                                  " to be type " + expected +
                                  " but received type " +
                                  TYPE_NAME_TABLE[actualType] + " instead.");
              }
          }
      },
  
      _typeMatches: function(actual, expected, argValue) {
          if (expected === TYPE_ANY) {
              return true;
          }
          if (expected === TYPE_ARRAY_STRING ||
              expected === TYPE_ARRAY_NUMBER ||
              expected === TYPE_ARRAY) {
              if (expected === TYPE_ARRAY) {
                  return actual === TYPE_ARRAY;
              } else if (actual === TYPE_ARRAY) {
                  var subtype;
                  if (expected === TYPE_ARRAY_NUMBER) {
                    subtype = TYPE_NUMBER;
                  } else if (expected === TYPE_ARRAY_STRING) {
                    subtype = TYPE_STRING;
                  }
                  for (var i = 0; i < argValue.length; i++) {
                      if (!this._typeMatches(
                              this._getTypeName(argValue[i]), subtype,
                                               argValue[i])) {
                          return false;
                      }
                  }
                  return true;
              }
          } else {
              return actual === expected;
          }
      },
      _getTypeName: function(obj) {
          switch (Object.prototype.toString.call(obj)) {
              case "[object String]":
                return TYPE_STRING;
              case "[object Number]":
                return TYPE_NUMBER;
              case "[object Array]":
                return TYPE_ARRAY;
              case "[object Boolean]":
                return TYPE_BOOLEAN;
              case "[object Null]":
                return TYPE_NULL;
              case "[object Object]":
                if (obj.jmespathType === TOK_EXPREF) {
                  return TYPE_EXPREF;
                } else {
                  return TYPE_OBJECT;
                }
          }
      },
  
      _functionStartsWith: function(resolvedArgs) {
          return resolvedArgs[0].lastIndexOf(resolvedArgs[1]) === 0;
      },
  
      _functionEndsWith: function(resolvedArgs) {
          var searchStr = resolvedArgs[0];
          var suffix = resolvedArgs[1];
          return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1;
      },
  
      _functionReverse: function(resolvedArgs) {
          var typeName = this._getTypeName(resolvedArgs[0]);
          if (typeName === TYPE_STRING) {
            var originalStr = resolvedArgs[0];
            var reversedStr = "";
            for (var i = originalStr.length - 1; i >= 0; i--) {
                reversedStr += originalStr[i];
            }
            return reversedStr;
          } else {
            var reversedArray = resolvedArgs[0].slice(0);
            reversedArray.reverse();
            return reversedArray;
          }
      },
  
      _functionAbs: function(resolvedArgs) {
        return Math.abs(resolvedArgs[0]);
      },
  
      _functionCeil: function(resolvedArgs) {
          return Math.ceil(resolvedArgs[0]);
      },
  
      _functionAvg: function(resolvedArgs) {
          var sum = 0;
          var inputArray = resolvedArgs[0];
          for (var i = 0; i < inputArray.length; i++) {
              sum += inputArray[i];
          }
          return sum / inputArray.length;
      },
  
      _functionContains: function(resolvedArgs) {
          return resolvedArgs[0].indexOf(resolvedArgs[1]) >= 0;
      },
  
      _functionFloor: function(resolvedArgs) {
          return Math.floor(resolvedArgs[0]);
      },
  
      _functionLength: function(resolvedArgs) {
         if (!isObject(resolvedArgs[0])) {
           return resolvedArgs[0].length;
         } else {
           return Object.keys(resolvedArgs[0]).length;
         }
      },
  
      _functionMap: function(resolvedArgs) {
        var mapped = [];
        var interpreter = this._interpreter;
        var exprefNode = resolvedArgs[0];
        var elements = resolvedArgs[1];
        for (var i = 0; i < elements.length; i++) {
            mapped.push(interpreter.visit(exprefNode, elements[i]));
        }
        return mapped;
      },
  
      _functionMerge: function(resolvedArgs) {
        var merged = {};
        for (var i = 0; i < resolvedArgs.length; i++) {
          var current = resolvedArgs[i];
          for (var key in current) {
            merged[key] = current[key];
          }
        }
        return merged;
      },
  
      _functionMax: function(resolvedArgs) {
        if (resolvedArgs[0].length > 0) {
          var typeName = this._getTypeName(resolvedArgs[0][0]);
          if (typeName === TYPE_NUMBER) {
            return Math.max.apply(Math, resolvedArgs[0]);
          } else {
            var elements = resolvedArgs[0];
            var maxElement = elements[0];
            for (var i = 1; i < elements.length; i++) {
                if (maxElement.localeCompare(elements[i]) < 0) {
                    maxElement = elements[i];
                }
            }
            return maxElement;
          }
        } else {
            return null;
        }
      },
  
      _functionMin: function(resolvedArgs) {
        if (resolvedArgs[0].length > 0) {
          var typeName = this._getTypeName(resolvedArgs[0][0]);
          if (typeName === TYPE_NUMBER) {
            return Math.min.apply(Math, resolvedArgs[0]);
          } else {
            var elements = resolvedArgs[0];
            var minElement = elements[0];
            for (var i = 1; i < elements.length; i++) {
                if (elements[i].localeCompare(minElement) < 0) {
                    minElement = elements[i];
                }
            }
            return minElement;
          }
        } else {
          return null;
        }
      },
  
      _functionSum: function(resolvedArgs) {
        var sum = 0;
        var listToSum = resolvedArgs[0];
        for (var i = 0; i < listToSum.length; i++) {
          sum += listToSum[i];
        }
        return sum;
      },
  
      _functionType: function(resolvedArgs) {
          switch (this._getTypeName(resolvedArgs[0])) {
            case TYPE_NUMBER:
              return "number";
            case TYPE_STRING:
              return "string";
            case TYPE_ARRAY:
              return "array";
            case TYPE_OBJECT:
              return "object";
            case TYPE_BOOLEAN:
              return "boolean";
            case TYPE_EXPREF:
              return "expref";
            case TYPE_NULL:
              return "null";
          }
      },
  
      _functionKeys: function(resolvedArgs) {
          return Object.keys(resolvedArgs[0]);
      },
  
      _functionValues: function(resolvedArgs) {
          var obj = resolvedArgs[0];
          var keys = Object.keys(obj);
          var values = [];
          for (var i = 0; i < keys.length; i++) {
              values.push(obj[keys[i]]);
          }
          return values;
      },
  
      _functionJoin: function(resolvedArgs) {
          var joinChar = resolvedArgs[0];
          var listJoin = resolvedArgs[1];
          return listJoin.join(joinChar);
      },
  
      _functionToArray: function(resolvedArgs) {
          if (this._getTypeName(resolvedArgs[0]) === TYPE_ARRAY) {
              return resolvedArgs[0];
          } else {
              return [resolvedArgs[0]];
          }
      },
  
      _functionToString: function(resolvedArgs) {
          if (this._getTypeName(resolvedArgs[0]) === TYPE_STRING) {
              return resolvedArgs[0];
          } else {
              return JSON.stringify(resolvedArgs[0]);
          }
      },
  
      _functionToNumber: function(resolvedArgs) {
          var typeName = this._getTypeName(resolvedArgs[0]);
          var convertedValue;
          if (typeName === TYPE_NUMBER) {
              return resolvedArgs[0];
          } else if (typeName === TYPE_STRING) {
              convertedValue = +resolvedArgs[0];
              if (!isNaN(convertedValue)) {
                  return convertedValue;
              }
          }
          return null;
      },
  
      _functionNotNull: function(resolvedArgs) {
          for (var i = 0; i < resolvedArgs.length; i++) {
              if (this._getTypeName(resolvedArgs[i]) !== TYPE_NULL) {
                  return resolvedArgs[i];
              }
          }
          return null;
      },
  
      _functionSort: function(resolvedArgs) {
          var sortedArray = resolvedArgs[0].slice(0);
          sortedArray.sort();
          return sortedArray;
      },
  
      _functionSortBy: function(resolvedArgs) {
          var sortedArray = resolvedArgs[0].slice(0);
          if (sortedArray.length === 0) {
              return sortedArray;
          }
          var interpreter = this._interpreter;
          var exprefNode = resolvedArgs[1];
          var requiredType = this._getTypeName(
              interpreter.visit(exprefNode, sortedArray[0]));
          if ([TYPE_NUMBER, TYPE_STRING].indexOf(requiredType) < 0) {
              throw new Error("TypeError");
          }
          var that = this;
          var decorated = [];
          for (var i = 0; i < sortedArray.length; i++) {
            decorated.push([i, sortedArray[i]]);
          }
          decorated.sort(function(a, b) {
            var exprA = interpreter.visit(exprefNode, a[1]);
            var exprB = interpreter.visit(exprefNode, b[1]);
            if (that._getTypeName(exprA) !== requiredType) {
                throw new Error(
                    "TypeError: expected " + requiredType + ", received " +
                    that._getTypeName(exprA));
            } else if (that._getTypeName(exprB) !== requiredType) {
                throw new Error(
                    "TypeError: expected " + requiredType + ", received " +
                    that._getTypeName(exprB));
            }
            if (exprA > exprB) {
              return 1;
            } else if (exprA < exprB) {
              return -1;
            } else {
              return a[0] - b[0];
            }
          });
          for (var j = 0; j < decorated.length; j++) {
            sortedArray[j] = decorated[j][1];
          }
          return sortedArray;
      },
  
      _functionMaxBy: function(resolvedArgs) {
        var exprefNode = resolvedArgs[1];
        var resolvedArray = resolvedArgs[0];
        var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
        var maxNumber = -Infinity;
        var maxRecord;
        var current;
        for (var i = 0; i < resolvedArray.length; i++) {
          current = keyFunction(resolvedArray[i]);
          if (current > maxNumber) {
            maxNumber = current;
            maxRecord = resolvedArray[i];
          }
        }
        return maxRecord;
      },
  
      _functionMinBy: function(resolvedArgs) {
        var exprefNode = resolvedArgs[1];
        var resolvedArray = resolvedArgs[0];
        var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
        var minNumber = Infinity;
        var minRecord;
        var current;
        for (var i = 0; i < resolvedArray.length; i++) {
          current = keyFunction(resolvedArray[i]);
          if (current < minNumber) {
            minNumber = current;
            minRecord = resolvedArray[i];
          }
        }
        return minRecord;
      },
  
      createKeyFunction: function(exprefNode, allowedTypes) {
        var that = this;
        var interpreter = this._interpreter;
        var keyFunc = function(x) {
          var current = interpreter.visit(exprefNode, x);
          if (allowedTypes.indexOf(that._getTypeName(current)) < 0) {
            var msg = "TypeError: expected one of " + allowedTypes +
                      ", received " + that._getTypeName(current);
            throw new Error(msg);
          }
          return current;
        };
        return keyFunc;
      }
  
    };
  
    function compile(stream) {
      var parser = new Parser();
      var ast = parser.parse(stream);
      return ast;
    }
  
    function tokenize(stream) {
        var lexer = new Lexer();
        return lexer.tokenize(stream);
    }
  
    function search(data, expression) {
        var parser = new Parser();
        var runtime = new Runtime();
        var interpreter = new TreeInterpreter(runtime);
        runtime._interpreter = interpreter;
        var node = parser.parse(expression);
        return interpreter.search(node, data);
    }
  
    exports.tokenize = tokenize;
    exports.compile = compile;
    exports.search = search;
    exports.strictDeepEqual = strictDeepEqual;
  })(typeof exports === "undefined" ? this.jmespath = {} : exports);
  
  },{}],107:[function(require,module,exports){
  'use strict';
  
  
  module.exports = Math.abs;
  
  },{}],108:[function(require,module,exports){
  'use strict';
  
  
  module.exports = Math.floor;
  
  },{}],109:[function(require,module,exports){
  'use strict';
  
  
  module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
  };
  
  },{}],110:[function(require,module,exports){
  'use strict';
  
  
  module.exports = Math.max;
  
  },{}],111:[function(require,module,exports){
  'use strict';
  
  
  module.exports = Math.min;
  
  },{}],112:[function(require,module,exports){
  'use strict';
  
  
  module.exports = Math.pow;
  
  },{}],113:[function(require,module,exports){
  'use strict';
  
  
  module.exports = Math.round;
  
  },{}],114:[function(require,module,exports){
  'use strict';
  
  var $isNaN = require('./isNaN');
  
  
  module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
      return number;
    }
    return number < 0 ? -1 : +1;
  };
  
  },{"./isNaN":109}],115:[function(require,module,exports){
  (function (global){(function (){
  var hasMap = typeof Map === 'function' && Map.prototype;
  var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
  var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
  var mapForEach = hasMap && Map.prototype.forEach;
  var hasSet = typeof Set === 'function' && Set.prototype;
  var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
  var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
  var setForEach = hasSet && Set.prototype.forEach;
  var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
  var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
  var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
  var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
  var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
  var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
  var booleanValueOf = Boolean.prototype.valueOf;
  var objectToString = Object.prototype.toString;
  var functionToString = Function.prototype.toString;
  var $match = String.prototype.match;
  var $slice = String.prototype.slice;
  var $replace = String.prototype.replace;
  var $toUpperCase = String.prototype.toUpperCase;
  var $toLowerCase = String.prototype.toLowerCase;
  var $test = RegExp.prototype.test;
  var $concat = Array.prototype.concat;
  var $join = Array.prototype.join;
  var $arrSlice = Array.prototype.slice;
  var $floor = Math.floor;
  var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
  var gOPS = Object.getOwnPropertySymbols;
  var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
  var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
  var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
      ? Symbol.toStringTag
      : null;
  var isEnumerable = Object.prototype.propertyIsEnumerable;
  
  var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
      [].__proto__ === Array.prototype // eslint-disable-line no-proto
          ? function (O) {
              return O.__proto__; // eslint-disable-line no-proto
          }
          : null
  );
  
  function addNumericSeparator(num, str) {
      if (
          num === Infinity
          || num === -Infinity
          || num !== num
          || (num && num > -1000 && num < 1000)
          || $test.call(/e/, str)
      ) {
          return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === 'number') {
          var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
          if (int !== num) {
              var intStr = String(int);
              var dec = $slice.call(str, intStr.length + 1);
              return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
          }
      }
      return $replace.call(str, sepRegex, '$&_');
  }
  
  var utilInspect = require('./util.inspect');
  var inspectCustom = utilInspect.custom;
  var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
  
  var quotes = {
      __proto__: null,
      'double': '"',
      single: "'"
  };
  var quoteREs = {
      __proto__: null,
      'double': /(["\\])/g,
      single: /(['\\])/g
  };
  
  module.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
  
      if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) {
          throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (
          has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
              ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
              : opts.maxStringLength !== null
          )
      ) {
          throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
      if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
          throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
      }
  
      if (
          has(opts, 'indent')
          && opts.indent !== null
          && opts.indent !== '\t'
          && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
      ) {
          throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
          throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
  
      if (typeof obj === 'undefined') {
          return 'undefined';
      }
      if (obj === null) {
          return 'null';
      }
      if (typeof obj === 'boolean') {
          return obj ? 'true' : 'false';
      }
  
      if (typeof obj === 'string') {
          return inspectString(obj, opts);
      }
      if (typeof obj === 'number') {
          if (obj === 0) {
              return Infinity / obj > 0 ? '0' : '-0';
          }
          var str = String(obj);
          return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === 'bigint') {
          var bigIntStr = String(obj) + 'n';
          return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
  
      var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
      if (typeof depth === 'undefined') { depth = 0; }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
          return isArray(obj) ? '[Array]' : '[Object]';
      }
  
      var indent = getIndent(opts, depth);
  
      if (typeof seen === 'undefined') {
          seen = [];
      } else if (indexOf(seen, obj) >= 0) {
          return '[Circular]';
      }
  
      function inspect(value, from, noIndent) {
          if (from) {
              seen = $arrSlice.call(seen);
              seen.push(from);
          }
          if (noIndent) {
              var newOpts = {
                  depth: opts.depth
              };
              if (has(opts, 'quoteStyle')) {
                  newOpts.quoteStyle = opts.quoteStyle;
              }
              return inspect_(value, newOpts, depth + 1, seen);
          }
          return inspect_(value, opts, depth + 1, seen);
      }
  
      if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
          var name = nameOf(obj);
          var keys = arrObjKeys(obj, inspect);
          return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
      }
      if (isSymbol(obj)) {
          var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
          return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
          var s = '<' + $toLowerCase.call(String(obj.nodeName));
          var attrs = obj.attributes || [];
          for (var i = 0; i < attrs.length; i++) {
              s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
          }
          s += '>';
          if (obj.childNodes && obj.childNodes.length) { s += '...'; }
          s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
          return s;
      }
      if (isArray(obj)) {
          if (obj.length === 0) { return '[]'; }
          var xs = arrObjKeys(obj, inspect);
          if (indent && !singleLineValues(xs)) {
              return '[' + indentedJoin(xs, indent) + ']';
          }
          return '[ ' + $join.call(xs, ', ') + ' ]';
      }
      if (isError(obj)) {
          var parts = arrObjKeys(obj, inspect);
          if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
              return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
          }
          if (parts.length === 0) { return '[' + String(obj) + ']'; }
          return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
      }
      if (typeof obj === 'object' && customInspect) {
          if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
              return utilInspect(obj, { depth: maxDepth - depth });
          } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
              return obj.inspect();
          }
      }
      if (isMap(obj)) {
          var mapParts = [];
          if (mapForEach) {
              mapForEach.call(obj, function (value, key) {
                  mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
              });
          }
          return collectionOf('Map', mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
          var setParts = [];
          if (setForEach) {
              setForEach.call(obj, function (value) {
                  setParts.push(inspect(value, obj));
              });
          }
          return collectionOf('Set', setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
          return weakCollectionOf('WeakMap');
      }
      if (isWeakSet(obj)) {
          return weakCollectionOf('WeakSet');
      }
      if (isWeakRef(obj)) {
          return weakCollectionOf('WeakRef');
      }
      if (isNumber(obj)) {
          return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
          return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
          return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
          return markBoxed(inspect(String(obj)));
      }
  
      if (typeof window !== 'undefined' && obj === window) {
          return '{ [object Window] }';
      }
      if (
          (typeof globalThis !== 'undefined' && obj === globalThis)
          || (typeof global !== 'undefined' && obj === global)
      ) {
          return '{ [object globalThis] }';
      }
      if (!isDate(obj) && !isRegExp(obj)) {
          var ys = arrObjKeys(obj, inspect);
          var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
          var protoTag = obj instanceof Object ? '' : 'null prototype';
          var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
          var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
          var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
          if (ys.length === 0) { return tag + '{}'; }
          if (indent) {
              return tag + '{' + indentedJoin(ys, indent) + '}';
          }
          return tag + '{ ' + $join.call(ys, ', ') + ' }';
      }
      return String(obj);
  };
  
  function wrapQuotes(s, defaultStyle, opts) {
      var style = opts.quoteStyle || defaultStyle;
      var quoteChar = quotes[style];
      return quoteChar + s + quoteChar;
  }
  
  function quote(s) {
      return $replace.call(String(s), /"/g, '&quot;');
  }
  
  function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  
  function isSymbol(obj) {
      if (hasShammedSymbols) {
          return obj && typeof obj === 'object' && obj instanceof Symbol;
      }
      if (typeof obj === 'symbol') {
          return true;
      }
      if (!obj || typeof obj !== 'object' || !symToString) {
          return false;
      }
      try {
          symToString.call(obj);
          return true;
      } catch (e) {}
      return false;
  }
  
  function isBigInt(obj) {
      if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
          return false;
      }
      try {
          bigIntValueOf.call(obj);
          return true;
      } catch (e) {}
      return false;
  }
  
  var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
  function has(obj, key) {
      return hasOwn.call(obj, key);
  }
  
  function toStr(obj) {
      return objectToString.call(obj);
  }
  
  function nameOf(f) {
      if (f.name) { return f.name; }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) { return m[1]; }
      return null;
  }
  
  function indexOf(xs, x) {
      if (xs.indexOf) { return xs.indexOf(x); }
      for (var i = 0, l = xs.length; i < l; i++) {
          if (xs[i] === x) { return i; }
      }
      return -1;
  }
  
  function isMap(x) {
      if (!mapSize || !x || typeof x !== 'object') {
          return false;
      }
      try {
          mapSize.call(x);
          try {
              setSize.call(x);
          } catch (s) {
              return true;
          }
          return x instanceof Map; // core-js workaround, pre-v2.5.0
      } catch (e) {}
      return false;
  }
  
  function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== 'object') {
          return false;
      }
      try {
          weakMapHas.call(x, weakMapHas);
          try {
              weakSetHas.call(x, weakSetHas);
          } catch (s) {
              return true;
          }
          return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
      } catch (e) {}
      return false;
  }
  
  function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== 'object') {
          return false;
      }
      try {
          weakRefDeref.call(x);
          return true;
      } catch (e) {}
      return false;
  }
  
  function isSet(x) {
      if (!setSize || !x || typeof x !== 'object') {
          return false;
      }
      try {
          setSize.call(x);
          try {
              mapSize.call(x);
          } catch (m) {
              return true;
          }
          return x instanceof Set; // core-js workaround, pre-v2.5.0
      } catch (e) {}
      return false;
  }
  
  function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== 'object') {
          return false;
      }
      try {
          weakSetHas.call(x, weakSetHas);
          try {
              weakMapHas.call(x, weakMapHas);
          } catch (s) {
              return true;
          }
          return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
      } catch (e) {}
      return false;
  }
  
  function isElement(x) {
      if (!x || typeof x !== 'object') { return false; }
      if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
          return true;
      }
      return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
  }
  
  function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
          var remaining = str.length - opts.maxStringLength;
          var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
          return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var quoteRE = quoteREs[opts.quoteStyle || 'single'];
      quoteRE.lastIndex = 0;
      var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, 'single', opts);
  }
  
  function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
          8: 'b',
          9: 't',
          10: 'n',
          12: 'f',
          13: 'r'
      }[n];
      if (x) { return '\\' + x; }
      return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
  }
  
  function markBoxed(str) {
      return 'Object(' + str + ')';
  }
  
  function weakCollectionOf(type) {
      return type + ' { ? }';
  }
  
  function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
      return type + ' (' + size + ') {' + joinedEntries + '}';
  }
  
  function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
          if (indexOf(xs[i], '\n') >= 0) {
              return false;
          }
      }
      return true;
  }
  
  function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === '\t') {
          baseIndent = '\t';
      } else if (typeof opts.indent === 'number' && opts.indent > 0) {
          baseIndent = $join.call(Array(opts.indent + 1), ' ');
      } else {
          return null;
      }
      return {
          base: baseIndent,
          prev: $join.call(Array(depth + 1), baseIndent)
      };
  }
  
  function indentedJoin(xs, indent) {
      if (xs.length === 0) { return ''; }
      var lineJoiner = '\n' + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
  }
  
  function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
          xs.length = obj.length;
          for (var i = 0; i < obj.length; i++) {
              xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
          }
      }
      var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
          symMap = {};
          for (var k = 0; k < syms.length; k++) {
              symMap['$' + syms[k]] = syms[k];
          }
      }
  
      for (var key in obj) { // eslint-disable-line no-restricted-syntax
          if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
          if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
          if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
              continue; // eslint-disable-line no-restricted-syntax, no-continue
          } else if ($test.call(/[^\w$]/, key)) {
              xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
          } else {
              xs.push(key + ': ' + inspect(obj[key], obj));
          }
      }
      if (typeof gOPS === 'function') {
          for (var j = 0; j < syms.length; j++) {
              if (isEnumerable.call(obj, syms[j])) {
                  xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
              }
          }
      }
      return xs;
  }
  
  }).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  },{"./util.inspect":70}],116:[function(require,module,exports){
  var process = module.exports = {};
  
  
  var cachedSetTimeout;
  var cachedClearTimeout;
  
  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  (function () {
      try {
          if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
          } else {
              cachedSetTimeout = defaultSetTimout;
          }
      } catch (e) {
          cachedSetTimeout = defaultSetTimout;
      }
      try {
          if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
          } else {
              cachedClearTimeout = defaultClearTimeout;
          }
      } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
      }
  } ())
  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
      }
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              return cachedSetTimeout.call(this, fun, 0);
          }
      }
  
  
  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
      }
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              return cachedClearTimeout.call(this, marker);
          }
      }
  
  
  
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  
  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }
  
  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
  
      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  
  process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  };
  
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};
  
  function noop() {}
  
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;
  
  process.listeners = function (name) { return [] }
  
  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  };
  
  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() { return 0; };
  
  },{}],117:[function(require,module,exports){
  (function (global){(function (){
  
  ;(function(root) {
  
  
    var freeExports = typeof exports == 'object' && exports &&
      !exports.nodeType && exports;
    var freeModule = typeof module == 'object' && module &&
      !module.nodeType && module;
    var freeGlobal = typeof global == 'object' && global;
    if (
      freeGlobal.global === freeGlobal ||
      freeGlobal.window === freeGlobal ||
      freeGlobal.self === freeGlobal
    ) {
      root = freeGlobal;
    }
  
  
    var punycode,
  
  
    maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
  
  
    base = 36,
    tMin = 1,
    tMax = 26,
    skew = 38,
    damp = 700,
    initialBias = 72,
    initialN = 128, // 0x80
    delimiter = '-', // '\x2D'
  
  
    regexPunycode = /^xn--/,
    regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
    regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
  
  
    errors = {
      'overflow': 'Overflow: input needs wider integers to process',
      'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
      'invalid-input': 'Invalid input'
    },
  
  
    baseMinusTMin = base - tMin,
    floor = Math.floor,
    stringFromCharCode = String.fromCharCode,
  
  
    key;
  
  
  
  
    function error(type) {
      throw new RangeError(errors[type]);
    }
  
  
    function map(array, fn) {
      var length = array.length;
      var result = [];
      while (length--) {
        result[length] = fn(array[length]);
      }
      return result;
    }
  
  
    function mapDomain(string, fn) {
      var parts = string.split('@');
      var result = '';
      if (parts.length > 1) {
        result = parts[0] + '@';
        string = parts[1];
      }
      string = string.replace(regexSeparators, '\x2E');
      var labels = string.split('.');
      var encoded = map(labels, fn).join('.');
      return result + encoded;
    }
  
  
    function ucs2decode(string) {
      var output = [],
          counter = 0,
          length = string.length,
          value,
          extra;
      while (counter < length) {
        value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
          extra = string.charCodeAt(counter++);
          if ((extra & 0xFC00) == 0xDC00) { // low surrogate
            output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
          } else {
            output.push(value);
            counter--;
          }
        } else {
          output.push(value);
        }
      }
      return output;
    }
  
  
    function ucs2encode(array) {
      return map(array, function(value) {
        var output = '';
        if (value > 0xFFFF) {
          value -= 0x10000;
          output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
          value = 0xDC00 | value & 0x3FF;
        }
        output += stringFromCharCode(value);
        return output;
      }).join('');
    }
  
  
    function basicToDigit(codePoint) {
      if (codePoint - 48 < 10) {
        return codePoint - 22;
      }
      if (codePoint - 65 < 26) {
        return codePoint - 65;
      }
      if (codePoint - 97 < 26) {
        return codePoint - 97;
      }
      return base;
    }
  
  
    function digitToBasic(digit, flag) {
      return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    }
  
  
    function adapt(delta, numPoints, firstTime) {
      var k = 0;
      delta = firstTime ? floor(delta / damp) : delta >> 1;
      delta += floor(delta / numPoints);
      for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
        delta = floor(delta / baseMinusTMin);
      }
      return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    }
  
  
    function decode(input) {
      var output = [],
          inputLength = input.length,
          out,
          i = 0,
          n = initialN,
          bias = initialBias,
          basic,
          j,
          index,
          oldi,
          w,
          k,
          digit,
          t,
  
          baseMinusT;
  
  
      basic = input.lastIndexOf(delimiter);
      if (basic < 0) {
        basic = 0;
      }
  
      for (j = 0; j < basic; ++j) {
        if (input.charCodeAt(j) >= 0x80) {
          error('not-basic');
        }
        output.push(input.charCodeAt(j));
      }
  
  
      for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {
  
        for (oldi = i, w = 1, k = base; /* no condition */; k += base) {
  
          if (index >= inputLength) {
            error('invalid-input');
          }
  
          digit = basicToDigit(input.charCodeAt(index++));
  
          if (digit >= base || digit > floor((maxInt - i) / w)) {
            error('overflow');
          }
  
          i += digit * w;
          t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
  
          if (digit < t) {
            break;
          }
  
          baseMinusT = base - t;
          if (w > floor(maxInt / baseMinusT)) {
            error('overflow');
          }
  
          w *= baseMinusT;
  
        }
  
        out = output.length + 1;
        bias = adapt(i - oldi, out, oldi == 0);
  
        if (floor(i / out) > maxInt - n) {
          error('overflow');
        }
  
        n += floor(i / out);
        i %= out;
  
        output.splice(i++, 0, n);
  
      }
  
      return ucs2encode(output);
    }
  
  
    function encode(input) {
      var n,
          delta,
          handledCPCount,
          basicLength,
          bias,
          j,
          m,
          q,
          k,
          t,
          currentValue,
          output = [],
  
          inputLength,
  
          handledCPCountPlusOne,
          baseMinusT,
          qMinusT;
  
      input = ucs2decode(input);
  
      inputLength = input.length;
  
      n = initialN;
      delta = 0;
      bias = initialBias;
  
      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue < 0x80) {
          output.push(stringFromCharCode(currentValue));
        }
      }
  
      handledCPCount = basicLength = output.length;
  
  
      if (basicLength) {
        output.push(delimiter);
      }
  
      while (handledCPCount < inputLength) {
  
        for (m = maxInt, j = 0; j < inputLength; ++j) {
          currentValue = input[j];
          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        }
  
        handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
          error('overflow');
        }
  
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
  
        for (j = 0; j < inputLength; ++j) {
          currentValue = input[j];
  
          if (currentValue < n && ++delta > maxInt) {
            error('overflow');
          }
  
          if (currentValue == n) {
            for (q = delta, k = base; /* no condition */; k += base) {
              t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
              if (q < t) {
                break;
              }
              qMinusT = q - t;
              baseMinusT = base - t;
              output.push(
                stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
              );
              q = floor(qMinusT / baseMinusT);
            }
  
            output.push(stringFromCharCode(digitToBasic(q, 0)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
            delta = 0;
            ++handledCPCount;
          }
        }
  
        ++delta;
        ++n;
  
      }
      return output.join('');
    }
  
  
    function toUnicode(input) {
      return mapDomain(input, function(string) {
        return regexPunycode.test(string)
          ? decode(string.slice(4).toLowerCase())
          : string;
      });
    }
  
  
    function toASCII(input) {
      return mapDomain(input, function(string) {
        return regexNonASCII.test(string)
          ? 'xn--' + encode(string)
          : string;
      });
    }
  
  
  
  
    punycode = {
  
      'version': '1.4.1',
  
      'ucs2': {
        'decode': ucs2decode,
        'encode': ucs2encode
      },
      'decode': decode,
      'encode': encode,
      'toASCII': toASCII,
      'toUnicode': toUnicode
    };
  
  
    if (
      typeof define == 'function' &&
      typeof define.amd == 'object' &&
      define.amd
    ) {
      define('punycode', function() {
        return punycode;
      });
    } else if (freeExports && freeModule) {
      if (module.exports == freeExports) {
        freeModule.exports = punycode;
      } else {
        for (key in punycode) {
          punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
        }
      }
    } else {
      root.punycode = punycode;
    }
  
  }(this));
  
  }).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  },{}],118:[function(require,module,exports){
  'use strict';
  
  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;
  
  var Format = {
      RFC1738: 'RFC1738',
      RFC3986: 'RFC3986'
  };
  
  module.exports = {
      'default': Format.RFC3986,
      formatters: {
          RFC1738: function (value) {
              return replace.call(value, percentTwenties, '+');
          },
          RFC3986: function (value) {
              return String(value);
          }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
  };
  
  },{}],119:[function(require,module,exports){
  'use strict';
  
  var stringify = require('./stringify');
  var parse = require('./parse');
  var formats = require('./formats');
  
  module.exports = {
      formats: formats,
      parse: parse,
      stringify: stringify
  };
  
  },{"./formats":118,"./parse":120,"./stringify":121}],120:[function(require,module,exports){
  'use strict';
  
  var utils = require('./utils');
  
  var has = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;
  
  var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: 'utf-8',
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: '&',
      depth: 5,
      duplicates: 'combine',
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1000,
      parseArrays: true,
      plainObjects: false,
      strictDepth: false,
      strictNullHandling: false
  };
  
  var interpretNumericEntities = function (str) {
      return str.replace(/&#(\d+);/g, function ($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
      });
  };
  
  var parseArrayValue = function (val, options) {
      if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
          return val.split(',');
      }
  
      return val;
  };
  
  var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
  
  var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')
  
  var parseValues = function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
  
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
      cleanStr = cleanStr.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
      var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1; // Keep track of where the utf8 sentinel was found
      var i;
  
      var charset = options.charset;
      if (options.charsetSentinel) {
          for (i = 0; i < parts.length; ++i) {
              if (parts[i].indexOf('utf8=') === 0) {
                  if (parts[i] === charsetSentinel) {
                      charset = 'utf-8';
                  } else if (parts[i] === isoSentinel) {
                      charset = 'iso-8859-1';
                  }
                  skipIndex = i;
                  i = parts.length; // The eslint settings do not allow break;
              }
          }
      }
  
      for (i = 0; i < parts.length; ++i) {
          if (i === skipIndex) {
              continue;
          }
          var part = parts[i];
  
          var bracketEqualsPos = part.indexOf(']=');
          var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
  
          var key, val;
          if (pos === -1) {
              key = options.decoder(part, defaults.decoder, charset, 'key');
              val = options.strictNullHandling ? null : '';
          } else {
              key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
              val = utils.maybeMap(
                  parseArrayValue(part.slice(pos + 1), options),
                  function (encodedVal) {
                      return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                  }
              );
          }
  
          if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
              val = interpretNumericEntities(val);
          }
  
          if (part.indexOf('[]=') > -1) {
              val = isArray(val) ? [val] : val;
          }
  
          var existing = has.call(obj, key);
          if (existing && options.duplicates === 'combine') {
              obj[key] = utils.combine(obj[key], val);
          } else if (!existing || options.duplicates === 'last') {
              obj[key] = val;
          }
      }
  
      return obj;
  };
  
  var parseObject = function (chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
  
      for (var i = chain.length - 1; i >= 0; --i) {
          var obj;
          var root = chain[i];
  
          if (root === '[]' && options.parseArrays) {
              obj = options.allowEmptyArrays && (leaf === '' || (options.strictNullHandling && leaf === null))
                  ? []
                  : [].concat(leaf);
          } else {
              obj = options.plainObjects ? Object.create(null) : {};
              var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
              var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, '.') : cleanRoot;
              var index = parseInt(decodedRoot, 10);
              if (!options.parseArrays && decodedRoot === '') {
                  obj = { 0: leaf };
              } else if (
                  !isNaN(index)
                  && root !== decodedRoot
                  && String(index) === decodedRoot
                  && index >= 0
                  && (options.parseArrays && index <= options.arrayLimit)
              ) {
                  obj = [];
                  obj[index] = leaf;
              } else if (decodedRoot !== '__proto__') {
                  obj[decodedRoot] = leaf;
              }
          }
  
          leaf = obj;
      }
  
      return leaf;
  };
  
  var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
          return;
      }
  
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
  
  
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
  
  
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
  
  
      var keys = [];
      if (parent) {
          if (!options.plainObjects && has.call(Object.prototype, parent)) {
              if (!options.allowPrototypes) {
                  return;
              }
          }
  
          keys.push(parent);
      }
  
  
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
          i += 1;
          if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
              if (!options.allowPrototypes) {
                  return;
              }
          }
          keys.push(segment[1]);
      }
  
  
      if (segment) {
          if (options.strictDepth === true) {
              throw new RangeError('Input depth exceeded depth option of ' + options.depth + ' and strictDepth is true');
          }
          keys.push('[' + key.slice(segment.index) + ']');
      }
  
      return parseObject(keys, val, options, valuesParsed);
  };
  
  var normalizeParseOptions = function normalizeParseOptions(opts) {
      if (!opts) {
          return defaults;
      }
  
      if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
          throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
      }
  
      if (typeof opts.decodeDotInKeys !== 'undefined' && typeof opts.decodeDotInKeys !== 'boolean') {
          throw new TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
      }
  
      if (opts.decoder !== null && typeof opts.decoder !== 'undefined' && typeof opts.decoder !== 'function') {
          throw new TypeError('Decoder has to be a function.');
      }
  
      if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
          throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
      }
      var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
  
      var duplicates = typeof opts.duplicates === 'undefined' ? defaults.duplicates : opts.duplicates;
  
      if (duplicates !== 'combine' && duplicates !== 'first' && duplicates !== 'last') {
          throw new TypeError('The duplicates option must be either combine, first, or last');
      }
  
      var allowDots = typeof opts.allowDots === 'undefined' ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
  
      return {
          allowDots: allowDots,
          allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
          allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
          allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
          arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
          charset: charset,
          charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
          comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
          decodeDotInKeys: typeof opts.decodeDotInKeys === 'boolean' ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
          decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
          delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
          depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
          duplicates: duplicates,
          ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
          interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
          parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
          parseArrays: opts.parseArrays !== false,
          plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
          strictDepth: typeof opts.strictDepth === 'boolean' ? !!opts.strictDepth : defaults.strictDepth,
          strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
      };
  };
  
  module.exports = function (str, opts) {
      var options = normalizeParseOptions(opts);
  
      if (str === '' || str === null || typeof str === 'undefined') {
          return options.plainObjects ? Object.create(null) : {};
      }
  
      var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
      var obj = options.plainObjects ? Object.create(null) : {};
  
  
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
          obj = utils.merge(obj, newObj, options);
      }
  
      if (options.allowSparse === true) {
          return obj;
      }
  
      return utils.compact(obj);
  };
  
  },{"./utils":122}],121:[function(require,module,exports){
  'use strict';
  
  var getSideChannel = require('side-channel');
  var utils = require('./utils');
  var formats = require('./formats');
  var has = Object.prototype.hasOwnProperty;
  
  var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
          return prefix + '[]';
      },
      comma: 'comma',
      indices: function indices(prefix, key) {
          return prefix + '[' + key + ']';
      },
      repeat: function repeat(prefix) {
          return prefix;
      }
  };
  
  var isArray = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function (arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
  };
  
  var toISO = Date.prototype.toISOString;
  
  var defaultFormat = formats['default'];
  var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: 'indices',
      charset: 'utf-8',
      charsetSentinel: false,
      delimiter: '&',
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      indices: false,
      serializeDate: function serializeDate(date) {
          return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
  };
  
  var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
      return typeof v === 'string'
          || typeof v === 'number'
          || typeof v === 'boolean'
          || typeof v === 'symbol'
          || typeof v === 'bigint';
  };
  
  var sentinel = {};
  
  var stringify = function stringify(
      object,
      prefix,
      generateArrayPrefix,
      commaRoundTrip,
      allowEmptyArrays,
      strictNullHandling,
      skipNulls,
      encodeDotInKeys,
      encoder,
      filter,
      sort,
      allowDots,
      serializeDate,
      format,
      formatter,
      encodeValuesOnly,
      charset,
      sideChannel
  ) {
      var obj = object;
  
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
          var pos = tmpSc.get(object);
          step += 1;
          if (typeof pos !== 'undefined') {
              if (pos === step) {
                  throw new RangeError('Cyclic object value');
              } else {
                  findFlag = true; // Break while
              }
          }
          if (typeof tmpSc.get(sentinel) === 'undefined') {
              step = 0;
          }
      }
  
      if (typeof filter === 'function') {
          obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
          obj = serializeDate(obj);
      } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
          obj = utils.maybeMap(obj, function (value) {
              if (value instanceof Date) {
                  return serializeDate(value);
              }
              return value;
          });
      }
  
      if (obj === null) {
          if (strictNullHandling) {
              return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
          }
  
          obj = '';
      }
  
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
          if (encoder) {
              var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
              return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
          }
          return [formatter(prefix) + '=' + formatter(String(obj))];
      }
  
      var values = [];
  
      if (typeof obj === 'undefined') {
          return values;
      }
  
      var objKeys;
      if (generateArrayPrefix === 'comma' && isArray(obj)) {
          if (encodeValuesOnly && encoder) {
              obj = utils.maybeMap(obj, encoder);
          }
          objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
      } else if (isArray(filter)) {
          objKeys = filter;
      } else {
          var keys = Object.keys(obj);
          objKeys = sort ? keys.sort(sort) : keys;
      }
  
      var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, '%2E') : prefix;
  
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + '[]' : encodedPrefix;
  
      if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
          return adjustedPrefix + '[]';
      }
  
      for (var j = 0; j < objKeys.length; ++j) {
          var key = objKeys[j];
          var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];
  
          if (skipNulls && value === null) {
              continue;
          }
  
          var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, '%2E') : key;
          var keyPrefix = isArray(obj)
              ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix
              : adjustedPrefix + (allowDots ? '.' + encodedKey : '[' + encodedKey + ']');
  
          sideChannel.set(object, step);
          var valueSideChannel = getSideChannel();
          valueSideChannel.set(sentinel, sideChannel);
          pushToArray(values, stringify(
              value,
              keyPrefix,
              generateArrayPrefix,
              commaRoundTrip,
              allowEmptyArrays,
              strictNullHandling,
              skipNulls,
              encodeDotInKeys,
              generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder,
              filter,
              sort,
              allowDots,
              serializeDate,
              format,
              formatter,
              encodeValuesOnly,
              charset,
              valueSideChannel
          ));
      }
  
      return values;
  };
  
  var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
      if (!opts) {
          return defaults;
      }
  
      if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
          throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
      }
  
      if (typeof opts.encodeDotInKeys !== 'undefined' && typeof opts.encodeDotInKeys !== 'boolean') {
          throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
      }
  
      if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
          throw new TypeError('Encoder has to be a function.');
      }
  
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
          throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
      }
  
      var format = formats['default'];
      if (typeof opts.format !== 'undefined') {
          if (!has.call(formats.formatters, opts.format)) {
              throw new TypeError('Unknown format option provided.');
          }
          format = opts.format;
      }
      var formatter = formats.formatters[format];
  
      var filter = defaults.filter;
      if (typeof opts.filter === 'function' || isArray(opts.filter)) {
          filter = opts.filter;
      }
  
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = opts.arrayFormat;
      } else if ('indices' in opts) {
          arrayFormat = opts.indices ? 'indices' : 'repeat';
      } else {
          arrayFormat = defaults.arrayFormat;
      }
  
      if ('commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
          throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
      }
  
      var allowDots = typeof opts.allowDots === 'undefined' ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
  
      return {
          addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
          allowDots: allowDots,
          allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
          arrayFormat: arrayFormat,
          charset: charset,
          charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
          commaRoundTrip: opts.commaRoundTrip,
          delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
          encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
          encodeDotInKeys: typeof opts.encodeDotInKeys === 'boolean' ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
          encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
          encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
          filter: filter,
          format: format,
          formatter: formatter,
          serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
          skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
          sort: typeof opts.sort === 'function' ? opts.sort : null,
          strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
      };
  };
  
  module.exports = function (object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
  
      var objKeys;
      var filter;
  
      if (typeof options.filter === 'function') {
          filter = options.filter;
          obj = filter('', obj);
      } else if (isArray(options.filter)) {
          filter = options.filter;
          objKeys = filter;
      }
  
      var keys = [];
  
      if (typeof obj !== 'object' || obj === null) {
          return '';
      }
  
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === 'comma' && options.commaRoundTrip;
  
      if (!objKeys) {
          objKeys = Object.keys(obj);
      }
  
      if (options.sort) {
          objKeys.sort(options.sort);
      }
  
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];
  
          if (options.skipNulls && obj[key] === null) {
              continue;
          }
          pushToArray(keys, stringify(
              obj[key],
              key,
              generateArrayPrefix,
              commaRoundTrip,
              options.allowEmptyArrays,
              options.strictNullHandling,
              options.skipNulls,
              options.encodeDotInKeys,
              options.encode ? options.encoder : null,
              options.filter,
              options.sort,
              options.allowDots,
              options.serializeDate,
              options.format,
              options.formatter,
              options.encodeValuesOnly,
              options.charset,
              sideChannel
          ));
      }
  
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? '?' : '';
  
      if (options.charsetSentinel) {
          if (options.charset === 'iso-8859-1') {
              prefix += 'utf8=%26%2310003%3B&';
          } else {
              prefix += 'utf8=%E2%9C%93&';
          }
      }
  
      return joined.length > 0 ? prefix + joined : '';
  };
  
  },{"./formats":118,"./utils":122,"side-channel":132}],122:[function(require,module,exports){
  'use strict';
  
  var formats = require('./formats');
  
  var has = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;
  
  var hexTable = (function () {
      var array = [];
      for (var i = 0; i < 256; ++i) {
          array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
      }
  
      return array;
  }());
  
  var compactQueue = function compactQueue(queue) {
      while (queue.length > 1) {
          var item = queue.pop();
          var obj = item.obj[item.prop];
  
          if (isArray(obj)) {
              var compacted = [];
  
              for (var j = 0; j < obj.length; ++j) {
                  if (typeof obj[j] !== 'undefined') {
                      compacted.push(obj[j]);
                  }
              }
  
              item.obj[item.prop] = compacted;
          }
      }
  };
  
  var arrayToObject = function arrayToObject(source, options) {
      var obj = options && options.plainObjects ? Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== 'undefined') {
              obj[i] = source[i];
          }
      }
  
      return obj;
  };
  
  var merge = function merge(target, source, options) {
  
      if (!source) {
          return target;
      }
  
      if (typeof source !== 'object') {
          if (isArray(target)) {
              target.push(source);
          } else if (target && typeof target === 'object') {
              if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                  target[source] = true;
              }
          } else {
              return [target, source];
          }
  
          return target;
      }
  
      if (!target || typeof target !== 'object') {
          return [target].concat(source);
      }
  
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
          mergeTarget = arrayToObject(target, options);
      }
  
      if (isArray(target) && isArray(source)) {
          source.forEach(function (item, i) {
              if (has.call(target, i)) {
                  var targetItem = target[i];
                  if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                      target[i] = merge(targetItem, item, options);
                  } else {
                      target.push(item);
                  }
              } else {
                  target[i] = item;
              }
          });
          return target;
      }
  
      return Object.keys(source).reduce(function (acc, key) {
          var value = source[key];
  
          if (has.call(acc, key)) {
              acc[key] = merge(acc[key], value, options);
          } else {
              acc[key] = value;
          }
          return acc;
      }, mergeTarget);
  };
  
  var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function (acc, key) {
          acc[key] = source[key];
          return acc;
      }, target);
  };
  
  var decode = function (str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, ' ');
      if (charset === 'iso-8859-1') {
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
          return decodeURIComponent(strWithoutPlus);
      } catch (e) {
          return strWithoutPlus;
      }
  };
  
  var limit = 1024;
  
  
  
  var encode = function encode(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
          return str;
      }
  
      var string = str;
      if (typeof str === 'symbol') {
          string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== 'string') {
          string = String(str);
      }
  
      if (charset === 'iso-8859-1') {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
              return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
          });
      }
  
      var out = '';
      for (var j = 0; j < string.length; j += limit) {
          var segment = string.length >= limit ? string.slice(j, j + limit) : string;
          var arr = [];
  
          for (var i = 0; i < segment.length; ++i) {
              var c = segment.charCodeAt(i);
              if (
                  c === 0x2D // -
                  || c === 0x2E // .
                  || c === 0x5F // _
                  || c === 0x7E // ~
                  || (c >= 0x30 && c <= 0x39) // 0-9
                  || (c >= 0x41 && c <= 0x5A) // a-z
                  || (c >= 0x61 && c <= 0x7A) // A-Z
                  || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
              ) {
                  arr[arr.length] = segment.charAt(i);
                  continue;
              }
  
              if (c < 0x80) {
                  arr[arr.length] = hexTable[c];
                  continue;
              }
  
              if (c < 0x800) {
                  arr[arr.length] = hexTable[0xC0 | (c >> 6)]
                      + hexTable[0x80 | (c & 0x3F)];
                  continue;
              }
  
              if (c < 0xD800 || c >= 0xE000) {
                  arr[arr.length] = hexTable[0xE0 | (c >> 12)]
                      + hexTable[0x80 | ((c >> 6) & 0x3F)]
                      + hexTable[0x80 | (c & 0x3F)];
                  continue;
              }
  
              i += 1;
              c = 0x10000 + (((c & 0x3FF) << 10) | (segment.charCodeAt(i) & 0x3FF));
  
              arr[arr.length] = hexTable[0xF0 | (c >> 18)]
                  + hexTable[0x80 | ((c >> 12) & 0x3F)]
                  + hexTable[0x80 | ((c >> 6) & 0x3F)]
                  + hexTable[0x80 | (c & 0x3F)];
          }
  
          out += arr.join('');
      }
  
      return out;
  };
  
  var compact = function compact(value) {
      var queue = [{ obj: { o: value }, prop: 'o' }];
      var refs = [];
  
      for (var i = 0; i < queue.length; ++i) {
          var item = queue[i];
          var obj = item.obj[item.prop];
  
          var keys = Object.keys(obj);
          for (var j = 0; j < keys.length; ++j) {
              var key = keys[j];
              var val = obj[key];
              if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                  queue.push({ obj: obj, prop: key });
                  refs.push(val);
              }
          }
      }
  
      compactQueue(queue);
  
      return value;
  };
  
  var isRegExp = function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === '[object RegExp]';
  };
  
  var isBuffer = function isBuffer(obj) {
      if (!obj || typeof obj !== 'object') {
          return false;
      }
  
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };
  
  var combine = function combine(a, b) {
      return [].concat(a, b);
  };
  
  var maybeMap = function maybeMap(val, fn) {
      if (isArray(val)) {
          var mapped = [];
          for (var i = 0; i < val.length; i += 1) {
              mapped.push(fn(val[i]));
          }
          return mapped;
      }
      return fn(val);
  };
  
  module.exports = {
      arrayToObject: arrayToObject,
      assign: assign,
      combine: combine,
      compact: compact,
      decode: decode,
      encode: encode,
      isBuffer: isBuffer,
      isRegExp: isRegExp,
      maybeMap: maybeMap,
      merge: merge
  };
  
  },{"./formats":118}],123:[function(require,module,exports){
  
  'use strict';
  
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  
  module.exports = function(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};
  
    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }
  
    var regexp = /\+/g;
    qs = qs.split(sep);
  
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }
  
    var len = qs.length;
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }
  
    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr, vstr, k, v;
  
      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }
  
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);
  
      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }
  
    return obj;
  };
  
  var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  
  },{}],124:[function(require,module,exports){
  
  'use strict';
  
  var stringifyPrimitive = function(v) {
    switch (typeof v) {
      case 'string':
        return v;
  
      case 'boolean':
        return v ? 'true' : 'false';
  
      case 'number':
        return isFinite(v) ? v : '';
  
      default:
        return '';
    }
  };
  
  module.exports = function(obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }
  
    if (typeof obj === 'object') {
      return map(objectKeys(obj), function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (isArray(obj[k])) {
          return map(obj[k], function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
  
    }
  
    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq +
           encodeURIComponent(stringifyPrimitive(obj));
  };
  
  var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  
  function map (xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      res.push(f(xs[i], i));
    }
    return res;
  }
  
  var objectKeys = Object.keys || function (obj) {
    var res = [];
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    }
    return res;
  };
  
  },{}],125:[function(require,module,exports){
  'use strict';
  
  exports.decode = exports.parse = require('./decode');
  exports.encode = exports.stringify = require('./encode');
  
  },{"./decode":123,"./encode":124}],126:[function(require,module,exports){
  
  'use strict';
  
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  
  module.exports = function(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};
  
    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }
  
    var regexp = /\+/g;
    qs = qs.split(sep);
  
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }
  
    var len = qs.length;
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }
  
    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr, vstr, k, v;
  
      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }
  
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);
  
      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }
  
    return obj;
  };
  
  },{}],127:[function(require,module,exports){
  
  'use strict';
  
  var stringifyPrimitive = function(v) {
    switch (typeof v) {
      case 'string':
        return v;
  
      case 'boolean':
        return v ? 'true' : 'false';
  
      case 'number':
        return isFinite(v) ? v : '';
  
      default:
        return '';
    }
  };
  
  module.exports = function(obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }
  
    if (typeof obj === 'object') {
      return Object.keys(obj).map(function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (Array.isArray(obj[k])) {
          return obj[k].map(function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
  
    }
  
    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq +
           encodeURIComponent(stringifyPrimitive(obj));
  };
  
  },{}],128:[function(require,module,exports){
  arguments[4][125][0].apply(exports,arguments)
  },{"./decode":126,"./encode":127,"dup":125}],129:[function(require,module,exports){
  'use strict';
  
  var inspect = require('object-inspect');
  
  var $TypeError = require('es-errors/type');
  
  
  
  var listGetNode = function (list, key, isDelete) {
  
    var prev = list;
  
    var curr;
    for (; (curr = prev.next) != null; prev = curr) {
      if (curr.key === key) {
        prev.next = curr.next;
        if (!isDelete) {
          curr.next = /** @type {NonNullable<typeof list.next>} */ (list.next);
          list.next = curr; // eslint-disable-line no-param-reassign
        }
        return curr;
      }
    }
  };
  
  
  var listGet = function (objects, key) {
    if (!objects) {
      return void undefined;
    }
    var node = listGetNode(objects, key);
    return node && node.value;
  };
  
  var listSet = function (objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
      node.value = value;
    } else {
      objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */ ({ // eslint-disable-line no-param-reassign, no-extra-parens
        key: key,
        next: objects.next,
        value: value
      });
    }
  };
  
  var listHas = function (objects, key) {
    if (!objects) {
      return false;
    }
    return !!listGetNode(objects, key);
  };
  
  var listDelete = function (objects, key) {
    if (objects) {
      return listGetNode(objects, key, true);
    }
  };
  
  
  module.exports = function getSideChannelList() {
  
  
  
  
   var $o;
  
  
    var channel = {
      assert: function (key) {
        if (!channel.has(key)) {
          throw new $TypeError('Side channel does not contain ' + inspect(key));
        }
      },
      'delete': function (key) {
        var root = $o && $o.next;
        var deletedNode = listDelete($o, key);
        if (deletedNode && root && root === deletedNode) {
          $o = void undefined;
        }
        return !!deletedNode;
      },
      get: function (key) {
        return listGet($o, key);
      },
      has: function (key) {
        return listHas($o, key);
      },
      set: function (key, value) {
        if (!$o) {
          $o = {
            next: void undefined
          };
        }
        listSet(/** @type {NonNullable<typeof $o>} */ ($o), key, value);
      }
    };
    return channel;
  };
  
  },{"es-errors/type":90,"object-inspect":115}],130:[function(require,module,exports){
  'use strict';
  
  var GetIntrinsic = require('get-intrinsic');
  var callBound = require('call-bound');
  var inspect = require('object-inspect');
  
  var $TypeError = require('es-errors/type');
  var $Map = GetIntrinsic('%Map%', true);
  
  
  var $mapGet = callBound('Map.prototype.get', true);
  
  var $mapSet = callBound('Map.prototype.set', true);
  
  var $mapHas = callBound('Map.prototype.has', true);
  
  var $mapDelete = callBound('Map.prototype.delete', true);
  
  var $mapSize = callBound('Map.prototype.size', true);
  
  
  module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */ function getSideChannelMap() {
  
  
  
  
   var $m;
  
  
    var channel = {
      assert: function (key) {
        if (!channel.has(key)) {
          throw new $TypeError('Side channel does not contain ' + inspect(key));
        }
      },
      'delete': function (key) {
        if ($m) {
          var result = $mapDelete($m, key);
          if ($mapSize($m) === 0) {
            $m = void undefined;
          }
          return result;
        }
        return false;
      },
      get: function (key) { // eslint-disable-line consistent-return
        if ($m) {
          return $mapGet($m, key);
        }
      },
      has: function (key) {
        if ($m) {
          return $mapHas($m, key);
        }
        return false;
      },
      set: function (key, value) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key, value);
      }
    };
  
    return channel;
  };
  
  },{"call-bound":82,"es-errors/type":90,"get-intrinsic":95,"object-inspect":115}],131:[function(require,module,exports){
  'use strict';
  
  var GetIntrinsic = require('get-intrinsic');
  var callBound = require('call-bound');
  var inspect = require('object-inspect');
  var getSideChannelMap = require('side-channel-map');
  
  var $TypeError = require('es-errors/type');
  var $WeakMap = GetIntrinsic('%WeakMap%', true);
  
  
  var $weakMapGet = callBound('WeakMap.prototype.get', true);
  
  var $weakMapSet = callBound('WeakMap.prototype.set', true);
  
  var $weakMapHas = callBound('WeakMap.prototype.has', true);
  
  var $weakMapDelete = callBound('WeakMap.prototype.delete', true);
  
  
  module.exports = $WeakMap
    ? /** @type {Exclude<import('.'), false>} */ function getSideChannelWeakMap() {
  
  
  
  
   var $wm;
   var $m;
  
  
      var channel = {
        assert: function (key) {
          if (!channel.has(key)) {
            throw new $TypeError('Side channel does not contain ' + inspect(key));
          }
        },
        'delete': function (key) {
          if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
            if ($wm) {
              return $weakMapDelete($wm, key);
            }
          } else if (getSideChannelMap) {
            if ($m) {
              return $m['delete'](key);
            }
          }
          return false;
        },
        get: function (key) {
          if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          }
          return $m && $m.get(key);
        },
        has: function (key) {
          if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          }
          return !!$m && $m.has(key);
        },
        set: function (key, value) {
          if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if (getSideChannelMap) {
            if (!$m) {
              $m = getSideChannelMap();
            }
   ($m).set(key, value);
          }
        }
      };
  
      return channel;
    }
    : getSideChannelMap;
  
  },{"call-bound":82,"es-errors/type":90,"get-intrinsic":95,"object-inspect":115,"side-channel-map":130}],132:[function(require,module,exports){
  'use strict';
  
  var $TypeError = require('es-errors/type');
  var inspect = require('object-inspect');
  var getSideChannelList = require('side-channel-list');
  var getSideChannelMap = require('side-channel-map');
  var getSideChannelWeakMap = require('side-channel-weakmap');
  
  var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
  
  
  module.exports = function getSideChannel() {
  
  
   var $channelData;
  
  
    var channel = {
      assert: function (key) {
        if (!channel.has(key)) {
          throw new $TypeError('Side channel does not contain ' + inspect(key));
        }
      },
      'delete': function (key) {
        return !!$channelData && $channelData['delete'](key);
      },
      get: function (key) {
        return $channelData && $channelData.get(key);
      },
      has: function (key) {
        return !!$channelData && $channelData.has(key);
      },
      set: function (key, value) {
        if (!$channelData) {
          $channelData = makeChannel();
        }
  
        $channelData.set(key, value);
      }
    };
    return channel;
  };
  
  },{"es-errors/type":90,"object-inspect":115,"side-channel-list":129,"side-channel-map":130,"side-channel-weakmap":131}],133:[function(require,module,exports){
  (function (setImmediate,clearImmediate){(function (){
  var nextTick = require('process/browser.js').nextTick;
  var apply = Function.prototype.apply;
  var slice = Array.prototype.slice;
  var immediateIds = {};
  var nextImmediateId = 0;
  
  
  exports.setTimeout = function() {
    return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
  };
  exports.setInterval = function() {
    return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
  };
  exports.clearTimeout =
  exports.clearInterval = function(timeout) { timeout.close(); };
  
  function Timeout(id, clearFn) {
    this._id = id;
    this._clearFn = clearFn;
  }
  Timeout.prototype.unref = Timeout.prototype.ref = function() {};
  Timeout.prototype.close = function() {
    this._clearFn.call(window, this._id);
  };
  
  exports.enroll = function(item, msecs) {
    clearTimeout(item._idleTimeoutId);
    item._idleTimeout = msecs;
  };
  
  exports.unenroll = function(item) {
    clearTimeout(item._idleTimeoutId);
    item._idleTimeout = -1;
  };
  
  exports._unrefActive = exports.active = function(item) {
    clearTimeout(item._idleTimeoutId);
  
    var msecs = item._idleTimeout;
    if (msecs >= 0) {
      item._idleTimeoutId = setTimeout(function onTimeout() {
        if (item._onTimeout)
          item._onTimeout();
      }, msecs);
    }
  };
  
  exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
    var id = nextImmediateId++;
    var args = arguments.length < 2 ? false : slice.call(arguments, 1);
  
    immediateIds[id] = true;
  
    nextTick(function onNextTick() {
      if (immediateIds[id]) {
        if (args) {
          fn.apply(null, args);
        } else {
          fn.call(null);
        }
        exports.clearImmediate(id);
      }
    });
  
    return id;
  };
  
  exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
    delete immediateIds[id];
  };
  }).call(this)}).call(this,require("timers").setImmediate,require("timers").clearImmediate)
  },{"process/browser.js":116,"timers":133}],134:[function(require,module,exports){
  
  
  'use strict';
  
  var punycode = require('punycode/');
  
  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }
  
  
  
  var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,
  
    simplePathPattern = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
  
  
    delims = [
      '<', '>', '"', '`', ' ', '\r', '\n', '\t'
    ],
  
    unwise = [
      '{', '}', '|', '\\', '^', '`'
    ].concat(delims),
  
    autoEscape = ['\''].concat(unwise),
  
    nonHostChars = [
      '%', '/', '?', ';', '#'
    ].concat(autoEscape),
    hostEndingChars = [
      '/', '?', '#'
    ],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    unsafeProtocol = {
      javascript: true,
      'javascript:': true
    },
    hostlessProtocol = {
      javascript: true,
      'javascript:': true
    },
    slashedProtocol = {
      http: true,
      https: true,
      ftp: true,
      gopher: true,
      file: true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('qs');
  
  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && typeof url === 'object' && url instanceof Url) { return url; }
  
    var u = new Url();
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }
  
  Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
    if (typeof url !== 'string') {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    }
  
  
    var queryIndex = url.indexOf('?'),
      splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, '/');
    url = uSplit.join(splitter);
  
    var rest = url;
  
  
    rest = rest.trim();
  
    if (!slashesDenoteHost && url.split('#').length === 1) {
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.path = rest;
        this.href = rest;
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
          if (parseQueryString) {
            this.query = querystring.parse(this.search.substr(1));
          } else {
            this.query = this.search.substr(1);
          }
        } else if (parseQueryString) {
          this.search = '';
          this.query = {};
        }
        return this;
      }
    }
  
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }
  
  
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@/]+@[^@/]+/)) {
      var slashes = rest.substr(0, 2) === '//';
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }
  
    if (!hostlessProtocol[proto] && (slashes || (proto && !slashedProtocol[proto]))) {
  
  
  
  
  
      var hostEnd = -1;
      for (var i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) { hostEnd = hec; }
      }
  
  
      var auth, atSign;
      if (hostEnd === -1) {
        atSign = rest.lastIndexOf('@');
      } else {
  
        atSign = rest.lastIndexOf('@', hostEnd);
      }
  
  
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }
  
      hostEnd = -1;
      for (var i = 0; i < nonHostChars.length; i++) {
        var hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) { hostEnd = hec; }
      }
      if (hostEnd === -1) { hostEnd = rest.length; }
  
      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
  
      this.parseHost();
  
  
      this.hostname = this.hostname || '';
  
  
      var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';
  
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) { continue; }
          if (!part.match(hostnamePartPattern)) {
            var newpart = '';
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
  
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            }
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = '/' + notHost.join('.') + rest;
              }
              this.hostname = validParts.join('.');
              break;
            }
          }
        }
      }
  
      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = '';
      } else {
        this.hostname = this.hostname.toLowerCase();
      }
  
      if (!ipv6Hostname) {
  
        this.hostname = punycode.toASCII(this.hostname);
      }
  
      var p = this.port ? ':' + this.port : '';
      var h = this.hostname || '';
      this.host = h + p;
      this.href += this.host;
  
  
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== '/') {
          rest = '/' + rest;
        }
      }
    }
  
  
    if (!unsafeProtocol[lowerProto]) {
  
  
      for (var i = 0, l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1) { continue; }
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }
  
    var hash = rest.indexOf('#');
    if (hash !== -1) {
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = querystring.parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      this.search = '';
      this.query = {};
    }
    if (rest) { this.pathname = rest; }
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = '/';
    }
  
    if (this.pathname || this.search) {
      var p = this.pathname || '';
      var s = this.search || '';
      this.path = p + s;
    }
  
    this.href = this.format();
    return this;
  };
  
  function urlFormat(obj) {
  
    if (typeof obj === 'string') { obj = urlParse(obj); }
    if (!(obj instanceof Url)) { return Url.prototype.format.call(obj); }
    return obj.format();
  }
  
  Url.prototype.format = function () {
    var auth = this.auth || '';
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ':');
      auth += '@';
    }
  
    var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';
  
    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
      if (this.port) {
        host += ':' + this.port;
      }
    }
  
    if (this.query && typeof this.query === 'object' && Object.keys(this.query).length) {
      query = querystring.stringify(this.query, {
        arrayFormat: 'repeat',
        addQueryPrefix: false
      });
    }
  
    var search = this.search || (query && ('?' + query)) || '';
  
    if (protocol && protocol.substr(-1) !== ':') { protocol += ':'; }
  
  
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = '//' + (host || '');
      if (pathname && pathname.charAt(0) !== '/') { pathname = '/' + pathname; }
    } else if (!host) {
      host = '';
    }
  
    if (hash && hash.charAt(0) !== '#') { hash = '#' + hash; }
    if (search && search.charAt(0) !== '?') { search = '?' + search; }
  
    pathname = pathname.replace(/[?#]/g, function (match) {
      return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');
  
    return protocol + host + pathname + search + hash;
  };
  
  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }
  
  Url.prototype.resolve = function (relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };
  
  function urlResolveObject(source, relative) {
    if (!source) { return relative; }
    return urlParse(source, false, true).resolveObject(relative);
  }
  
  Url.prototype.resolveObject = function (relative) {
    if (typeof relative === 'string') {
      var rel = new Url();
      rel.parse(relative, false, true);
      relative = rel;
    }
  
    var result = new Url();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }
  
  
    result.hash = relative.hash;
  
    if (relative.href === '') {
      result.href = result.format();
      return result;
    }
  
    if (relative.slashes && !relative.protocol) {
      var rkeys = Object.keys(relative);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if (rkey !== 'protocol') { result[rkey] = relative[rkey]; }
      }
  
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.pathname = '/';
        result.path = result.pathname;
      }
  
      result.href = result.format();
      return result;
    }
  
    if (relative.protocol && relative.protocol !== result.protocol) {
  
      if (!slashedProtocol[relative.protocol]) {
        var keys = Object.keys(relative);
        for (var v = 0; v < keys.length; v++) {
          var k = keys[v];
          result[k] = relative[k];
        }
        result.href = result.format();
        return result;
      }
  
      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || '').split('/');
        while (relPath.length && !(relative.host = relPath.shift())) { }
        if (!relative.host) { relative.host = ''; }
        if (!relative.hostname) { relative.hostname = ''; }
        if (relPath[0] !== '') { relPath.unshift(''); }
        if (relPath.length < 2) { relPath.unshift(''); }
        result.pathname = relPath.join('/');
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || '';
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      if (result.pathname || result.search) {
        var p = result.pathname || '';
        var s = result.search || '';
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }
  
    var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
      isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
      mustEndAbs = isRelAbs || isSourceAbs || (result.host && relative.pathname),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];
  
  
    if (psychotic) {
      result.hostname = '';
      result.port = null;
      if (result.host) {
        if (srcPath[0] === '') { srcPath[0] = result.host; } else { srcPath.unshift(result.host); }
      }
      result.host = '';
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === '') { relPath[0] = relative.host; } else { relPath.unshift(relative.host); }
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }
  
    if (isRelAbs) {
      result.host = relative.host || relative.host === '' ? relative.host : result.host;
      result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
    } else if (relPath.length) {
  
      if (!srcPath) { srcPath = []; }
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (relative.search != null) {
  
      if (psychotic) {
        result.host = srcPath.shift();
        result.hostname = result.host;
  
        var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.hostname = authInHost.shift();
          result.host = result.hostname;
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      if (result.pathname !== null || result.search !== null) {
        result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
      }
      result.href = result.format();
      return result;
    }
  
    if (!srcPath.length) {
  
      result.pathname = null;
      if (result.search) {
        result.path = '/' + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }
  
  
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';
  
  
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last === '.') {
        srcPath.splice(i, 1);
      } else if (last === '..') {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }
  
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift('..');
      }
    }
  
    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
      srcPath.unshift('');
    }
  
    if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
      srcPath.push('');
    }
  
    var isAbsolute = srcPath[0] === '' || (srcPath[0] && srcPath[0].charAt(0) === '/');
  
    if (psychotic) {
      result.hostname = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
      result.host = result.hostname;
  
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.hostname = authInHost.shift();
        result.host = result.hostname;
      }
    }
  
    mustEndAbs = mustEndAbs || (result.host && srcPath.length);
  
    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift('');
    }
  
    if (srcPath.length > 0) {
      result.pathname = srcPath.join('/');
    } else {
      result.pathname = null;
      result.path = null;
    }
  
    if (result.pathname !== null || result.search !== null) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };
  
  Url.prototype.parseHost = function () {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ':') {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) { this.hostname = host; }
  };
  
  exports.parse = urlParse;
  exports.resolve = urlResolve;
  exports.resolveObject = urlResolveObject;
  exports.format = urlFormat;
  
  exports.Url = Url;
  
  },{"punycode/":117,"qs":119}],135:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "v1", {
    enumerable: true,
    get: function () {
      return _v.default;
    }
  });
  Object.defineProperty(exports, "v3", {
    enumerable: true,
    get: function () {
      return _v2.default;
    }
  });
  Object.defineProperty(exports, "v4", {
    enumerable: true,
    get: function () {
      return _v3.default;
    }
  });
  Object.defineProperty(exports, "v5", {
    enumerable: true,
    get: function () {
      return _v4.default;
    }
  });
  Object.defineProperty(exports, "NIL", {
    enumerable: true,
    get: function () {
      return _nil.default;
    }
  });
  Object.defineProperty(exports, "version", {
    enumerable: true,
    get: function () {
      return _version.default;
    }
  });
  Object.defineProperty(exports, "validate", {
    enumerable: true,
    get: function () {
      return _validate.default;
    }
  });
  Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function () {
      return _stringify.default;
    }
  });
  Object.defineProperty(exports, "parse", {
    enumerable: true,
    get: function () {
      return _parse.default;
    }
  });
  
  var _v = _interopRequireDefault(require("./v1.js"));
  
  var _v2 = _interopRequireDefault(require("./v3.js"));
  
  var _v3 = _interopRequireDefault(require("./v4.js"));
  
  var _v4 = _interopRequireDefault(require("./v5.js"));
  
  var _nil = _interopRequireDefault(require("./nil.js"));
  
  var _version = _interopRequireDefault(require("./version.js"));
  
  var _validate = _interopRequireDefault(require("./validate.js"));
  
  var _stringify = _interopRequireDefault(require("./stringify.js"));
  
  var _parse = _interopRequireDefault(require("./parse.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  },{"./nil.js":137,"./parse.js":138,"./stringify.js":142,"./v1.js":143,"./v3.js":144,"./v4.js":146,"./v5.js":147,"./validate.js":148,"./version.js":149}],136:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  
  function md5(bytes) {
    if (typeof bytes === 'string') {
      const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
  
      bytes = new Uint8Array(msg.length);
  
      for (let i = 0; i < msg.length; ++i) {
        bytes[i] = msg.charCodeAt(i);
      }
    }
  
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
  }
  
  
  
  function md5ToHexEncodedArray(input) {
    const output = [];
    const length32 = input.length * 32;
    const hexTab = '0123456789abcdef';
  
    for (let i = 0; i < length32; i += 8) {
      const x = input[i >> 5] >>> i % 32 & 0xff;
      const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
      output.push(hex);
    }
  
    return output;
  }
  
  
  
  function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
  }
  
  
  
  function wordsToMd5(x, len) {
  
    x[len >> 5] |= 0x80 << len % 32;
    x[getOutputLength(len) - 1] = len;
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
  
    for (let i = 0; i < x.length; i += 16) {
      const olda = a;
      const oldb = b;
      const oldc = c;
      const oldd = d;
      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safeAdd(a, olda);
      b = safeAdd(b, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }
  
    return [a, b, c, d];
  }
  
  
  
  function bytesToWords(input) {
    if (input.length === 0) {
      return [];
    }
  
    const length8 = input.length * 8;
    const output = new Uint32Array(getOutputLength(length8));
  
    for (let i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
    }
  
    return output;
  }
  
  
  
  function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
  }
  
  
  
  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  
  
  
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }
  
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
  }
  
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
  }
  
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }
  
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  
  var _default = md5;
  exports.default = _default;
  },{}],137:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _default = '00000000-0000-0000-0000-000000000000';
  exports.default = _default;
  },{}],138:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _validate = _interopRequireDefault(require("./validate.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function parse(uuid) {
    if (!(0, _validate.default)(uuid)) {
      throw TypeError('Invalid UUID');
    }
  
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
  
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
  
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
  
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
  
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
  
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
  }
  
  var _default = parse;
  exports.default = _default;
  },{"./validate.js":148}],139:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  exports.default = _default;
  },{}],140:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = rng;
  let getRandomValues;
  const rnds8 = new Uint8Array(16);
  
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
  
      if (!getRandomValues) {
        throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
      }
    }
  
    return getRandomValues(rnds8);
  }
  },{}],141:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  function f(s, x, y, z) {
    switch (s) {
      case 0:
        return x & y ^ ~x & z;
  
      case 1:
        return x ^ y ^ z;
  
      case 2:
        return x & y ^ x & z ^ y & z;
  
      case 3:
        return x ^ y ^ z;
    }
  }
  
  function ROTL(x, n) {
    return x << n | x >>> 32 - n;
  }
  
  function sha1(bytes) {
    const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
    const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  
    if (typeof bytes === 'string') {
      const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
  
      bytes = [];
  
      for (let i = 0; i < msg.length; ++i) {
        bytes.push(msg.charCodeAt(i));
      }
    } else if (!Array.isArray(bytes)) {
      bytes = Array.prototype.slice.call(bytes);
    }
  
    bytes.push(0x80);
    const l = bytes.length / 4 + 2;
    const N = Math.ceil(l / 16);
    const M = new Array(N);
  
    for (let i = 0; i < N; ++i) {
      const arr = new Uint32Array(16);
  
      for (let j = 0; j < 16; ++j) {
        arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
      }
  
      M[i] = arr;
    }
  
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
  
    for (let i = 0; i < N; ++i) {
      const W = new Uint32Array(80);
  
      for (let t = 0; t < 16; ++t) {
        W[t] = M[i][t];
      }
  
      for (let t = 16; t < 80; ++t) {
        W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
      }
  
      let a = H[0];
      let b = H[1];
      let c = H[2];
      let d = H[3];
      let e = H[4];
  
      for (let t = 0; t < 80; ++t) {
        const s = Math.floor(t / 20);
        const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
        e = d;
        d = c;
        c = ROTL(b, 30) >>> 0;
        b = a;
        a = T;
      }
  
      H[0] = H[0] + a >>> 0;
      H[1] = H[1] + b >>> 0;
      H[2] = H[2] + c >>> 0;
      H[3] = H[3] + d >>> 0;
      H[4] = H[4] + e >>> 0;
    }
  
    return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
  }
  
  var _default = sha1;
  exports.default = _default;
  },{}],142:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _validate = _interopRequireDefault(require("./validate.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  
  const byteToHex = [];
  
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).substr(1));
  }
  
  function stringify(arr, offset = 0) {
    const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  
    if (!(0, _validate.default)(uuid)) {
      throw TypeError('Stringified UUID is invalid');
    }
  
    return uuid;
  }
  
  var _default = stringify;
  exports.default = _default;
  },{"./validate.js":148}],143:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _rng = _interopRequireDefault(require("./rng.js"));
  
  var _stringify = _interopRequireDefault(require("./stringify.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  let _nodeId;
  
  let _clockseq; // Previous uuid creation time
  
  
  let _lastMSecs = 0;
  let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
  
  function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  
    if (node == null || clockseq == null) {
      const seedBytes = options.random || (options.rng || _rng.default)();
  
      if (node == null) {
        node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
      }
  
      if (clockseq == null) {
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
      }
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  
  
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
  
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
  
    if (dt < 0 && options.clockseq === undefined) {
      clockseq = clockseq + 1 & 0x3fff;
    } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  
  
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
      nsecs = 0;
    } // Per 4.2.1.2 Throw error if too many uuids are requested
  
  
    if (nsecs >= 10000) {
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
  
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  
    msecs += 12219292800000; // `time_low`
  
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
  
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
  
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
  
    b[i++] = clockseq & 0xff; // `node`
  
    for (let n = 0; n < 6; ++n) {
      b[i + n] = node[n];
    }
  
    return buf || (0, _stringify.default)(b);
  }
  
  var _default = v1;
  exports.default = _default;
  },{"./rng.js":140,"./stringify.js":142}],144:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _v = _interopRequireDefault(require("./v35.js"));
  
  var _md = _interopRequireDefault(require("./md5.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  const v3 = (0, _v.default)('v3', 0x30, _md.default);
  var _default = v3;
  exports.default = _default;
  },{"./md5.js":136,"./v35.js":145}],145:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _default;
  exports.URL = exports.DNS = void 0;
  
  var _stringify = _interopRequireDefault(require("./stringify.js"));
  
  var _parse = _interopRequireDefault(require("./parse.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
  
    const bytes = [];
  
    for (let i = 0; i < str.length; ++i) {
      bytes.push(str.charCodeAt(i));
    }
  
    return bytes;
  }
  
  const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
  exports.DNS = DNS;
  const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
  exports.URL = URL;
  
  function _default(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
      if (typeof value === 'string') {
        value = stringToBytes(value);
      }
  
      if (typeof namespace === 'string') {
        namespace = (0, _parse.default)(namespace);
      }
  
      if (namespace.length !== 16) {
        throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
      } // Compute hash of namespace and value, Per 4.3
  
  
      let bytes = new Uint8Array(16 + value.length);
      bytes.set(namespace);
      bytes.set(value, namespace.length);
      bytes = hashfunc(bytes);
      bytes[6] = bytes[6] & 0x0f | version;
      bytes[8] = bytes[8] & 0x3f | 0x80;
  
      if (buf) {
        offset = offset || 0;
  
        for (let i = 0; i < 16; ++i) {
          buf[offset + i] = bytes[i];
        }
  
        return buf;
      }
  
      return (0, _stringify.default)(bytes);
    } // Function#name is not settable on some platforms (#270)
  
  
    try {
      generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
  
  
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
  }
  },{"./parse.js":138,"./stringify.js":142}],146:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _rng = _interopRequireDefault(require("./rng.js"));
  
  var _stringify = _interopRequireDefault(require("./stringify.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function v4(options, buf, offset) {
    options = options || {};
  
    const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  
  
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
  
    if (buf) {
      offset = offset || 0;
  
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
  
      return buf;
    }
  
    return (0, _stringify.default)(rnds);
  }
  
  var _default = v4;
  exports.default = _default;
  },{"./rng.js":140,"./stringify.js":142}],147:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _v = _interopRequireDefault(require("./v35.js"));
  
  var _sha = _interopRequireDefault(require("./sha1.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  const v5 = (0, _v.default)('v5', 0x50, _sha.default);
  var _default = v5;
  exports.default = _default;
  },{"./sha1.js":141,"./v35.js":145}],148:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _regex = _interopRequireDefault(require("./regex.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function validate(uuid) {
    return typeof uuid === 'string' && _regex.default.test(uuid);
  }
  
  var _default = validate;
  exports.default = _default;
  },{"./regex.js":139}],149:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _validate = _interopRequireDefault(require("./validate.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function version(uuid) {
    if (!(0, _validate.default)(uuid)) {
      throw TypeError('Invalid UUID');
    }
  
    return parseInt(uuid.substr(14, 1), 16);
  }
  
  var _default = version;
  exports.default = _default;
  },{"./validate.js":148}],150:[function(require,module,exports){
  require('./browser_loader');
  
  var AWS = require('./core');
  
  if (typeof window !== 'undefined') window.AWS = AWS;
  if (typeof module !== 'undefined') {
  
      module.exports = AWS;
  }
  if (typeof self !== 'undefined') self.AWS = AWS;
  
  
  require('../clients/browser_default');
  
  },{"../clients/browser_default":5,"./browser_loader":14,"./core":16}]},{},[150]);
  
  