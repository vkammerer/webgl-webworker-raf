import { store } from "./store";
import { updateSceneRotation } from "./gl";
import { updateCssColor } from "./css";

document.addEventListener("click", () => {
  store.dispatch({
    type: "CLICK",
    meta: {
      toWorker: true,
      ignoreSelf: true
    }
  });
});

let currentState = {
  rotation: {},
  css: { color: "" }
};
let state;

store.subscribe(() => {
  state = store.getState();
  if (state.css.color !== currentState.css.color)
    updateCssColor(state.css.color);
  if (
    state.rotation.x !== currentState.rotation.x ||
    state.rotation.y !== currentState.rotation.y
  )
    updateSceneRotation(state.rotation);
  currentState = state;
});

updateCssColor("#FFA");
