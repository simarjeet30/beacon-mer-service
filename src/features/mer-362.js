/**
 * MER-362 — UI issues | Current Alignment screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-362
 */
export const MER362 = {
  ticket: 'MER-362',
  summary: "UI issues | Current Alignment screen",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-362'] };
  },
};

export default MER362;
