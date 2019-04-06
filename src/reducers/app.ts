import { AnyAction } from "redux";
import { AppActionTypes } from "../actions/types";
import { AppView } from "../types/app";

export interface AppState {
	view: AppView,
}

export const defaultState = {
	view: AppView.Accounts,
}

export default (state: AppState = defaultState, action: AnyAction) => {
	switch (action.type) {
		case AppActionTypes.CHANGE_VIEW:
			return {...state, view: action.payload}
	}
    return state;
}