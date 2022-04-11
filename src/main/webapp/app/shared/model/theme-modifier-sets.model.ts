export interface IThemeModifierSets {
  id?: number;
  themeId?: number;
  serializeTopicExcerpts?: boolean | null;
  cspExtensions?: string | null;
  svgIcons?: string | null;
  topicThumbnailSizes?: string | null;
}

export const defaultValue: Readonly<IThemeModifierSets> = {
  serializeTopicExcerpts: false,
};
