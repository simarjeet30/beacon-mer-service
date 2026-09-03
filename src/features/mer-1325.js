/**
 * MER-1325 — Stored Procedure Changes - Contract Alignment Scenario
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1325
 */
export const MER1325 = {
  ticket: 'MER-1325',
  summary: "Stored Procedure Changes - Contract Alignment Scenario",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1325'] };
  },
};

export default MER1325;
