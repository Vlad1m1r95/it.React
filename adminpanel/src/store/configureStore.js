import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga';
// import usersSaga from "../redux-saga/sagas";
import rootReducer from './../reducers/index'

// const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  // const middleware = [thunk, sagaMiddleware];
  const middleware = [thunk]

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )

  // sagaMiddleware.run(usersSaga);

  return store
}
