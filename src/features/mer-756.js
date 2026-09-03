/**
 * MER-756 — User Stories / Technical Stories
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-756
 */
export const MER756 = {
  ticket: 'MER-756',
  summary: "User Stories / Technical Stories",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-756'] };
  },
};

export default MER756;
