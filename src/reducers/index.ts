import { combineReducers } from 'redux';

import appReducer, { AppState } from './app';
import accountsReducer, { AccountsState } from './accounts';
import budgetReducer, { BudgetState } from './budget';
import transactionsReducer, { TransactionsState } from './transactions';

export interface RootState {
    app: AppState,
	accounts: AccountsState,
	budget: BudgetState,
	transactions: TransactionsState
}

export default combineReducers<RootState>({
    app: appReducer as any,
	accounts: accountsReducer as any,
	budget: budgetReducer as any,
	transactions: transactionsReducer as any
})