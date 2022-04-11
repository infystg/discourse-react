import dayjs from 'dayjs';

export interface IGroupMentions {
  id?: number;
  postId?: number | null;
  groupId?: number | null;
  updatedAt?: string;
}

export const defaultValue: Readonly<IGroupMentions> = {};
