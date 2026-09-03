/**
 * MER-1338 — API Changes - Cascading Filters
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1338
 */
export const MER1338 = {
  ticket: 'MER-1338',
  summary: "API Changes - Cascading Filters",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1338'] };
  },
};

export default MER1338;
