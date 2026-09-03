/**
 * MER-637 — Analyis & Low Level Design - Warning Notification
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-637
 */
export const MER637 = {
  ticket: 'MER-637',
  summary: "Analyis & Low Level Design - Warning Notification",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-637'] };
  },
};

export default MER637;
