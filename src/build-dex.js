import fakemonList from './fakemon-list.js';
import { weight, height } from './conversions.js';
import calculateTypeDefenses from './type-defenses.js';
import { convertStatNameForBaseStats, convertStatNameForEvYield } from './convert-stat-name.js';

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
document.getElementById('sprite').addEventListener('contextmenu', function(e) {
  e.preventDefault();
  this.shiny = !this.shiny;
  this.src = `/assets/${mon.basic.name}${this.shiny ? '-shiny' : ''}.png`;
  this.alt = `${mon.basic.name} Sprite${this.shiny ? ' (shiny)' : ''}`
});

// Types badges with colors
const typesDiv = document.getElementById('types');
mon.basic.type.forEach(t => {
  const span = document.createElement('span');
  span.className = 'type';
  span.textContent = t;
  // lower case for color key
  span.classList.add(t);
  typesDiv.appendChild(span);
});

// Basic Info
document.getElementById('species').textContent = `${mon.basic.species} Pokémon`;
document.getElementById('height').textContent = `${mon.basic.height} m (${height(mon.basic.height)})`;
document.getElementById('weight').textContent = `${mon.basic.weight} kg (${weight(mon.basic.weight)})`;
document.getElementById('ability-1').textContent = mon.basic.ability.normal[0];
document.getElementById('ability-2').textContent = mon.basic.ability.normal[1] || '--';
document.getElementById('hidden-ability').textContent = mon.basic.ability.hidden || '--';

const typeDefenses = calculateTypeDefenses(mon.basic.type);
Object.entries(typeDefenses).forEach(([type, effectiveness]) => {
  document.querySelector(`.type-box.${type}`).querySelector('.multiplier').textContent = effectiveness;
})

// Training
document.getElementById('ev-yield').textContent =
  Object.entries(mon.training.ev_yield)
  .map(([key, val]) => `${val} ${convertStatNameForEvYield(key)}`)
  .join(', ');
document.getElementById('catch-rate').textContent = `${mon.training.catch_rate} (${((mon.training.catch_rate / 255) * 1/3 * 100).toFixed(1)}% with Pokéball, full HP)`;
document.getElementById('growth-rate').textContent = mon.training.growth_rate;


// Breeding
document.getElementById('egg-groups').textContent = mon.breeding.egg_groups.join(', ');
const gender = mon.breeding.gender;
document.getElementById('gender-ratio').textContent = gender.genderless ? 'genderless' :
  `♂ ${(gender.male * 100)}% / ♀ ${(gender.female * 100)}%`;
document.getElementById('egg-cycles').textContent = mon.breeding.egg_cycles;

// Base stats with bars
const statsList = document.getElementById('stats-list').querySelector('tbody');
const maxStat = 255; // for bar scaling

let total = 0;

for (const [stat, val] of Object.entries(mon.base_stats)) {
  total += val; // accumulate total

  const container = document.createElement('tr');
  container.className = 'stat-container';
  
  const label = document.createElement('td');
  label.className = 'stat-label';
  label.textContent = convertStatNameForBaseStats(stat);
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
    const isCurrent = (item === mon.basic.name);
    const stage = document.createElement(isCurrent ? 'div' : 'a');
    stage.className = 'evo-stage';
    stage.textContent = item;
    if (!isCurrent) stage.href = `/dex/${item.toLowerCase()}`;
    evoList.appendChild(stage);
    if (isCurrent) stage.style.fontWeight = 'bold';
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