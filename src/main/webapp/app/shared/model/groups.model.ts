export interface IGroups {
  id?: number;
  name?: string;
  automatic?: boolean;
  userCount?: number;
  automaticMembershipEmailDomains?: string | null;
  primaryGroup?: boolean;
  title?: string | null;
  grantTrustLevel?: number | null;
  incomingEmail?: string | null;
  hasMessages?: boolean;
  flairUrl?: string | null;
  flairBgColor?: string | null;
  flairColor?: string | null;
  bioRaw?: string | null;
  bioCooked?: string | null;
  allowMembershipRequests?: boolean;
  fullName?: string | null;
  defaultNotificationLevel?: number;
  visibilityLevel?: number;
  publicExit?: boolean;
  publicAdmission?: boolean;
  membershipRequestTemplate?: string | null;
  messageableLevel?: number | null;
  mentionableLevel?: number | null;
  smtpServer?: string | null;
  smtpPort?: number | null;
  smtpSsl?: boolean | null;
  imapServer?: string | null;
  imapPort?: number | null;
  imapSsl?: boolean | null;
  imapMailboxName?: string;
  imapUidValidity?: number;
  imapLastUid?: number;
  emailUsername?: string | null;
  emailPassword?: string | null;
  publishReadState?: boolean;
  membersVisibilityLevel?: number;
  imapLastError?: string | null;
  imapOldEmails?: number | null;
  imapNewEmails?: number | null;
  flairIcon?: string | null;
  flairUploadId?: number | null;
  allowUnknownSenderTopicReplies?: boolean;
}

export const defaultValue: Readonly<IGroups> = {
  automatic: false,
  primaryGroup: false,
  hasMessages: false,
  allowMembershipRequests: false,
  publicExit: false,
  publicAdmission: false,
  smtpSsl: false,
  imapSsl: false,
  publishReadState: false,
  allowUnknownSenderTopicReplies: false,
};
