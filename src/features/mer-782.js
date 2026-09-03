/**
 * MER-782 — UI Build- Potential Selection dropdown boxes are to be expanded
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-782
 */
export const MER782 = {
  ticket: 'MER-782',
  summary: "UI Build- Potential Selection dropdown boxes are to be expanded",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-782'] };
  },
};

export default MER782;
