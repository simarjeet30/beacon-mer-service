/**
 * MER-47 — Create SOP for DI Changes
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-47
 */
export const MER47 = {
  ticket: 'MER-47',
  summary: "Create SOP for DI Changes",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-47'] };
  },
};

export default MER47;
