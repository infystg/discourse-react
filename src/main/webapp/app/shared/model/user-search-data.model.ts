export interface IUserSearchData {
  id?: number;
  userId?: string;
  searchData?: string | null;
  rawData?: string | null;
  locale?: string | null;
  version?: number | null;
}

export const defaultValue: Readonly<IUserSearchData> = {};
