import dayjs from 'dayjs';

export interface IReviewables {
  id?: number;
  type?: string;
  status?: number;
  reviewableByModerator?: boolean;
  reviewableByGroupId?: number | null;
  categoryId?: number | null;
  topicId?: number | null;
  score?: number;
  potentialSpam?: boolean;
  targetId?: number | null;
  targetType?: string | null;
  targetCreatedById?: string | null;
  payload?: string | null;
  version?: number;
  latestScore?: string | null;
  forceReview?: boolean;
  rejectReason?: string | null;
}

export const defaultValue: Readonly<IReviewables> = {
  reviewableByModerator: false,
  potentialSpam: false,
  forceReview: false,
};
