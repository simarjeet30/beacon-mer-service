/**
 * MER-830 — Unit Testing-Blanks observed in CST when criteria is deleted from a product group and another criteria is added
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-830
 */
export const MER830 = {
  ticket: 'MER-830',
  summary: "Unit Testing-Blanks observed in CST when criteria is deleted from a product group and another criteria is added",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-830'] };
  },
};

export default MER830;
