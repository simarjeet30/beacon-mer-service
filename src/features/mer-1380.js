/**
 * MER-1380 — Verify existing scenario navigation
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1380
 */
export const MER1380 = {
  ticket: 'MER-1380',
  summary: "Verify existing scenario navigation",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1380'] };
  },
};

export default MER1380;
