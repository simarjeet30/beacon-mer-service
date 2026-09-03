/**
 * MER-748 — Analysis & Low Level Design(POC for Expanding only dropdown list Data)
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-748
 */
export const MER748 = {
  ticket: 'MER-748',
  summary: "Analysis & Low Level Design(POC for Expanding only dropdown list Data)",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-748'] };
  },
};

export default MER748;
