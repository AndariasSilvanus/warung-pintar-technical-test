import React, { useEffect } from "react";
import T from "prop-types";
import { Select, OptionType } from "../../components/select/select";
import { Modal } from "../../components/modal/modal";
import { PokemonCard } from "../../components/pokemon-card/pokemon-card";
import { PokemonTextThumbnail } from "../../components/pokemon-text-thumbnail/pokemon-text-thumbnail";
import { getUrlValue } from "../../utils/getUrlValue";

const propTypes = {};

const INFINITE_SCROLL_PADDING_NUMBER = 100;
export const PokemonView = ({
  openModal,
  list,
  detail,
  selectedFilterOption,
  pokemonTypes,

  handleSelectChange,
  handlePokemonThumbnailClicked,
  handlePokemonDetailClosed,
  updateOffset,
}) => {
  const selectOptions = pokemonTypes.map((e) => ({
    value: getUrlValue(e.url),
    label: e.name,
  }));

  const handleScroll = () => {
    if (
      window.innerHeight +
        document.documentElement.scrollTop +
        INFINITE_SCROLL_PADDING_NUMBER >=
      document.documentElement.offsetHeight
    ) {
      updateOffset();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Select
        options={selectOptions}
        onChange={handleSelectChange}
        selectedOption={selectedFilterOption}
        label="Filter by types"
      />
      {list.map((e, i) => (
        <PokemonTextThumbnail
          text={e.name}
          onClick={() => handlePokemonThumbnailClicked(getUrlValue(e.url))}
        />
      ))}
      <PokemonDetailSection
        openModal={openModal}
        handlePokemonDetailClosed={handlePokemonDetailClosed}
        detail={detail}
      />
    </div>
  );
};

const PokemonDetailSection = ({
  openModal,
  handlePokemonDetailClosed,
  detail,
}) => {
  console.log("detaill", detail);
  if (detail) {
    const {
      sprites: { front_default },
    } = detail;
    return (
      <Modal isOpen={openModal} handleClose={handlePokemonDetailClosed}>
        <PokemonCard image={front_default} />
      </Modal>
    );
  }
  return null;
};

PokemonView.propTypes = propTypes;
