/**
 * MER-300 — GetManufacturer
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-300
 */
export const MER300 = {
  ticket: 'MER-300',
  summary: "GetManufacturer",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-300'] };
  },
};

export default MER300;
