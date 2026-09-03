/**
 * MER-24 — UI & DB : logic calculation on scenario analysis screen for alignment templates.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-24
 */
export const MER24 = {
  ticket: 'MER-24',
  summary: "UI & DB : logic calculation on scenario analysis screen for alignment templates.",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-24'] };
  },
};

export default MER24;
