export interface IUserOpenIds {
  id?: number;
  userId?: string;
  email?: string;
  url?: string;
  active?: boolean;
}

export const defaultValue: Readonly<IUserOpenIds> = {
  active: false,
};
