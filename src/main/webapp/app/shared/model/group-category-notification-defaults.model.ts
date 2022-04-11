export interface IGroupCategoryNotificationDefaults {
  id?: number;
  groupId?: number;
  categoryId?: number;
  notificationLevel?: number;
}

export const defaultValue: Readonly<IGroupCategoryNotificationDefaults> = {};
