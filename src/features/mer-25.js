/**
 * MER-25 — DB : Adding new market into db and insert values into db table
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-25
 */
export const MER25 = {
  ticket: 'MER-25',
  summary: "DB : Adding new market into db and insert values into db table",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-25'] };
  },
};

export default MER25;
