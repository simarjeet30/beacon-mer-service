/**
 * MER-26 — Load prod data on stage
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-26
 */
export const MER26 = {
  ticket: 'MER-26',
  summary: "Load prod data on stage",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-26'] };
  },
};

export default MER26;
