const fakemonList = {
  narwhali: {
    basic: {
      name: 'Narwhali',
      number: '007',
      type: ['Water'],
      species: 'Narwhal',
      height: 0.6,
      weight: 6.0,
      ability: {
        normal: ['Torrent'],
        hidden: 'Swift Swim'
      }
    },
    training: {
      ev_yield: { hp: 1 },
      catch_rate: 45,
      growth_rate: 'Medium Slow'
    },
    breeding: {
      egg_groups: ['Water-2'],
      gender: { male: 0.5, female: 0.5 },
      egg_cycles: 20
    },
    base_stats: {
      hp: 70,
      attack: 45,
      defense: 50,
      sp_atk: 45,
      sp_def: 55,
      speed: 45
    },
    evo: [
      'Narwhali',
      'Level 16',
      'Olaena',
      'Level 36',
      'Narquarion'
    ],
    dex_entry: `Narwhali is a playful, curious Pokémon often spotted spinning joyfully through cold coastal waters. Its small tusk is highly sensitive to the environment, allowing it to detect underwater currents and schools of fish.`,
    name_origin: [
      {
        word: 'narwhal',
        meaning: 'species of whale known for its tusk'
      }
    ]
  },
  olaena: {
    basic: {
      name: 'Olaena',
      number: '008',
      type: ['Water'],
      species: 'Narwhal',
      height: 1.2,
      weight: 13.5,
      ability: {
        normal: ['Torrent'],
        hidden: 'Swift Swim'
      }
    },
    training: {
      ev_yield: { sp_atk: 1, speed: 1 },
      catch_rate: 45,
      growth_rate: 'Medium Slow'
    },
    breeding: {
      egg_groups: ['Water-2'],
      gender: { male: 0.5, female: 0.5 },
      egg_cycles: 20
    },
    base_stats: {
      hp: 75,
      attack: 65,
      defense: 55,
      sp_atk: 80,
      sp_def: 60,
      speed: 80
    },
    evo: [
      'Narwhali',
      'Level 16',
      'Olaena',
      'Level 36',
      'Narquarion'
    ],
    dex_entry: `Olaena glides through arctic waters with elegance and grace. Its tusk is slowly maturing into a spiraled horn, now capable of sensing even the faintest vibrations in the sea. Olaena communicate with each other using complex series of clicks and whistles.`,
    name_origin: [
      {
        word: 'ola',
        meaning: 'Spanish word for wave'
      },
      {
        word: 'ballena',
        meaning: 'Spanish word for whale'
      }
    ]
  },
  narquarion: {
    basic: {
      name: 'Narquarion',
      number: '009',
      type: ['Water'],
      species: 'Narwhal',
      height: 2,
      weight: 45.6,
      ability: {
        normal: ['Torrent'],
        hidden: 'Swift Swim'
      }
    },
    training: {
      ev_yield: { sp_atk: 1, speed: 1 },
      catch_rate: 45,
      growth_rate: 'Medium Slow'
    },
    breeding: {
      egg_groups: ['Water-2'],
      gender: { male: 0.5, female: 0.5 },
      egg_cycles: 20
    },
    base_stats: {
      hp: 90,
      attack: 95,
      defense: 75,
      sp_atk: 100,
      sp_def: 80,
      speed: 95
    },
    evo: [
      'Narwhali',
      'Level 16',
      'Olaena',
      'Level 36',
      'Narquarion'
    ],
    dex_entry: `Narquarion's long, sleek tusk is now fully developed, used both to detect changes in the environment and as a sharp weapon in battle. Highly intelligent and social, Narquarion live in large pods with Narwhali and Olaena.`,
    name_origin: [
      {
        word: 'narwhal',
        meaning: 'species of whale known for its tusk'
      },
      {
        word: 'aqua',
        meaning: 'latin for water'
      }
    ]
  }
};
export default fakemonList;