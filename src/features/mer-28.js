/**
 * MER-28 — Remove VBC contract type from create scenario page UI
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-28
 */
export const MER28 = {
  ticket: 'MER-28',
  summary: "Remove VBC contract type from create scenario page UI",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-28'] };
  },
};

export default MER28;
