import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../Redux/ConfigureStore";
import Home from "../components/home/Home";

describe("Render components", () => {
  it("render HomePage", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
