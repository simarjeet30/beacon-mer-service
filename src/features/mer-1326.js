/**
 * MER-1326 — API Changes - Contract Alignment Scenario
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1326
 */
export const MER1326 = {
  ticket: 'MER-1326',
  summary: "API Changes - Contract Alignment Scenario",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1326'] };
  },
};

export default MER1326;
