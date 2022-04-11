import dayjs from 'dayjs';

export interface IUserSecondFactors {
  id?: number;
  userId?: string;
  method?: number;
  data?: string;
  enabled?: boolean;
  lastUsed?: string | null;
  name?: string | null;
}

export const defaultValue: Readonly<IUserSecondFactors> = {
  enabled: false,
};
