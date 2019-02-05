import * as types from './types';

export const addCategory = (groupName:string, categoryName:string) => {
	return {
		type: types.CREATE_CATEGORY,
		payload: {
			categoryName: categoryName,
			groupName: groupName
		}
	}
}