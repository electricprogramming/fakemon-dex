import typeChart from './type-chart.js';

const allTypes = Object.keys(typeChart);

/**
 * Calculates type defense multipliers for a given set of types.
 * @param {string[]} types - Array of 1 or 2 Pokémon types.
 * @param {Object} extraMultipliers - Optional additional multipliers, e.g. { Fire: 2 } for fluffy
 * @returns {Object} - Object of type -> total multiplier.
 */
function calculateTypeDefenses(types, extraMultipliers = {}) {
  const defense = {};

  for (const attackType of allTypes) {
    let multiplier = 1;

    for (const defType of types) {
      const chart = typeChart[attackType];
      if (chart && chart[defType] !== undefined) {
        multiplier *= chart[defType];
      } else {
        multiplier *= 1;
      }
    }

    if (extraMultipliers[attackType]) {
      multiplier *= extraMultipliers[attackType];
    }

    defense[attackType] = multiplier;
  }

  return defense;
}
