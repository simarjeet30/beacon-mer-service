/**
 * MER-775 — UI - Combination of multiple Performance measures under a criteria
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-775
 */
export const MER775 = {
  ticket: 'MER-775',
  summary: "UI - Combination of multiple Performance measures under a criteria",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-775'] };
  },
};

export default MER775;
