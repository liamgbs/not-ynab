import { Action } from "redux";

interface AccountsState {
    budgetAccounts: any[]
}

const defaultState = {
    budgetAccounts: []
}

export default function (state: AccountsState = defaultState, action: Action) {
    return state;
}