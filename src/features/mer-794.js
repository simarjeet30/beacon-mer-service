/**
 * MER-794 — API Build- Blanks observed in CST when criteria is deleted from a product group and another criteria is added
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-794
 */
export const MER794 = {
  ticket: 'MER-794',
  summary: "API Build- Blanks observed in CST when criteria is deleted from a product group and another criteria is added",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-794'] };
  },
};

export default MER794;
