export interface IIncomingEmails {
  id?: number;
  userId?: string | null;
  topicId?: number | null;
  postId?: number | null;
  raw?: string | null;
  error?: string | null;
  messageId?: string | null;
  fromAddress?: string | null;
  toAddresses?: string | null;
  ccAddresses?: string | null;
  subject?: string | null;
  rejectionMessage?: string | null;
  isAutoGenerated?: boolean | null;
  isBounce?: boolean;
  imapUidValidity?: number | null;
  imapUid?: number | null;
  imapSync?: boolean | null;
  imapGroupId?: number | null;
  imapMissing?: boolean;
  createdVia?: number;
}

export const defaultValue: Readonly<IIncomingEmails> = {
  isAutoGenerated: false,
  isBounce: false,
  imapSync: false,
  imapMissing: false,
};
