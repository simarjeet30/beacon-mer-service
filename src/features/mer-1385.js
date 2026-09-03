/**
 * MER-1385 — Verify decimal Discount in Customer POV
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1385
 */
export const MER1385 = {
  ticket: 'MER-1385',
  summary: "Verify decimal Discount in Customer POV",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1385'] };
  },
};

export default MER1385;
