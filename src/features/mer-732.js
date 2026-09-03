/**
 * MER-732 — Analysis & Low Level Design - What s on contract comparsion
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-732
 */
export const MER732 = {
  ticket: 'MER-732',
  summary: "Analysis & Low Level Design - What s on contract comparsion",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-732'] };
  },
};

export default MER732;
