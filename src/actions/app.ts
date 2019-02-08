import { AppView } from "../types/app";
import { AppActionTypes } from "./types";

export function changeView(view: AppView) {
	return {
		action: AppActionTypes.CHANGE_VIEW,
		payload: view
	}
}