import {createStore} from 'redux';

import rootReducers from '../reducers/rootReducers';

const createReduxStore = createStore(rootReducers);

export default createReduxStore;