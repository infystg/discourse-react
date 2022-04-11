import dayjs from 'dayjs';

export interface IUserAuthTokens {
  id?: number;
  userId?: string;
  authToken?: string;
  prevAuthToken?: string;
  userAgent?: string | null;
  authTokenSeen?: boolean;
  clientIp?: string | null;
  rotatedAt?: string;
  seenAt?: string | null;
}

export const defaultValue: Readonly<IUserAuthTokens> = {
  authTokenSeen: false,
};
