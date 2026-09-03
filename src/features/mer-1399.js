/**
 * MER-1399 — Verify Account dropdown
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1399
 */
export const MER1399 = {
  ticket: 'MER-1399',
  summary: "Verify Account dropdown",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1399'] };
  },
};

export default MER1399;
