/** Service entry point. Applies every shipped feature to the request context. */
import { features } from './registry.js';

export function handle(request) {
  return features.reduce((context, feature) => feature.apply(context), {
    request,
    applied: [],
  });
}

if (process.argv[1]?.endsWith('index.js')) {
  console.log(JSON.stringify(handle({ path: '/health' }), null, 2));
}
