export interface IUserExports {
  id?: number;
  fileName?: string;
  userId?: string;
  uploadId?: number | null;
  topicId?: number | null;
}

export const defaultValue: Readonly<IUserExports> = {};
