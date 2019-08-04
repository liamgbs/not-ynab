import { Middleware } from "redux";
import { RootState } from "../reducers";
import { BudgetActionTypes } from "../actions/types";
import { appendMonthAction } from "../actions/budget";
import { errorAction } from "../actions/app";

const validationMiddleware: Middleware = (store) => (next) => (action) => {	
	const state : RootState = store.getState();
	switch (action.type) {
		case BudgetActionTypes.SET_NEXT_MONTH_ACTIVE:
			if (state.budget.activeMonth + 1 > state.budget.months.length - 1)
				store.dispatch(appendMonthAction());
			return next(action);
				
		case BudgetActionTypes.CREATE_CATEGORY:
			return state.budget.months[0].categories.findIndex(cat => 
				cat.categoryName.toLowerCase() === action.payload.categoryName.toLowerCase()) > -1 
					? next(errorAction())
					: next(action);
		case BudgetActionTypes.CREATE_CATEGORY_GROUP:
			return state.budget.months[0].categoryGroups.findIndex(cg => 
				cg.groupName.toLowerCase() === action.payload.groupName.toLowerCase()) > -1
					? next(errorAction())
					: next(action)
			

		default:
			return next(action);
			
			
	}

}

export default validationMiddleware;