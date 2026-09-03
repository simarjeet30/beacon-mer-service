/**
 * MER-237 — Reusable Components || Editable Grid
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-237
 */
export const MER237 = {
  ticket: 'MER-237',
  summary: "Reusable Components || Editable Grid",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-237'] };
  },
};

export default MER237;
