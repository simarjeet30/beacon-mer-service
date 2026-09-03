/**
 * MER-802 — Deployment (Dev)-Combination of multiple Performance measures under a criteria
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-802
 */
export const MER802 = {
  ticket: 'MER-802',
  summary: "Deployment (Dev)-Combination of multiple Performance measures under a criteria",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-802'] };
  },
};

export default MER802;
