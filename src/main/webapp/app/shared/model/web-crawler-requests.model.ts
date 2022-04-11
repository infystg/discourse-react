import dayjs from 'dayjs';

export interface IWebCrawlerRequests {
  id?: number;
  date?: string;
  userAgent?: string;
  count?: number;
}

export const defaultValue: Readonly<IWebCrawlerRequests> = {};
