export interface IBackupDraftPosts {
  id?: number;
  userId?: string;
  postId?: number;
  key?: string;
}

export const defaultValue: Readonly<IBackupDraftPosts> = {};
