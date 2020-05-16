import React from "react";
import renderer from "react-test-renderer";
import { PokemonCard } from "../../components/pokemon-card/pokemon-card";

it("Should render pokemon card correctly", () => {
  const component = renderer.create(
    <PokemonCard
      image=""
      name="bulbasaur"
      types={["grass"]}
      abilities={["move1", "move2"]}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
