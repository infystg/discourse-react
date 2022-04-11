import dayjs from 'dayjs';

export interface IGroupHistories {
  id?: number;
  groupId?: number;
  actingUserId?: string;
  targetUserId?: string | null;
  action?: number;
  subject?: string | null;
  prevValue?: string | null;
  newValue?: string | null;
  updatedAt?: string;
}

export const defaultValue: Readonly<IGroupHistories> = {};
