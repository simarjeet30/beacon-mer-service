/**
 * MER-1387 — Verify maximum Discount in Customer POV
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1387
 */
export const MER1387 = {
  ticket: 'MER-1387',
  summary: "Verify maximum Discount in Customer POV",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1387'] };
  },
};

export default MER1387;
