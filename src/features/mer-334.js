/**
 * MER-334 — Current Alignment Functionality- Populate with Data
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-334
 */
export const MER334 = {
  ticket: 'MER-334',
  summary: "Current Alignment Functionality- Populate with Data",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-334'] };
  },
};

export default MER334;
