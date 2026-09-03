/**
 * MER-295 — Grid Populate on Change History
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-295
 */
export const MER295 = {
  ticket: 'MER-295',
  summary: "Grid Populate on Change History",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-295'] };
  },
};

export default MER295;
