/**
 * MER-4 — DB : DB changes - Adding column and inserting new values.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-4
 */
export const MER4 = {
  ticket: 'MER-4',
  summary: "DB : DB changes - Adding column and inserting new values.",
  type: "Sub-task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-4'] };
  },
};

export default MER4;
