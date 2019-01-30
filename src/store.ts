import { createStore, applyMiddleware, Store } from 'redux';

import rootReducer from './reducers';
import { RootState } from './reducers';

export function configureStore(): Store<RootState> {
    return createStore(rootReducer)
}