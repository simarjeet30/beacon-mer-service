/**
 * MER-338 — Crud Operation and copy Scenario Functionality
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-338
 */
export const MER338 = {
  ticket: 'MER-338',
  summary: "Crud Operation and copy Scenario Functionality",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-338'] };
  },
};

export default MER338;
