import dayjs from 'dayjs';

export interface IGroupRequests {
  id?: number;
  groupId?: number | null;
  userId?: string | null;
  reason?: string | null;
  updatedAt?: string;
}

export const defaultValue: Readonly<IGroupRequests> = {};
