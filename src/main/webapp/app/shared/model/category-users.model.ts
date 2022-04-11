import dayjs from 'dayjs';

export interface ICategoryUsers {
  id?: number;
  categoryId?: number;
  userId?: string;
  notificationLevel?: number | null;
  lastSeenAt?: string | null;
}

export const defaultValue: Readonly<ICategoryUsers> = {};
