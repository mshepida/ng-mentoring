import { Component, OnInit, OnChanges, AfterContentInit, OnDestroy } from '@angular/core';

import { CourseClass } from './models/course.models';
import { SearchPipe } from '../pipes/searchPipe/search.pipe';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [ SearchPipe, CoursesService ]
})
export class CourseComponent implements OnInit {
  public courses: CourseClass[];
  public searchInput: string;

  constructor(
    private searchPipe: SearchPipe,
    private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  public handleDelete(id: number): void {
    if (confirm('You really want to delete this course?')) {
      this.coursesService.deleteCourse(id);
      this.courses = this.coursesService.getCourses();
    }
  }

  public onLoadMore(): void {
    console.log('load more');
  }

  public onFindClick(): void {
  const courses = this.coursesService.getCourses();
  this.courses = this.searchPipe.transform(courses, this.searchInput);
  console.log(this.searchInput);
  }
}
