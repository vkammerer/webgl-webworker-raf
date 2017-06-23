import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
// import { createWorkerMiddleware } from "@vkammerer/redux-postmessage-raf";
import { createWorkerMiddleware } from "../../../redux-postmessage-raf";
import { common } from "../common/reducers/common";
import { ping } from "./reducers/ping";
import { click } from "./reducers/click";

const reducers = combineReducers({
  common,
  ping,
  click
});

// MIDDLEWARES
const messagerMiddleware = createWorkerMiddleware({ dispatchAfterPong: true });

const logger = createLogger({
  predicate: (getState, action) => action.type !== "PONG_AFTER",
  collapsed: true
});

export const store = createStore(
  reducers,
  // applyMiddleware(messagerMiddleware, cycleMiddleware)
  applyMiddleware(messagerMiddleware, logger)
);
