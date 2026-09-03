/**
 * MER-1149 — Existing bug-Current Alignment Update- Data is reflected for old base alignment with column updated as for Current base alignment.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1149
 */
export const MER1149 = {
  ticket: 'MER-1149',
  summary: "Existing bug-Current Alignment Update- Data is reflected for old base alignment with column updated as for Current base alignment.",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1149'] };
  },
};

export default MER1149;
