/**
 * MER-639 — Analysis & Low Level Design - Contract Period should not include day
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-639
 */
export const MER639 = {
  ticket: 'MER-639',
  summary: "Analysis & Low Level Design - Contract Period should not include day",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-639'] };
  },
};

export default MER639;
