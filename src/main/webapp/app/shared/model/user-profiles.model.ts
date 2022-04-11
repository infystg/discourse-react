import { IBadges } from 'app/shared/model/badges.model';
import { IUploads } from 'app/shared/model/uploads.model';

export interface IUserProfiles {
  id?: number;
  userId?: string;
  location?: string | null;
  website?: string | null;
  bioRaw?: string | null;
  bioCooked?: string | null;
  dismissedBannerKey?: number | null;
  bioCookedVersion?: number | null;
  badgeGrantedTitle?: boolean | null;
  views?: number;
  profileBackgroundUploadId?: number | null;
  cardBackgroundUploadId?: number | null;
  grantedTitleBadgeId?: number | null;
  featuredTopicId?: number | null;
  badges?: IBadges[] | null;
  uploads?: IUploads[] | null;
}

export const defaultValue: Readonly<IUserProfiles> = {
  badgeGrantedTitle: false,
};
