const map = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  sp_atk: 'Sp. Atk',
  sp_def: 'Sp. Def',
  speed: 'Speed'
}
export function convertStatNameForBaseStats(statKey) {
  return map[statKey].toUpperCase();
}
export function convertStatNameForEvYield(statKey) {
  return map[statKey];
}