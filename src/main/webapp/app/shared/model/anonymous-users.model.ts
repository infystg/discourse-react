export interface IAnonymousUsers {
  id?: number;
  userId?: string;
  masterUserId?: string;
  active?: boolean;
}

export const defaultValue: Readonly<IAnonymousUsers> = {
  active: false,
};
