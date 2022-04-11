export interface ISchemaMigrationDetails {
  id?: number;
  version?: string;
  name?: string | null;
  hostname?: string | null;
  gitVersion?: string | null;
  railsVersion?: string | null;
  duration?: number | null;
  direction?: string | null;
}

export const defaultValue: Readonly<ISchemaMigrationDetails> = {};
