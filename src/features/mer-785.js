/**
 * MER-785 — UI Build- Expand columns to view the product in its entirety in the Current Alignment screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-785
 */
export const MER785 = {
  ticket: 'MER-785',
  summary: "UI Build- Expand columns to view the product in its entirety in the Current Alignment screen",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-785'] };
  },
};

export default MER785;
