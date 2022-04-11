export interface IAllowedPmUsers {
  id?: number;
  userId?: string;
  allowedPmUserId?: string;
}

export const defaultValue: Readonly<IAllowedPmUsers> = {};
