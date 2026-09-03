/**
 * MER-801 — Unit Testing-Combination of multiple Performance measures under a criteria
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-801
 */
export const MER801 = {
  ticket: 'MER-801',
  summary: "Unit Testing-Combination of multiple Performance measures under a criteria",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-801'] };
  },
};

export default MER801;
