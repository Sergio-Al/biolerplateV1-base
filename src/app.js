// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Provide store to all components
import AppRouter from "./routes/AppRouter";
import ConfigureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css"; // this is from expenseform component file, we moved here because we'll use this in other files too
import "./firebase/firebase";
import { onAuthStateChanged, getAuth } from "firebase/auth";

const store = ConfigureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    console.log("log in ");
  } else {
    console.log("log out");
  }
});
