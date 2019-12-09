import { Injectable } from '@angular/core';

import { LoginData } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'http://localhost:3004';


  constructor(private router: Router, private http: HttpClient) { }

  public login(userData: LoginData): void {
    this.http.post(`${this.BASE_URL}/auth/login`, userData).subscribe((JWTToken: {token: string}) => {
      if (JWTToken.token) {
        localStorage.setItem('JWTToken', JSON.stringify(JWTToken.token));
        this.router.navigate((['/courses']));
      }
    })
  }

  public logout(): void {
    localStorage.removeItem('JWTToken');
    this.router.navigate((['/login']));
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('JWTToken') !== null;
  }

  public getToken(): string {
    return localStorage.getItem('JWTToken');
  }
}
