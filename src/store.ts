import { createStore, applyMiddleware, Store } from 'redux';

import rootReducer from './reducers';
import { RootState } from './reducers';
import validationMiddleware from './middleware/validation';
import coreMiddleware from './middleware/core';

export function configureStore(): Store<RootState> {
	const middleware = applyMiddleware(validationMiddleware, coreMiddleware)
    return createStore(rootReducer, middleware)
}