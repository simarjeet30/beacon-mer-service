/**
 * MER-381 — Grid of Accounts Vic Type with Action Button of Edit sites & volumes
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-381
 */
export const MER381 = {
  ticket: 'MER-381',
  summary: "Grid of Accounts Vic Type with Action Button of Edit sites & volumes",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-381'] };
  },
};

export default MER381;
