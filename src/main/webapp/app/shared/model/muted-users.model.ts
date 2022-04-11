export interface IMutedUsers {
  id?: number;
  userId?: string;
  mutedUserId?: string;
}

export const defaultValue: Readonly<IMutedUsers> = {};
