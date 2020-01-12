import { Component, OnInit, OnDestroy } from '@angular/core';

import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

import { Router, NavigationEnd } from '@angular/router';
import { UserName } from 'src/app/login/user.model';
import { AuthService } from 'src/app/login/auth-service/auth.service';
import { Store, select } from '@ngrx/store';
import { AuthState, getCurrentUser } from 'src/app/store/reducers/auth.reducer';
import { LoadUserInfo } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userName: string;
  destroySourse$ = new Subject();
  currentUser$: Observable<UserName>;

  constructor(
    public authService: AuthService,
    private router: Router,
    private store: Store<AuthState>
    ) { }

  ngOnInit() {
    this.router.events.pipe(
      takeUntil(this.destroySourse$),
      filter((event) => event instanceof NavigationEnd)
      )
    .subscribe(() => {
      if (!this.router.url.includes('login')) {
        this.store.dispatch(new LoadUserInfo());
        this.store.pipe(
          select(getCurrentUser)
        ).subscribe((userInfo: string) => this.userName = userInfo);
      } else {
        this.userName = null;
      }
    });
  }

  public onLogout(): void {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.destroySourse$.next(true);
    this.destroySourse$.complete();
  }

}
