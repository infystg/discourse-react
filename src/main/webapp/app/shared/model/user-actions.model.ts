export interface IUserActions {
  id?: number;
  actionType?: number;
  userId?: string;
  targetTopicId?: number | null;
  targetPostId?: number | null;
  targetUserId?: string | null;
  actingUserId?: string | null;
}

export const defaultValue: Readonly<IUserActions> = {};
