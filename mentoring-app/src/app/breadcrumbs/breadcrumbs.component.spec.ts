import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CoursesService } from '../courses-page/course/services/courses.service';
import { Router } from '@angular/router';

const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

fdescribe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [ BreadcrumbsComponent],
      providers: [
        CoursesService,
        {
          provide: Router,
          useValue: routerSpy
        }
      ]
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
    const breadcrumbSectionDe =  breadcrumbDe.query(By.css('.breadcrumb_section'));
    const breadcrumbElement: HTMLElement = breadcrumbSectionDe.nativeElement;

    expect(breadcrumbElement.textContent).toEqual('Courses');
  });
});
