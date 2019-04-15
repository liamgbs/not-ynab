import appReducer, { defaultState } from "../app";
import * as AppActions from "../../actions/app";
import { AppView } from "../../types/app";

describe("app reducer", () => {
    it("should return default state", () => {
        expect(appReducer(undefined, {type: undefined}))
            .toEqual(defaultState)
    });

    describe("change view action", () => {
        it("should change to budget view", () => {
			expect(appReducer(undefined, AppActions.changeViewAction(AppView.Budget)).view)
				.toEqual(AppView.Budget)
        });

        it("should change to accounts view", () => {
            expect(appReducer(undefined, AppActions.changeViewAction(AppView.Accounts)).view)
				.toEqual(AppView.Accounts)
        });

        it("should change to budget view", () => {
            expect(appReducer(undefined, AppActions.changeViewAction(AppView.Reports)).view)
				.toEqual(AppView.Reports)
        });
    })
})