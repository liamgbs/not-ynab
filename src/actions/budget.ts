import { BudgetActionTypes } from './types';

export function addCategoryAction(groupName: string, categoryName: string) {
	console.log(groupName, categoryName);

	return {
		type: BudgetActionTypes.CREATE_CATEGORY,
		payload: {
			categoryName: categoryName,
			groupName: groupName
		}
	}
}