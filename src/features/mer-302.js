/**
 * MER-302 — UpdateContractStructureTemplate
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-302
 */
export const MER302 = {
  ticket: 'MER-302',
  summary: "UpdateContractStructureTemplate",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-302'] };
  },
};

export default MER302;
