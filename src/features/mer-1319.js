/**
 * MER-1319 — UI - view by market
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1319
 */
export const MER1319 = {
  ticket: 'MER-1319',
  summary: "UI - view by market",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1319'] };
  },
};

export default MER1319;
