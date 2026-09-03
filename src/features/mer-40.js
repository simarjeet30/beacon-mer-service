/**
 * MER-40 — Add manufacturer level view in account deep dive screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-40
 */
export const MER40 = {
  ticket: 'MER-40',
  summary: "Add manufacturer level view in account deep dive screen",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-40'] };
  },
};

export default MER40;
