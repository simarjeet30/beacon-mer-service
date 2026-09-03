/**
 * MER-1296 — Existing bug- Check Date Format Throughout, EST Expected
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1296
 */
export const MER1296 = {
  ticket: 'MER-1296',
  summary: "Existing bug- Check Date Format Throughout, EST Expected",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1296'] };
  },
};

export default MER1296;
