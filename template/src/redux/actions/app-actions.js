// Produce action to trigger saga
import { appActions } from '../constants';

export const sampleAppAction = () => ({
  type: appActions.SAMPLE_ACTION,
});
