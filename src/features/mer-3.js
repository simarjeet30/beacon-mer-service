/**
 * MER-3 — UI : Design and functional changes - Add the tiered market share template in select contract structure template
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-3
 */
export const MER3 = {
  ticket: 'MER-3',
  summary: "UI : Design and functional changes - Add the tiered market share template in select contract structure template",
  type: "Sub-task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-3'] };
  },
};

export default MER3;
