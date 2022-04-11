export interface ITagSearchData {
  id?: number;
  tagId?: number;
  searchData?: string | null;
  rawData?: string | null;
  locale?: string | null;
  version?: number | null;
}

export const defaultValue: Readonly<ITagSearchData> = {};
