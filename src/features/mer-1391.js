/**
 * MER-1391 — Verify Total Market Share
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1391
 */
export const MER1391 = {
  ticket: 'MER-1391',
  summary: "Verify Total Market Share",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1391'] };
  },
};

export default MER1391;
