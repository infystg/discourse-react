import dayjs from 'dayjs';

export interface IApiKeys {
  id?: number;
  userId?: string | null;
  allowedIps?: string | null;
  hidden?: boolean;
  lastUsedAt?: string | null;
  revokedAt?: string | null;
  description?: string | null;
  keyHash?: string;
  truncatedKey?: string;
}

export const defaultValue: Readonly<IApiKeys> = {
  hidden: false,
};
