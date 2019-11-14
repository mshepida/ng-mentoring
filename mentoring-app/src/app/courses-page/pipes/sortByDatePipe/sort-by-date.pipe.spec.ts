import { SortByDatePipe } from './sort-by-date.pipe';
import { CourseClass } from '../../course/models/course.models';

describe('SortByPipe', () => {
  let pipe: SortByDatePipe;
  let testCourses: CourseClass[];

  beforeEach(() => {
    pipe = new SortByDatePipe();
    testCourses = [
      new CourseClass(1, 'Angular Course', 81, 'Webpack, Angular, Typescript', new Date(2019, 8, 25)),
      new CourseClass(2, 'RxJs course', 32, 'Observables, RxJs', new Date(2019, 10, 2), true),
      new CourseClass(4, 'Ngrx course', 58, 'State Management, ngrx/store', new Date(2019, 11, 15), false),
      new CourseClass(3, 'Patterns Course', 133, 'Design Patterns', new Date(2019, 9, 8))
    ];
  });


  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort courses by creation date', () => {
    expect(pipe.transform(testCourses)[0]).toEqual(testCourses[0]);
    expect(pipe.transform(testCourses)[testCourses.length - 1]).toEqual(testCourses[3]);
  });
});
