/**
 * MER-1390 — Verify Market Share update
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1390
 */
export const MER1390 = {
  ticket: 'MER-1390',
  summary: "Verify Market Share update",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1390'] };
  },
};

export default MER1390;
