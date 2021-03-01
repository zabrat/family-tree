import { createStore, applyMiddleware } from "redux";
import rootReducer from "../roots/rootReducer/rootReducer";

import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { watchRootSaga } from "../roots/rootReducer/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(logger, sagaMiddleware)
);
(window as any).store = store;

sagaMiddleware.run(watchRootSaga);

export default store;