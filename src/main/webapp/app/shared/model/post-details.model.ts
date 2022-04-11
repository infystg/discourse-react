export interface IPostDetails {
  id?: number;
  postId?: number | null;
  key?: string | null;
  value?: string | null;
  extra?: string | null;
}

export const defaultValue: Readonly<IPostDetails> = {};
