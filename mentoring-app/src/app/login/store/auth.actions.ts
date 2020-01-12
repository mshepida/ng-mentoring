import { Action } from '@ngrx/store';
import { LoginData } from 'src/app/login/user.model';

export enum AuthActionTypes {
    Login = '[Login Page] Login',
    LoginSuccess = '[Login Page] Login Success',
    LoginFailed = '[Login Page] Login Failed',
    LoadUserInfo = '[Login Page] Load User Info',
    LoadUserInfoSuccess =  '[Login Page] Load User Info Success'
  }

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: LoginData) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LoginFailed;
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
| LoginSuccess
| LoadUserInfoSuccess
| LoginFailed;
