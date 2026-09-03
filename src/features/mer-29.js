/**
 * MER-29 — Retain the user applied filter values like applied alignments
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-29
 */
export const MER29 = {
  ticket: 'MER-29',
  summary: "Retain the user applied filter values like applied alignments",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-29'] };
  },
};

export default MER29;
