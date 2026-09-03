/**
 * MER-731 — Analysis & Low Level Design - Backend - Blanks observed in CST
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-731
 */
export const MER731 = {
  ticket: 'MER-731',
  summary: "Analysis & Low Level Design - Backend - Blanks observed in CST",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-731'] };
  },
};

export default MER731;
