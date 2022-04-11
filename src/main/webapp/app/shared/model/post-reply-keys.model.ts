export interface IPostReplyKeys {
  id?: number;
  userId?: string;
  postId?: number;
  replyKey?: string;
}

export const defaultValue: Readonly<IPostReplyKeys> = {};
