import React from "react";
import renderer from "react-test-renderer";

import { resetUniqueIdCount, setUniqueSeed } from "@workday/canvas-kit-react";

import RadioExample from "./RadioExample";

describe("RadioExample", () => {
  beforeAll(() => {
    setUniqueSeed("ck-radio-");
    resetUniqueIdCount();
  });

  test("renders learn react link", () => {
    const tree = renderer.create(<RadioExample />).toJSON();

    // this is an example for testing purposes only
    // if anything it also shows why a snapshot test of DOM output looks like
    // and you should ask yoursel if this is valuable
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="css-k008qs"
      >
        <fieldset
          className="css-vy98rx"
        >
          <legend
            className="css-5y5gz"
            htmlFor="ck-radio-0"
          >
            Choose Your Pizza Crust
          </legend>
          <div
            className="css-1baulvz"
          >
            <div
              className="css-2n9rbg"
              id="ck-radio-0"
              name="crust"
            >
              <div
                className="css-2vc8uj"
              >
                <div
                  className="css-82zop0"
                >
                  <input
                    aria-checked={true}
                    checked={true}
                    className="css-60llfl"
                    id="ck-radio-1"
                    name="crust"
                    onChange={[Function]}
                    type="radio"
                    value="deep-dish"
                  />
                  <span
                    className="css-1vlkl5d"
                  />
                  <div
                    checked={true}
                    className="css-14o0749"
                  >
                    <div
                      checked={true}
                      className="css-nx4i08"
                    />
                  </div>
                </div>
                <label
                  className="css-37z2u8"
                  htmlFor="ck-radio-1"
                >
                  Deep dish
                </label>
              </div>
              <div
                className="css-2vc8uj"
              >
                <div
                  className="css-82zop0"
                >
                  <input
                    aria-checked={false}
                    checked={false}
                    className="css-5nrqpv"
                    id="ck-radio-2"
                    name="crust"
                    onChange={[Function]}
                    type="radio"
                    value="thin"
                  />
                  <span
                    className="css-1vlkl5d"
                  />
                  <div
                    checked={false}
                    className="css-10bazz0"
                  >
                    <div
                      checked={false}
                      className="css-ie8emf"
                    />
                  </div>
                </div>
                <label
                  className="css-37z2u8"
                  htmlFor="ck-radio-2"
                >
                  Thin
                </label>
              </div>
              <div
                className="css-2vc8uj"
              >
                <div
                  className="css-82zop0"
                >
                  <input
                    aria-checked={false}
                    checked={false}
                    className="css-5nrqpv"
                    id="ck-radio-3"
                    name="crust"
                    onChange={[Function]}
                    type="radio"
                    value="gluten-free"
                  />
                  <span
                    className="css-1vlkl5d"
                  />
                  <div
                    checked={false}
                    className="css-10bazz0"
                  >
                    <div
                      checked={false}
                      className="css-ie8emf"
                    />
                  </div>
                </div>
                <label
                  className="css-37z2u8"
                  htmlFor="ck-radio-3"
                >
                  Gluten free
                </label>
              </div>
              <div
                className="css-2vc8uj"
              >
                <div
                  className="css-82zop0"
                >
                  <input
                    aria-checked={false}
                    checked={false}
                    className="css-5nrqpv"
                    id="ck-radio-4"
                    name="crust"
                    onChange={[Function]}
                    type="radio"
                    value="cauliflower"
                  />
                  <span
                    className="css-1vlkl5d"
                  />
                  <div
                    checked={false}
                    className="css-10bazz0"
                  >
                    <div
                      checked={false}
                      className="css-ie8emf"
                    />
                  </div>
                </div>
                <label
                  className="css-37z2u8"
                  htmlFor="ck-radio-4"
                >
                  Cauliflower
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    `);
  });
});
