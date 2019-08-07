import { Middleware } from "redux";
import { TransactionActionTypes, AccountActionTypes } from "../actions/types";
import { addToBalanceAction } from "../actions/accounts";
import { RootState } from "../reducers";
import { clearSelectedAction } from "../actions/transactions";
import { addToActivityAction } from "../actions/budget";
import { Transaction } from "../types/transactions";

const coreMiddleware: Middleware = (store) => (next) => (action) => {
	const { payload } = action;
	const state : RootState = store.getState();
	switch (action.type) {
		// TRANSACTIONS
		case TransactionActionTypes.ADD_TRANSACTION:
			store.dispatch(addToBalanceAction(payload.accountID, payload.inflow - payload.outflow))
			store.dispatch(addToActivityAction(payload.categoryName, payload.date, payload.inflow - payload.outflow))
			return next(action);

		case TransactionActionTypes.DELETE_TRANSACTION:
			state.transactions.selectedTransactions.forEach(transactionID => {
				const toDelete = state.transactions.transactions.find(t => t.id === transactionID);
				if (toDelete) {
					store.dispatch(addToBalanceAction(payload.accountID, -(toDelete.inflow - toDelete.outflow)))
					store.dispatch(addToActivityAction(toDelete.categoryName, toDelete.date, -(toDelete.inflow - toDelete.outflow)))
				}
			})
			return next(action);
		// ACCOUNTS
		case AccountActionTypes.SET_ACTIVE_ACCOUNT:
			store.dispatch(clearSelectedAction())
			return next(action)
		// TRANSACTIONS
		case TransactionActionTypes.EDIT_TRANSACTION:
			const toEdit : Transaction | undefined  = state.transactions.transactions.find(t => t.id === payload.id);

			if (toEdit) {
				if (toEdit.date !== payload.date) {
					store.dispatch(addToActivityAction(toEdit.categoryName, toEdit.date, -(toEdit.inflow - toEdit.outflow)))
					store.dispatch(addToActivityAction(payload.categoryName, payload.date, (toEdit.inflow - toEdit.outflow)))
				}
				else {
					store.dispatch(addToBalanceAction(payload.accountID, (payload.inflow - toEdit.inflow) - (payload.outflow - toEdit.outflow)))
					store.dispatch(addToActivityAction(payload.categoryName, payload.date, (payload.inflow - toEdit.inflow) - (payload.outflow - toEdit.outflow)))
				}
			}

			return next(action);


	}

	return next(action);
}

export default coreMiddleware;