import dayjs from 'dayjs';

export interface IGivenDailyLikes {
  id?: number;
  userId?: string;
  likesGiven?: number;
  givenDate?: string;
  limitReached?: boolean;
}

export const defaultValue: Readonly<IGivenDailyLikes> = {
  limitReached: false,
};
