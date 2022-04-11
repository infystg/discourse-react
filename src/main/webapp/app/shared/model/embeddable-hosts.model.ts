export interface IEmbeddableHosts {
  id?: number;
  host?: string;
  categoryId?: number;
  className?: string | null;
  allowedPaths?: string | null;
}

export const defaultValue: Readonly<IEmbeddableHosts> = {};
