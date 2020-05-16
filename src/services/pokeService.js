import { POKEDEX_API_URL } from "../const/api";

export class PokeService {
  constructor(baseService) {
    this.baseService = baseService;
  }

  getPokemonList = async (limit = 20, offset) => {
    const url = `${POKEDEX_API_URL}api/v2/pokemon`;
    let query = { limit };
    if (offset) query.offset = offset;

    const [data, error] = await this.baseService.get(url, query);
    return [data.data, error];
  };

  getPokemonData = async (pokemon) => {
    const url = `${POKEDEX_API_URL}api/v2/pokemon/${pokemon}`;
    const [data, error] = await this.baseService.get(url);
    return [data.data, error];
  };

  getPokemonListByType = async (type) => {
    const url = `${POKEDEX_API_URL}api/v2/type/${type}`;
    const [data, error] = await this.baseService.get(url);
    return [data.data, error];
  };

  getAllPokemonTypes = async () => {
    const url = `${POKEDEX_API_URL}api/v2/type`;
    const [data, error] = await this.baseService.get(url);
    return [data.data, error];
  };
}
