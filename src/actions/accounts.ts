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