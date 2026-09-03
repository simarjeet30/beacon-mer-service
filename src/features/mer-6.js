/**
 * MER-6 — UI & DB: Changes in scenario analysis page - Calculation
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-6
 */
export const MER6 = {
  ticket: 'MER-6',
  summary: "UI & DB: Changes in scenario analysis page - Calculation",
  type: "Sub-task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-6'] };
  },
};

export default MER6;
