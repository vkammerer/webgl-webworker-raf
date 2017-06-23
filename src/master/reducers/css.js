const defaultState = {
  color: "#FFF"
};

export const css = (state = defaultState, action) => {
  switch (action.type) {
    case "COLOR": {
      return {
        ...state,
        color: action.payload
      };
    }
    default:
      return state;
  }
};
