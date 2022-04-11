import dayjs from 'dayjs';

export interface IRemoteThemes {
  id?: number;
  remoteUrl?: string;
  remoteVersion?: string | null;
  localVersion?: string | null;
  aboutUrl?: string | null;
  licenseUrl?: string | null;
  commitsBehind?: number | null;
  remoteUpdatedAt?: string | null;
  privateKey?: string | null;
  branch?: string | null;
  lastErrorText?: string | null;
  authors?: string | null;
  themeVersion?: string | null;
  minimumDiscourseVersion?: string | null;
  maximumDiscourseVersion?: string | null;
}

export const defaultValue: Readonly<IRemoteThemes> = {};
