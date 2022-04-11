import { IJavascriptCaches } from 'app/shared/model/javascript-caches.model';

export interface IThemeFields {
  id?: number;
  themeId?: number;
  targetId?: number;
  name?: string;
  value?: string;
  valueBaked?: string | null;
  compilerVersion?: string;
  error?: string | null;
  uploadId?: number | null;
  typeId?: number;
  javascriptCaches?: IJavascriptCaches | null;
}

export const defaultValue: Readonly<IThemeFields> = {};
