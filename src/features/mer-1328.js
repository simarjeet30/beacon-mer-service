/**
 * MER-1328 — API Changes - Status API WebSocket Migration
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1328
 */
export const MER1328 = {
  ticket: 'MER-1328',
  summary: "API Changes - Status API WebSocket Migration",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1328'] };
  },
};

export default MER1328;
