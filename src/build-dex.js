import typeColors from './type-colors.js';
import fakemonList from './fakemon-list.js';
const fakemonName = window.location.pathname.split('/dex/')[1];
const mon = fakemonList[fakemonName];
console.log(`Bulding dex for ${fakemonName}`);

document.title = `Fakemon Pokédex - ${fakemonName}`
// Populate header info
document.getElementById('name').textContent = mon.basic.name;
document.getElementById('number').textContent = `#${mon.basic.number}`;
document.getElementById('sprite').src = `/assets/${mon.basic.name}.png`;

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
document.getElementById('height').textContent = mon.basic.height + ' m';
document.getElementById('weight').textContent = mon.basic.weight + ' kg';
document.getElementById('ability').textContent = mon.basic.ability.normal.join(', ');
document.getElementById('hidden-ability').textContent = mon.basic.ability.hidden;

// Breeding
document.getElementById('egg-groups').textContent = mon.breeding.egg_groups.join(', ');
const gender = mon.breeding.gender;
document.getElementById('gender-ratio').textContent = 
  `♂ ${(gender.male * 100).toFixed(0)}% / ♀ ${(gender.female * 100).toFixed(0)}%`;
document.getElementById('egg-cycles').textContent = mon.breeding.egg_cycles;

// Base stats with bars
const statsList = document.getElementById('stats-list');
const maxStat = 255; // for bar scaling

let total = 0;

for (const [stat, val] of Object.entries(mon.base_stats)) {
  total += val; // accumulate total
  const statName = stat.toUpperCase().replace('_', ' ');

  const container = document.createElement('div');
  const top = document.createElement('div');
  container.appendChild(top);

  const label = document.createElement('p');
  label.textContent = statName;
  top.append(label, document.createTextNode(val + ' '));
  
  // Bar
  const bar = document.createElement('div');
  bar.className = 'stat-bar';
  const fill = document.createElement('div');
  fill.className = 'stat-fill';
  fill.style.width = (val / maxStat * 100) + '%';

  bar.appendChild(fill);

  container.appendChild(bar);
  statsList.appendChild(container);
}
const totalDt = document.createElement('dt');
totalDt.textContent = 'TOTAL';
const totalDd = document.createElement('dd');
totalDd.textContent = total;
statsList.appendChild(totalDt);
statsList.appendChild(totalDd);


// Evolution chain
const evoList = document.getElementById('evo-list');
for(let i=0; i < mon.evo.length; i++){
  const item = mon.evo[i];
  if(item.toLowerCase().startsWith('level') || item.toLowerCase().startsWith('use')) {
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