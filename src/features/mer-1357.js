/**
 * MER-1357 — UX - customer pov enhancements
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1357
 */
export const MER1357 = {
  ticket: 'MER-1357',
  summary: "UX - customer pov enhancements",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1357'] };
  },
};

export default MER1357;
