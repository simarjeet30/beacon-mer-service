/**
 * MER-636 — High Level Requirements - Warning Notification
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-636
 */
export const MER636 = {
  ticket: 'MER-636',
  summary: "High Level Requirements - Warning Notification",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-636'] };
  },
};

export default MER636;
