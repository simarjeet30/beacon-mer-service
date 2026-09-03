/**
 * MER-1 — The system allow user to create and save Tiered based discount structure templates
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1
 */
export const MER1 = {
  ticket: 'MER-1',
  summary: "The system allow user to create and save Tiered based discount structure templates",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1'] };
  },
};

export default MER1;
