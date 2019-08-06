import { combineReducers } from 'redux';

import appReducer, { AppState } from './app';
import accountsReducer, { AccountsState } from './accounts';
import budgetReducer, { BudgetState } from './budget';
import transactionsReducer, { TransactionsState } from './transactions';
import payeesReducer, { PayeesState } from './payees';
import userReducer, { UserState } from './user';

export interface RootState {
	app: AppState,
	accounts: AccountsState,
	budget: BudgetState,
	transactions: TransactionsState,
	payees: PayeesState,
	user: UserState
}

export default combineReducers<RootState>({
	app: appReducer,
	accounts: accountsReducer,
	budget: budgetReducer,
	transactions: transactionsReducer,
	payees: payeesReducer,
	user: userReducer
})