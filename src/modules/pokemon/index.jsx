import { PokemonContainer } from "./container";
import { PokemonView } from "./view";

export default () => (
  <PokemonContainer>
    {({
      openModal,
      list,
      detail,
      selectedFilterOption,
      pokemonTypes,

      handleSelectChange,
      handlePokemonThumbnailClicked,
      handlePokemonDetailClosed,
      updateOffset,
    }) => (
      <PokemonView
        openModal={openModal}
        list={list}
        detail={detail}
        selectedFilterOption={selectedFilterOption}
        pokemonTypes={pokemonTypes}
        handleSelectChange={handleSelectChange}
        handlePokemonThumbnailClicked={handlePokemonThumbnailClicked}
        handlePokemonDetailClosed={handlePokemonDetailClosed}
        updateOffset={updateOffset}
      />
    )}
  </PokemonContainer>
);
