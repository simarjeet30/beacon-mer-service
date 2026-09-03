/**
 * MER-1295 — Customer POV-3
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1295
 */
export const MER1295 = {
  ticket: 'MER-1295',
  summary: "Customer POV-3",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1295'] };
  },
};

export default MER1295;
