export interface ICustomEmojis {
  id?: number;
  name?: string;
  uploadId?: number;
  group?: string | null;
}

export const defaultValue: Readonly<ICustomEmojis> = {};
