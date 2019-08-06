import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { RootState } from './reducers';
import validationMiddleware from './middleware/validation';
import coreMiddleware from './middleware/core';
import thunk from 'redux-thunk';

export function configureStore(): Store<RootState> {
	const middleware = composeWithDevTools(applyMiddleware(thunk, validationMiddleware, coreMiddleware))
    return createStore(rootReducer, middleware)
}