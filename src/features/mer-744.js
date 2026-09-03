/**
 * MER-744 — Analysis & Low Level Design(POC for Copying filtered Data) - Missing in Customer POV
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-744
 */
export const MER744 = {
  ticket: 'MER-744',
  summary: "Analysis & Low Level Design(POC for Copying filtered Data) - Missing in Customer POV",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-744'] };
  },
};

export default MER744;
