import appReducer, { defaultState } from "../app";
import { AppActionTypes } from "../../actions/types";
import { AppView } from "../../types/app";

describe("app reducer", () => {
    it("should return default state", () => {
        expect(appReducer(undefined, {type: ""}))
            .toEqual(defaultState)
    });

    describe("change view action", () => {
        it("should change to budget view", () => {
            expect(appReducer(undefined, {
                type:AppActionTypes.CHANGE_VIEW,
                payload: AppView.Budget
            }).view).toEqual(AppView.Budget)
        });

        it("should change to accounts view", () => {
            expect(appReducer(undefined, {
                type:AppActionTypes.CHANGE_VIEW,
                payload: AppView.Accounts
            }).view).toEqual(AppView.Accounts)
        });

        it("should change to budget view", () => {
            expect(appReducer(undefined, {
                type:AppActionTypes.CHANGE_VIEW,
                payload: AppView.Reports
            }).view).toEqual(AppView.Reports)
        });
    })
})