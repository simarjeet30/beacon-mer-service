/**
 * MER-294 — Change History Modal Popup
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-294
 */
export const MER294 = {
  ticket: 'MER-294',
  summary: "Change History Modal Popup",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-294'] };
  },
};

export default MER294;
