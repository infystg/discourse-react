export interface IInvitedGroups {
  id?: number;
  groupId?: number | null;
  inviteId?: number | null;
}

export const defaultValue: Readonly<IInvitedGroups> = {};
