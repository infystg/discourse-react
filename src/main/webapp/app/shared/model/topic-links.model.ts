import dayjs from 'dayjs';

export interface ITopicLinks {
  id?: number;
  topicId?: number;
  postId?: number | null;
  userId?: string;
  url?: string;
  domain?: string;
  internal?: boolean;
  linkTopicId?: number | null;
  reflection?: boolean | null;
  clicks?: number;
  linkPostId?: number | null;
  title?: string | null;
  crawledAt?: string | null;
  quote?: boolean;
  extension?: string | null;
}

export const defaultValue: Readonly<ITopicLinks> = {
  internal: false,
  reflection: false,
  quote: false,
};
