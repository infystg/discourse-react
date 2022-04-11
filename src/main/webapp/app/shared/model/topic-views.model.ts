import dayjs from 'dayjs';

export interface ITopicViews {
  id?: number;
  topicId?: number;
  viewedAt?: string;
  userId?: string | null;
  ipAddress?: string | null;
}

export const defaultValue: Readonly<ITopicViews> = {};
