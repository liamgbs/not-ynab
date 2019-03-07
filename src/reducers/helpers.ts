import { Month } from "../types/categories";
import moment from 'moment';

export function newMonthHelper(lastMonth: Month) : Month {
	return {
		monthName: moment(lastMonth.monthName).add(1, "months").format("MMMYYYY"),
		categoryGroups: [...lastMonth.categoryGroups],
		ageOfMoney : 0,
		toBeBudgeted: 0,
		categories: lastMonth.categories.map(cat => {
			return {
				...cat,
				budgeted: 0,
			}
		})
	};
}