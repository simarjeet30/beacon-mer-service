/**
 * MER-800 — API Build-Combination of multiple Performance measures under a criteria
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-800
 */
export const MER800 = {
  ticket: 'MER-800',
  summary: "API Build-Combination of multiple Performance measures under a criteria",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-800'] };
  },
};

export default MER800;
