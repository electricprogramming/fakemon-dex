import typeColors from './type-colors.js';
import fakemonList from './fakemon-list.js';
import { weight, height } from './conversions.js';
const fakemonName = window.location.pathname.split('/dex/')[1];
const mon = fakemonList[fakemonName];

if (!mon) {
  document.body.innerHTML = `<h1>Fakemon Not Found</h1><p>No data found for "${fakemonName}".</p>`;
  document.body.style.display = 'block';
  throw new Error(`Fakemon "${fakemonName}" not found.`);
}

console.log(`Bulding dex for ${fakemonName}`);

document.title = `Fakemon Pokédex - ${fakemonName}`;
// Populate header info
document.getElementById('name').textContent = mon.basic.name;
document.getElementById('number').textContent = `#${mon.basic.number}`;
document.getElementById('sprite').src = `/assets/${mon.basic.name}.png`;
document.getElementById('sprite').alt = `${mon.basic.name} Sprite`;

// Types badges with colors
const typesDiv = document.getElementById('types');
mon.basic.type.forEach(t => {
  const span = document.createElement('span');
  span.className = 'type';
  span.textContent = t;
  // lower case for color key
  const key = t.toLowerCase();
  span.style.backgroundColor = typeColors[key] || '#777';
  typesDiv.appendChild(span);
});

// Basic Info
document.getElementById('species').textContent = mon.basic.species;
document.getElementById('height').textContent = `${mon.basic.height} m (${height(mon.basic.height)})`;
document.getElementById('weight').textContent = `${mon.basic.weight} kg (${weight(mon.basic.weight)})`;
document.getElementById('ability-1').textContent = mon.basic.ability.normal[0];
document.getElementById('ability-2').textContent = mon.basic.ability.normal[1] || '--';
document.getElementById('hidden-ability').textContent = mon.basic.ability.hidden || '--';

// Breeding
document.getElementById('egg-groups').textContent = mon.breeding.egg_groups.join(', ');
const gender = mon.breeding.gender;
document.getElementById('gender-ratio').textContent = gender.genderless ? 'genderless' :
  `♂ ${(gender.male * 100).toFixed(0)}% / ♀ ${(gender.female * 100).toFixed(0)}%`;
document.getElementById('egg-cycles').textContent = mon.breeding.egg_cycles;

// Base stats with bars
const statsList = document.getElementById('stats-list').querySelector('tbody');
const maxStat = 255; // for bar scaling

let total = 0;

for (const [stat, val] of Object.entries(mon.base_stats)) {
  total += val; // accumulate total
  const statName = stat.toUpperCase().replace('_', ' ');

  const container = document.createElement('tr');
  container.className = 'stat-container';
  
  const label = document.createElement('td');
  label.className = 'stat-label';
  label.textContent = statName;
  container.appendChild(label);

  const value = document.createElement('td');
  value.className = 'stat-value';
  value.textContent = '  ' + val;
  container.appendChild(value);
  
  // Bar
  const barContainer = document.createElement('td');
  barContainer.className = 'bar-container';
  const bar = document.createElement('div');
  bar.className = 'stat-bar';
  const fill = document.createElement('div');
  fill.className = 'stat-fill';
  fill.style.width = (val / maxStat * 100) + '%';

  barContainer.appendChild(bar);
  bar.appendChild(fill);

  container.appendChild(barContainer);
  statsList.appendChild(container);
}
const totalContainer = document.createElement('tr');
const totalLabel = document.createElement('td');
totalLabel.className = 'stat-label';
totalLabel.textContent = 'TOTAL';
totalContainer.appendChild(totalLabel);
const totalValue = document.createElement('td');
totalValue.className = 'stat-value';
totalValue.textContent = '  ' + total;
totalContainer.appendChild(totalValue);
statsList.appendChild(totalContainer);


// Evolution chain
const evoList = document.getElementById('evo-list');
for (let i = 0; i < mon.evo.length; i++) {
  const item = mon.evo[i];
  if (item.toLowerCase().startsWith('level') || item.toLowerCase().startsWith('use')) {
    // arrow or condition
    const arrow = document.createElement('div');
    arrow.className = 'evo-arrow';
    arrow.textContent = '→ ' + item;
    evoList.appendChild(arrow);
  } else {
    // stage name
    const stage = document.createElement('div');
    stage.className = 'evo-stage';
    stage.textContent = item;
    evoList.appendChild(stage);
    if (item === mon.basic.name) stage.style.fontWeight = 'bold';
  }
}

// Dex entry
document.getElementById('dex-text').textContent = mon.dex_entry;

// Name origins
const originList = document.getElementById('origin-list');
mon.name_origin.forEach(origin => {
  const div = document.createElement('div');
  div.textContent = `${origin.word} — ${origin.meaning}`;
  originList.appendChild(div);
});
document.body.style.display = 'block';