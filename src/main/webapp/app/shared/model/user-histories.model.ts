export interface IUserHistories {
  id?: number;
  action?: number;
  actingUserId?: string | null;
  targetUserId?: string | null;
  details?: string | null;
  context?: string | null;
  ipAddress?: string | null;
  email?: string | null;
  subject?: string | null;
  previousValue?: string | null;
  newValue?: string | null;
  topicId?: number | null;
  adminOnly?: boolean | null;
  postId?: number | null;
  customType?: string | null;
  categoryId?: number | null;
}

export const defaultValue: Readonly<IUserHistories> = {
  adminOnly: false,
};
