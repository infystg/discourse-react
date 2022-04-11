import dayjs from 'dayjs';

export interface IScreenedIpAddresses {
  id?: number;
  ipAddress?: string;
  actionType?: number;
  matchCount?: number;
  lastMatchAt?: string | null;
}

export const defaultValue: Readonly<IScreenedIpAddresses> = {};
