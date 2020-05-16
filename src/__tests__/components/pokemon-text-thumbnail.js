import React from "react";
import renderer from "react-test-renderer";
import { PokemonTextThumbnail } from "../../components/pokemon-text-thumbnail/pokemon-text-thumbnail";

it("Should render pokemon text thumbnail correctly", () => {
  const handleClick = jest.fn();
  const component = renderer.create(
    <PokemonTextThumbnail text="bulbasaur" onClick={handleClick} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
