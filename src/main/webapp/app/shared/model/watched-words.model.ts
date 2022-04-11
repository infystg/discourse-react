export interface IWatchedWords {
  id?: number;
  word?: string;
  action?: number;
  replacement?: string | null;
}

export const defaultValue: Readonly<IWatchedWords> = {};
