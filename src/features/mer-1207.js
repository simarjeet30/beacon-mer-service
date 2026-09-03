/**
 * MER-1207 — Accounts not populating on grid- Create Scenario.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1207
 */
export const MER1207 = {
  ticket: 'MER-1207',
  summary: "Accounts not populating on grid- Create Scenario.",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1207'] };
  },
};

export default MER1207;
