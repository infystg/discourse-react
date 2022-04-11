import { IUserProfiles } from 'app/shared/model/user-profiles.model';

export interface IBadges {
  id?: number;
  name?: string;
  description?: string | null;
  badgeTypeId?: number;
  grantCount?: number;
  allowTitle?: boolean;
  multipleGrant?: boolean;
  icon?: string | null;
  listable?: boolean | null;
  targetPosts?: boolean | null;
  query?: string | null;
  enabled?: boolean;
  autoRevoke?: boolean;
  badgeGroupingId?: number;
  trigger?: number | null;
  showPosts?: boolean;
  system?: boolean;
  image?: string | null;
  longDescription?: string | null;
  imageUploadId?: number | null;
  userProfiles?: IUserProfiles | null;
}

export const defaultValue: Readonly<IBadges> = {
  allowTitle: false,
  multipleGrant: false,
  listable: false,
  targetPosts: false,
  enabled: false,
  autoRevoke: false,
  showPosts: false,
  system: false,
};
