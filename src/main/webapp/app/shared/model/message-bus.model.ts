export interface IMessageBus {
  id?: number;
  name?: string | null;
  context?: string | null;
  data?: string | null;
}

export const defaultValue: Readonly<IMessageBus> = {};
