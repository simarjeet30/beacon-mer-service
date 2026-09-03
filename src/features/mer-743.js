/**
 * MER-743 — User Stories / Technical Stories
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-743
 */
export const MER743 = {
  ticket: 'MER-743',
  summary: "User Stories / Technical Stories",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-743'] };
  },
};

export default MER743;
