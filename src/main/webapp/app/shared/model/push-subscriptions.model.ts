export interface IPushSubscriptions {
  id?: number;
  userId?: string;
  data?: string;
}

export const defaultValue: Readonly<IPushSubscriptions> = {};
