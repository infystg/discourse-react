export interface IUserFields {
  id?: number;
  name?: string;
  fieldType?: string;
  editable?: boolean;
  description?: string;
  required?: boolean;
  showOnProfile?: boolean;
  position?: number | null;
  showOnUserCard?: boolean;
  externalName?: string | null;
  externalType?: string | null;
  searchable?: boolean;
}

export const defaultValue: Readonly<IUserFields> = {
  editable: false,
  required: false,
  showOnProfile: false,
  showOnUserCard: false,
  searchable: false,
};
