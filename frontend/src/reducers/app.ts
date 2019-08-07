import { AnyAction } from "redux";
import { AppActionTypes } from "../actions/types";

export interface AppState {
	
}

export const defaultState = {

}

export default (state: AppState = defaultState, action: AnyAction) => {
	switch (action.type) {
		
	}
    return state;
}