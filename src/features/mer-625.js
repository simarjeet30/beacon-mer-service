/**
 * MER-625 — User Stories / Technical Stories - Expand columns to view the product
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-625
 */
export const MER625 = {
  ticket: 'MER-625',
  summary: "User Stories / Technical Stories - Expand columns to view the product",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-625'] };
  },
};

export default MER625;
