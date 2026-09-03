/**
 * MER-771 — UI - Combination of multiple Performance measures under a criteria
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-771
 */
export const MER771 = {
  ticket: 'MER-771',
  summary: "UI - Combination of multiple Performance measures under a criteria",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-771'] };
  },
};

export default MER771;
