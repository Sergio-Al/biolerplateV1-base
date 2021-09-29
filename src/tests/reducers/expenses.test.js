import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "4",
      description: "Pc",
      note: "",
      amount: 34,
      createdAt: 0,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should edit an expense", () => {
  const updateDescription = "Credit";
  const action = {
    type: "EDIT_EXPENSE",
    id: "3",
    updates: {
      description: updateDescription,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].description).toBe(updateDescription);
});

test("should not edit expense if expense not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-34",
    updates: {
      description: "fail value",
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[2]],
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[2]]);
});
