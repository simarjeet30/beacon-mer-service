/**
 * MER-1330 — Stored Procedure Changes - PPD Metrics
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1330
 */
export const MER1330 = {
  ticket: 'MER-1330',
  summary: "Stored Procedure Changes - PPD Metrics",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1330'] };
  },
};

export default MER1330;
