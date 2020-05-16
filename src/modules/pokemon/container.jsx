import React, { useReducer, useEffect } from "react";
import { pokeService } from "../../services";
import {
  DATA_ACTION_TYPE,
  UI_ACTION_TYPE,
  dataInitialState,
  uiInitialState,
  dataReducer,
  uiReducer,
} from "./reducer";
import { FILTER_OPTION_DEFAULT_VALUE, initialFilterOption } from "./const";

async function fetchPokemonDetail(pokemon) {
  const [data, error] = await pokeService.getPokemonData(pokemon);
  return [data, error];
}

async function fetchPokemonListByType(type) {
  const [data, error] = await pokeService.getPokemonListByType(type);
  return [data, error];
}

async function fetchPokemonList(dataDispatch, type, limit, offset) {
  const [data, error] = await pokeService.getPokemonList(limit, offset);
  if (data) {
    dataDispatch({
      type,
      data: data.results,
    });
  }
}

export const PokemonContainer = ({ children }) => {
  // states
  const [{ openModal }, uiDispatch] = useReducer(uiReducer, uiInitialState);
  const [
    { list, offset, limit, detail, selectedFilterOption, pokemonTypes },
    dataDispatch,
  ] = useReducer(dataReducer, dataInitialState);

  // methods
  const handleSelectChange = async (option, idx) => {
    if (option && option.value !== FILTER_OPTION_DEFAULT_VALUE) {
      const { value } = option;
      const [data, error] = await fetchPokemonListByType(value);
      if (data) {
        dataDispatch({
          type: DATA_ACTION_TYPE.REPLACE_LIST,
          data: data.pokemon.map((e) => e.pokemon),
        });
        dataDispatch({
          type: DATA_ACTION_TYPE.UPDATE_FILTER_OPTION,
          data: option,
        });
        dataDispatch({ type: DATA_ACTION_TYPE.RESET_OFFSET });
      }
    } else if (option && option.value === FILTER_OPTION_DEFAULT_VALUE) {
      dataDispatch({
        type: DATA_ACTION_TYPE.UPDATE_FILTER_OPTION,
        data: initialFilterOption,
      });
      dataDispatch({ type: DATA_ACTION_TYPE.RESET_OFFSET });
      fetchPokemonList(
        dataDispatch,
        DATA_ACTION_TYPE.REPLACE_LIST,
        limit,
        offset
      );
    }
  };

  const handlePokemonThumbnailClicked = async (pokemon) => {
    uiDispatch({ type: UI_ACTION_TYPE.UPDATE_MODAL, data: true });
    const [data, error] = await fetchPokemonDetail(pokemon);
    if (data) {
      dataDispatch({ type: DATA_ACTION_TYPE.UPDATE_POKEMON_DETAIL, data });
    }
  };

  const handlePokemonDetailClosed = () => {
    uiDispatch({ type: UI_ACTION_TYPE.UPDATE_MODAL, data: false });
    dataDispatch({ type: DATA_ACTION_TYPE.UPDATE_POKEMON_DETAIL, data: null });
  };

  const updateOffset = () => {
    dataDispatch({ type: DATA_ACTION_TYPE.UPDATE_OFFSET });
  };

  // lifecycle
  useEffect(() => {
    if (selectedFilterOption.value === FILTER_OPTION_DEFAULT_VALUE) {
      fetchPokemonList(
        dataDispatch,
        DATA_ACTION_TYPE.APPEND_LIST,
        limit,
        offset
      );
    }
  }, [offset]);

  useEffect(() => {
    async function fetchPokemonTypes() {
      const [data, error] = await pokeService.getAllPokemonTypes();
      dataDispatch({
        type: DATA_ACTION_TYPE.UPDATE_POKEMON_TYPES,
        data: data.results,
      });
    }
    fetchPokemonTypes();
  }, []);

  return children({
    // states
    openModal,
    list,
    detail,
    selectedFilterOption,
    pokemonTypes,

    // methods
    handleSelectChange,
    handlePokemonThumbnailClicked,
    handlePokemonDetailClosed,
    updateOffset,
  });
};
