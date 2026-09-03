/**
 * MER-1384 — Verify Discount (%) input in Customer POV
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1384
 */
export const MER1384 = {
  ticket: 'MER-1384',
  summary: "Verify Discount (%) input in Customer POV",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1384'] };
  },
};

export default MER1384;
