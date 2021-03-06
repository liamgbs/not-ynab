export interface Account {
	id: string,
	accountName: string,
	type: AccountType,
	onBudget: boolean,
	closed: boolean,
	balance: number,
	deleted: boolean,
}

export interface Payee {
	payeeName: string,
	deleted: boolean,
}

export enum AccountType {
	Current = "Current",
}

