export interface ITagUsers {
  id?: number;
  tagId?: number;
  userId?: string;
  notificationLevel?: number;
}

export const defaultValue: Readonly<ITagUsers> = {};
