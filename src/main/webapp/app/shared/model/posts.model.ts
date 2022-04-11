import dayjs from 'dayjs';
import { IPolls } from 'app/shared/model/polls.model';

export interface IPosts {
  id?: number;
  userId?: string | null;
  topicId?: number;
  postNumber?: number;
  raw?: string;
  cooked?: string;
  replyToPostNumber?: number | null;
  replyCount?: number;
  quoteCount?: number;
  deletedAt?: string | null;
  offTopicCount?: number;
  likeCount?: number;
  incomingLinkCount?: number;
  bookmarkCount?: number;
  score?: number | null;
  reads?: number;
  postType?: number;
  sortOrder?: number | null;
  lastEditorId?: string | null;
  hidden?: boolean;
  hiddenReasonId?: number | null;
  notifyModeratorsCount?: number;
  spamCount?: number;
  illegalCount?: number;
  inappropriateCount?: number;
  lastVersionAt?: string;
  userDeleted?: boolean;
  replyToUserId?: string | null;
  percentRank?: number | null;
  notifyUserCount?: number;
  likeScore?: number;
  deletedById?: string | null;
  editReason?: string | null;
  wordCount?: number | null;
  version?: number;
  cookMethod?: number;
  wiki?: boolean;
  bakedAt?: string | null;
  bakedVersion?: number | null;
  hiddenAt?: string | null;
  selfEdits?: number;
  replyQuoted?: boolean;
  viaEmail?: boolean;
  rawEmail?: string | null;
  publicVersion?: number;
  actionCode?: string | null;
  lockedById?: string | null;
  imageUploadId?: number | null;
  polls?: IPolls | null;
}

export const defaultValue: Readonly<IPosts> = {
  hidden: false,
  userDeleted: false,
  wiki: false,
  replyQuoted: false,
  viaEmail: false,
};
