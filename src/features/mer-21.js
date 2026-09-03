/**
 * MER-21 — UI: on selected template table to load with new template json
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-21
 */
export const MER21 = {
  ticket: 'MER-21',
  summary: "UI: on selected template table to load with new template json",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-21'] };
  },
};

export default MER21;
