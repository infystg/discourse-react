export interface ITopicCustomFields {
  id?: number;
  topicId?: number;
  name?: string;
  value?: string | null;
}

export const defaultValue: Readonly<ITopicCustomFields> = {};
