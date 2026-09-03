/**
 * MER-7 — Understanding Requirement and analysis of code components
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-7
 */
export const MER7 = {
  ticket: 'MER-7',
  summary: "Understanding Requirement and analysis of code components",
  type: "Sub-task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-7'] };
  },
};

export default MER7;
