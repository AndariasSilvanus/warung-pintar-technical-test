import React from "react";
import renderer from "react-test-renderer";
import { Select } from "../../components/select/select";

it("Should render select correctly", () => {
  let selectIdx = 0;
  const selectOptions = [
    { value: "0", label: "bulbasaur" },
    { value: "1", label: "charmeleon" },
  ];
  let selectedOptions = selectOptions[selectIdx];
  const handleSelectChange = jest.fn();

  const component = renderer.create(
    <Select
      options={selectOptions}
      selectedOption={selectedOptions}
      onChange={handleSelectChange}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
