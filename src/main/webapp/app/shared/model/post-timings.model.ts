export interface IPostTimings {
  id?: number;
  topicId?: number;
  postNumber?: number;
  userId?: string;
  msecs?: number;
}

export const defaultValue: Readonly<IPostTimings> = {};
