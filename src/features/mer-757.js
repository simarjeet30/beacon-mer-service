/**
 * MER-757 — Analysis & Low Level Design - Combination of Multiple performance measures
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-757
 */
export const MER757 = {
  ticket: 'MER-757',
  summary: "Analysis & Low Level Design - Combination of Multiple performance measures",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-757'] };
  },
};

export default MER757;
