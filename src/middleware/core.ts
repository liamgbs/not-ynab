import { Middleware } from "redux";
import { TransactionActionTypes, AccountActionTypes } from "../actions/types";
import { addToBalanceAction } from "../actions/accounts";
import { addToActivityAction } from "../actions/budget";
import { RootState } from "../reducers";
import { clearSelectedAction } from "../actions/transactions";

const coreMiddleware: Middleware = (store) => (next) => (action) => {
	const { payload } = action;
	switch (action.type) {
		// TRANSACTIONS
		case TransactionActionTypes.ADD_TRANSACTION:
			store.dispatch(addToBalanceAction(payload.accountName, payload.inflow - payload.outflow))
			store.dispatch(addToActivityAction(payload.categoryName, payload.date, payload.inflow - payload.outflow))
			return next(action);

		case TransactionActionTypes.DELETE_TRANSACTION:
			const _d_store : RootState = store.getState();
			_d_store.transactions.selectedTransactions.forEach(st => {
				const toDelete = _d_store.transactions.transactions.find(t => t.id === st);
				if (toDelete) {
					store.dispatch(addToBalanceAction(toDelete.accountName, -(toDelete.inflow - toDelete.outflow)))
					store.dispatch(addToActivityAction(toDelete.categoryName, toDelete.date, -(toDelete.inflow - toDelete!.outflow)))	
				}
			})
			return next(action);
		// ACCOUNTS
		case AccountActionTypes.SET_ACTIVE_ACCOUNT:
			store.dispatch(clearSelectedAction())
			return next(action)


	}

	return next(action);
}

export default coreMiddleware;