export interface IApiKeyScopes {
  id?: number;
  apiKeyId?: number;
  resource?: string;
  action?: string;
  allowedParameters?: string | null;
}

export const defaultValue: Readonly<IApiKeyScopes> = {};
