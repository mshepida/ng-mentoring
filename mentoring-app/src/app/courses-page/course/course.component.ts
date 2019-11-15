import { Component, OnInit, OnChanges, AfterContentInit, OnDestroy } from '@angular/core';
import { CourseClass } from './models/course.models';
import { SearchPipe } from '../pipes/searchPipe/search.pipe';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [ SearchPipe ]
})
export class CourseComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {
  public courses: CourseClass[];
  public searchInput: string;

  constructor(
    private searchPipe: SearchPipe,
    private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();

    console.log(this.coursesService.getCourse(2))
  }

  ngOnChanges() {
    console.log('onChanges');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
  }

  ngOnDestroy() {
    console.log('Destroy');
  }

  public handleDelete(id: number): void {
    if (confirm("You really want to delete this course?")) {
      this.coursesService.deleteCourse(id);
    }
  }

  public onLoadMore(): void {
    console.log('load more');
  }

  public onFindClick(): void {
  this.courses = this.searchPipe.transform(this.coursesService.getCourses(), this.searchInput);
  console.log(this.searchInput);
  }
}
