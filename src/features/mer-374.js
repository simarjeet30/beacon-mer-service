/**
 * MER-374 — Incorrect button name for Add Contract Template pop up
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-374
 */
export const MER374 = {
  ticket: 'MER-374',
  summary: "Incorrect button name for Add Contract Template pop up",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-374'] };
  },
};

export default MER374;
