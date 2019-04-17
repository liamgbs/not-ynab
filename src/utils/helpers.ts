import { Account, AccountType } from "../types/accounts";

export function getAllAccounts(accounts : Account[]) : Account {
	const reduceHelper : Account = {
		accountName: "All Accounts",
		type: AccountType.Current,
		onBudget: true,
		closed: false,
		balance: 0,
		deleted: false
	} 
	return accounts.reduce((acc, val) => {
		return {
			accountName: acc.accountName,
			type: acc.type,
			onBudget: acc.onBudget,
			closed: acc.closed,
			balance: acc.balance + val.balance,
			deleted: acc.deleted
		}
	}, reduceHelper)
}

export function getAllAccountTypes() {
	const types: string[] = [];
	for (const t in AccountType) {
		types.push(t)
	}
	return types;
}