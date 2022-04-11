import dayjs from 'dayjs';

export interface ITopicUsers {
  id?: number;
  userId?: string;
  topicId?: number;
  posted?: boolean;
  lastReadPostNumber?: number | null;
  highestSeenPostNumber?: number | null;
  lastVisitedAt?: string | null;
  firstVisitedAt?: string | null;
  notificationLevel?: number;
  notificationsChangedAt?: string | null;
  notificationsReasonId?: number | null;
  totalMsecsViewed?: number;
  clearedPinnedAt?: string | null;
  lastEmailedPostNumber?: number | null;
  liked?: boolean | null;
  bookmarked?: boolean | null;
  lastPostedAt?: string | null;
}

export const defaultValue: Readonly<ITopicUsers> = {
  posted: false,
  liked: false,
  bookmarked: false,
};
