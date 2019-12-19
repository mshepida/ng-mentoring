import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { LoginData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'http://localhost:3004';


  constructor(private router: Router, private http: HttpClient) { }

  public login(userData: LoginData): Observable<any> {
    return this.http.post(`${this.BASE_URL}/auth/login`, userData);
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

  public fetchUserInfo(): Observable<object> {
   return this.http.post(`${this.BASE_URL}/auth/userinfo`, {token: JSON.parse(this.getToken())});
  }
}
