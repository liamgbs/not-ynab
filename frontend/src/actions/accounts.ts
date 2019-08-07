import { AccountActionTypes } from "./types";
import { AccountType } from "../types/accounts";

export function addAccountAction(
	accountName: string,
	accountType: AccountType,
	startingBalance: number) {
	return {
		type: AccountActionTypes.CREATE_ACCOUNT,
		payload: {
			accountName,
			accountType,
			startingBalance
		}
	}
}

export function setActiveAccountAction(accountIndex: number) {
	return {
		type: AccountActionTypes.SET_ACTIVE_ACCOUNT,
		payload: {
			accountIndex
		}
	}
}

export function addToBalanceAction(id: string, amount: number) {
	return {
		type: AccountActionTypes.ADD_TO_BALANCE,
		payload: {
			id,
			amount
		}
	}
}