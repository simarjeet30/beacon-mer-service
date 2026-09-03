/**
 * MER-19 — UI: Add save button and dropdown for listing templates.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-19
 */
export const MER19 = {
  ticket: 'MER-19',
  summary: "UI: Add save button and dropdown for listing templates.",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-19'] };
  },
};

export default MER19;
