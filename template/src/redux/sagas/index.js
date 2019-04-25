import { all } from 'redux-saga/effects';
import appSagas from './app-sagas';

export default function* mainSaga() {
  yield all([...appSagas]);
}
