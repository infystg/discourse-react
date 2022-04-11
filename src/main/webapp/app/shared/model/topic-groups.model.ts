export interface ITopicGroups {
  id?: number;
  groupId?: number;
  topicId?: number;
  lastReadPostNumber?: number;
}

export const defaultValue: Readonly<ITopicGroups> = {};
