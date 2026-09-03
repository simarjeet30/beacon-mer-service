/**
 * MER-642 — User Stories / Technical Stories - Accounts not in alpha order for Steve when creating a new scenario
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-642
 */
export const MER642 = {
  ticket: 'MER-642',
  summary: "User Stories / Technical Stories - Accounts not in alpha order for Steve when creating a new scenario",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-642'] };
  },
};

export default MER642;
