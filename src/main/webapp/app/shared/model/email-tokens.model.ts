import dayjs from 'dayjs';

export interface IEmailTokens {
  id?: number;
  userId?: string;
  email?: string;
  token?: string;
  confirmed?: boolean;
  expired?: boolean;
  updatedAt?: string;
}

export const defaultValue: Readonly<IEmailTokens> = {
  confirmed: false,
  expired: false,
};
