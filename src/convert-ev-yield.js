import { convertStatNameForEvYield } from './convert-stat-name.js';
const order = ['hp', 'attack', 'defense', 'sp_atk', 'sp_def', 'speed'];
export default function evYieldAsString(obj) {
  return Object.entries(obj)
    .sort((a, b) => (b[1] - a[1]) || (order.indexOf(a[0]) - order.indexOf(b[0])))
    .map(([key, val]) => `${val} ${convertStatNameForEvYield(key)}`)
    .join(', ');
}