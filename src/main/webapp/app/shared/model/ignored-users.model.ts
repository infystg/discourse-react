import dayjs from 'dayjs';

export interface IIgnoredUsers {
  id?: number;
  userId?: string;
  ignoredUserId?: string;
  summarizedAt?: string | null;
  expiringAt?: string;
}

export const defaultValue: Readonly<IIgnoredUsers> = {};
