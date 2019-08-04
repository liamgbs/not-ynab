import { BudgetActionTypes } from './types';

export function addCategoryAction(groupName: string, categoryName: string) {
	return {
		type: BudgetActionTypes.CREATE_CATEGORY,
		payload: {
			categoryName,
			groupName
		}
	}
}

export function addCategoryGroupAction(groupName: string) {
	return {
		type: BudgetActionTypes.CREATE_CATEGORY_GROUP,
		payload: {
			groupName
		}
	}
}

export function nextMonthAction() {
	return {
		type: BudgetActionTypes.SET_NEXT_MONTH_ACTIVE
	}
}

export function prevMonthAction() {
	return {
		type: BudgetActionTypes.SET_PREV_MONTH_ACTIVE
	}
}

export function appendMonthAction() {
	return {
		type: BudgetActionTypes.APPEND_MONTH
	}
}

export function setMonthBudgetedAction(categoryName: string, value: number) {
	return {
		type: BudgetActionTypes.SET_CATEGORY_BUDGETED,
		payload: {
			categoryName,
			value
		}
	}
}

export function addToActivityAction(categoryName: string, date: string, value: number) {
	return {
		type: BudgetActionTypes.ADD_TO_ACTIVITY,
		payload: {
			categoryName,
			date,
			value
		}
	}
}