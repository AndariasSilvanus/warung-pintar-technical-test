import axios from "axios";
import { pokeService } from "../../services";
import {
  allPokemonTypesMockResponse,
  pokemonDetailDataMockResponse,
  pokemonListByTypesMockResponse,
  pokemonListMockResponse,
} from "../../mock/response";

jest.mock("axios");

const generateMockResponse = (response, status = 200) => ({
  data: response,
  status,
});

describe("pokemon service testing", () => {
  it("should success get pokemon list", async (done) => {
    axios.get.mockResolvedValue(generateMockResponse(pokemonListMockResponse));
    const [data, error] = await pokeService.getPokemonList();
    expect(data).toEqual(pokemonListMockResponse);
    expect(error).toEqual(undefined);
    done();
  });

  it("should success get pokemon list by type", async (done) => {
    axios.get.mockResolvedValue(
      generateMockResponse(pokemonListByTypesMockResponse)
    );
    const [data, error] = await pokeService.getPokemonListByType();
    expect(data).toEqual(pokemonListByTypesMockResponse);
    expect(error).toEqual(undefined);
    done();
  });

  it("should success get pokemon detail", async (done) => {
    axios.get.mockResolvedValue(
      generateMockResponse(pokemonDetailDataMockResponse)
    );
    const [data, error] = await pokeService.getPokemonListByType();
    expect(data).toEqual(pokemonDetailDataMockResponse);
    expect(error).toEqual(undefined);
    done();
  });

  it("should success get all pokemon types", async (done) => {
    axios.get.mockResolvedValue(
      generateMockResponse(allPokemonTypesMockResponse)
    );
    const [data, error] = await pokeService.getAllPokemonTypes();
    expect(data).toEqual(allPokemonTypesMockResponse);
    expect(error).toEqual(undefined);
    done();
  });
});
