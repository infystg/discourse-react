export interface IUserEmails {
  id?: number;
  userId?: string;
  email?: string;
  primary?: boolean;
}

export const defaultValue: Readonly<IUserEmails> = {
  primary: false,
};
