import { AnyAction } from "redux";

export interface AppState {
	view: AppView,
	budget: {
		activeMonth: string
	}
}

export enum AppView {
    Budget,
    Reports,
    Account
}

const defaultState = {
	view: AppView.Budget,
	budget: {
		activeMonth: "Feb2019"
	}
}

export default function (state: AppState = defaultState, action: AnyAction) {
    return state;
}