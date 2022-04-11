export interface ISchemaMigrations {
  id?: number;
  version?: string;
}

export const defaultValue: Readonly<ISchemaMigrations> = {};
