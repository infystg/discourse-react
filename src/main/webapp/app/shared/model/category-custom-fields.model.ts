export interface ICategoryCustomFields {
  id?: number;
  categoryId?: number;
  name?: string;
  value?: string | null;
}

export const defaultValue: Readonly<ICategoryCustomFields> = {};
