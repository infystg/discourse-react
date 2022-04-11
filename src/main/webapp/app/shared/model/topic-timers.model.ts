import dayjs from 'dayjs';

export interface ITopicTimers {
  id?: number;
  executeAt?: string;
  statusType?: number;
  userId?: string;
  topicId?: number;
  basedOnLastPost?: boolean;
  deletedAt?: string | null;
  deletedById?: string | null;
  categoryId?: number | null;
  publicType?: boolean | null;
  duration?: number | null;
  durationMinutes?: number | null;
}

export const defaultValue: Readonly<ITopicTimers> = {
  basedOnLastPost: false,
  publicType: false,
};
