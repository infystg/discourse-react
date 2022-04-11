export interface IIncomingDomains {
  id?: number;
  name?: string;
  https?: boolean;
  port?: number;
}

export const defaultValue: Readonly<IIncomingDomains> = {
  https: false,
};
