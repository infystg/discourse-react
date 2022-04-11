import allowedPmUsers from 'app/entities/allowed-pm-users/allowed-pm-users.reducer';
import anonymousUsers from 'app/entities/anonymous-users/anonymous-users.reducer';
import apiKeyScopes from 'app/entities/api-key-scopes/api-key-scopes.reducer';
import apiKeys from 'app/entities/api-keys/api-keys.reducer';
import applicationRequests from 'app/entities/application-requests/application-requests.reducer';
import arInternalMetadata from 'app/entities/ar-internal-metadata/ar-internal-metadata.reducer';
import backupDraftPosts from 'app/entities/backup-draft-posts/backup-draft-posts.reducer';
import backupDraftTopics from 'app/entities/backup-draft-topics/backup-draft-topics.reducer';
import backupMetadata from 'app/entities/backup-metadata/backup-metadata.reducer';
import badgeGroupings from 'app/entities/badge-groupings/badge-groupings.reducer';
import badgePosts from 'app/entities/badge-posts/badge-posts.reducer';
import badgeTypes from 'app/entities/badge-types/badge-types.reducer';
import badges from 'app/entities/badges/badges.reducer';
import bookmarks from 'app/entities/bookmarks/bookmarks.reducer';
import categories from 'app/entities/categories/categories.reducer';
import categoriesWebHooks from 'app/entities/categories-web-hooks/categories-web-hooks.reducer';
import categoryCustomFields from 'app/entities/category-custom-fields/category-custom-fields.reducer';
import categoryFeaturedTopics from 'app/entities/category-featured-topics/category-featured-topics.reducer';
import categoryGroups from 'app/entities/category-groups/category-groups.reducer';
import categorySearchData from 'app/entities/category-search-data/category-search-data.reducer';
import categoryTagGroups from 'app/entities/category-tag-groups/category-tag-groups.reducer';
import categoryTagStats from 'app/entities/category-tag-stats/category-tag-stats.reducer';
import categoryTags from 'app/entities/category-tags/category-tags.reducer';
import categoryUsers from 'app/entities/category-users/category-users.reducer';
import childThemes from 'app/entities/child-themes/child-themes.reducer';
import colorSchemeColors from 'app/entities/color-scheme-colors/color-scheme-colors.reducer';
import colorSchemes from 'app/entities/color-schemes/color-schemes.reducer';
import customEmojis from 'app/entities/custom-emojis/custom-emojis.reducer';
import developers from 'app/entities/developers/developers.reducer';
import directoryItems from 'app/entities/directory-items/directory-items.reducer';
import dismissedTopicUsers from 'app/entities/dismissed-topic-users/dismissed-topic-users.reducer';
import doNotDisturbTimings from 'app/entities/do-not-disturb-timings/do-not-disturb-timings.reducer';
import draftSequences from 'app/entities/draft-sequences/draft-sequences.reducer';
import drafts from 'app/entities/drafts/drafts.reducer';
import emailChangeRequests from 'app/entities/email-change-requests/email-change-requests.reducer';
import emailLogs from 'app/entities/email-logs/email-logs.reducer';
import emailTokens from 'app/entities/email-tokens/email-tokens.reducer';
import embeddableHosts from 'app/entities/embeddable-hosts/embeddable-hosts.reducer';
import givenDailyLikes from 'app/entities/given-daily-likes/given-daily-likes.reducer';
import groupArchivedMessages from 'app/entities/group-archived-messages/group-archived-messages.reducer';
import groupCategoryNotificationDefaults from 'app/entities/group-category-notification-defaults/group-category-notification-defaults.reducer';
import groupCustomFields from 'app/entities/group-custom-fields/group-custom-fields.reducer';
import groupHistories from 'app/entities/group-histories/group-histories.reducer';
import groupMentions from 'app/entities/group-mentions/group-mentions.reducer';
import groupRequests from 'app/entities/group-requests/group-requests.reducer';
import groupTagNotificationDefaults from 'app/entities/group-tag-notification-defaults/group-tag-notification-defaults.reducer';
import groupUsers from 'app/entities/group-users/group-users.reducer';
import groups from 'app/entities/groups/groups.reducer';
import groupsWebHooks from 'app/entities/groups-web-hooks/groups-web-hooks.reducer';
import ignoredUsers from 'app/entities/ignored-users/ignored-users.reducer';
import imapSyncLogs from 'app/entities/imap-sync-logs/imap-sync-logs.reducer';
import incomingDomains from 'app/entities/incoming-domains/incoming-domains.reducer';
import incomingEmails from 'app/entities/incoming-emails/incoming-emails.reducer';
import incomingLinks from 'app/entities/incoming-links/incoming-links.reducer';
import incomingReferers from 'app/entities/incoming-referers/incoming-referers.reducer';
import invitedGroups from 'app/entities/invited-groups/invited-groups.reducer';
import invitedUsers from 'app/entities/invited-users/invited-users.reducer';
import invites from 'app/entities/invites/invites.reducer';
import javascriptCaches from 'app/entities/javascript-caches/javascript-caches.reducer';
import linkedTopics from 'app/entities/linked-topics/linked-topics.reducer';
import messageBus from 'app/entities/message-bus/message-bus.reducer';
import mutedUsers from 'app/entities/muted-users/muted-users.reducer';
import notifications from 'app/entities/notifications/notifications.reducer';
import oauth2UserInfos from 'app/entities/oauth-2-user-infos/oauth-2-user-infos.reducer';
import onceoffLogs from 'app/entities/onceoff-logs/onceoff-logs.reducer';
import optimizedImages from 'app/entities/optimized-images/optimized-images.reducer';
import permalinks from 'app/entities/permalinks/permalinks.reducer';
import pluginStoreRows from 'app/entities/plugin-store-rows/plugin-store-rows.reducer';
import pollOptions from 'app/entities/poll-options/poll-options.reducer';
import pollVotes from 'app/entities/poll-votes/poll-votes.reducer';
import polls from 'app/entities/polls/polls.reducer';
import postActionTypes from 'app/entities/post-action-types/post-action-types.reducer';
import postActions from 'app/entities/post-actions/post-actions.reducer';
import postCustomFields from 'app/entities/post-custom-fields/post-custom-fields.reducer';
import postDetails from 'app/entities/post-details/post-details.reducer';
import postReplies from 'app/entities/post-replies/post-replies.reducer';
import postReplyKeys from 'app/entities/post-reply-keys/post-reply-keys.reducer';
import postRevisions from 'app/entities/post-revisions/post-revisions.reducer';
import postSearchData from 'app/entities/post-search-data/post-search-data.reducer';
import postStats from 'app/entities/post-stats/post-stats.reducer';
import postTimings from 'app/entities/post-timings/post-timings.reducer';
import postUploads from 'app/entities/post-uploads/post-uploads.reducer';
import posts from 'app/entities/posts/posts.reducer';
import publishedPages from 'app/entities/published-pages/published-pages.reducer';
import pushSubscriptions from 'app/entities/push-subscriptions/push-subscriptions.reducer';
import quotedPosts from 'app/entities/quoted-posts/quoted-posts.reducer';
import remoteThemes from 'app/entities/remote-themes/remote-themes.reducer';
import reviewableClaimedTopics from 'app/entities/reviewable-claimed-topics/reviewable-claimed-topics.reducer';
import reviewableHistories from 'app/entities/reviewable-histories/reviewable-histories.reducer';
import reviewableScores from 'app/entities/reviewable-scores/reviewable-scores.reducer';
import reviewables from 'app/entities/reviewables/reviewables.reducer';
import schedulerStats from 'app/entities/scheduler-stats/scheduler-stats.reducer';
import schemaMigrationDetails from 'app/entities/schema-migration-details/schema-migration-details.reducer';
import schemaMigrations from 'app/entities/schema-migrations/schema-migrations.reducer';
import screenedEmails from 'app/entities/screened-emails/screened-emails.reducer';
import screenedIpAddresses from 'app/entities/screened-ip-addresses/screened-ip-addresses.reducer';
import screenedUrls from 'app/entities/screened-urls/screened-urls.reducer';
import searchLogs from 'app/entities/search-logs/search-logs.reducer';
import sharedDrafts from 'app/entities/shared-drafts/shared-drafts.reducer';
import shelvedNotifications from 'app/entities/shelved-notifications/shelved-notifications.reducer';
import singleSignOnRecords from 'app/entities/single-sign-on-records/single-sign-on-records.reducer';
import siteSettings from 'app/entities/site-settings/site-settings.reducer';
import skippedEmailLogs from 'app/entities/skipped-email-logs/skipped-email-logs.reducer';
import stylesheetCache from 'app/entities/stylesheet-cache/stylesheet-cache.reducer';
import tagGroupMemberships from 'app/entities/tag-group-memberships/tag-group-memberships.reducer';
import tagGroupPermissions from 'app/entities/tag-group-permissions/tag-group-permissions.reducer';
import tagGroups from 'app/entities/tag-groups/tag-groups.reducer';
import tagSearchData from 'app/entities/tag-search-data/tag-search-data.reducer';
import tagUsers from 'app/entities/tag-users/tag-users.reducer';
import tags from 'app/entities/tags/tags.reducer';
import tagsWebHooks from 'app/entities/tags-web-hooks/tags-web-hooks.reducer';
import themeFields from 'app/entities/theme-fields/theme-fields.reducer';
import themeModifierSets from 'app/entities/theme-modifier-sets/theme-modifier-sets.reducer';
import themeSettings from 'app/entities/theme-settings/theme-settings.reducer';
import themeTranslationOverrides from 'app/entities/theme-translation-overrides/theme-translation-overrides.reducer';
import themes from 'app/entities/themes/themes.reducer';
import topTopics from 'app/entities/top-topics/top-topics.reducer';
import topicAllowedGroups from 'app/entities/topic-allowed-groups/topic-allowed-groups.reducer';
import topicAllowedUsers from 'app/entities/topic-allowed-users/topic-allowed-users.reducer';
import topicCustomFields from 'app/entities/topic-custom-fields/topic-custom-fields.reducer';
import topicEmbeds from 'app/entities/topic-embeds/topic-embeds.reducer';
import topicGroups from 'app/entities/topic-groups/topic-groups.reducer';
import topicInvites from 'app/entities/topic-invites/topic-invites.reducer';
import topicLinkClicks from 'app/entities/topic-link-clicks/topic-link-clicks.reducer';
import topicLinks from 'app/entities/topic-links/topic-links.reducer';
import topicSearchData from 'app/entities/topic-search-data/topic-search-data.reducer';
import topicTags from 'app/entities/topic-tags/topic-tags.reducer';
import topicThumbnails from 'app/entities/topic-thumbnails/topic-thumbnails.reducer';
import topicTimers from 'app/entities/topic-timers/topic-timers.reducer';
import topicUsers from 'app/entities/topic-users/topic-users.reducer';
import topicViews from 'app/entities/topic-views/topic-views.reducer';
import topics from 'app/entities/topics/topics.reducer';
import translationOverrides from 'app/entities/translation-overrides/translation-overrides.reducer';
import unsubscribeKeys from 'app/entities/unsubscribe-keys/unsubscribe-keys.reducer';
import uploads from 'app/entities/uploads/uploads.reducer';
import userActions from 'app/entities/user-actions/user-actions.reducer';
import userApiKeyScopes from 'app/entities/user-api-key-scopes/user-api-key-scopes.reducer';
import userApiKeys from 'app/entities/user-api-keys/user-api-keys.reducer';
import userArchivedMessages from 'app/entities/user-archived-messages/user-archived-messages.reducer';
import userAssociatedAccounts from 'app/entities/user-associated-accounts/user-associated-accounts.reducer';
import userAuthTokenLogs from 'app/entities/user-auth-token-logs/user-auth-token-logs.reducer';
import userAuthTokens from 'app/entities/user-auth-tokens/user-auth-tokens.reducer';
import userAvatars from 'app/entities/user-avatars/user-avatars.reducer';
import userBadges from 'app/entities/user-badges/user-badges.reducer';
import userCustomFields from 'app/entities/user-custom-fields/user-custom-fields.reducer';
import userEmails from 'app/entities/user-emails/user-emails.reducer';
import userExports from 'app/entities/user-exports/user-exports.reducer';
import userFieldOptions from 'app/entities/user-field-options/user-field-options.reducer';
import userFields from 'app/entities/user-fields/user-fields.reducer';
import userHistories from 'app/entities/user-histories/user-histories.reducer';
import userIpAddressHistories from 'app/entities/user-ip-address-histories/user-ip-address-histories.reducer';
import userNotificationSchedules from 'app/entities/user-notification-schedules/user-notification-schedules.reducer';
import userOpenIds from 'app/entities/user-open-ids/user-open-ids.reducer';
import userOptions from 'app/entities/user-options/user-options.reducer';
import userProfileViews from 'app/entities/user-profile-views/user-profile-views.reducer';
import userProfiles from 'app/entities/user-profiles/user-profiles.reducer';
import userSearchData from 'app/entities/user-search-data/user-search-data.reducer';
import userSecondFactors from 'app/entities/user-second-factors/user-second-factors.reducer';
import userSecurityKeys from 'app/entities/user-security-keys/user-security-keys.reducer';
import userStats from 'app/entities/user-stats/user-stats.reducer';
import userUploads from 'app/entities/user-uploads/user-uploads.reducer';
import userVisits from 'app/entities/user-visits/user-visits.reducer';
import userWarnings from 'app/entities/user-warnings/user-warnings.reducer';
import users from 'app/entities/users/users.reducer';
import watchedWords from 'app/entities/watched-words/watched-words.reducer';
import webCrawlerRequests from 'app/entities/web-crawler-requests/web-crawler-requests.reducer';
import webHookEventTypesHooks from 'app/entities/web-hook-event-types-hooks/web-hook-event-types-hooks.reducer';
import webHookEvents from 'app/entities/web-hook-events/web-hook-events.reducer';
import webHooks from 'app/entities/web-hooks/web-hooks.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  allowedPmUsers,
  anonymousUsers,
  apiKeyScopes,
  apiKeys,
  applicationRequests,
  arInternalMetadata,
  backupDraftPosts,
  backupDraftTopics,
  backupMetadata,
  badgeGroupings,
  badgePosts,
  badgeTypes,
  badges,
  bookmarks,
  categories,
  categoriesWebHooks,
  categoryCustomFields,
  categoryFeaturedTopics,
  categoryGroups,
  categorySearchData,
  categoryTagGroups,
  categoryTagStats,
  categoryTags,
  categoryUsers,
  childThemes,
  colorSchemeColors,
  colorSchemes,
  customEmojis,
  developers,
  directoryItems,
  dismissedTopicUsers,
  doNotDisturbTimings,
  draftSequences,
  drafts,
  emailChangeRequests,
  emailLogs,
  emailTokens,
  embeddableHosts,
  givenDailyLikes,
  groupArchivedMessages,
  groupCategoryNotificationDefaults,
  groupCustomFields,
  groupHistories,
  groupMentions,
  groupRequests,
  groupTagNotificationDefaults,
  groupUsers,
  groups,
  groupsWebHooks,
  ignoredUsers,
  imapSyncLogs,
  incomingDomains,
  incomingEmails,
  incomingLinks,
  incomingReferers,
  invitedGroups,
  invitedUsers,
  invites,
  javascriptCaches,
  linkedTopics,
  messageBus,
  mutedUsers,
  notifications,
  oauth2UserInfos,
  onceoffLogs,
  optimizedImages,
  permalinks,
  pluginStoreRows,
  pollOptions,
  pollVotes,
  polls,
  postActionTypes,
  postActions,
  postCustomFields,
  postDetails,
  postReplies,
  postReplyKeys,
  postRevisions,
  postSearchData,
  postStats,
  postTimings,
  postUploads,
  posts,
  publishedPages,
  pushSubscriptions,
  quotedPosts,
  remoteThemes,
  reviewableClaimedTopics,
  reviewableHistories,
  reviewableScores,
  reviewables,
  schedulerStats,
  schemaMigrationDetails,
  schemaMigrations,
  screenedEmails,
  screenedIpAddresses,
  screenedUrls,
  searchLogs,
  sharedDrafts,
  shelvedNotifications,
  singleSignOnRecords,
  siteSettings,
  skippedEmailLogs,
  stylesheetCache,
  tagGroupMemberships,
  tagGroupPermissions,
  tagGroups,
  tagSearchData,
  tagUsers,
  tags,
  tagsWebHooks,
  themeFields,
  themeModifierSets,
  themeSettings,
  themeTranslationOverrides,
  themes,
  topTopics,
  topicAllowedGroups,
  topicAllowedUsers,
  topicCustomFields,
  topicEmbeds,
  topicGroups,
  topicInvites,
  topicLinkClicks,
  topicLinks,
  topicSearchData,
  topicTags,
  topicThumbnails,
  topicTimers,
  topicUsers,
  topicViews,
  topics,
  translationOverrides,
  unsubscribeKeys,
  uploads,
  userActions,
  userApiKeyScopes,
  userApiKeys,
  userArchivedMessages,
  userAssociatedAccounts,
  userAuthTokenLogs,
  userAuthTokens,
  userAvatars,
  userBadges,
  userCustomFields,
  userEmails,
  userExports,
  userFieldOptions,
  userFields,
  userHistories,
  userIpAddressHistories,
  userNotificationSchedules,
  userOpenIds,
  userOptions,
  userProfileViews,
  userProfiles,
  userSearchData,
  userSecondFactors,
  userSecurityKeys,
  userStats,
  userUploads,
  userVisits,
  userWarnings,
  users,
  watchedWords,
  webCrawlerRequests,
  webHookEventTypesHooks,
  webHookEvents,
  webHooks,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
