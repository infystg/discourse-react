export interface IThemeTranslationOverrides {
  id?: number;
  themeId?: number;
  locale?: string;
  translationKey?: string;
  value?: string;
}

export const defaultValue: Readonly<IThemeTranslationOverrides> = {};
