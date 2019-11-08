import { SearchPipe } from './search.pipe';
import { CourseClass } from '../../course/models/course.models';

describe('SearchPipe', () => {
  let pipe: SearchPipe;
  let testCourses: CourseClass[];

  beforeEach(() => {
    pipe = new SearchPipe();
    testCourses = [
      new CourseClass(1, 'Angular Course', 81, 'Webpack, Angular, Typescript', new Date(2019, 8, 25)),
      new CourseClass(2, 'RxJs course', 32, 'Observables, RxJs', new Date(2019, 10, 2), true),
      new CourseClass(3, 'Patterns Course', 133, 'Design Patterns', new Date(2019, 9, 8)),
      new CourseClass(4, 'Ngrx course', 58, 'State Management, ngrx/store', new Date(2019, 11, 15), false)
    ];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return course from search value', () => {
    expect(pipe.transform(testCourses, 'Ngrx')).toEqual([testCourses[testCourses.length - 1]]);
  });

  it('should return initial array if no search value present', () => {
    expect(pipe.transform(testCourses, '')).toEqual(testCourses);
  });
});
