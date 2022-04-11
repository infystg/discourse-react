export interface IPostSearchData {
  id?: number;
  postId?: number;
  searchData?: string | null;
  rawData?: string | null;
  locale?: string | null;
  version?: number | null;
  privateMessage?: boolean;
}

export const defaultValue: Readonly<IPostSearchData> = {
  privateMessage: false,
};
