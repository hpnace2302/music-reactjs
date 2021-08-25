import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger"
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

const configStore = (defaultState = {}) => {
  const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(
      logger,
      sagaMiddleware
    )
  )
  sagaMiddleware.run(rootSaga)
  return { store }
}

export default configStore