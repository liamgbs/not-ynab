import { createStore, applyMiddleware, Store } from 'redux';

import rootReducer from './reducers';
import { RootState } from './reducers';
import validationMiddleware from './middleware/validation';

export function configureStore(): Store<RootState> {
	const middleware = applyMiddleware(validationMiddleware)
    return createStore(rootReducer, middleware)
}