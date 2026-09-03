/**
 * MER-1389 — Verify Potential Product dropdown
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1389
 */
export const MER1389 = {
  ticket: 'MER-1389',
  summary: "Verify Potential Product dropdown",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1389'] };
  },
};

export default MER1389;
