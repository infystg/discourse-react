export interface IUserArchivedMessages {
  id?: number;
  userId?: string;
  topicId?: number;
}

export const defaultValue: Readonly<IUserArchivedMessages> = {};
