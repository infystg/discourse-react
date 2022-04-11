import { IThemeFields } from 'app/shared/model/theme-fields.model';
import { IThemes } from 'app/shared/model/themes.model';

export interface IJavascriptCaches {
  id?: number;
  themeFieldId?: number | null;
  digest?: string | null;
  content?: string;
  themeId?: number | null;
  themeFields?: IThemeFields[] | null;
  themes?: IThemes[] | null;
}

export const defaultValue: Readonly<IJavascriptCaches> = {};
