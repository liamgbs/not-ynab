import { combineReducers } from 'redux';

import appReducer, { AppState } from './app';
import accountsReducer, { AccountsState } from './accounts';

export interface RootState {
    app: AppState,
    accounts: AccountsState
}

export default combineReducers<RootState>({
    app: appReducer as any,
    accounts: accountsReducer as any
})