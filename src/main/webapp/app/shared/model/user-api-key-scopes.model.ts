export interface IUserApiKeyScopes {
  id?: number;
  userApiKeyId?: number;
  name?: string;
  allowedParameters?: string | null;
}

export const defaultValue: Readonly<IUserApiKeyScopes> = {};
