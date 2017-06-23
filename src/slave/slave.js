import { sleep } from "../common/utils/sleep";
import { getRandomColor } from "../common/utils/color";
import { store } from "./store";

let currentState = {
  ping: { count: 0 },
  click: { count: 0 }
};
let state;

store.subscribe(() => {
  state = store.getState();
  if (state.click.count !== currentState.click.count) postColor();
  if (state.ping.count !== currentState.ping.count)
    postRotation(state.ping.count);
  currentState = state;
});

const postColor = () => {
  sleep(29);
  store.dispatch({
    type: "COLOR",
    payload: getRandomColor(),
    meta: {
      toMain: true,
      ignoreSelf: true
    }
  });
};

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
        pingCount: count + 2
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
