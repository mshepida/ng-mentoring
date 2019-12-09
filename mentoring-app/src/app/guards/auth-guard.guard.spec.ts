import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuardGuard } from './auth-guard.guard';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

class MockAuthService {
  public isLoggedIn = false;

  public isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}

describe('AuthGuardGuard', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let authService: MockAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuardGuard,
        {provide: AuthService, useClass: MockAuthService},
        {provide: Router, useValue: routerSpy }
      ]
    });
  });

  beforeEach(() => {
    authService = TestBed.get(AuthService);
  });

  it('should be truthy', inject([AuthGuardGuard], (guard: AuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should be truthy if user is authenticated', inject([AuthGuardGuard], (guard: AuthGuardGuard) => {
    authService.isLoggedIn = true;
    expect(guard.canActivate(null, null)).toBe(true);
  }));

  it('should be falsy if user is not authenticated', inject([AuthGuardGuard], (guard: AuthGuardGuard) => {
    authService.isLoggedIn = false;
    expect(guard.canActivate(null, null)).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  }));

});
