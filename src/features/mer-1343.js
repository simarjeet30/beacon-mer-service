/**
 * MER-1343 — UI Changes - CST Product Filtering
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1343
 */
export const MER1343 = {
  ticket: 'MER-1343',
  summary: "UI Changes - CST Product Filtering",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1343'] };
  },
};

export default MER1343;
