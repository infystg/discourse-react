import dayjs from 'dayjs';

export interface IScreenedEmails {
  id?: number;
  email?: string;
  actionType?: number;
  matchCount?: number;
  lastMatchAt?: string | null;
  ipAddress?: string | null;
}

export const defaultValue: Readonly<IScreenedEmails> = {};
