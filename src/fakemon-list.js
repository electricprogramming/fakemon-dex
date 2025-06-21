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
      attack: 40,
      defense: 50,
      sp_atk: 50,
      sp_def: 55,
      speed: 45
    },
    evo: [
      'Narwhali',
      'Level 16',
      'Olaena',
      'Level 36',
      'Narquarius'
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
      attack: 55,
      defense: 50,
      sp_atk: 80,
      sp_def: 60,
      speed: 80
    },
    evo: [
      'Narwhali',
      'Level 16',
      'Olaena',
      'Level 36',
      'Narquarius'
    ],
    dex_entry: `Olaena glides through arctic waters with elegance and grace. Its tusk has fully developed into a spiraled horn capable of sensing even the faintest vibrations in the sea. Olaena communicate with each other using complex series of clicks and whistles.`,
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
  }
};
export default fakemonList