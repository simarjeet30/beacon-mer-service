/**
 * MER-8 — UI: Add dropdown to select method
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-8
 */
export const MER8 = {
  ticket: 'MER-8',
  summary: "UI: Add dropdown to select method",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-8'] };
  },
};

export default MER8;
