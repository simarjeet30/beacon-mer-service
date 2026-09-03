/**
 * Feature registry.
 *
 * Modules under `src/features/` are added one per Jira ticket, so this list is the shipped scope
 * of whichever environment branch you are reading.
 */
export const features = [];

export function register(feature) {
  features.push(feature);
  return features;
}
