import dayjs from 'dayjs';

export interface IPostActions {
  id?: number;
  postId?: number;
  userId?: string;
  postActionTypeId?: number;
  deletedAt?: string | null;
  deletedById?: string | null;
  relatedPostId?: number | null;
  staffTookAction?: boolean;
  deferredById?: string | null;
  targetsTopic?: boolean;
  agreedAt?: string | null;
  agreedById?: string | null;
  deferredAt?: string | null;
  disagreedAt?: string | null;
  disagreedById?: string | null;
}

export const defaultValue: Readonly<IPostActions> = {
  staffTookAction: false,
  targetsTopic: false,
};
