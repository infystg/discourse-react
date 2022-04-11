import dayjs from 'dayjs';

export interface IUserProfileViews {
  id?: number;
  userProfileId?: number;
  viewedAt?: string;
  ipAddress?: string | null;
  userId?: string | null;
}

export const defaultValue: Readonly<IUserProfileViews> = {};
