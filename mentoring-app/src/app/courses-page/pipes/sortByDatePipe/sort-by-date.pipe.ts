import { Pipe, PipeTransform } from '@angular/core';
import { CourseClass } from '../../course/models/course.models';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(courses: CourseClass[]): CourseClass[] {
    if (courses) {
      return courses.sort((course1, course2) => {
        return (+new Date(course1.date)) - (+new Date(course2.date));
      });
    } else {
      return;
    }
  }

}
