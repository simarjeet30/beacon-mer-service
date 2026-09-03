/**
 * MER-23 — UI: new dropdown in scenario analysis screen for selecting different alignment template
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-23
 */
export const MER23 = {
  ticket: 'MER-23',
  summary: "UI: new dropdown in scenario analysis screen for selecting different alignment template",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-23'] };
  },
};

export default MER23;
