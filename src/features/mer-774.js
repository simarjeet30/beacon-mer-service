/**
 * MER-774 — API - Combination of multiple Performance measures under a criteria
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-774
 */
export const MER774 = {
  ticket: 'MER-774',
  summary: "API - Combination of multiple Performance measures under a criteria",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-774'] };
  },
};

export default MER774;
