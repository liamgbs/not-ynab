import { Middleware } from "redux";
import { RootState } from "../reducers";
import { BudgetActionTypes } from "../actions/types";
import { appendMonthAction } from "../actions/budget";

const validationMiddleware: Middleware = (store) => (next) => async (action) => {
	const state : RootState = store.getState();
	switch (action.type) {
		case BudgetActionTypes.SET_NEXT_MONTH_ACTIVE:
		if (state.budget.activeMonth + 1 > state.budget.months.length - 1) {
			await store.dispatch(appendMonthAction())
		}
	}
	
	return next(action);

}

export default validationMiddleware;