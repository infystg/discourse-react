import dayjs from 'dayjs';

export interface ITopics {
  id?: number;
  title?: string;
  lastPostedAt?: string | null;
  views?: number;
  postsCount?: number;
  userId?: string | null;
  lastPostUserId?: number;
  replyCount?: number;
  featuredUser1Id?: string | null;
  featuredUser2Id?: string | null;
  featuredUser3Id?: string | null;
  deletedAt?: string | null;
  highestPostNumber?: number;
  likeCount?: number;
  incomingLinkCount?: number;
  categoryId?: number | null;
  visible?: boolean;
  moderatorPostsCount?: number;
  closed?: boolean;
  archived?: boolean;
  bumpedAt?: string;
  hasSummary?: boolean;
  archetype?: string;
  featuredUser4Id?: string | null;
  notifyModeratorsCount?: number;
  spamCount?: number;
  pinnedAt?: string | null;
  score?: number | null;
  percentRank?: number;
  subtype?: string | null;
  slug?: string | null;
  deletedById?: string | null;
  participantCount?: number | null;
  wordCount?: number | null;
  excerpt?: string | null;
  pinnedGlobally?: boolean;
  pinnedUntil?: string | null;
  fancyTitle?: string | null;
  highestStaffPostNumber?: number;
  featuredLink?: string | null;
  reviewableScore?: number;
  imageUploadId?: number | null;
  slowModeSeconds?: number;
}

export const defaultValue: Readonly<ITopics> = {
  visible: false,
  closed: false,
  archived: false,
  hasSummary: false,
  pinnedGlobally: false,
};
