import dayjs from 'dayjs';
import { IUserSecurityKeys } from 'app/shared/model/user-security-keys.model';

export interface IUsers {
  id?: number;
  username?: string;
  name?: string | null;
  seenNotificationId?: number;
  lastPostedAt?: string | null;
  passwordHash?: string | null;
  salt?: string | null;
  active?: boolean;
  usernameLower?: string;
  lastSeenAt?: string | null;
  admin?: boolean;
  lastEmailedAt?: string | null;
  trustLevel?: number;
  approved?: boolean;
  approvedById?: string | null;
  approvedAt?: string | null;
  previousVisitAt?: string | null;
  suspendedAt?: string | null;
  suspendedTill?: string | null;
  dateOfBirth?: string | null;
  views?: number;
  flagLevel?: number;
  ipAddress?: string | null;
  moderator?: boolean | null;
  title?: string | null;
  uploadedAvatarId?: number | null;
  locale?: string | null;
  primaryGroupId?: number | null;
  registrationIpAddress?: string | null;
  staged?: boolean;
  firstSeenAt?: string | null;
  silencedTill?: string | null;
  groupLockedTrustLevel?: number | null;
  manualLockedTrustLevel?: number | null;
  secureIdentifier?: string | null;
  userSecurityKeys?: IUserSecurityKeys | null;
}

export const defaultValue: Readonly<IUsers> = {
  active: false,
  admin: false,
  approved: false,
  moderator: false,
  staged: false,
};
