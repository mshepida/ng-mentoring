import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoginData } from '../models/user.model';

describe('AuthService', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let service: AuthService;
  let loginData: LoginData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthService,
        { provide: Router, useValue: routerSpy } ]
    });
    service = TestBed.get(AuthService);
    localStorage.clear();
    loginData = {
      username: 'test',
      password: 'test',
      token: 'test'
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud set data to localStorage and navigate on login', () => {
    service.login(loginData);

    expect(localStorage.getItem('User')).toBeTruthy();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/courses']);
  });

  it('shoud clear data to localStorage and navigate on logout', () => {
    service.logout();

    expect(localStorage.getItem('User')).toBeFalsy();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('shoud return authinticated state', () => {
    expect(service.isAuthenticated()).toBeFalsy();
    service.login(loginData);

    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('shoud return username', () => {
    service.login(loginData);

    expect(service.getUserInfo()).toBe('test');
  });
});
