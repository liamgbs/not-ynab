import { AnyAction } from "redux";
import { Account, AccountType } from '../types/accounts';


export interface AccountsState {
	budgetAccounts: Account[],
}

const defaultState = {
	budgetAccounts: [
		{
			accountName: "Test Account",
			type: AccountType.Current,
			onBudget: true,
			closed: false,
			balance: 200,
			deleted: false,
			transactions: []
		}
	]
}

export default function (state: AccountsState = defaultState, action: AnyAction) {
	return state;
}