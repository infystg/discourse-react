export interface ITopicLinkClicks {
  id?: number;
  topicLinkId?: number;
  userId?: string | null;
  ipAddress?: string | null;
}

export const defaultValue: Readonly<ITopicLinkClicks> = {};
