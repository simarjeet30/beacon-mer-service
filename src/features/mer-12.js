/**
 * MER-12 — UI & DB : Update save as template logic tiered market share
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-12
 */
export const MER12 = {
  ticket: 'MER-12',
  summary: "UI & DB : Update save as template logic tiered market share",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-12'] };
  },
};

export default MER12;
