/**
 * MER-662 — User Stories / Technical Stories - Blanks observed in CST when criteria is deleted from a product group and another criteria is added
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-662
 */
export const MER662 = {
  ticket: 'MER-662',
  summary: "User Stories / Technical Stories - Blanks observed in CST when criteria is deleted from a product group and another criteria is added",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-662'] };
  },
};

export default MER662;
