/**
 * MER-1470 — Selected Alignment Template Is Not Retained When Editing an Existing Scenario
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1470
 */
export const MER1470 = {
  ticket: 'MER-1470',
  summary: "Selected Alignment Template Is Not Retained When Editing an Existing Scenario",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1470'] };
  },
};

export default MER1470;
