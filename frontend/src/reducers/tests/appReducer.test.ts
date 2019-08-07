import appReducer, { defaultState } from "../app";
import * as AppActions from "../../actions/app";

describe("app reducer", () => {
    it("should return default state", () => {
        expect(appReducer(undefined, {type: undefined}))
            .toEqual(defaultState)
    });
})