/**
 * MER-814 — Unit Testing-Global Inputs - Contract Structures - Save as Template, duplicates the template.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-814
 */
export const MER814 = {
  ticket: 'MER-814',
  summary: "Unit Testing-Global Inputs - Contract Structures - Save as Template, duplicates the template.",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-814'] };
  },
};

export default MER814;
