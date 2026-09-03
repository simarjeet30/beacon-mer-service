/**
 * MER-786 — Unit Testing- Expand columns to view the product in its entirety in the Current Alignment screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-786
 */
export const MER786 = {
  ticket: 'MER-786',
  summary: "Unit Testing- Expand columns to view the product in its entirety in the Current Alignment screen",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-786'] };
  },
};

export default MER786;
