/**
 * MER-1379 — Verify navigation to Customer POV screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1379
 */
export const MER1379 = {
  ticket: 'MER-1379',
  summary: "Verify navigation to Customer POV screen",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1379'] };
  },
};

export default MER1379;
