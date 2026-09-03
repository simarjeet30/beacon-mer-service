/**
 * MER-810 — Unit Testing-Need Product Group & Specialty in Export
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-810
 */
export const MER810 = {
  ticket: 'MER-810',
  summary: "Unit Testing-Need Product Group & Specialty in Export",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-810'] };
  },
};

export default MER810;
