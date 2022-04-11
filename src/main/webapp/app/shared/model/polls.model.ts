import dayjs from 'dayjs';
import { IPosts } from 'app/shared/model/posts.model';
import { IPollVotes } from 'app/shared/model/poll-votes.model';

export interface IPolls {
  id?: number;
  postId?: number | null;
  name?: string;
  closeAt?: string | null;
  type?: number;
  status?: number;
  results?: number;
  visibility?: number;
  min?: number | null;
  max?: number | null;
  step?: number | null;
  anonymousVoters?: number | null;
  chartType?: number;
  groups?: string | null;
  title?: string | null;
  posts?: IPosts[] | null;
  pollVotes?: IPollVotes | null;
}

export const defaultValue: Readonly<IPolls> = {};
