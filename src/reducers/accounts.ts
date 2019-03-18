import { AnyAction } from "redux";
import { Account, AccountType } from '../types/accounts';
import { AccountActionTypes } from "../actions/types";
import { newAccountHelper } from "./helpers";


export interface AccountsState {
	accounts: Account[],
	activeAccount: number
}

const defaultState = {
	accounts: [
		{
			accountName: "Test Account",
			type: AccountType.Current,
			onBudget: true,
			closed: false,
			balance: 200,
			deleted: false,
		},
		{
			accountName: "Test Account 2",
			type: AccountType.Current,
			onBudget: true,
			closed: false,
			balance: 300,
			deleted: false,
		}
	],
	activeAccount: -1
}

export default function (state: AccountsState = defaultState, action: AnyAction) {
	const { payload } = action;
	switch (action.type) {
		case AccountActionTypes.SET_ACTIVE_ACCOUNT:
			return {
				...state,
				activeAccount: payload.accountIndex
			}
		case AccountActionTypes.CREATE_ACCOUNT:
			return {
				...state,
				accounts: [
					...state.accounts,
					newAccountHelper(payload.accountName, payload.accountType, payload.startingBalance)
				]
			}
	}

	return state;
}