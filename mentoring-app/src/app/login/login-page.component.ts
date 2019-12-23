import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth-service/auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';
import { Login } from '../store/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('username', {static: false}) username: ElementRef;
  @ViewChild('password', {static: false}) password: ElementRef;

  constructor(
    private store: Store<AuthState>) { }

  ngOnInit() {
  }

  onLogin(): void {
    const loginInfo = {
      login: this.username.nativeElement.value,
      password: this.password.nativeElement.value,
    };

    this.store.dispatch(new Login(loginInfo));
  }

}
