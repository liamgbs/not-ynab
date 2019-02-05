import { AnyAction } from "redux";

export interface AccountsState {
    budgetAccounts: any[]
}

const defaultState = {
    budgetAccounts: []
}

export default function (state: AccountsState = defaultState, action: AnyAction) {
    return state;
}