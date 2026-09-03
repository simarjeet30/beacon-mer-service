/**
 * MER-347 — Future WAC column should be a textbox
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-347
 */
export const MER347 = {
  ticket: 'MER-347',
  summary: "Future WAC column should be a textbox",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-347'] };
  },
};

export default MER347;
