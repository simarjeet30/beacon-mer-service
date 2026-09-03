/**
 * MER-296 — Add Apply function
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-296
 */
export const MER296 = {
  ticket: 'MER-296',
  summary: "Add Apply function",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-296'] };
  },
};

export default MER296;
