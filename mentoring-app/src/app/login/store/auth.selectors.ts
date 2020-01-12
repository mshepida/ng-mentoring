import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const getAuthState = createFeatureSelector('auth');
export const getCurrentUser = createSelector(getAuthState,
    (state: AuthState) => state.userInfo);
export const isLoginFailed = createSelector(getAuthState,
    (state: AuthState) => state.loginFailed);
