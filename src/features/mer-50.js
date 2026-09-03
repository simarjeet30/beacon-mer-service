/**
 * MER-50 — Select Contract Structure template pop up - Copy functionality
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-50
 */
export const MER50 = {
  ticket: 'MER-50',
  summary: "Select Contract Structure template pop up - Copy functionality",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-50'] };
  },
};

export default MER50;
