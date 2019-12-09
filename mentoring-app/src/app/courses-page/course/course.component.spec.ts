import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SortByDatePipe } from '../pipes/sortByDatePipe/sort-by-date.pipe';
import { CoursesService } from './services/courses.service';
import { Router } from '@angular/router';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let service: CoursesService;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, SortByDatePipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        CoursesService,
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to add course page', () => {
    component.onAddCourse();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/courses/new']);
  });
});
