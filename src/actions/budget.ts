import * as types from './types';

export const addCategoryAction = (groupName:string, categoryName:string) => {
	console.log(groupName, categoryName);
	
	return {
		type: types.CREATE_CATEGORY,
		payload: {
			categoryName: categoryName,
			groupName: groupName
		}
	}
}