/**
 * MER-1388 — Negative Discount validation  Enter in Customer POV
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1388
 */
export const MER1388 = {
  ticket: 'MER-1388',
  summary: "Negative Discount validation  Enter in Customer POV",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1388'] };
  },
};

export default MER1388;
