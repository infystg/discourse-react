export interface ICategoryTagStats {
  id?: number;
  categoryId?: number;
  tagId?: number;
  topicCount?: number;
}

export const defaultValue: Readonly<ICategoryTagStats> = {};
