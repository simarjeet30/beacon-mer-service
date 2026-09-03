/**
 * MER-39 — Update the calculation for delta
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-39
 */
export const MER39 = {
  ticket: 'MER-39',
  summary: "Update the calculation for delta",
  type: "Sub-task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-39'] };
  },
};

export default MER39;
