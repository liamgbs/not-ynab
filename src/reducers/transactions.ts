import { Transaction } from "../types/transactions";
import { AnyAction } from "redux";
import { TransactionActionTypes } from "../actions/types";

export interface TransactionsState {
	transactions: Transaction[],
	newTransaction: boolean
}

const defaultState: TransactionsState = {
	transactions: [
		{
			id: "12345",
			accountName: "Test Account",
			payeeName: "doesnt exist",
			categoryName: "Holiday",
			date: "27/11/2018",
			amount: 20.00,
			approved: true,
			deleted: false
		}
	],
	newTransaction: false
}

export default (state: TransactionsState = defaultState, action: AnyAction) => {
	const { payload } = action;
	switch (action.type) {
		case TransactionActionTypes.ADD_TRANSACTION:
			return {
				...state,
				transactions: [
					...state.transactions,
					{
						id: "12345",
						accountName: payload.accountName,
						payeeName: payload.payeeName,
						categoryName: payload.categoryName,
						date: payload.date,
						amount: payload.amount,
						approved: true,
						deleted: false
					}
				],
				newTransaction: false
			}
		case TransactionActionTypes.EDIT_TRANSACTION:
			return {
				...state,
				transactions: [
					...state.transactions.map(trans => {
						if (trans.id !== payload.id) {
							return {...trans}
						}
						return {
							...trans,
							// TODO: new transaction information
						}
					})
				]
			}
		case TransactionActionTypes.TRIGGER_NEW_TRANSACTION:
			return {
				...state,
				newTransaction: true
			}

		case TransactionActionTypes.CANCEL_NEW_TRANSACTION:
			return {
				...state,
				newTransaction: false
			}
	}

	return state;

}