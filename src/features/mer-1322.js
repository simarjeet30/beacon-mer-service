/**
 * MER-1322 — view by market-Api Changes
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1322
 */
export const MER1322 = {
  ticket: 'MER-1322',
  summary: "view by market-Api Changes",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1322'] };
  },
};

export default MER1322;
