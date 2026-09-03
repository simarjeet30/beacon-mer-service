/**
 * MER-43 — PPD metric additions for both bucket and product level
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-43
 */
export const MER43 = {
  ticket: 'MER-43',
  summary: "PPD metric additions for both bucket and product level",
  type: "Sub-task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-43'] };
  },
};

export default MER43;
