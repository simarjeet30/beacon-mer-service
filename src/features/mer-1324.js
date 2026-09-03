/**
 * MER-1324 — DB Table Creation - Contract Alignment Scenario
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1324
 */
export const MER1324 = {
  ticket: 'MER-1324',
  summary: "DB Table Creation - Contract Alignment Scenario",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1324'] };
  },
};

export default MER1324;
