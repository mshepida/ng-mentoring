import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

class MockAuthService {
 public authenticationState = false;
  isAuthenticated(): boolean {
    return this.authenticationState;
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [ HeaderComponent ],
      providers: [ {provide: AuthService, useClass: MockAuthService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have only login  button if not authenticated', () => {
    const ButtonsDe: DebugElement = fixture.debugElement;
    const ButtonsElement: HTMLElement = ButtonsDe.nativeElement.querySelector('button');

    expect(ButtonsElement.textContent).toEqual('Log in');
  });

  it('should have logo defined', () => {
    const LogoDe: DebugElement = fixture.debugElement;
    const imgDe = LogoDe.query(By.css('img'));
    const LogoElement: HTMLElement = imgDe.nativeElement;
    expect(LogoElement).toBeTruthy();
  });
});
