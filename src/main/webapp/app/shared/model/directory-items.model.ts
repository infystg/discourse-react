export interface IDirectoryItems {
  id?: number;
  periodType?: number;
  userId?: string;
  likesReceived?: number;
  likesGiven?: number;
  topicsEntered?: number;
  topicCount?: number;
  postCount?: number;
  daysVisited?: number;
  postsRead?: number;
}

export const defaultValue: Readonly<IDirectoryItems> = {};
