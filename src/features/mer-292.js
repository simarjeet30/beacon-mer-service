/**
 * MER-292 — Accordian each div
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-292
 */
export const MER292 = {
  ticket: 'MER-292',
  summary: "Accordian each div",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-292'] };
  },
};

export default MER292;
