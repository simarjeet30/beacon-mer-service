/**
 * MER-835 — Filtering by Product Name in Customer POV -Test Case Creation-Test Case Creation
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-835
 */
export const MER835 = {
  ticket: 'MER-835',
  summary: "Filtering by Product Name in Customer POV -Test Case Creation-Test Case Creation",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-835'] };
  },
};

export default MER835;
