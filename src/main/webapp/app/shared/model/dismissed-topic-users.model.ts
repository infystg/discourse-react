import dayjs from 'dayjs';

export interface IDismissedTopicUsers {
  id?: number;
  userId?: string | null;
  topicId?: number | null;
  createdAt?: string | null;
}

export const defaultValue: Readonly<IDismissedTopicUsers> = {};
