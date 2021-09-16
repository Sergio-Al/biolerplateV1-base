// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Provide store to all components
import AppRouter from "./routes/AppRouter";
import ConfigureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = ConfigureStore();

console.log(store.getState());

store.dispatch(addExpense({ description: "Water Bill" }));
store.dispatch(addExpense({ description: "Gas Bill" }));
//store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));

setTimeout(() => {
  store.dispatch(setTextFilter("Gas"));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
