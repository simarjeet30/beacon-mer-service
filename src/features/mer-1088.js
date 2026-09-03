/**
 * MER-1088 — Existing Bug - Create Scenario- Contract Comparison- Contract template dropdown are not resetting properly and displaying selected value of unsaved created scenario.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1088
 */
export const MER1088 = {
  ticket: 'MER-1088',
  summary: "Existing Bug - Create Scenario- Contract Comparison- Contract template dropdown are not resetting properly and displaying selected value of unsaved created scenario.",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1088'] };
  },
};

export default MER1088;
