export interface IUnsubscribeKeys {
  id?: number;
  key?: string;
  userId?: string;
  unsubscribeKeyType?: string | null;
  topicId?: number | null;
  postId?: number | null;
}

export const defaultValue: Readonly<IUnsubscribeKeys> = {};
