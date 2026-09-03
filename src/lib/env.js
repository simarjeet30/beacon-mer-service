/** The promotion lane. Order is meaningful — nothing skips an environment. */
export const LANE = ['dev', 'qa', 'staging', 'prod'];

export function next(env) {
  const i = LANE.indexOf(env);
  return i >= 0 && i < LANE.length - 1 ? LANE[i + 1] : null;
}
