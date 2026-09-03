/**
 * MER-1398 — Verify Old Scenario in Customer POV
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1398
 */
export const MER1398 = {
  ticket: 'MER-1398',
  summary: "Verify Old Scenario in Customer POV",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1398'] };
  },
};

export default MER1398;
