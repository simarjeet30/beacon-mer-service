/**
 * MER-1396 — Verify Copy Scenario
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1396
 */
export const MER1396 = {
  ticket: 'MER-1396',
  summary: "Verify Copy Scenario",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1396'] };
  },
};

export default MER1396;
