/**
 * MER-1259 — Existing Bug -Store all the data related to scenario in interim table for alignments and compitator_data_config
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1259
 */
export const MER1259 = {
  ticket: 'MER-1259',
  summary: "Existing Bug -Store all the data related to scenario in interim table for alignments and compitator_data_config",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1259'] };
  },
};

export default MER1259;
