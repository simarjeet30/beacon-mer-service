/**
 * MER-809 — API Build-Need Product Group & Specialty in Export
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-809
 */
export const MER809 = {
  ticket: 'MER-809',
  summary: "API Build-Need Product Group & Specialty in Export",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-809'] };
  },
};

export default MER809;
