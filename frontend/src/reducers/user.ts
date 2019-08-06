import { AnyAction } from "redux";
import { UserActionTypes } from "../actions/types";

export interface UserState {
	authed: boolean,
	authError: string,
	user: string
}

export const defaultState : UserState = {
	authed: false,
	authError: "",
	user: ""
}

export default (state: UserState = defaultState, action: AnyAction) : UserState => {
	const { payload } = action;

	switch (action.type) {
		case UserActionTypes.SET_AUTHED:
			return {...state, authed: true, user: payload.user, authError: ""}
		case UserActionTypes.SET_UNAUTHED:
			return {...state, authed: false, user: "", authError: payload.authError || "error"}
	}

    return state;
}