import dayjs from 'dayjs';

export interface IUserAssociatedAccounts {
  id?: number;
  providerName?: string;
  providerUid?: string;
  userId?: string | null;
  lastUsed?: string;
  info?: string;
  credentials?: string;
  extra?: string;
}

export const defaultValue: Readonly<IUserAssociatedAccounts> = {};
