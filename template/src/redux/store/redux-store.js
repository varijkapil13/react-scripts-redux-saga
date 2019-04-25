import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';
import sagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

export const saga = sagaMiddleware();
export default function reduxStore() {
  return createStore(reducer, composeWithDevTools(applyMiddleware(saga)));
}
