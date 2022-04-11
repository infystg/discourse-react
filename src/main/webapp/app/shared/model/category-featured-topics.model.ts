export interface ICategoryFeaturedTopics {
  id?: number;
  categoryId?: number;
  topicId?: number;
  rank?: number;
}

export const defaultValue: Readonly<ICategoryFeaturedTopics> = {};
