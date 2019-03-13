export interface Transaction {
	id: string,
	accountName: string,
	payeeName: string,
	categoryName: string,
	date: string,
	amount: number,
	approved: boolean,
	deleted: boolean,
}