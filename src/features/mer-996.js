/**
 * MER-996 — Customer POV- Potential MS% updated and saved but on copying old values are getting copied.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-996
 */
export const MER996 = {
  ticket: 'MER-996',
  summary: "Customer POV- Potential MS% updated and saved but on copying old values are getting copied.",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-996'] };
  },
};

export default MER996;
