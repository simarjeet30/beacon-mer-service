/**
 * MER-17 — UI: changes in Scenario analysis screen for getting new template list in dropdown
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-17
 */
export const MER17 = {
  ticket: 'MER-17',
  summary: "UI: changes in Scenario analysis screen for getting new template list in dropdown",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-17'] };
  },
};

export default MER17;
