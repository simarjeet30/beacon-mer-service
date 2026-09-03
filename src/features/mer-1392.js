/**
 * MER-1392 — Verify Product level calculations
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1392
 */
export const MER1392 = {
  ticket: 'MER-1392',
  summary: "Verify Product level calculations",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1392'] };
  },
};

export default MER1392;
