import { Category, CategoryGroup, Month } from "../types/categories";

export function newMonthHelper(categories: Category[], categoryGroups: CategoryGroup[], newMonthName: string) : Month {
	return {
		monthName: newMonthName,
		categoryGroups: categoryGroups,
		ageOfMoney : 0,
		toBeBudgeted: 0,
		categories: categories.map(cat => {
			return {
				...cat,
				budgeted: 0,
				activity: 0,
				balance: 0,
			}
		})
	};
}