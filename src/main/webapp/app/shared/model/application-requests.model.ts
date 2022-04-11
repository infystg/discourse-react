import dayjs from 'dayjs';

export interface IApplicationRequests {
  id?: number;
  date?: string;
  reqType?: number;
  count?: number;
}

export const defaultValue: Readonly<IApplicationRequests> = {};
