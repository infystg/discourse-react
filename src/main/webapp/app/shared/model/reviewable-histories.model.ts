export interface IReviewableHistories {
  id?: number;
  reviewableId?: number;
  reviewableHistoryType?: number;
  status?: number;
  edited?: string | null;
}

export const defaultValue: Readonly<IReviewableHistories> = {};
