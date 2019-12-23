import * as fromAuth from '../actions/auth.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface AuthState {
    userInfo: string;
}

export const initialState: AuthState = {
    userInfo: null
};

export function authReducer(state = initialState, action: fromAuth.AuthActions): AuthState {
    switch (action.type) {
        case fromAuth.AuthActionTypes.LoadUserInfoSuccess: {
            return {
                ...state,
                userInfo: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export const getAuthState = createFeatureSelector('auth');
export const getCurrentUser = createSelector(getAuthState,
    (state: AuthState) => state.userInfo);
