import { Injectable } from '@angular/core';
import { CourseClass } from '../models/course.models';

@Injectable()
export class CoursesService {

 private courses = [
    new CourseClass(1, 'Angular Course', 81, 'Webpack, Angular, Typescript', new Date(2019, 8, 25)),
    new CourseClass(2, 'RxJs course', 32, 'Observables, RxJs', new Date(2019, 10, 2), true),
    new CourseClass(3, 'Patterns Course', 133, 'Design Patterns', new Date(2019, 9, 8)),
    new CourseClass(4, 'Ngrx course', 58, 'State Management, ngrx/store', new Date(2019, 11, 15))
  ];

  constructor() {
   }

  public getCourses(): CourseClass[] {
    return this.courses;
  }

  public createCourse(course: CourseClass): void {
    this.courses.push(course);
  }

  public getCourse(id: number): CourseClass {
    return this.courses.find((course: CourseClass) => course.id === id );
  }

  public updateCourse(course: CourseClass): void {
    this.deleteCourse(course.id);
    this.courses = [
      ...this.courses,
      course
    ];
  }

  public deleteCourse(id: number): void {
    this.courses.splice(this.courses.findIndex((course: CourseClass) =>  course.id === id), 1);
  }
}
