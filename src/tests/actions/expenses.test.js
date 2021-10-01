import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";
import { ref, set, onValue } from "firebase/database";

const uid = "thisismytestuid";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  set(ref(database, `users/${uid}/expenses`), expensesData).then(() => done());
});

test("should setup remove expense action object", () => {
  const action = removeExpense("123abc");
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should remove expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);

  store.dispatch(startRemoveExpense(expenses[2])).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id: expenses[2].id,
    });

    onValue(
      ref(database, `users/${uid}/expenses/${actions[0].id}`),
      (snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
      },
      {
        onlyOnce: true,
      }
    );
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123bca", { note: "this is new value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123bca",
    updates: { note: "this is new value" },
  });
});

test("should edit expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const updatedData = { description: "another Rent" };
  store.dispatch(startEditExpense(expenses[2].id, updatedData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "EDIT_EXPENSE",
      id: expenses[2].id,
      updates: updatedData,
    });

    onValue(
      ref(database, `users/${uid}/expenses/${expenses[2].id}`),
      (snapshot) => {
        expect(snapshot.val().description).toBe(updatedData.description);
        done();
      },
      {
        onlyOnce: true,
      }
    );
  });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("should add expenses to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: "mouse",
    amount: 300,
    note: "this one is better",
    createdAt: 100,
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions(); // get all action as array
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData,
      },
    });

    onValue(
      ref(database, `users/${uid}/expenses/${actions[0].expense.id}`),
      (snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done(); // forces jest to wait this function to complete
      },
      {
        onlyOnce: true,
      }
    );
  });
});

test("should add expense with default to database store", (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseDataDefault = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0,
  };

  store.dispatch(startAddExpense({})).then(() => {
    // testing adding to redux store
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseDataDefault,
      },
    });

    // testing adding to firebase through onValue onlyOnce function
    onValue(
      ref(database, `users/${uid}/expenses/${actions[0].expense.id}`),
      (snapshot) => {
        expect(snapshot.val()).toEqual(expenseDataDefault);
        done();
      },
      {
        onlyOnce: true,
      }
    );
  });
});

test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

test("should fetch the expense from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  });
});
