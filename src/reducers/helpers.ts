import { Month } from "../types/categories";
import moment from 'moment';
import { Account, AccountType } from "../types/accounts";

export function newMonthHelper(lastMonth: Month | undefined) : Month {
	if (lastMonth) {
		return {
			monthName: moment(lastMonth.monthName, "MMMYYYY").add(1, "months").format("MMMYYYY"),
			categoryGroups: [...lastMonth.categoryGroups],
			ageOfMoney : 0,
			toBeBudgeted: 0,
			categories: lastMonth.categories.map(cat => {
				return {
					...cat,
					budgeted: 0,
					activity: 0
				}
			})
		};
	} else {
		return {
			monthName: moment().format("MMMYYYY"),
			categoryGroups: [],
			ageOfMoney : 0,
			toBeBudgeted: 0,
			categories: []
		};
	}
}

export function newAccountHelper(
	accountName: string,
	type: AccountType,
	balance: number) : Account {
	return {
		accountName,
		type,
		onBudget: true,
		closed: false,
		balance,
		deleted: false,
	}
}