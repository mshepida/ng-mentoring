import * as fromAuth from './auth.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface AuthState {
    userInfo: string;
    loginFailed: boolean;
}

export const initialState: AuthState = {
    userInfo: null,
    loginFailed: false
};

export function authReducer(state = initialState, action: fromAuth.AuthActions): AuthState {
    switch (action.type) {
        case fromAuth.AuthActionTypes.LoadUserInfoSuccess: {
            return {
                ...state,
                userInfo: action.payload
            };
        }
        case fromAuth.AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                loginFailed: false
            };
        }
        case fromAuth.AuthActionTypes.LoginFailed: {
            return {
                ...state,
                loginFailed: true
            };
        }
        default: {
            return state;
        }
    }
}
