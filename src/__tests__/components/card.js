import React from "react";
import renderer from "react-test-renderer";
import { Card } from "../../components/card/card";

it("Should render card correctly", () => {
  const component = renderer.create(
    <Card>
      <h1>hello world</h1>
    </Card>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
