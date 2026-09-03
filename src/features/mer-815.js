/**
 * MER-815 — Deployment (Dev)-Global Inputs - Contract Structures - Save as Template, duplicates the template.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-815
 */
export const MER815 = {
  ticket: 'MER-815',
  summary: "Deployment (Dev)-Global Inputs - Contract Structures - Save as Template, duplicates the template.",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-815'] };
  },
};

export default MER815;
