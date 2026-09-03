/**
 * MER-753 — Analysis & Low Level Design - Product Name in Customer POV
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-753
 */
export const MER753 = {
  ticket: 'MER-753',
  summary: "Analysis & Low Level Design - Product Name in Customer POV",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-753'] };
  },
};

export default MER753;
