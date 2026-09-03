/**
 * MER-734 — User Stories / Technical Stories
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-734
 */
export const MER734 = {
  ticket: 'MER-734',
  summary: "User Stories / Technical Stories",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-734'] };
  },
};

export default MER734;
