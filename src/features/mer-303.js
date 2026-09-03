/**
 * MER-303 — AddContractStructureTemplate
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-303
 */
export const MER303 = {
  ticket: 'MER-303',
  summary: "AddContractStructureTemplate",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-303'] };
  },
};

export default MER303;
