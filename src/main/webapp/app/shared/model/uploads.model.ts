import dayjs from 'dayjs';
import { IUserProfiles } from 'app/shared/model/user-profiles.model';

export interface IUploads {
  id?: number;
  userId?: string;
  originalFilename?: string;
  filesize?: number;
  width?: number | null;
  height?: number | null;
  url?: string;
  sha1?: string | null;
  origin?: string | null;
  retainHours?: number | null;
  extension?: string | null;
  thumbnailWidth?: number | null;
  thumbnailHeight?: number | null;
  etag?: string | null;
  secure?: boolean;
  accessControlPostId?: number | null;
  originalSha1?: string | null;
  animated?: boolean | null;
  verified?: boolean | null;
  verificationStatus?: number;
  securityLastChangedAt?: string | null;
  securityLastChangedReason?: string | null;
  userProfiles?: IUserProfiles | null;
}

export const defaultValue: Readonly<IUploads> = {
  secure: false,
  animated: false,
  verified: false,
};
