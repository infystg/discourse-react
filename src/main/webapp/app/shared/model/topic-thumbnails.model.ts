export interface ITopicThumbnails {
  id?: number;
  uploadId?: number;
  optimizedImageId?: number | null;
  maxWidth?: number;
  maxHeight?: number;
}

export const defaultValue: Readonly<ITopicThumbnails> = {};
