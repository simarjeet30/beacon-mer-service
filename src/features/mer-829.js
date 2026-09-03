/**
 * MER-829 — Unit Testing-Blanks observed in CST when criteria is deleted from a product group and another criteria is added
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-829
 */
export const MER829 = {
  ticket: 'MER-829',
  summary: "Unit Testing-Blanks observed in CST when criteria is deleted from a product group and another criteria is added",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-829'] };
  },
};

export default MER829;
