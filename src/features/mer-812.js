/**
 * MER-812 — UI Build-Global Inputs - Contract Structures - Save as Template, duplicates the template.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-812
 */
export const MER812 = {
  ticket: 'MER-812',
  summary: "UI Build-Global Inputs - Contract Structures - Save as Template, duplicates the template.",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-812'] };
  },
};

export default MER812;
