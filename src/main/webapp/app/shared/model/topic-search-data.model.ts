export interface ITopicSearchData {
  id?: number;
  topicId?: number;
  rawData?: string | null;
  locale?: string;
  searchData?: string | null;
  version?: number | null;
}

export const defaultValue: Readonly<ITopicSearchData> = {};
