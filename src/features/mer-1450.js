/**
 * MER-1450 — Verify Backward Compatibility with Older Scenarios
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1450
 */
export const MER1450 = {
  ticket: 'MER-1450',
  summary: "Verify Backward Compatibility with Older Scenarios",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1450'] };
  },
};

export default MER1450;
