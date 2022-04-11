import dayjs from 'dayjs';

export interface IUserStats {
  id?: number;
  userId?: string;
  topicsEntered?: number;
  timeRead?: number;
  daysVisited?: number;
  postsReadCount?: number;
  likesGiven?: number;
  likesReceived?: number;
  newSince?: string;
  readFaq?: string | null;
  firstPostCreatedAt?: string | null;
  postCount?: number;
  topicCount?: number;
  bounceScore?: number;
  resetBounceScoreAfter?: string | null;
  flagsAgreed?: number;
  flagsDisagreed?: number;
  flagsIgnored?: number;
  firstUnreadAt?: string;
  distinctBadgeCount?: number;
  firstUnreadPmAt?: string;
  digestAttemptedAt?: string | null;
}

export const defaultValue: Readonly<IUserStats> = {};
