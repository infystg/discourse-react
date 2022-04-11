export interface ITagGroupPermissions {
  id?: number;
  tagGroupId?: number;
  groupId?: number;
  permissionType?: number;
}

export const defaultValue: Readonly<ITagGroupPermissions> = {};
