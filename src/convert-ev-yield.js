import { convertStatNameForEvYield } from './convert-stat-name.js';
export default function evYieldAsString(obj) {
  return Object.entries(obj)
    .map(([key, val]) => `${val} ${convertStatNameForEvYield(key)}`)
    .join(', ');
}