export interface IWebHookEvents {
  id?: number;
  webHookId?: number;
  headers?: string | null;
  payload?: string | null;
  status?: number | null;
  responseHeaders?: string | null;
  responseBody?: string | null;
  duration?: number | null;
}

export const defaultValue: Readonly<IWebHookEvents> = {};
