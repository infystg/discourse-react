export interface IPluginStoreRows {
  id?: number;
  pluginName?: string;
  key?: string;
  typeName?: string;
  value?: string | null;
}

export const defaultValue: Readonly<IPluginStoreRows> = {};
