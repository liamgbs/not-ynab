import { TransactionActionTypes } from "./types";
import { Transaction } from "../types/transactions";

export function addTransactionAction(transaction : Transaction, accountID: string) {
	return {
		type: TransactionActionTypes.ADD_TRANSACTION,
		payload: {
			accountID,
			...transaction
		}
	}
}

export function saveEditedTransactionAction(transaction: Transaction, accountID: string) {
	return {
		type: TransactionActionTypes.EDIT_TRANSACTION,
		payload: {
			accountID,
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

export function selectTransactionAction(transactionID: string) {
	return {
		type: TransactionActionTypes.SELECT_TRANSACTION,
		payload: {
			transactionID
		}
	}
}

export function unselectTransactionAction(transactionID: string) {
	return {
		type: TransactionActionTypes.UNSELECT_TRANSACTION,
		payload: {
			transactionID
		}
	}
}

export function clearSelectedAction() {
	return {
		type: TransactionActionTypes.CLEAR_SELECTED
	}
}

export function deleteTransactionAction() {
	return {
		type: TransactionActionTypes.DELETE_TRANSACTION
		// No payload as transaction ids to delelet are already in state as selectedTransactions
	}
}