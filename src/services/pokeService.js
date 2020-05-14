import { POKEDEX_API_URL } from "../const/api";

export class PokeService {
  constructor(baseService) {
    this.baseService = baseService;
  }

  getPokemonList = async ({ limit = 20, offset }) => {
    const url = `${OPEN_WEATHER_MAP_API_URL}data/2.5/forecast`;
    let query = { limit };
    if (offset) query.offset = offset;

    const [data, error] = await this.baseService.get(url, query);
    return [data, error];
  };

  getPokemonData = async ({ pokemon }) => {
    const url = `${POKEDEX_API_URL}api/v2/pokemon/${pokemon}`;
    const [data, error] = await this.baseService.get(url, query);
    return [data, error];
  };
}
