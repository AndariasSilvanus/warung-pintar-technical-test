import React, { useEffect } from "react";
import T from "prop-types";
import { Select, OptionType } from "../../components/select/select";
import { Modal } from "../../components/modal/modal";
import { PokemonCard } from "../../components/pokemon-card/pokemon-card";
import { PokemonTextThumbnail } from "../../components/pokemon-text-thumbnail/pokemon-text-thumbnail";
import { getUrlValue } from "../../utils/getUrlValue";
import styled from "@emotion/styled";
import { capitalize } from "@material-ui/core";
import { FILTER_OPTION_DEFAULT_VALUE, initialFilterOption } from "./const";

const PokemonType = T.shape({ name: T.string, url: T.string });
const propTypes = {
  openModal: T.bool,
  list: T.arrayOf(PokemonType),
  detail: T.any,
  selectedFilterOption: OptionType,
  pokemonTypes: T.arrayOf(PokemonType),

  handleSelectChange: T.func,
  handlePokemonThumbnailClicked: T.func,
  handlePokemonDetailClosed: T.func,
  updateOffset: T.func,
};

const CenterBox = styled.div`
  text-align: center;
`;

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
  const selectOptions = [initialFilterOption].concat(
    pokemonTypes.map((e) => ({
      value: getUrlValue(e.url),
      label: e.name,
    }))
  );

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
    <CenterBox>
      <Select
        options={selectOptions}
        onChange={handleSelectChange}
        selectedOption={selectedFilterOption}
        label="Filter by types"
      />
      <div>
        {list.map((e, i) => {
          const pokemonNumber = getUrlValue(e.url);
          const upperCaseName = capitalize(e.name);
          return (
            <PokemonTextThumbnail
              text={`${upperCaseName} (#${pokemonNumber})`}
              onClick={() => handlePokemonThumbnailClicked(pokemonNumber)}
            />
          );
        })}
      </div>
      <PokemonDetailSection
        openModal={openModal}
        handlePokemonDetailClosed={handlePokemonDetailClosed}
        detail={detail}
      />
    </CenterBox>
  );
};

const AbsoluteCenterBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PokemonDetailSection = ({
  openModal,
  handlePokemonDetailClosed,
  detail,
}) => {
  if (detail) {
    const {
      sprites: { front_default },
      name,
      types,
      abilities,
    } = detail;

    const transformedTypes = types.map((e) => e.type.name);
    const transformedAbilities = abilities.map((e) => e.ability.name);
    return (
      <Modal isOpen={openModal} handleClose={handlePokemonDetailClosed}>
        <AbsoluteCenterBox>
          <PokemonCard
            image={front_default}
            name={capitalize(name)}
            types={transformedTypes}
            abilities={transformedAbilities}
          />
        </AbsoluteCenterBox>
      </Modal>
    );
  }
  return null;
};

PokemonView.propTypes = propTypes;
