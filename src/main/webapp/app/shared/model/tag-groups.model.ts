export interface ITagGroups {
  id?: number;
  name?: string;
  parentTagId?: number | null;
  onePerTopic?: boolean | null;
}

export const defaultValue: Readonly<ITagGroups> = {
  onePerTopic: false,
};
