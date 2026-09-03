/**
 * MER-739 — Analysis & Low Level Design - Contract Structures - Save as Template
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-739
 */
export const MER739 = {
  ticket: 'MER-739',
  summary: "Analysis & Low Level Design - Contract Structures - Save as Template",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-739'] };
  },
};

export default MER739;
