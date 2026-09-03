/**
 * MER-1034 — Existing Bug - No data in right blue table after selecting different option in potential drpodown- Custom POV
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1034
 */
export const MER1034 = {
  ticket: 'MER-1034',
  summary: "Existing Bug - No data in right blue table after selecting different option in potential drpodown- Custom POV",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1034'] };
  },
};

export default MER1034;
