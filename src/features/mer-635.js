/**
 * MER-635 — User Stories / Technical Stories - Warning Notification
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-635
 */
export const MER635 = {
  ticket: 'MER-635',
  summary: "User Stories / Technical Stories - Warning Notification",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-635'] };
  },
};

export default MER635;
