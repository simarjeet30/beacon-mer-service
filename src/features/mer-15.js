/**
 * MER-15 — DB : Need to add one more column to db table contract_structure_template -> seletedMethod type string
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-15
 */
export const MER15 = {
  ticket: 'MER-15',
  summary: "DB : Need to add one more column to db table contract_structure_template -> seletedMethod type string",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-15'] };
  },
};

export default MER15;
