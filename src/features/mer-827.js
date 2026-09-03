/**
 * MER-827 — UI Build-Blanks observed in CST when criteria is deleted from a product group and another criteria is added- Part - 2
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-827
 */
export const MER827 = {
  ticket: 'MER-827',
  summary: "UI Build-Blanks observed in CST when criteria is deleted from a product group and another criteria is added- Part - 2",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-827'] };
  },
};

export default MER827;
