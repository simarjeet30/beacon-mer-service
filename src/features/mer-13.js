/**
 * MER-13 — UI : Add the tiered market share template in select contract structure template
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-13
 */
export const MER13 = {
  ticket: 'MER-13',
  summary: "UI : Add the tiered market share template in select contract structure template",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-13'] };
  },
};

export default MER13;
