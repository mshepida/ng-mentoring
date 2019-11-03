import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DebugElement } from '@angular/core';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule], 
      declarations: [ BreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default "Course" breadcrumb', () => {
    const breadcrumbDe: DebugElement = fixture.debugElement;
    const breadcrumbElement: HTMLElement = breadcrumbDe.nativeElement
      .querySelector('.breadcrumb_section');

      expect(breadcrumbElement.textContent).toEqual('Courses');
  })
});
