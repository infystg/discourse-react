import dayjs from 'dayjs';

export interface IInvites {
  id?: number;
  inviteKey?: string;
  email?: string | null;
  invitedById?: string;
  userId?: string | null;
  redeemedAt?: string | null;
  deletedAt?: string | null;
  deletedById?: string | null;
  invalidatedAt?: string | null;
  moderator?: boolean;
  customMessage?: string | null;
  emailedStatus?: number | null;
  maxRedemptionsAllowed?: number;
  redemptionCount?: number;
  expiresAt?: string;
  emailToken?: string | null;
}

export const defaultValue: Readonly<IInvites> = {
  moderator: false,
};
