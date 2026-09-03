/**
 * MER-375 — Actual values in the and discount text box of Create product group modal
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-375
 */
export const MER375 = {
  ticket: 'MER-375',
  summary: "Actual values in the and discount text box of Create product group modal",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-375'] };
  },
};

export default MER375;
