import dayjs from 'dayjs';

export interface IScreenedUrls {
  id?: number;
  url?: string;
  domain?: string;
  actionType?: number;
  matchCount?: number;
  lastMatchAt?: string | null;
  ipAddress?: string | null;
}

export const defaultValue: Readonly<IScreenedUrls> = {};
