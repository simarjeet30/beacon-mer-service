/**
 * MER-423 — Last Accounts selected details are retained in Create New Scenario
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-423
 */
export const MER423 = {
  ticket: 'MER-423',
  summary: "Last Accounts selected details are retained in Create New Scenario",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-423'] };
  },
};

export default MER423;
