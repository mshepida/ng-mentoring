import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth-service/auth.service';
import { Store, select } from '@ngrx/store';
import { AuthState } from './store/auth.reducer';
import { Login } from './store/auth.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { isLoginFailed } from './store/auth.selectors';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;
  public isLoginFailed: Observable<boolean>;

  constructor(
    private store: Store<AuthState>) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.isLoginFailed = this.store.pipe(
      select(isLoginFailed)
    );
  }

  onLogin(): void {
    const loginInfo = {
      login: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };

    this.store.dispatch(new Login(loginInfo));
  }

}
