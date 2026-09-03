/**
 * MER-724 — High Level Requirements - Need Product Group & Specialty in Export
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-724
 */
export const MER724 = {
  ticket: 'MER-724',
  summary: "High Level Requirements - Need Product Group & Specialty in Export",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-724'] };
  },
};

export default MER724;
