/**
 * MER-1393 — Verify Total row calculation
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1393
 */
export const MER1393 = {
  ticket: 'MER-1393',
  summary: "Verify Total row calculation",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1393'] };
  },
};

export default MER1393;
