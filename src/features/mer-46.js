/**
 * MER-46 — Add Market Type Field
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-46
 */
export const MER46 = {
  ticket: 'MER-46',
  summary: "Add Market Type Field",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-46'] };
  },
};

export default MER46;
