/**
 * MER-780 — Unit Testing- Filtering by Product Name in Customer POV
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-780
 */
export const MER780 = {
  ticket: 'MER-780',
  summary: "Unit Testing- Filtering by Product Name in Customer POV",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-780'] };
  },
};

export default MER780;
