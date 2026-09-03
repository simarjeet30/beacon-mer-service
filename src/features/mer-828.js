/**
 * MER-828 — API Build-Blanks observed in CST when criteria is deleted from a product group and another criteria is added - Part - 2
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-828
 */
export const MER828 = {
  ticket: 'MER-828',
  summary: "API Build-Blanks observed in CST when criteria is deleted from a product group and another criteria is added - Part - 2",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-828'] };
  },
};

export default MER828;
