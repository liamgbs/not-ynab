import { Account, AccountType } from "../types/accounts";
import moment from 'moment';

export function getAllAccounts(accounts : Array<Account>) : Account {
	const reduceHelper : Account = {
		id: "All",
		accountName: "All Accounts",
		type: AccountType.Current,
		onBudget: true,
		closed: false,
		balance: 0,
		deleted: false
	};

	return accounts.reduce((acc, val) => ({
			id: acc.id,
			accountName: acc.accountName,
			type: acc.type,
			onBudget: acc.onBudget,
			closed: acc.closed,
			balance: acc.balance + val.balance,
			deleted: acc.deleted
	}), reduceHelper)
}

export function getAllAccountTypes() {
	const types: Array<string> = [];
	for (const t in AccountType) {
		types.push(t)
	}
	return types;
}

export function getMonth(date: string, format: string = "DD/MM/YYYY") {
	return moment(date, format).format("MMMYYYY");
}