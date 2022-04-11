import dayjs from 'dayjs';

export interface IReviewableScores {
  id?: number;
  reviewableId?: number;
  userId?: string;
  reviewableScoreType?: number;
  status?: number;
  score?: number;
  takeActionBonus?: number;
  reviewedById?: string | null;
  reviewedAt?: string | null;
  metaTopicId?: number | null;
  reason?: string | null;
  userAccuracyBonus?: number;
}

export const defaultValue: Readonly<IReviewableScores> = {};
