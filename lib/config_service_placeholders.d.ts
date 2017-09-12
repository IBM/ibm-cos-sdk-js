import * as AWS from '../clients/all';
export abstract class ConfigurationServicePlaceholders {
  s3?: AWS.S3.Types.ClientConfiguration;
  sts?: AWS.STS.Types.ClientConfiguration;
}
export interface ConfigurationServiceApiVersions {
  s3?: AWS.S3.Types.apiVersion;
  sts?: AWS.STS.Types.apiVersion;
}
