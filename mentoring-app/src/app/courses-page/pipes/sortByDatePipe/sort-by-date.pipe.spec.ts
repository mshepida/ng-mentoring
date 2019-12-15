import { SortByDatePipe } from './sort-by-date.pipe';
import { CourseClass } from '../../course/models/course.models';

describe('SortByPipe', () => {
  let pipe: SortByDatePipe;
  let testCourses: CourseClass[];

  beforeEach(() => {
    pipe = new SortByDatePipe();
    testCourses = [
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
