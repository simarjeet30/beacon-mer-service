/**
 * MER-41 — PPD Overview deepdive Changes
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-41
 */
export const MER41 = {
  ticket: 'MER-41',
  summary: "PPD Overview deepdive Changes",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-41'] };
  },
};

export default MER41;
