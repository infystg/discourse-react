export interface IUserIpAddressHistories {
  id?: number;
  userId?: string;
  ipAddress?: string;
}

export const defaultValue: Readonly<IUserIpAddressHistories> = {};
