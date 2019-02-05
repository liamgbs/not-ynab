import { combineReducers } from 'redux';

import appReducer, { AppState } from './app';
import accountsReducer, { AccountsState } from './accounts';
import budgetReducer, { BudgetState } from './budget';

export interface RootState {
    app: AppState,
	accounts: AccountsState,
	budget: BudgetState
}

export default combineReducers<RootState>({
    app: appReducer as any,
	accounts: accountsReducer as any,
	budget: budgetReducer as any
})