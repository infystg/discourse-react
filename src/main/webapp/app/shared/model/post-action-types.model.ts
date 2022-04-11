export interface IPostActionTypes {
  id?: number;
  nameKey?: string;
  isFlag?: boolean;
  icon?: string | null;
  position?: number;
  scoreBonus?: number;
  reviewablePriority?: number;
}

export const defaultValue: Readonly<IPostActionTypes> = {
  isFlag: false,
};
