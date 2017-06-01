const defaultState = {
  x: 0,
  y: 0
};

export const rotation = (state = defaultState, action) => {
  switch (action.type) {
    case "ROTATION":
      return {
        ...state,
        x: action.payload.x,
        y: action.payload.y
      };
    default:
      return state;
  }
};
