import dayjs from 'dayjs';
import { IUsers } from 'app/shared/model/users.model';

export interface IUserSecurityKeys {
  id?: number;
  userId?: number;
  credentialId?: string;
  publicKey?: string;
  factorType?: number;
  enabled?: boolean;
  name?: string;
  lastUsed?: string | null;
  users?: IUsers[] | null;
}

export const defaultValue: Readonly<IUserSecurityKeys> = {
  enabled: false,
};
