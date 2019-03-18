import { Middleware } from "redux";
import { TransactionActionTypes } from "../actions/types";
import { addToBalanceAction } from "../actions/accounts";
import { addToActivityAction } from "../actions/budget";

const coreMiddleware: Middleware = (store) => (next) => (action) => {
	const { payload } = action;
	switch (action.type) {
		case TransactionActionTypes.ADD_TRANSACTION:
			store.dispatch(addToBalanceAction(payload.accountName, payload.inflow - payload.outflow))
			store.dispatch(addToActivityAction(payload.categoryName, payload.date, payload.inflow - payload.outflow))
			return next(action)

	}

	return next(action);
}

export default coreMiddleware;