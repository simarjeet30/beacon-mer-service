/**
 * MER-628 — Analysis & Low Level Design - Expand columns to view the product in its entirety in the Current Alignment screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-628
 */
export const MER628 = {
  ticket: 'MER-628',
  summary: "Analysis & Low Level Design - Expand columns to view the product in its entirety in the Current Alignment screen",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-628'] };
  },
};

export default MER628;
