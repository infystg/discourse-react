export interface IDraftSequences {
  id?: number;
  userId?: string;
  draftKey?: string;
  sequence?: number;
}

export const defaultValue: Readonly<IDraftSequences> = {};
