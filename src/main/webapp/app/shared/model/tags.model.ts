export interface ITags {
  id?: number;
  name?: string;
  topicCount?: number;
  pmTopicCount?: number;
  targetTagId?: number | null;
}

export const defaultValue: Readonly<ITags> = {};
