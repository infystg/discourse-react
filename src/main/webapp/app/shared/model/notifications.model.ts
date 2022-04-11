export interface INotifications {
  id?: number;
  notificationType?: number;
  userId?: string;
  data?: string;
  read?: boolean;
  topicId?: number | null;
  postNumber?: number | null;
  postActionId?: number | null;
  highPriority?: boolean;
}

export const defaultValue: Readonly<INotifications> = {
  read: false,
  highPriority: false,
};
