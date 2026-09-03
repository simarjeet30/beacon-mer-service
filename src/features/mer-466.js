/**
 * MER-466 — Market column not sorted Alphabetically
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-466
 */
export const MER466 = {
  ticket: 'MER-466',
  summary: "Market column not sorted Alphabetically",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-466'] };
  },
};

export default MER466;
