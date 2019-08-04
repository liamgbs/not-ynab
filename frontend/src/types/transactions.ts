export interface Transaction {
	id: string,
	accountName: string,
	payeeName: string,
	categoryName: string,
	date: string,
	inflow: number,
	outflow: number,
	approved: boolean,
	deleted: boolean,
}