export interface IThemeSettings {
  id?: number;
  name?: string;
  dataType?: number;
  value?: string | null;
  themeId?: number;
}

export const defaultValue: Readonly<IThemeSettings> = {};
