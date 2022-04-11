export interface IPublishedPages {
  id?: number;
  topicId?: number;
  slug?: string;
  publiclyAvailable?: boolean;
}

export const defaultValue: Readonly<IPublishedPages> = {
  publiclyAvailable: false,
};
