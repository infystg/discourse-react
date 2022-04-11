export interface ISearchLogs {
  id?: number;
  term?: string;
  userId?: string | null;
  ipAddress?: string | null;
  searchResultId?: number | null;
  searchType?: number;
  searchResultType?: number | null;
}

export const defaultValue: Readonly<ISearchLogs> = {};
