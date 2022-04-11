import { IPollVotes } from 'app/shared/model/poll-votes.model';

export interface IPollOptions {
  id?: number;
  pollId?: number | null;
  digest?: string;
  html?: string;
  anonymousVotes?: number | null;
  pollVotes?: IPollVotes | null;
}

export const defaultValue: Readonly<IPollOptions> = {};
