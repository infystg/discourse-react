export interface IEmailLogs {
  id?: number;
  toAddress?: string;
  emailType?: string;
  userId?: string | null;
  postId?: number | null;
  bounceKey?: string | null;
  bounced?: boolean;
  messageId?: string | null;
}

export const defaultValue: Readonly<IEmailLogs> = {
  bounced: false,
};
