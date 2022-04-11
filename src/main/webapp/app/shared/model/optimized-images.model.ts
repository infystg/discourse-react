export interface IOptimizedImages {
  id?: number;
  sha1?: string;
  extension?: string;
  width?: number;
  height?: number;
  uploadId?: number;
  url?: string;
  filesize?: number | null;
  etag?: string | null;
  version?: number | null;
}

export const defaultValue: Readonly<IOptimizedImages> = {};
