/**
 * MER-376 — Product placeholder doesn't get updated when user changes Manufacturer
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-376
 */
export const MER376 = {
  ticket: 'MER-376',
  summary: "Product placeholder doesn't get updated when user changes Manufacturer",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-376'] };
  },
};

export default MER376;
