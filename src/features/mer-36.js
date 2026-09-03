/**
 * MER-36 — Rename Manufacturer - Sanofi/Others
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-36
 */
export const MER36 = {
  ticket: 'MER-36',
  summary: "Rename Manufacturer - Sanofi/Others",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-36'] };
  },
};

export default MER36;
