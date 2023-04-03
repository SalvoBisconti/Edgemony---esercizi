export const reduce = (state, action) => {
  switch (action.type) {
    case "decrement":
      return {
        ...state,
        value: state.value - 1,
      };
    case "increment":
      return {
        ...state,
        value: state.value + 1,
      };

    default:
      return state;
  }
};
