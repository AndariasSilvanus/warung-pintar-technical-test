export const pokemonListMockResponse = {
  count: 964,
  next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
    { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
    { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
    { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
    { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/" },
    { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/" },
    { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/" },
    { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/" },
    { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/" },
    { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/" },
    { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/" },
    { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/" },
    { name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/" },
  ],
};

export const allPokemonTypesMockResponse = {
  count: 20,
  next: null,
  previous: null,
  results: [
    { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
    { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
    { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
    { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
    { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
    { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
    { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
    { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
    { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
    { name: "unknown", url: "https://pokeapi.co/api/v2/type/10001/" },
    { name: "shadow", url: "https://pokeapi.co/api/v2/type/10002/" },
  ],
};

export const pokemonDetailDataMockResponse = {
  abilities: ["move1, move2"],
  types: ["fire", "flying"],
  weight: 80,
};

export const pokemonListByTypesMockResponse = {
  count: 20,
  next: null,
  previous: null,
  results: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
};
