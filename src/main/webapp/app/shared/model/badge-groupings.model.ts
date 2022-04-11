export interface IBadgeGroupings {
  id?: number;
  name?: string;
  description?: string | null;
  position?: number;
}

export const defaultValue: Readonly<IBadgeGroupings> = {};
