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
import "react-dates/lib/css/_datepicker.css"; // this is from expenseform component file, we moved here because we'll use this in other files too

const store = ConfigureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
