const defaultState = {
  count: 0
};

export const ping = (state = defaultState, action) => {
  switch (action.type) {
    case "PONG_AFTER":
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};
