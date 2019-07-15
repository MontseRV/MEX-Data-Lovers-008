const pokemon = require('../src/data.js');

const pokeMock= [
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.71 m",
    "weight": "6.9 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.69,
    "avg_spawns": 69,
    "spawn_time": "20:00",
    "multipliers": [1.58],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]
  },{
    "id": 7,
    "num": "007",
    "name": "Squirtle",
    "type": [
      "Water"
    ],
    "height": "0.51 m",
    "weight": "9.0 kg",
    "candy": "Squirtle Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.58,
    "avg_spawns": 58,
    "spawn_time": "04:25",
    "multipliers": [2.1],
    "weaknesses": [
      "Electric",
      "Grass"
    ]
  },{
    "id": 8,
    "num": "008",
    "name": "Wartortle",
    "type": [
      "Water"
    ],
    "height": "0.99 m",
    "weight": "22.5 kg",
    "candy": "Squirtle Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.034,
    "avg_spawns": 3.4,
    "spawn_time": "07:02",
    "multipliers": [1.4],
    "weaknesses": [
      "Electric",
      "Grass"
    ]
  },
];

describe('pokemon', () => {
  it('is an object', () => {
    expect(typeof pokemon).toBe('object');
  });
});

describe('pokemon.filterName', () => {
  it('is a function', () => {
    expect(typeof window.pokemon.filterName).toBe('function');
  });

  it('returns `debería retornar un arreglo`', () => {
    expect(window.pokemon.filterName([]) instanceof Array).toBe(true);
  });

  it('returns `debería retornar un arreglo con el objeto del nombre ingresado`', () => {
    expect(window.pokemon.filterName(pokeMock,"squirtle")).toEqual([pokeMock[1]]);
  });
});

describe('pokemon.filterType', () => {
  it('is a function', () => {
    expect(typeof window.pokemon.filterType).toBe('function');
  });

  it('returns `debería retornar un arreglo`', () => {
    expect(window.pokemon.filterType([]) instanceof Array).toBe(true);
  });

  it('returns `debería de retornar un arreglo con el tipo ingresado`', () => {
    expect(window.pokemon.filterType(pokeMock,"Water")).toEqual([pokeMock[1,2]]);
  });
});

describe('pokemon.orderAzza', () => {
  it('is a function', () => {
    expect(typeof window.pokemon.orderAzza).toBe('function');
  });

  it('returns `debería retornar un arreglo`', () => {
    expect(window.pokemon.orderAzza([]) instanceof Array).toBe(true);
  });

  it('returns `debería de retornar un arreglo con el tipo ingresado`', () => {
    expect(window.pokemon.orderAzza(pokeMock, "Z-A")).toEqual([pokeMock[2,1,0]]);
  });
});

