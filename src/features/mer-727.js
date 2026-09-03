/**
 * MER-727 — Analysis & Low Level Design - Frontend - Blanks Observed in CST
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-727
 */
export const MER727 = {
  ticket: 'MER-727',
  summary: "Analysis & Low Level Design - Frontend - Blanks Observed in CST",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-727'] };
  },
};

export default MER727;
