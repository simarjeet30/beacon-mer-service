/**
 * MER-638 — User Stories / Technical Stories - Contract Period should not include Day
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-638
 */
export const MER638 = {
  ticket: 'MER-638',
  summary: "User Stories / Technical Stories - Contract Period should not include Day",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-638'] };
  },
};

export default MER638;
