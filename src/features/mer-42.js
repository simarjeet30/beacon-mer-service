/**
 * MER-42 — PPD product level view addition and functional changes
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-42
 */
export const MER42 = {
  ticket: 'MER-42',
  summary: "PPD product level view addition and functional changes",
  type: "Sub-task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-42'] };
  },
};

export default MER42;
