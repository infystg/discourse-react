export interface ISkippedEmailLogs {
  id?: number;
  emailType?: string;
  toAddress?: string;
  userId?: string | null;
  postId?: number | null;
  reasonType?: number;
  customReason?: string | null;
}

export const defaultValue: Readonly<ISkippedEmailLogs> = {};
