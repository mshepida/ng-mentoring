import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/login/auth-service/auth.service';
import * as fromAuth from './auth.actions';
import { mergeMap, filter, tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User, UserName } from 'src/app/login/user.model';
import { EMPTY, of } from 'rxjs';


@Injectable()
export class AuthEffects {

    @Effect()
    login$ = this.actions$.pipe(
        ofType(fromAuth.AuthActionTypes.Login),
        mergeMap((action: fromAuth.Login) => this.authService.login(action.payload)
        .pipe(
            filter((JWTToken: {token: string}) => Boolean(JWTToken)),
            tap((JWTToken: {token: string}) => {
                localStorage.setItem('JWTToken', JSON.stringify(JWTToken.token));
                this.router.navigate((['/courses']));
            }),
            map(() => new fromAuth.LoginSuccess()),
            catchError(() => {
                return of(new fromAuth.LoginFailed());
            })
        ))
    );

    @Effect()
    loadUserInfo$ = this.actions$.pipe(
        ofType(fromAuth.AuthActionTypes.LoadUserInfo),
        tap((action: fromAuth.LoadUserInfo) => console.log(action)),
        mergeMap((action: fromAuth.LoadUserInfo) => this.authService.fetchUserInfo()
        .pipe(
            map((userData: User) => userData.name),
            map((userName: UserName) => new fromAuth.LoadUserInfoSuccess(`${userName.first}  ${userName.last}`)),
            catchError(() => EMPTY)
        ))
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) {}
}
