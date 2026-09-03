/**
 * MER-378 — UI Issues | Contract Structures
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-378
 */
export const MER378 = {
  ticket: 'MER-378',
  summary: "UI Issues | Contract Structures",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-378'] };
  },
};

export default MER378;
