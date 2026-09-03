/**
 * MER-1351 — API Changes - Product Group Ordering
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1351
 */
export const MER1351 = {
  ticket: 'MER-1351',
  summary: "API Changes - Product Group Ordering",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1351'] };
  },
};

export default MER1351;
