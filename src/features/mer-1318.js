/**
 * MER-1318 — UX- Account summary redesign
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1318
 */
export const MER1318 = {
  ticket: 'MER-1318',
  summary: "UX- Account summary redesign",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1318'] };
  },
};

export default MER1318;
