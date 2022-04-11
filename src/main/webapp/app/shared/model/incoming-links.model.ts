export interface IIncomingLinks {
  id?: number;
  userId?: string | null;
  ipAddress?: string | null;
  currentUserId?: string | null;
  postId?: number;
  incomingRefererId?: number | null;
}

export const defaultValue: Readonly<IIncomingLinks> = {};
