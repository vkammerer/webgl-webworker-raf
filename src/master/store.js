import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
// import { createMainMiddleware } from "@vkammerer/redux-postmessage-raf";
import { createMainMiddleware } from "../../../redux-postmessage-raf";
import { slaveWorker } from "./slaveWorker";
import { common } from "../common/reducers/common";
import { master } from "./reducers/master";
import { rotation } from "./reducers/rotation";

const reducers = combineReducers({
  common,
  master,
  rotation
});

// MIDDLEWARES
const messagerMiddleware = createMainMiddleware(slaveWorker);

const logger = createLogger({
  predicate: () => false,
  collapsed: true
});

export const store = createStore(
  reducers,
  // applyMiddleware(messagerMiddleware)
  applyMiddleware(messagerMiddleware, logger)
);
