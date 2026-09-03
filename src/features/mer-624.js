/**
 * MER-624 — Expand columns to view the product in its entirety in the Current Alignment screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-624
 */
export const MER624 = {
  ticket: 'MER-624',
  summary: "Expand columns to view the product in its entirety in the Current Alignment screen",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-624'] };
  },
};

export default MER624;
