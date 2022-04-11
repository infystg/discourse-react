import dayjs from 'dayjs';

export interface IInvitedUsers {
  id?: number;
  userId?: string | null;
  inviteId?: number;
  redeemedAt?: string | null;
  updatedAt?: string;
}

export const defaultValue: Readonly<IInvitedUsers> = {};
