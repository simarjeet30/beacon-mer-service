/**
 * MER-20 — UI: on selected template table to load with new template json
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-20
 */
export const MER20 = {
  ticket: 'MER-20',
  summary: "UI: on selected template table to load with new template json",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-20'] };
  },
};

export default MER20;
