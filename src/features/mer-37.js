/**
 * MER-37 — Create UI component for selecting reference contract
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-37
 */
export const MER37 = {
  ticket: 'MER-37',
  summary: "Create UI component for selecting reference contract",
  type: "Sub-task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-37'] };
  },
};

export default MER37;
