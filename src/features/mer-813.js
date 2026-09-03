/**
 * MER-813 — API Build-Global Inputs - Contract Structures - Save as Template, duplicates the template.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-813
 */
export const MER813 = {
  ticket: 'MER-813',
  summary: "API Build-Global Inputs - Contract Structures - Save as Template, duplicates the template.",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-813'] };
  },
};

export default MER813;
