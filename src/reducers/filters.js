// Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

export default (state = filtersReducerDefaultState, actions) => {
  switch (actions.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: actions.text,
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: actions.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: actions.endDate,
      };
    default:
      return state;
  }
};
