/**
 * MER-382 — Manually Create Accounts and Volume
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-382
 */
export const MER382 = {
  ticket: 'MER-382',
  summary: "Manually Create Accounts and Volume",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-382'] };
  },
};

export default MER382;
