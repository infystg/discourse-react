export interface ILinkedTopics {
  id?: number;
  topicId?: number;
  originalTopicId?: number;
  sequence?: number;
}

export const defaultValue: Readonly<ILinkedTopics> = {};
