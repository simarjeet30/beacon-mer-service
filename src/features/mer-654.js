/**
 * MER-654 — Analysis & Low Level Design - Unable to search by contract structure template
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-654
 */
export const MER654 = {
  ticket: 'MER-654',
  summary: "Analysis & Low Level Design - Unable to search by contract structure template",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-654'] };
  },
};

export default MER654;
