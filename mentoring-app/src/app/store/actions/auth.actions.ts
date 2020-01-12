import { Action } from '@ngrx/store';
import { LoginData } from 'src/app/login/user.model';

export enum AuthActionTypes {
    Login = '[Login Page] Login',
    LoadUserInfo = '[Login Page] Load User Info',
    LoadUserInfoSuccess =  '[Login Page] Load User Info Success'
  }

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: LoginData) {}
}

export class LoadUserInfo implements Action {
    readonly type = AuthActionTypes.LoadUserInfo;
}

export class LoadUserInfoSuccess implements Action {
    readonly type = AuthActionTypes.LoadUserInfoSuccess;

    constructor(public payload: string) {}
}



export type AuthActions = Login
| LoadUserInfo
| LoadUserInfoSuccess;
