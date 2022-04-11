import dayjs from 'dayjs';

export interface IBadgePosts {
  id?: number;
  userId?: string | null;
  topicId?: number | null;
  postNumber?: number | null;
  raw?: string | null;
  cooked?: string | null;
  replyToPostNumber?: number | null;
  replyCount?: number | null;
  quoteCount?: number | null;
  deletedAt?: string | null;
  offTopicCount?: number | null;
  likeCount?: number | null;
  incomingLinkCount?: number | null;
  bookmarkCount?: number | null;
  score?: number | null;
  reads?: number | null;
  postType?: number | null;
  sortOrder?: number | null;
  lastEditorId?: string | null;
  hidden?: boolean | null;
  hiddenReasonId?: number | null;
  notifyModeratorsCount?: number | null;
  spamCount?: number | null;
  illegalCount?: number | null;
  inappropriateCount?: number | null;
  lastVersionAt?: string | null;
  userDeleted?: boolean | null;
  replyToUserId?: string | null;
  percentRank?: number | null;
  notifyUserCount?: number | null;
  likeScore?: number | null;
  deletedById?: string | null;
  editReason?: string | null;
  wordCount?: number | null;
  version?: number | null;
  cookMethod?: number | null;
  wiki?: boolean | null;
  bakedAt?: string | null;
  bakedVersion?: number | null;
  hiddenAt?: string | null;
  selfEdits?: number | null;
  replyQuoted?: boolean | null;
  viaEmail?: boolean | null;
  rawEmail?: string | null;
  publicVersion?: number | null;
  actionCode?: string | null;
  lockedById?: string | null;
  imageUploadId?: number | null;
}

export const defaultValue: Readonly<IBadgePosts> = {
  hidden: false,
  userDeleted: false,
  wiki: false,
  replyQuoted: false,
  viaEmail: false,
};
