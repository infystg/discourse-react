export interface IUserNotificationSchedules {
  id?: number;
  userId?: string;
  enabled?: boolean;
  day0StartTime?: number;
  day0EndTime?: number;
  day1StartTime?: number;
  day1EndTime?: number;
  day2StartTime?: number;
  day2EndTime?: number;
  day3StartTime?: number;
  day3EndTime?: number;
  day4StartTime?: number;
  day4EndTime?: number;
  day5StartTime?: number;
  day5EndTime?: number;
  day6StartTime?: number;
  day6EndTime?: number;
}

export const defaultValue: Readonly<IUserNotificationSchedules> = {
  enabled: false,
};
