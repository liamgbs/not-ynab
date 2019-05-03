export interface CategoryGroup {
	groupName: string,
	hidden: boolean,
}

export interface Month {
	monthName: string,
	toBeBudgeted: number,
	categoryGroups: CategoryGroup[],
	categories: Category[],
	ageOfMoney: number,
	note?: string
}

export interface Category {
	categoryName: string,
	categoryGroup: string,
	budgeted: number,
	activity: number,
	balance: number,
	hidden: boolean,
	note?: string,
	goal?: Goal,
}

export interface Goal {
	goalType: GoalType,
	goalCreationMonth: string,
	goalTarget?: number,
	goalTargetMonth?: string,
	goalMonthlyFunding?: number
}

export enum GoalType {
	TotalBalance,
	TotalBalanceByMonth,
	MonthlyFundingGoal
}