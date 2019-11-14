import { Pipe, PipeTransform } from '@angular/core';
import { CourseClass } from '../../course/models/course.models';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(courses: CourseClass[], searchValue: string): any {
    if (searchValue && searchValue.trim() === '') {
      return courses;
    } else {
      return courses.filter((course) => course.title.toLowerCase().includes(searchValue.toLowerCase()));
    }
  }

}
