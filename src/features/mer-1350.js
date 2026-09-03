/**
 * MER-1350 — Stored Procedure Changes - Product Group Sequencing
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1350
 */
export const MER1350 = {
  ticket: 'MER-1350',
  summary: "Stored Procedure Changes - Product Group Sequencing",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1350'] };
  },
};

export default MER1350;
