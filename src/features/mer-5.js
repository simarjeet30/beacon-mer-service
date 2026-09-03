/**
 * MER-5 — UI & DB : Changes for Apply and Save Template button logic for tiered market share
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-5
 */
export const MER5 = {
  ticket: 'MER-5',
  summary: "UI & DB : Changes for Apply and Save Template button logic for tiered market share",
  type: "Sub-task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-5'] };
  },
};

export default MER5;
