/**
 * MER-2 — UI: Design and functional changes - Add dropdown for select method
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-2
 */
export const MER2 = {
  ticket: 'MER-2',
  summary: "UI: Design and functional changes - Add dropdown for select method",
  type: "Sub-task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-2'] };
  },
};

export default MER2;
