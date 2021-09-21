import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseLIstItem";
import expenses from "../fixtures/expenses";

test("should render expense List item", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
