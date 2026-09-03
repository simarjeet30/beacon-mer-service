/**
 * MER-1327 — UI Changes - Contract Alignment Scenario Screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1327
 */
export const MER1327 = {
  ticket: 'MER-1327',
  summary: "UI Changes - Contract Alignment Scenario Screen",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1327'] };
  },
};

export default MER1327;
