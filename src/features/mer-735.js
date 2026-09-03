/**
 * MER-735 — Analysis & Low Level Design - Account Name box needs to be expended
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-735
 */
export const MER735 = {
  ticket: 'MER-735',
  summary: "Analysis & Low Level Design - Account Name box needs to be expended",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-735'] };
  },
};

export default MER735;
