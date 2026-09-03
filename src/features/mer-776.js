/**
 * MER-776 — API - Combination of multiple Performance measures under a criteria
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-776
 */
export const MER776 = {
  ticket: 'MER-776',
  summary: "API - Combination of multiple Performance measures under a criteria",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-776'] };
  },
};

export default MER776;
