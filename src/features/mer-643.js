/**
 * MER-643 — High Level Requirements - Accounts not in alpha order for Steve when creating a new scenario
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-643
 */
export const MER643 = {
  ticket: 'MER-643',
  summary: "High Level Requirements - Accounts not in alpha order for Steve when creating a new scenario",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-643'] };
  },
};

export default MER643;
