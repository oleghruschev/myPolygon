// import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import rootReducer from 'reducers';
import { watchCreateArticle } from 'actions/articles';
import { watchFetcInfoFromServer } from 'actions/dataFromServer';

const sagaMiddleware = createSagaMiddleware()

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));
const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield all([
    watchCreateArticle(),
    watchFetcInfoFromServer()
  ])
}

export const store = createStore(rootReducer, initialState, enhancers);

sagaMiddleware.run(rootSaga);