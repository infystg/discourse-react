import dayjs from 'dayjs';

export interface ISchedulerStats {
  id?: number;
  name?: string;
  hostname?: string;
  pid?: number;
  durationMs?: number | null;
  liveSlotsStart?: number | null;
  liveSlotsFinish?: number | null;
  startedAt?: string;
  success?: boolean | null;
  error?: string | null;
}

export const defaultValue: Readonly<ISchedulerStats> = {
  success: false,
};
