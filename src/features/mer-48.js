/**
 * MER-48 — Feedback points of Account deepdive, current alignment, PPD popup changes
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-48
 */
export const MER48 = {
  ticket: 'MER-48',
  summary: "Feedback points of Account deepdive, current alignment, PPD popup changes",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-48'] };
  },
};

export default MER48;
