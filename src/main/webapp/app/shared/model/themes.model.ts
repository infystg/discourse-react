import { IJavascriptCaches } from 'app/shared/model/javascript-caches.model';

export interface IThemes {
  id?: number;
  name?: string;
  userId?: string;
  compilerVersion?: number;
  userSelectable?: boolean;
  hidden?: boolean;
  colorSchemeId?: number | null;
  remoteThemeId?: number | null;
  componentAvailable?: boolean;
  enabled?: boolean;
  autoUpdate?: boolean;
  javascriptCaches?: IJavascriptCaches | null;
}

export const defaultValue: Readonly<IThemes> = {
  userSelectable: false,
  hidden: false,
  componentAvailable: false,
  enabled: false,
  autoUpdate: false,
};
