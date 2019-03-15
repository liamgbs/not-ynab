import { Payee } from "../types/accounts";
import { AnyAction } from "redux";
import { PayeesActionTypes } from "../actions/types";

export interface PayeesState {
	payees: Payee[]
}

const defaultState: PayeesState = {
	payees: [
		{
			payeeName: "Bob",
			deleted: false
		},
		{
			payeeName: "Jane",
			deleted: false
		},
		{
			payeeName: "Super Duper Inc.",
			deleted: false
		},
		{
			payeeName: "Deleted & Sons",
			deleted: true
		}
	]
}

export default (state: PayeesState = defaultState, action: AnyAction) => {
	const { payload } = action;
	switch (action.type) {
		case PayeesActionTypes.ADD_PAYEE:
			return {
				...state,
				payees: [
					...state.payees.slice(),
					{ payeeName: payload.payeeName, deleted: false}
				]
			}
	}

	return { ...state }
}