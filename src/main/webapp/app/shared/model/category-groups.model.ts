export interface ICategoryGroups {
  id?: number;
  categoryId?: number;
  groupId?: number;
  permissionType?: number | null;
}

export const defaultValue: Readonly<ICategoryGroups> = {};
