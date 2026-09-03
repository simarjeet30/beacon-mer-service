/**
 * MER-788 — UI Build- Accounts not in alpha order for Steve when creating a new scenario
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-788
 */
export const MER788 = {
  ticket: 'MER-788',
  summary: "UI Build- Accounts not in alpha order for Steve when creating a new scenario",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-788'] };
  },
};

export default MER788;
