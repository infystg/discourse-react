export interface ITranslationOverrides {
  id?: number;
  locale?: string;
  translationKey?: string;
  value?: string;
  compiledJs?: string | null;
}

export const defaultValue: Readonly<ITranslationOverrides> = {};
