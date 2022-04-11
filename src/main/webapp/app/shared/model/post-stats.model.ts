export interface IPostStats {
  id?: number;
  postId?: number | null;
  draftsSaved?: number | null;
  typingDurationMsecs?: number | null;
  composerOpenDurationMsecs?: number | null;
}

export const defaultValue: Readonly<IPostStats> = {};
