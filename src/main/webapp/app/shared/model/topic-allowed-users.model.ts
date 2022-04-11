export interface ITopicAllowedUsers {
  id?: number;
  userId?: string;
  topicId?: number;
}

export const defaultValue: Readonly<ITopicAllowedUsers> = {};
