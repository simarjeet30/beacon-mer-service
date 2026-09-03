/**
 * MER-1397 — Verify Copy after Reset
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1397
 */
export const MER1397 = {
  ticket: 'MER-1397',
  summary: "Verify Copy after Reset",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1397'] };
  },
};

export default MER1397;
