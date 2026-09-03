/**
 * MER-779 — UI Build- Filtering by Product Name in Customer POV
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-779
 */
export const MER779 = {
  ticket: 'MER-779',
  summary: "UI Build- Filtering by Product Name in Customer POV",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-779'] };
  },
};

export default MER779;
