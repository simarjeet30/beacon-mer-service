/**
 * MER-1339 — UI Changes - Cascading Filters & Reset Filters
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1339
 */
export const MER1339 = {
  ticket: 'MER-1339',
  summary: "UI Changes - Cascading Filters & Reset Filters",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1339'] };
  },
};

export default MER1339;
