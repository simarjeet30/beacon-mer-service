/**
 * MER-421 — WAC Tab | API call doesn't happen when user closes the History modal once
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-421
 */
export const MER421 = {
  ticket: 'MER-421',
  summary: "WAC Tab | API call doesn't happen when user closes the History modal once",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-421'] };
  },
};

export default MER421;
