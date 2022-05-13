import React from "react";
import renderer from "react-test-renderer";
import RadioExample from "./RadioExample";

test("renders learn react link", () => {
  const tree = renderer.create(<RadioExample />).toJSON();

  expect(tree).toMatchInlineSnapshot();
});
