export interface IChildThemes {
  id?: number;
  parentThemeId?: number | null;
  childThemeId?: number | null;
}

export const defaultValue: Readonly<IChildThemes> = {};
