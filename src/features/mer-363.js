/**
 * MER-363 — Position of Copy and history button is not static
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-363
 */
export const MER363 = {
  ticket: 'MER-363',
  summary: "Position of Copy and history button is not static",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-363'] };
  },
};

export default MER363;
