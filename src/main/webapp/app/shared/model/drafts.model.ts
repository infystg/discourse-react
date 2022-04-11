export interface IDrafts {
  id?: number;
  userId?: string;
  draftKey?: string;
  data?: string;
  sequence?: number;
  revisions?: number;
  owner?: string | null;
}

export const defaultValue: Readonly<IDrafts> = {};
