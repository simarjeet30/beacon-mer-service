/**
 * MER-1437 — Total Row Data Is Not Included When Copying and Pasting Data from Contract Comparison
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1437
 */
export const MER1437 = {
  ticket: 'MER-1437',
  summary: "Total Row Data Is Not Included When Copying and Pasting Data from Contract Comparison",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1437'] };
  },
};

export default MER1437;
