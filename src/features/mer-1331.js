/**
 * MER-1331 — API Changes - PPD Metrics
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1331
 */
export const MER1331 = {
  ticket: 'MER-1331',
  summary: "API Changes - PPD Metrics",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1331'] };
  },
};

export default MER1331;
