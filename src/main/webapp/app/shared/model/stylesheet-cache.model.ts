export interface IStylesheetCache {
  id?: number;
  target?: string;
  digest?: string;
  content?: string;
  themeId?: number;
  sourceMap?: string | null;
}

export const defaultValue: Readonly<IStylesheetCache> = {};
