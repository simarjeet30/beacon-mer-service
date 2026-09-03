/**
 * MER-738 — User Stories / Technical Stories
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-738
 */
export const MER738 = {
  ticket: 'MER-738',
  summary: "User Stories / Technical Stories",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-738'] };
  },
};

export default MER738;
