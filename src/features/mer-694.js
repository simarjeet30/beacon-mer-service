/**
 * MER-694 — Blanks observed in CST when criteria is deleted from a product group and another criteria is added
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-694
 */
export const MER694 = {
  ticket: 'MER-694',
  summary: "Blanks observed in CST when criteria is deleted from a product group and another criteria is added",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-694'] };
  },
};

export default MER694;
