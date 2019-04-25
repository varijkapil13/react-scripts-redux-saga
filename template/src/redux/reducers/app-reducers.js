import initialState from '../initialState';
import { appActions } from '../constants';

export default function appReducers(
  state = initialState.app,
  { type, payload }
) {
  switch (type) {
    case appActions.SAMPLE_ACTION_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
}
