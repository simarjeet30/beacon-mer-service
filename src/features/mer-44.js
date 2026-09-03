/**
 * MER-44 — RPF Outputs
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-44
 */
export const MER44 = {
  ticket: 'MER-44',
  summary: "RPF Outputs",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-44'] };
  },
};

export default MER44;
