/**
 * MER-33 — Deletion of Product
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-33
 */
export const MER33 = {
  ticket: 'MER-33',
  summary: "Deletion of Product",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-33'] };
  },
};

export default MER33;
