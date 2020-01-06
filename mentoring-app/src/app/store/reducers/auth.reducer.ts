import * as fromAuth from '../actions/auth.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface AuthState {
    userInfo: string;
    loginFailed: boolean
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
        case fromAuth.AuthActionTypes.LoginFailed: {
            return {
                ...state,
                loginFailed: true
            }
        }
        default: {
            return state;
        }
    }
}

export const getAuthState = createFeatureSelector('auth');
export const getCurrentUser = createSelector(getAuthState,
    (state: AuthState) => state.userInfo);
export const getError = createSelector(getAuthState,
    (state: AuthState) => state.loginFailed);   
