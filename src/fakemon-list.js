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
  }
};
export default fakemonList