import { BudgetActionTypes } from './types';

export function addCategoryAction(groupName: string, categoryName: string) {
	return {
		type: BudgetActionTypes.CREATE_CATEGORY,
		payload: {
			categoryName: categoryName,
			groupName: groupName
		}
	}
}

export function addCategoryGroupAction(groupName: string) {
	return {
		type: BudgetActionTypes.CREATE_CATEGORY_GROUP,
		payload: groupName
	}
}