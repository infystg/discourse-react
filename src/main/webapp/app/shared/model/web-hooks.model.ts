export interface IWebHooks {
  id?: number;
  payloadUrl?: string;
  contentType?: number;
  lastDeliveryStatus?: number;
  status?: number;
  secret?: string | null;
  wildcardWebHook?: boolean;
  verifyCertificate?: boolean;
  active?: boolean;
}

export const defaultValue: Readonly<IWebHooks> = {
  wildcardWebHook: false,
  verifyCertificate: false,
  active: false,
};
