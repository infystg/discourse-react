export interface IUserAuthTokenLogs {
  id?: number;
  action?: string;
  userAuthTokenId?: number | null;
  userId?: string | null;
  clientIp?: string | null;
  userAgent?: string | null;
  authToken?: string | null;
  path?: string | null;
}

export const defaultValue: Readonly<IUserAuthTokenLogs> = {};
