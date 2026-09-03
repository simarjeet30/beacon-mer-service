/**
 * MER-349 — UX/UI Required Changes- Feedbacks(Internal demo - 09/05/2024)
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-349
 */
export const MER349 = {
  ticket: 'MER-349',
  summary: "UX/UI Required Changes- Feedbacks(Internal demo - 09/05/2024)",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-349'] };
  },
};

export default MER349;
