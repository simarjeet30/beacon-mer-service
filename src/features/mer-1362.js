/**
 * MER-1362 — Stored Procedure Changes - Discount Calculations
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1362
 */
export const MER1362 = {
  ticket: 'MER-1362',
  summary: "Stored Procedure Changes - Discount Calculations",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1362'] };
  },
};

export default MER1362;
