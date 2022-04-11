export interface ITopTopics {
  id?: number;
  topicId?: number | null;
  yearlyPostsCount?: number;
  yearlyViewsCount?: number;
  yearlyLikesCount?: number;
  monthlyPostsCount?: number;
  monthlyViewsCount?: number;
  monthlyLikesCount?: number;
  weeklyPostsCount?: number;
  weeklyViewsCount?: number;
  weeklyLikesCount?: number;
  dailyPostsCount?: number;
  dailyViewsCount?: number;
  dailyLikesCount?: number;
  dailyScore?: number | null;
  weeklyScore?: number | null;
  monthlyScore?: number | null;
  yearlyScore?: number | null;
  allScore?: number | null;
  dailyOpLikesCount?: number;
  weeklyOpLikesCount?: number;
  monthlyOpLikesCount?: number;
  yearlyOpLikesCount?: number;
  quarterlyPostsCount?: number;
  quarterlyViewsCount?: number;
  quarterlyLikesCount?: number;
  quarterlyScore?: number | null;
  quarterlyOpLikesCount?: number;
}

export const defaultValue: Readonly<ITopTopics> = {};
