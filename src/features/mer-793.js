/**
 * MER-793 — UI Build- Blanks observed in CST when criteria is deleted from a product group and another criteria is added
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-793
 */
export const MER793 = {
  ticket: 'MER-793',
  summary: "UI Build- Blanks observed in CST when criteria is deleted from a product group and another criteria is added",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-793'] };
  },
};

export default MER793;
