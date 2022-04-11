import dayjs from 'dayjs';

export interface IDoNotDisturbTimings {
  id?: number;
  userId?: string;
  startsAt?: string;
  endsAt?: string;
  scheduled?: boolean | null;
}

export const defaultValue: Readonly<IDoNotDisturbTimings> = {
  scheduled: false,
};
