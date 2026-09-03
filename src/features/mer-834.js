/**
 * MER-834 — Combination of multiple Performance measures under a criteria - Test Case Creation
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-834
 */
export const MER834 = {
  ticket: 'MER-834',
  summary: "Combination of multiple Performance measures under a criteria - Test Case Creation",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-834'] };
  },
};

export default MER834;
