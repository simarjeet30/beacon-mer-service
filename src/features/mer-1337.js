/**
 * MER-1337 — Stored Procedure Changes - Cascading Filters
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1337
 */
export const MER1337 = {
  ticket: 'MER-1337',
  summary: "Stored Procedure Changes - Cascading Filters",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1337'] };
  },
};

export default MER1337;
