import dayjs from 'dayjs';

export interface IGroupUsers {
  id?: number;
  groupId?: number;
  userId?: string;
  owner?: boolean;
  notificationLevel?: number;
  firstUnreadPmAt?: string;
}

export const defaultValue: Readonly<IGroupUsers> = {
  owner: false,
};
