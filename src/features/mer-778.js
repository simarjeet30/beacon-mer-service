/**
 * MER-778 — API - Combination of multiple Performance measures under a criteria
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-778
 */
export const MER778 = {
  ticket: 'MER-778',
  summary: "API - Combination of multiple Performance measures under a criteria",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-778'] };
  },
};

export default MER778;
