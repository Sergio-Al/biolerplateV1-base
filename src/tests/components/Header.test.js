import React from "react";
import { shallow } from "enzyme";
import ReactShallowRenderer from "react-test-renderer/shallow"; // this will not render child components (use DOM renderer for that)
import Header from "../../components/Header";

// react-test-renderer //render components in javascript code
test("should render header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  //   expect(wrapper.find("h1").text()).toBe("Expensify");
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
});
