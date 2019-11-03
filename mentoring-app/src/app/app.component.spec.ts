import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {}

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

@Component({selector: 'app-breadcrumbs', template: ''})
class BreadcrumbStubComponent {}

@Component({selector: 'app-footer', template: ''})
class FooterStubComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderStubComponent,
        RouterOutletStubComponent,
        BreadcrumbStubComponent,
        FooterStubComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
