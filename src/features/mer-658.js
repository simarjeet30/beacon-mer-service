/**
 * MER-658 — High Level Requirements - contract comparison should cascade over to Account Summary
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-658
 */
export const MER658 = {
  ticket: 'MER-658',
  summary: "High Level Requirements - contract comparison should cascade over to Account Summary",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-658'] };
  },
};

export default MER658;
