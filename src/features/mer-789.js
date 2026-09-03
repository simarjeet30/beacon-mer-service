/**
 * MER-789 — API Build- Accounts not in alpha order for Steve when creating a new scenario
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-789
 */
export const MER789 = {
  ticket: 'MER-789',
  summary: "API Build- Accounts not in alpha order for Steve when creating a new scenario",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-789'] };
  },
};

export default MER789;
