import dayjs from 'dayjs';

export interface IPostCustomFields {
  id?: number;
  postId?: number;
  name?: string;
  value?: string | null;
  updatedAt?: string;
}

export const defaultValue: Readonly<IPostCustomFields> = {};
