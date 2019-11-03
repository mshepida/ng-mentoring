import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { CourseClass } from '../models/course.models';
import { DebugElement } from '@angular/core';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule ],
      declarations: [ CourseItemComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    const testCourse: CourseClass = {
      id: 1,
      title: 'Test Course',
      duration: 50,
      description: 'test',
      creationDate: new Date()
    }
    component.course = testCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit delete event on delete', () => {
    spyOn(component.deleteCourse, 'emit');

    const mockEvent: any = {
      type: 'click',
      stopPropagation: function () {},
      preventDefault: function () {}
    };

    component.onDelete(mockEvent, 1);

    expect(component.deleteCourse.emit).toHaveBeenCalledWith(1);
  });

  it('should convert minutes that are more than 60 to hours', () => {
    expect(component.getCourseDuration(70)).toEqual('1hr 10min');
  });

  it('should display course information', () => {
    const courseDe: DebugElement = fixture.debugElement;
    const titleEl: HTMLElement = courseDe.nativeElement.querySelector('.course_title');
    const descriptionEl: HTMLElement = courseDe.nativeElement.querySelector('.course_description');
    const durationEl: HTMLElement = courseDe.nativeElement.querySelector('.course_duration');

    expect(titleEl.textContent.trim()).toBe(component.course.title);
    expect(descriptionEl.textContent.trim()).toBe(component.course.description);
    expect(durationEl.textContent.trim()).toBe(component.course.duration + 'min');
  });

  it('should navigate to course page', () => {
    component.goToCourse(1);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/courses', 1 ]);
  })
});
