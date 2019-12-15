import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { retry, map, takeUntil } from 'rxjs/operators';
import { pipe, Observable, of, Subject } from 'rxjs';
import { User, UserName } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userName: string;
  destroySourse$ = new Subject();

  constructor(public authService: AuthService) { }

  ngOnInit() {
   this.authService.fetchUserInfo()
    .pipe(
      takeUntil(this.destroySourse$),
      map((userData: User) => userData.name)
    ).subscribe((userName: UserName) => this.userName = `${userName.first}  ${userName.last}`);
  }

  public onLogout(): void {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.destroySourse$.next(true);
    this.destroySourse$.complete();
  }

}
