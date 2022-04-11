export interface IIncomingReferers {
  id?: number;
  path?: string;
  incomingDomainId?: number;
}

export const defaultValue: Readonly<IIncomingReferers> = {};
