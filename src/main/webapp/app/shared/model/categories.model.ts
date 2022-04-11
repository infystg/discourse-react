export interface ICategories {
  id?: number;
  name?: string;
  color?: string;
  topicId?: number | null;
  topicCount?: number;
  userId?: string;
  topicsYear?: number | null;
  topicsMonth?: number | null;
  topicsWeek?: number | null;
  slug?: string;
  description?: string | null;
  textColor?: string;
  readRestricted?: boolean;
  autoCloseHours?: number | null;
  postCount?: number;
  latestPostId?: number | null;
  latestTopicId?: number | null;
  position?: number | null;
  parentCategoryId?: number | null;
  postsYear?: number | null;
  postsMonth?: number | null;
  postsWeek?: number | null;
  emailIn?: string | null;
  emailInAllowStrangers?: boolean | null;
  topicsDay?: number | null;
  postsDay?: number | null;
  allowBadges?: boolean;
  nameLower?: string | null;
  autoCloseBasedOnLastPost?: boolean | null;
  topicTemplate?: string | null;
  containsMessages?: boolean | null;
  sortOrder?: string | null;
  sortAscending?: boolean | null;
  uploadedLogoId?: number | null;
  uploadedBackgroundId?: number | null;
  topicFeaturedLinkAllowed?: boolean | null;
  allTopicsWiki?: boolean;
  showSubcategoryList?: boolean | null;
  numFeaturedTopics?: number | null;
  defaultView?: string | null;
  subcategoryListStyle?: string | null;
  defaultTopPeriod?: string | null;
  mailinglistMirror?: boolean;
  minimumRequiredTags?: number;
  navigateToFirstPostAfterRead?: boolean;
  searchPriority?: number | null;
  allowGlobalTags?: boolean;
  reviewableByGroupId?: number | null;
  requiredTagGroupId?: number | null;
  minTagsFromRequiredGroup?: number;
  readOnlyBanner?: string | null;
  defaultListFilter?: string | null;
  allowUnlimitedOwnerEditsOnFirstPost?: boolean;
}

export const defaultValue: Readonly<ICategories> = {
  readRestricted: false,
  emailInAllowStrangers: false,
  allowBadges: false,
  autoCloseBasedOnLastPost: false,
  containsMessages: false,
  sortAscending: false,
  topicFeaturedLinkAllowed: false,
  allTopicsWiki: false,
  showSubcategoryList: false,
  mailinglistMirror: false,
  navigateToFirstPostAfterRead: false,
  allowGlobalTags: false,
  allowUnlimitedOwnerEditsOnFirstPost: false,
};
