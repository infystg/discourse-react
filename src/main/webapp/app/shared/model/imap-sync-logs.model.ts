export interface IImapSyncLogs {
  id?: number;
  level?: number;
  message?: string;
  groupId?: number | null;
}

export const defaultValue: Readonly<IImapSyncLogs> = {};
