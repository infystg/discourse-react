import dayjs from 'dayjs';

export interface IUserVisits {
  id?: number;
  userId?: string;
  visitedAt?: string;
  postsRead?: number | null;
  mobile?: boolean | null;
  timeRead?: number;
}

export const defaultValue: Readonly<IUserVisits> = {
  mobile: false,
};
