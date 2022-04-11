export interface IPostReplies {
  id?: number;
  postId?: number | null;
  replyPostId?: number | null;
}

export const defaultValue: Readonly<IPostReplies> = {};
