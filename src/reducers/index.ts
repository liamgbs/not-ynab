import { combineReducers } from 'redux';

import appReducer, { AppState } from './app';

export interface RootState {
    app: AppState;
}

export default combineReducers<RootState>({
    app: appReducer as any
})