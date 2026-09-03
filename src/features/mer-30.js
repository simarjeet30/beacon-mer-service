/**
 * MER-30 — The system must allow the user to select one alignment as a "Deal" and another as the "No Deal" and allow the user to compare the delta of the following metrics for each manufacturer
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-30
 */
export const MER30 = {
  ticket: 'MER-30',
  summary: "The system must allow the user to select one alignment as a \"Deal\" and another as the \"No Deal\" and allow the user to compare the delta of the following metrics for each manufacturer",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-30'] };
  },
};

export default MER30;
