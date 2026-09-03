/**
 * MER-1004 — Test ticket
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1004
 */
export const MER1004 = {
  ticket: 'MER-1004',
  summary: "Test ticket",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1004'] };
  },
};

export default MER1004;
