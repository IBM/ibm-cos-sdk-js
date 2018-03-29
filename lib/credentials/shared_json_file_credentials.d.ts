import {Credentials} from '../credentials';
export class SharedJSONFileCredentials extends Credentials {
    /**
     * Creates a new SharedJSONFileCredentials object.
     */
    constructor(options?: SharedJSONFileCredentialsOptions);
}

interface SharedJSONFileCredentialsOptions {
    profile?: string
    filename?: string
    disableAssumeRole?: boolean
}