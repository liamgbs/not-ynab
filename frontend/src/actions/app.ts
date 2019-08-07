import { AppActionTypes } from "./types";

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