/**
 * MER-752 — User Stories / Technical Stories
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-752
 */
export const MER752 = {
  ticket: 'MER-752',
  summary: "User Stories / Technical Stories",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-752'] };
  },
};

export default MER752;
