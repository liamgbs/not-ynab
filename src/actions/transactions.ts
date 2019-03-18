import { TransactionActionTypes } from "./types";
import { Transaction } from "../types/transactions";

export function addTransactionAction(transaction : Transaction) {
	return {
		type: TransactionActionTypes.ADD_TRANSACTION,
		payload: {
			...transaction
		}
	}
}

export function saveEditedTransactionAction(transaction: Transaction) {
	return {
		type: TransactionActionTypes.EDIT_TRANSACTION,
		payload: {
			...transaction
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