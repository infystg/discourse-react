import dayjs from 'dayjs';

export interface IOauth2UserInfos {
  id?: number;
  userId?: string;
  uid?: string;
  provider?: string;
  email?: string | null;
  name?: string | null;
  updatedAt?: string;
}

export const defaultValue: Readonly<IOauth2UserInfos> = {};
