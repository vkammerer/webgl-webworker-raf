function sleep(delay) {
  console.log(`start sleeping for ${delay}ms`);
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
  console.log(`finish sleeping for ${delay}ms`);
}

const defaultState = {};

export const click = (state = defaultState, action) => {
  switch (action.type) {
    case "CLICK": {
      sleep(1000);
      return state;
    }
    default:
      return state;
  }
};
