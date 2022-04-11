export interface IReviewableClaimedTopics {
  id?: number;
  userId?: string;
  topicId?: number;
}

export const defaultValue: Readonly<IReviewableClaimedTopics> = {};
