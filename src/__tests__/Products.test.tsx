import React from "react";
import "../setupTest";
import Products from "../components/Products";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";

let wrapper: any;
describe("Products test", () => {
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    );
  });

  it("should render the component products", () => {
    // const wrapper = shallow(<Products />)
    expect(wrapper).not.toBe(null);
  });
});
