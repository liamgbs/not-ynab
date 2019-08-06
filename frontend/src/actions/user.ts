import { Dispatch } from "redux";
import { Auth } from 'aws-amplify';
import { UserActionTypes } from "./types";

export function login(username: string, password: string) {
    return async (dispatch: Dispatch) => {
        await Auth.signIn({
            username,
            password,
        }).then((user) => {
            dispatch(setAuthed(username))
        }).catch(err => {
            dispatch(setUnauthed())
        })
    };
}

export function setAuthed(username: string) {
    return {
        type: UserActionTypes.SET_AUTHED,
        payload: {
            username
        }
    }
}

export function setUnauthed(authError?: string) {
    return {
        type: UserActionTypes.SET_UNAUTHED,
        payload: {
            authError: authError || ""
        }
    }
}