import dayjs from 'dayjs';

export interface IUserAvatars {
  id?: number;
  userId?: string;
  customUploadId?: number | null;
  gravatarUploadId?: number | null;
  lastGravatarDownloadAttempt?: string | null;
  updatedAt?: string;
}

export const defaultValue: Readonly<IUserAvatars> = {};
