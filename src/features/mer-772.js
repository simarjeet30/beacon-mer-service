/**
 * MER-772 — API - Combination of multiple Performance measures under a criteria
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-772
 */
export const MER772 = {
  ticket: 'MER-772',
  summary: "API - Combination of multiple Performance measures under a criteria",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-772'] };
  },
};

export default MER772;
