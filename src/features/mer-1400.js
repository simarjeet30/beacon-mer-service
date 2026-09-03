/**
 * MER-1400 — Verify Contract Structure Template
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1400
 */
export const MER1400 = {
  ticket: 'MER-1400',
  summary: "Verify Contract Structure Template",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1400'] };
  },
};

export default MER1400;
