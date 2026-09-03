/**
 * MER-361 — Current Alignment | Incorrect API Response
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-361
 */
export const MER361 = {
  ticket: 'MER-361',
  summary: "Current Alignment | Incorrect API Response",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-361'] };
  },
};

export default MER361;
