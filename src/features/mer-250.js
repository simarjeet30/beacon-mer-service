/**
 * MER-250 — WAC DATE Section
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-250
 */
export const MER250 = {
  ticket: 'MER-250',
  summary: "WAC DATE Section",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-250'] };
  },
};

export default MER250;
