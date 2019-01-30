import { Action } from "redux";

export interface AppState {
    view: AppView
}

export enum AppView {
    Budget,
    Reports,
    Account
}

const defaultState = {
    view: AppView.Budget,
}

export default function (state: AppState = defaultState, action: Action) {
    return state;
}