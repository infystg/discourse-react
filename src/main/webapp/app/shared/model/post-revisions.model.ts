export interface IPostRevisions {
  id?: number;
  userId?: string | null;
  postId?: number | null;
  modifications?: string | null;
  number?: number | null;
  hidden?: boolean;
}

export const defaultValue: Readonly<IPostRevisions> = {
  hidden: false,
};
