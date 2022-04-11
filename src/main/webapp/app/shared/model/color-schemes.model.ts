export interface IColorSchemes {
  id?: number;
  name?: string;
  version?: number;
  viaWizard?: boolean;
  baseSchemeId?: string | null;
  themeId?: number | null;
  userSelectable?: boolean;
}

export const defaultValue: Readonly<IColorSchemes> = {
  viaWizard: false,
  userSelectable: false,
};
