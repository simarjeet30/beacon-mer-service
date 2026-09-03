/**
 * MER-1395 — Verify Reset Filters
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1395
 */
export const MER1395 = {
  ticket: 'MER-1395',
  summary: "Verify Reset Filters",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1395'] };
  },
};

export default MER1395;
