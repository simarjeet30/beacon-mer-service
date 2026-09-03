/**
 * MER-1359 — Stored Procedure Changes - Customer POV Updates
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1359
 */
export const MER1359 = {
  ticket: 'MER-1359',
  summary: "Stored Procedure Changes - Customer POV Updates",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1359'] };
  },
};

export default MER1359;
