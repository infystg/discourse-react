export interface IEmailChangeRequests {
  id?: number;
  userId?: string;
  oldEmail?: string | null;
  newEmail?: string;
  oldEmailTokenId?: number | null;
  newEmailTokenId?: number | null;
  changeState?: number;
  requestedByUserId?: string | null;
}

export const defaultValue: Readonly<IEmailChangeRequests> = {};
