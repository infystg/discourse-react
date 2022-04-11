import dayjs from 'dayjs';

export interface ITopicEmbeds {
  id?: number;
  topicId?: number;
  postId?: number;
  embedUrl?: string;
  contentSha1?: string | null;
  deletedAt?: string | null;
  deletedById?: string | null;
}

export const defaultValue: Readonly<ITopicEmbeds> = {};
