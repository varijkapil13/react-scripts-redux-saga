import reduxStore, { saga } from './redux-store';
import sagas from '../sagas/';

const mainStore = reduxStore();

export default mainStore;
saga.run(sagas);
