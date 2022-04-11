export interface IGroupCustomFields {
  id?: number;
  groupId?: number;
  name?: string;
  value?: string | null;
}

export const defaultValue: Readonly<IGroupCustomFields> = {};
