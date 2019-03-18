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
			payeeName: "Jane",
			categoryName: "Holiday",
			date: "27/11/2018",
			inflow: 20.00,
			outflow: 0,
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
			console.log(payload);

			return {
				...state,
				transactions: [
					...state.transactions,
					{
						id: Math.random().toString(), // TODO: make this use an actual uuid generator
						accountName: payload.accountName,
						payeeName: payload.payeeName,
						categoryName: payload.categoryName,
						date: payload.date,
						inflow: payload.inflow,
						outflow: payload.outflow,
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
							return { ...trans }
						}
						return {
							...trans,
							accountName: payload.accountName,
							payeeName: payload.payeeName,
							categoryName: payload.categoryName,
							date: payload.date,
							inflow: payload.inflow,
							outflow: payload.outflow
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