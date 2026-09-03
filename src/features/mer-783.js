/**
 * MER-783 — Unit Testing- Potential Selection dropdown boxes are to be expanded
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-783
 */
export const MER783 = {
  ticket: 'MER-783',
  summary: "Unit Testing- Potential Selection dropdown boxes are to be expanded",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-783'] };
  },
};

export default MER783;
