/**
 * MER-837 — Expand columns to view the product in its entirety in the Current Alignment screen -Test Case Creation-Test Case Creation
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-837
 */
export const MER837 = {
  ticket: 'MER-837',
  summary: "Expand columns to view the product in its entirety in the Current Alignment screen -Test Case Creation-Test Case Creation",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-837'] };
  },
};

export default MER837;
