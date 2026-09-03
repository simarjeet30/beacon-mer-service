/**
 * MER-726 — High Level Requirements - Blanks Observed in CST when Criteris is deleted
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-726
 */
export const MER726 = {
  ticket: 'MER-726',
  summary: "High Level Requirements - Blanks Observed in CST when Criteris is deleted",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-726'] };
  },
};

export default MER726;
