import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { CourseClass } from '../models/course.models';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DurationPipe } from '../../pipes/durationPipe/duration.pipe';
import { HighlightByDateDirective } from '../../highlightDirective/highlight-by-date.directive';
import { CoursesService } from '../services/courses.service';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  const mockEvent: any = {
    type: 'click',
    stopPropagation() {},
    preventDefault() {}
  };
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule ],
      declarations: [
        CourseItemComponent,
        HighlightByDateDirective,
        DurationPipe
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        CoursesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    const testCourse: CourseClass = {
      id: 1,
      name: 'Test Course',
      length: 50,
      description: 'test',
      date: '2016-03-18T06:36:07+00:00',
      authors: [
        {
          id: 5524,
          name: 'Cobb',
          lastName: 'Hudson'
        }
      ],
    };
    component.course = testCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit delete event on delete', () => {
    spyOn(component.deleteCourse, 'emit');

    component.onDelete(mockEvent, 1);

    expect(component.deleteCourse.emit).toHaveBeenCalledWith(1);
  });

  it('should display course information', () => {
    const courseDe: DebugElement = fixture.debugElement;
    const titleDe = fixture.debugElement.query(By.css('.course_title'));
    const titleEl: HTMLElement = titleDe.nativeElement;
    const descriptionDe = courseDe.query(By.css('.course_description'));
    const descriptionEl: HTMLElement = descriptionDe.nativeElement;
    const durationDe = courseDe.query(By.css('.course_duration'));
    const durationEl: HTMLElement = durationDe.nativeElement;

    expect(titleEl.textContent.trim()).toBe(component.course.name.toUpperCase());
    expect(descriptionEl.textContent.trim()).toBe(component.course.description);
    expect(durationEl.textContent.trim()).toBe(component.course.length + 'min');
  });

  it('should navigate to course page', () => {
    component.goToCourse(1);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/courses', 1 ]);
  });
});
