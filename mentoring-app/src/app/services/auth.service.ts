import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userData): void {
    localStorage.setItem('User', userData);
  }

  logout(): void {
    localStorage.clear();
  }

  isAuthenticated(): void {

  }

  getUserInfo(): void {
    
  }
}
