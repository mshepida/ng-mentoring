import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SortByDatePipe } from '../pipes/sortByDatePipe/sort-by-date.pipe';
import { CoursesService } from './services/courses.service';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, SortByDatePipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [CoursesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
