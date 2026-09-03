/**
 * MER-1317 — VAPT Library Update ( AMI Library Updates)
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1317
 */
export const MER1317 = {
  ticket: 'MER-1317',
  summary: "VAPT Library Update ( AMI Library Updates)",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1317'] };
  },
};

export default MER1317;
