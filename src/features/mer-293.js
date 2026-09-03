/**
 * MER-293 — Expand All and minimize all
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-293
 */
export const MER293 = {
  ticket: 'MER-293',
  summary: "Expand All and minimize all",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-293'] };
  },
};

export default MER293;
