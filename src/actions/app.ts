import { AppView } from "../types/app";
import { AppActionTypes } from "./types";

export function changeView(view: AppView) {
	return {
		type: AppActionTypes.CHANGE_VIEW,
		payload: view
	}
}