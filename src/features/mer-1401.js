/**
 * MER-1401 — Verify Additional Scenarios from the UI
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1401
 */
export const MER1401 = {
  ticket: 'MER-1401',
  summary: "Verify Additional Scenarios from the UI",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1401'] };
  },
};

export default MER1401;
