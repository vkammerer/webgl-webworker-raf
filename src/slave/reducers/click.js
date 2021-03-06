const defaultState = {
  count: 0
};

export const click = (state = defaultState, action) => {
  switch (action.type) {
    case "CLICK": {
      return {
        ...state,
        count: state.count + 1
      };
    }
    default:
      return state;
  }
};
