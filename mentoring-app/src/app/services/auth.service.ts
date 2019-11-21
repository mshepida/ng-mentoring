import { Injectable } from '@angular/core';

import { LoginData } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public login(userData: LoginData): void {
    localStorage.setItem('User', JSON.stringify(userData));
    this.router.navigate((['/courses']));
  }

  public logout(): void {
    localStorage.removeItem('User');
    this.router.navigate((['/login']));
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('User') !== null;
  }

  public getUserInfo(): string {
    return JSON.parse(localStorage.getItem('User')).username;
  }

  public generateToken(): string {
    return Math.random().toString(36).substr(2);
  }
}
