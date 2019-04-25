import { call, put, takeLatest } from 'redux-saga/effects';
import { appActions } from '../constants';

const getAsyncData = () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve('Async Data');
    }, 2500)
  );
};

export function* fetchAsyncData() {
  try {
    const response = yield call(getAsyncData);
    yield put({ type: appActions.SAMPLE_ACTION_DATA, payload: response });
  } catch (error) {
    yield put({ type: appActions.SAMPLE_ACTION_DATA, payload: error });
  }
}

const allAppSagas = [takeLatest(appActions.SAMPLE_ACTION, fetchAsyncData)];

export default allAppSagas;
