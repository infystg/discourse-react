export interface ICategorySearchData {
  id?: number;
  categoryId?: number;
  searchData?: string | null;
  rawData?: string | null;
  locale?: string | null;
  version?: number | null;
}

export const defaultValue: Readonly<ICategorySearchData> = {};
