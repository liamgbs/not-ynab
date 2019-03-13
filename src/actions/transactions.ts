import { TransactionActionTypes } from "./types";

export function addTransactionAction(
	accountName: string,
	payeeName: string,
	categoryName: string,
	date: string,
	amount: number) {
	return {
		type: TransactionActionTypes.ADD_TRANSACTION,
		payload: {
			accountName,
			payeeName,
			categoryName,
			date,
			amount
		}
	}
}

export function triggerNewTransactionAction() {
	return {
		type: TransactionActionTypes.TRIGGER_NEW_TRANSACTION
	}

}

export function cancelNewTransactionAction() {
	return {
		type: TransactionActionTypes.CANCEL_NEW_TRANSACTION
	}
}