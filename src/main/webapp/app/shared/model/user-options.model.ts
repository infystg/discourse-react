import dayjs from 'dayjs';

export interface IUserOptions {
  id?: number;
  userId?: string;
  mailingListMode?: boolean;
  emailDigests?: boolean | null;
  externalLinksInNewTab?: boolean;
  enableQuoting?: boolean;
  dynamicFavicon?: boolean;
  disableJumpReply?: boolean;
  automaticallyUnpinTopics?: boolean;
  digestAfterMinutes?: number | null;
  autoTrackTopicsAfterMsecs?: number | null;
  newTopicDurationMinutes?: number | null;
  lastRedirectedToTopAt?: string | null;
  emailPreviousReplies?: number;
  emailInReplyTo?: boolean;
  likeNotificationFrequency?: number;
  mailingListModeFrequency?: number;
  includeTl0InDigests?: boolean | null;
  notificationLevelWhenReplying?: number | null;
  themeKeySeq?: number;
  allowPrivateMessages?: boolean;
  homepageId?: number | null;
  themeIds?: number;
  hideProfileAndPresence?: boolean;
  textSizeKey?: number;
  textSizeSeq?: number;
  emailLevel?: number;
  emailMessagesLevel?: number;
  titleCountModeKey?: number;
  enableDefer?: boolean;
  timezone?: string | null;
  enableAllowedPmUsers?: boolean;
  darkSchemeId?: number | null;
  skipNewUserTips?: boolean;
  colorSchemeId?: number | null;
}

export const defaultValue: Readonly<IUserOptions> = {
  mailingListMode: false,
  emailDigests: false,
  externalLinksInNewTab: false,
  enableQuoting: false,
  dynamicFavicon: false,
  disableJumpReply: false,
  automaticallyUnpinTopics: false,
  emailInReplyTo: false,
  includeTl0InDigests: false,
  allowPrivateMessages: false,
  hideProfileAndPresence: false,
  enableDefer: false,
  enableAllowedPmUsers: false,
  skipNewUserTips: false,
};
