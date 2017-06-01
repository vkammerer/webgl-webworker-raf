import { store } from "./store";

let currentState = { ping: 0 };
let state;

store.subscribe(() => {
  state = store.getState();
  if (state.ping.count !== currentState.ping.count)
    postRotation(state.ping.count);
  currentState = state;
});

const postRotation = count => {
  store.dispatch({
    type: "ROTATION",
    payload: {
      x: count / 100,
      y: count / 100
    },
    meta: {
      toMain: true,
      ignoreSelf: true,
      delay: {
        pingCount: count + 60
      }
    }
  });
};

store.dispatch({
  type: "PING_START",
  meta: {
    toMain: true,
    ignoreSelf: true
  }
});
