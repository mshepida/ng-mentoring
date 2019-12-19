import { Component, OnInit, OnDestroy } from '@angular/core';

import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

import { User, UserName } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

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
    private router: Router
    ) { }

  ngOnInit() {
    this.router.events.pipe(
      takeUntil(this.destroySourse$),
      filter((event) => event instanceof NavigationEnd)
      )
    .subscribe(() => {
      if (!this.router.url.includes('login')) {
        this.authService.fetchUserInfo()
        .pipe(
          takeUntil(this.destroySourse$),
          map((userData: User) => userData.name)
        ).subscribe((userName: UserName) => this.userName = `${userName.first}  ${userName.last}`);
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
