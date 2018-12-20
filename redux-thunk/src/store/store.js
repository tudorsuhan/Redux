import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const logger = createLogger({
  duration: true,
  collapsed: true,
  diff: true,
  colors: {
    title: () => "#139BFE",
    prevState: () => "#1C5FAF",
    action: () => "#149945",
    nextState: () => "#A47104",
    error: () => "#ff0005"
  }
});

const _DEV_ = process.env.NODE_ENV === "development";

export const configStore = () => {

  const middlewares = [thunk];
  if (_DEV_) {
    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  const composeEnhancers = _DEV_ && devtools ? devtools : compose;

  const store = createStore(rootReducer, {}, composeEnhancers(...enhancers));

  return store;
}