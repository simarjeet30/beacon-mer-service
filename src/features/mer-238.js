/**
 * MER-238 — Landing Page Layout
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-238
 */
export const MER238 = {
  ticket: 'MER-238',
  summary: "Landing Page Layout",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-238'] };
  },
};

export default MER238;
