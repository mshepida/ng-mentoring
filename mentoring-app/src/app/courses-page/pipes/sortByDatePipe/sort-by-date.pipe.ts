import { Pipe, PipeTransform } from '@angular/core';
import { CourseClass } from '../../course/models/course.models';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(courses: CourseClass[]): any {
    return courses.sort((course1, course2) => course1.creationDate.getTime() - course2.creationDate.getTime());
  }

}
