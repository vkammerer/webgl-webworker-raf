import { store } from "./store";
import { updateSceneRotation } from "./gl";

document.addEventListener("click", () => {
  store.dispatch({
    type: "CLICK",
    meta: {
      toWorker: true,
      ignoreSelf: true
    }
  });
});

let currentState = { rotation: {} };
let state;

store.subscribe(() => {
  state = store.getState();
  if (
    state.rotation.x !== currentState.rotation.x ||
    state.rotation.y !== currentState.rotation.y
  )
    updateSceneRotation(state.rotation);
  currentState = state;
});
