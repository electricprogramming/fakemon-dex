const fakemonList = {
  bambao: {
    basic: {
      name: 'Bambao',
      number: '001',
      type: ['Grass'],
      species: 'Panda Cub',
      height: 0.5,
      weight: 7.6,
      ability: {
        normal: ['Overgrow'],
        hidden: 'Inner Focus'
      }
    },
    training: {
      ev_yield: { attack: 1 },
      catch_rate: 45,
      growth_rate: 'Medium Slow'
    },
    breeding: {
      egg_groups: ['Field', 'Human-Like'],
      gender: { male: 0.875, female: 0.125 },
      egg_cycles: 20
    },
    base_stats: {
      hp: 50,
      attack: 65,
      defense: 55,
      sp_atk: 40,
      sp_def: 45,
      speed: 55
    },
    evo: [
      'Bambao',
      'Level 16',
      'Bambash',
      'Level 36',
      'Panlin'
    ],
    dex_entry: 'Bambao are playful explorers often spotted climbing trees or traipsing through the forest. From a young age, they have an affinity for food and eat for a large portion of their waking hours.',
    name_origin: [
      {
        word: 'bamboo',
        meaning: 'a type of fast-growing grass with hard, hollow stems, commonly eaten by pandas'
      },
      {
        word: 'bǎo',
        meaning: 'Chinese for treasure'
      }
    ]
  },
  bambash: {

  },
  panlin: {

  },
  narwhali: {
    basic: {
      name: 'Narwhali',
      number: '007',
      type: ['Water'],
      species: 'Narwhal',
      height: 0.6,
      weight: 11.2,
      ability: {
        normal: ['Torrent'],
        hidden: 'Swift Swim'
      }
    },
    training: {
      ev_yield: { speed: 1 },
      catch_rate: 45,
      growth_rate: 'Medium Slow'
    },
    breeding: {
      egg_groups: ['Water-2'],
      gender: { male: 0.5, female: 0.5 },
      egg_cycles: 20
    },
    base_stats: {
      hp: 55,
      attack: 45,
      defense: 50,
      sp_atk: 45,
      sp_def: 55,
      speed: 60
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
      weight: 28.5,
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
      weight: 92.3,
      ability: {
        normal: ['Torrent'],
        hidden: 'Swift Swim'
      }
    },
    training: {
      ev_yield: { sp_atk: 2, speed: 1 },
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