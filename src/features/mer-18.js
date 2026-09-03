/**
 * MER-18 — UI & DB: logic calculation on scenario analysis screen for tiered market templates
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-18
 */
export const MER18 = {
  ticket: 'MER-18',
  summary: "UI & DB: logic calculation on scenario analysis screen for tiered market templates",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-18'] };
  },
};

export default MER18;
