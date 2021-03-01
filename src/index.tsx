import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./roots/rootReducer/rootReducer";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { watchRootSaga } from "./roots/rootReducer/rootSaga";

function init() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, sagaMiddleware)
  );
  window && ((window as any).store = store);

  sagaMiddleware.run(watchRootSaga);

  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
  );
}

init();
