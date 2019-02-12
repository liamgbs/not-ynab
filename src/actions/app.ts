import { AppView } from "../types/app";
import { AppActionTypes } from "./types";

export function changeViewAction(view: AppView) {
	return {
		type: AppActionTypes.CHANGE_VIEW,
		payload: view
	}
}

export function errorAction(error?: Error | string) {
	return {
		type: AppActionTypes.ERROR,
		payload: error
	}
}

export function doNothingAction() {
	return {
		type: AppActionTypes.DO_NOTHING
	}
}