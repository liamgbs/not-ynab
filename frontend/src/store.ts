import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { RootState } from './reducers';
import validationMiddleware from './middleware/validation';
import coreMiddleware from './middleware/core';

export function configureStore(): Store<RootState> {
	const middleware = composeWithDevTools(applyMiddleware(validationMiddleware, coreMiddleware))
    return createStore(rootReducer, middleware)
}