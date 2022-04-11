export interface ISiteSettings {
  id?: number;
  name?: string;
  dataType?: number;
  value?: string | null;
}

export const defaultValue: Readonly<ISiteSettings> = {};
