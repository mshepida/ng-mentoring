import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [ HeaderComponent ]
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

  it('should have 2 buttons', () => {
    const ButtonsDe: DebugElement = fixture.debugElement;
    const ButtonsElement: HTMLElement = ButtonsDe.nativeElement.querySelectorAll('button');

    expect(ButtonsElement[0].textContent).toEqual('Log in');
    expect(ButtonsElement[1].textContent).toEqual('Log off');
  });

  it('should have logo defined', () => {
    const LogoDe: DebugElement = fixture.debugElement;
    const imgDe = LogoDe.query(By.css('img'));
    const LogoElement: HTMLElement = imgDe.nativeElement;
    expect(LogoElement).toBeTruthy();
  });
});
