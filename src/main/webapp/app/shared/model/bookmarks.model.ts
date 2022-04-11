import dayjs from 'dayjs';

export interface IBookmarks {
  id?: number;
  userId?: string;
  topicId?: number;
  postId?: number;
  name?: string | null;
  reminderType?: number | null;
  reminderAt?: string | null;
  reminderLastSentAt?: string | null;
  reminderSetAt?: string | null;
  autoDeletePreference?: number;
  pinned?: boolean | null;
}

export const defaultValue: Readonly<IBookmarks> = {
  pinned: false,
};
