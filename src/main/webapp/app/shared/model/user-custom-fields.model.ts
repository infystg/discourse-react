export interface IUserCustomFields {
  id?: number;
  userId?: string;
  name?: string;
  value?: string | null;
}

export const defaultValue: Readonly<IUserCustomFields> = {};
