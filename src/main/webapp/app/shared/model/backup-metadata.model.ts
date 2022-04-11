export interface IBackupMetadata {
  id?: number;
  name?: string;
  value?: string | null;
}

export const defaultValue: Readonly<IBackupMetadata> = {};
