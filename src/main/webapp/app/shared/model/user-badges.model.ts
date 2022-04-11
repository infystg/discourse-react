import dayjs from 'dayjs';

export interface IUserBadges {
  id?: number;
  badgeId?: number;
  userId?: string;
  grantedAt?: string;
  grantedById?: string;
  postId?: number | null;
  notificationId?: number | null;
  seq?: number;
  featuredRank?: number | null;
}

export const defaultValue: Readonly<IUserBadges> = {};
