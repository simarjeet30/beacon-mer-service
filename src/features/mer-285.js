/**
 * MER-285 — Add Contract Template
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-285
 */
export const MER285 = {
  ticket: 'MER-285',
  summary: "Add Contract Template",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-285'] };
  },
};

export default MER285;
