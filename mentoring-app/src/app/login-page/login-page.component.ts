import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('username', {static: false}) username: ElementRef;
  @ViewChild('password', {static: false}) password: ElementRef;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(): void {
    const loginInfo = {
      login: this.username.nativeElement.value,
      password: this.password.nativeElement.value,
    };
    this.authService.login(loginInfo);
  }

}
