import { Middleware } from "redux";
import { TransactionActionTypes, AccountActionTypes } from "../actions/types";
import { addToBalanceAction } from "../actions/accounts";
import { RootState } from "../reducers";
import { clearSelectedAction } from "../actions/transactions";

const coreMiddleware: Middleware = (store) => (next) => (action) => {
	const { payload } = action;
	const state : RootState = store.getState();
	switch (action.type) {
		// TRANSACTIONS
		case TransactionActionTypes.ADD_TRANSACTION:
			store.dispatch(addToBalanceAction(payload.accountName, payload.inflow - payload.outflow))
			return next(action);

		case TransactionActionTypes.DELETE_TRANSACTION:
			state.transactions.selectedTransactions.forEach(st => {
				const toDelete = state.transactions.transactions.find(t => t.id === st);
				if (toDelete) {
					store.dispatch(addToBalanceAction(toDelete.accountName, -(toDelete.inflow - toDelete.outflow)))
				}
			})
			return next(action);
		// ACCOUNTS
		case AccountActionTypes.SET_ACTIVE_ACCOUNT:
			store.dispatch(clearSelectedAction())
			return next(action)
		// TRANSACTIONS
		case TransactionActionTypes.EDIT_TRANSACTION:
			const toEdit = state.transactions.transactions.find(t => t.id === payload.id);
			if (toEdit) {
				store.dispatch(addToBalanceAction(payload.accountName, (payload.inflow - toEdit.inflow) - (payload.outflow - toEdit.outflow)))
			}
			return next(action);


	}

	return next(action);
}

export default coreMiddleware;