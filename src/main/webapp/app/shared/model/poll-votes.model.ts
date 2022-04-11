import { IPollOptions } from 'app/shared/model/poll-options.model';
import { IPolls } from 'app/shared/model/polls.model';

export interface IPollVotes {
  id?: number;
  pollId?: number | null;
  pollOptionId?: number | null;
  userId?: number | null;
  pollOptions?: IPollOptions[] | null;
  polls?: IPolls[] | null;
}

export const defaultValue: Readonly<IPollVotes> = {};
