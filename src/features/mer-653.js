/**
 * MER-653 — User Stories / Technical Stories - Unable to search by Contract Structure Template
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-653
 */
export const MER653 = {
  ticket: 'MER-653',
  summary: "User Stories / Technical Stories - Unable to search by Contract Structure Template",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-653'] };
  },
};

export default MER653;
