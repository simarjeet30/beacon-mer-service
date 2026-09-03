/**
 * MER-1321 — Stored Procedure Changes - Market Aggregation
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1321
 */
export const MER1321 = {
  ticket: 'MER-1321',
  summary: "Stored Procedure Changes - Market Aggregation",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1321'] };
  },
};

export default MER1321;
