/**
 * MER-355 — UI Issues | WAC Screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-355
 */
export const MER355 = {
  ticket: 'MER-355',
  summary: "UI Issues | WAC Screen",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-355'] };
  },
};

export default MER355;
