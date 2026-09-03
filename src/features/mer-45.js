/**
 * MER-45 — Create Data Model
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-45
 */
export const MER45 = {
  ticket: 'MER-45',
  summary: "Create Data Model",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-45'] };
  },
};

export default MER45;
