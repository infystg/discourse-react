export interface IPermalinks {
  id?: number;
  url?: string;
  topicId?: number | null;
  postId?: number | null;
  categoryId?: number | null;
  externalUrl?: string | null;
  tagId?: number | null;
}

export const defaultValue: Readonly<IPermalinks> = {};
