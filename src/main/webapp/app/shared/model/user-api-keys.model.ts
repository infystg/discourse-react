import dayjs from 'dayjs';

export interface IUserApiKeys {
  id?: number;
  userId?: string;
  clientId?: string;
  applicationName?: string;
  pushUrl?: string | null;
  revokedAt?: string | null;
  scopes?: string | null;
  lastUsedAt?: string;
  keyHash?: string;
}

export const defaultValue: Readonly<IUserApiKeys> = {};
