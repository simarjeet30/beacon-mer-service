/**
 * MER-1394 — Verify Reset Scenario Data
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1394
 */
export const MER1394 = {
  ticket: 'MER-1394',
  summary: "Verify Reset Scenario Data",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1394'] };
  },
};

export default MER1394;
