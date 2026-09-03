/**
 * MER-1409 — Verify Financial Table updates based on Cascaded Filters
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1409
 */
export const MER1409 = {
  ticket: 'MER-1409',
  summary: "Verify Financial Table updates based on Cascaded Filters",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1409'] };
  },
};

export default MER1409;
