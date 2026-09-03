/**
 * MER-1291 — Customer POV API not being called after returning from the edit scenario screen.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1291
 */
export const MER1291 = {
  ticket: 'MER-1291',
  summary: "Customer POV API not being called after returning from the edit scenario screen.",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1291'] };
  },
};

export default MER1291;
