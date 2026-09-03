/**
 * MER-14 — UI & DB : Update apply logic with tiered market share
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-14
 */
export const MER14 = {
  ticket: 'MER-14',
  summary: "UI & DB : Update apply logic with tiered market share",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-14'] };
  },
};

export default MER14;
