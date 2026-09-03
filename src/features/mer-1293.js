/**
 * MER-1293 — UAT | Global Inputs - Contract Structures/Account Summary
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1293
 */
export const MER1293 = {
  ticket: 'MER-1293',
  summary: "UAT | Global Inputs - Contract Structures/Account Summary",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1293'] };
  },
};

export default MER1293;
