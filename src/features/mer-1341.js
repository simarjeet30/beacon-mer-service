/**
 * MER-1341 — Stored Procedure Changes - CST Product Filtering
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1341
 */
export const MER1341 = {
  ticket: 'MER-1341',
  summary: "Stored Procedure Changes - CST Product Filtering",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1341'] };
  },
};

export default MER1341;
