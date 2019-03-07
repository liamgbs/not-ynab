export interface Account {
	accountName: string,
	type: AccountType,
	onBudget: boolean,
	closed: boolean,
	balance: number,
	deleted: boolean,
	transactions: Transaction[]
}

export interface Transaction {
	accountName: string,
	payeeName: string,
	categoryName: string,
	id: string,
	date: string,
	amount: number,
	approved: boolean,
	deleted: boolean,
}

export interface Payee {
	payeeName: string,
	deleted: boolean,
}

export enum AccountType {
	Current,
}

