/**
 * MER-351 — Default WAC dropdown missing from GI-WAC screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-351
 */
export const MER351 = {
  ticket: 'MER-351',
  summary: "Default WAC dropdown missing from GI-WAC screen",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-351'] };
  },
};

export default MER351;
