export interface IGroupTagNotificationDefaults {
  id?: number;
  groupId?: number;
  tagId?: number;
  notificationLevel?: number;
}

export const defaultValue: Readonly<IGroupTagNotificationDefaults> = {};
