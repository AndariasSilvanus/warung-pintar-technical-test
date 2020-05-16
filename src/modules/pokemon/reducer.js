import produce from "immer";
import { initialFilterOption } from "./const";

export const UI_ACTION_TYPE = {
  UPDATE_MODAL: "UPDATE_MODAL",
};
export const uiInitialState = { openModal: false };
export const uiReducer = produce((draft, action) => {
  switch (action.type) {
    case UI_ACTION_TYPE.UPDATE_MODAL:
      draft.openModal = action.data;
      break;
  }
});

export const DATA_ACTION_TYPE = {
  APPEND_LIST: "APPEND_LIST",
  REPLACE_LIST: "REPLACE_LIST",
  UPDATE_OFFSET: "UPDATE_OFFSET",
  RESET_OFFSET: "RESET_OFFSET",
  UPDATE_LIMIT: "UPDATE_LIMIT",
  UPDATE_POKEMON_DETAIL: "UPDATE_POKEMON_DETAIL",
  RESET_POKEMON_DETAIL: "RESET_POKEMON_DETAIL",
  UPDATE_FILTER_OPTION: "UPDATE_FILTER_OPTION",
  RESET_FILTER_OPTION: "RESET_FILTER_OPTION",
  RESET_STATE: "RESET_STATE",
  UPDATE_POKEMON_TYPES: "UPDATE_POKEMON_TYPES",
};
export const dataInitialState = {
  list: [],
  offset: 0,
  limit: 0,
  detail: null,
  selectedFilterOption: initialFilterOption,
  pokemonTypes: [],
};
export const dataReducer = produce((draft, action) => {
  switch (action.type) {
    case DATA_ACTION_TYPE.APPEND_LIST:
      draft.list = draft.list.concat(action.data);
      break;
    case DATA_ACTION_TYPE.REPLACE_LIST:
      draft.list = action.data;
      break;
    case DATA_ACTION_TYPE.UPDATE_FILTER_OPTION:
      draft.selectedFilterOption = action.data;
      break;
    case DATA_ACTION_TYPE.RESET_FILTER_OPTION:
      draft.selectedFilterOption = initialFilterOption;
      break;
    case DATA_ACTION_TYPE.UPDATE_POKEMON_DETAIL:
      draft.detail = action.data;
      break;
    case DATA_ACTION_TYPE.RESET_POKEMON_DETAIL:
      draft.detail = null;
      break;
    case DATA_ACTION_TYPE.UPDATE_OFFSET:
      draft.offset += action.data ? action.data : 20;
      break;
    case DATA_ACTION_TYPE.RESET_OFFSET:
      draft.offset = 0;
      break;
    case DATA_ACTION_TYPE.UPDATE_LIMIT:
      draft.limit = action.data;
      break;
    case DATA_ACTION_TYPE.UPDATE_POKEMON_TYPES:
      draft.pokemonTypes = action.data;
      break;
  }
});
