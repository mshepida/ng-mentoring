import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { CourseClass } from '../models/course.models';


describe('CoursesService', () => {
  let service: CoursesService;
  let courses: CourseClass[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });
    service = TestBed.get(CoursesService);

    courses = [
      new CourseClass(1, 'Angular Course', 81, 'Webpack, Angular, Typescript', new Date(2019, 8, 25)),
      new CourseClass(2, 'RxJs course', 32, 'Observables, RxJs', new Date(2019, 10, 2), true),
      new CourseClass(3, 'Patterns Course', 133, 'Design Patterns', new Date(2019, 9, 8)),
      new CourseClass(4, 'Ngrx course', 58, 'State Management, ngrx/store', new Date(2019, 11, 15))
    ];
  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return course list', () => {
    expect(service.getCourses()).toEqual(courses);
  });

  it('should return specific course', () => {
    expect(service.getCourse(1)).toEqual(courses[0]);
  });

  it('should add new course', () => {
    const newCourse = new CourseClass(5, 'Webpack', 58, 'webpack', new Date(2019, 11, 15));
    service.createCourse(newCourse);

    expect(service.getCourse(5)).toEqual(newCourse);
  });

  it('should remove course', () => {
    const coursesList = [
      new CourseClass(1, 'Angular Course', 81, 'Webpack, Angular, Typescript', new Date(2019, 8, 25)),
      new CourseClass(3, 'Patterns Course', 133, 'Design Patterns', new Date(2019, 9, 8)),
      new CourseClass(4, 'Ngrx course', 58, 'State Management, ngrx/store', new Date(2019, 11, 15))
    ];
    service.deleteCourse(2);

    expect(service.getCourses()).toEqual(coursesList);
  });

  it('should update course', () => {
    const coursesList = [
      new CourseClass(1, 'Angular Course', 81, 'Webpack, Angular, Typescript', new Date(2019, 8, 25)),
      new CourseClass(2, 'RxJs course', 32, 'Observables, RxJs', new Date(2019, 10, 2), true),
      new CourseClass(3, 'Patterns Course', 133, 'Design Patterns', new Date(2019, 9, 8)),
      {
        id: 4,
        title: 'test',
        duration: 58,
        description: 'State Management, ngrx/store',
        creationDate: new Date(2019, 11, 15),
        topRated: false
      }
    ];

    service.updateCourse(new CourseClass(4, 'test', 58, 'State Management, ngrx/store', new Date(2019, 11, 15), false));

    expect(service.getCourses()).toEqual(coursesList);
  });
});
