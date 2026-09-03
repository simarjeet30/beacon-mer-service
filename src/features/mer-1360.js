/**
 * MER-1360 — API Changes - Customer POV Updates
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1360
 */
export const MER1360 = {
  ticket: 'MER-1360',
  summary: "API Changes - Customer POV Updates",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1360'] };
  },
};

export default MER1360;
