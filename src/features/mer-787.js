/**
 * MER-787 — Deployment (Dev)- Expand columns to view the product in its entirety in the Current Alignment screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-787
 */
export const MER787 = {
  ticket: 'MER-787',
  summary: "Deployment (Dev)- Expand columns to view the product in its entirety in the Current Alignment screen",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-787'] };
  },
};

export default MER787;
