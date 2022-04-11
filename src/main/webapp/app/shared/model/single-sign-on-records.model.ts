export interface ISingleSignOnRecords {
  id?: number;
  userId?: string;
  externalId?: string;
  lastPayload?: string;
  externalUsername?: string | null;
  externalEmail?: string | null;
  externalName?: string | null;
  externalAvatarUrl?: string | null;
  externalProfileBackgroundUrl?: string | null;
  externalCardBackgroundUrl?: string | null;
}

export const defaultValue: Readonly<ISingleSignOnRecords> = {};
